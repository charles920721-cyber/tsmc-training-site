const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const { google } = require("googleapis");
const { ensureDir, getSettings, saveSettings } = require("./store");

const ROOT = path.join(__dirname, "..", "..");
const BACKUP_DIR = path.join(__dirname, "..", "backups");
const CREDENTIALS_PATH =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  path.join(__dirname, "..", "credentials", "google-service-account.json");

const INCLUDE_GLOBS = [
  "index.html",
  "home.html",
  "about.html",
  "knowledge.html",
  "quiz.html",
  "admin",
  "css",
  "js",
  "server/data",
  "server/package.json",
  "server/index.js",
  "server/lib"
];

function stamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function createZip(targetPath) {
  return new Promise((resolve, reject) => {
    ensureDir(BACKUP_DIR);
    const output = fs.createWriteStream(targetPath);
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", () => resolve({ bytes: archive.pointer() }));
    archive.on("error", reject);
    archive.pipe(output);

    for (const rel of INCLUDE_GLOBS) {
      const full = path.join(ROOT, rel);
      if (!fs.existsSync(full)) continue;
      const stat = fs.statSync(full);
      if (stat.isDirectory()) archive.directory(full, rel);
      else archive.file(full, { name: rel });
    }
    archive.finalize();
  });
}

async function uploadToDrive(filePath, filename) {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    return {
      uploaded: false,
      reason: "missing_credentials",
      message:
        "尚未設定 Google 服務帳戶金鑰。請將 JSON 放到 server/credentials/google-service-account.json"
    };
  }

  const settings = getSettings();
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/drive.file"]
  });
  const drive = google.drive({ version: "v3", auth });
  const res = await drive.files.create({
    requestBody: {
      name: filename,
      parents: [settings.driveFolderId]
    },
    media: {
      mimeType: "application/zip",
      body: fs.createReadStream(filePath)
    },
    fields: "id,name,webViewLink"
  });

  return {
    uploaded: true,
    fileId: res.data.id,
    name: res.data.name,
    webViewLink: res.data.webViewLink,
    folderUrl: settings.driveFolderUrl
  };
}

async function runBackup({ trigger = "manual", username = "system" } = {}) {
  ensureDir(BACKUP_DIR);
  const filename = `tsmc-lab-backup-${stamp()}.zip`;
  const filePath = path.join(BACKUP_DIR, filename);
  await createZip(filePath);

  let driveResult;
  try {
    driveResult = await uploadToDrive(filePath, filename);
  } catch (err) {
    driveResult = {
      uploaded: false,
      reason: "drive_error",
      message: err.message
    };
  }

  const status = {
    at: new Date().toISOString(),
    trigger,
    username,
    filename,
    localPath: filePath,
    drive: driveResult
  };
  saveSettings({
    lastBackupAt: status.at,
    lastBackupStatus: status
  });
  return status;
}

module.exports = {
  BACKUP_DIR,
  CREDENTIALS_PATH,
  runBackup
};
