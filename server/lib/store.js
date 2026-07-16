const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const LOGS_FILE = path.join(DATA_DIR, "logs.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const TOKENS_FILE = path.join(DATA_DIR, "tokens.json");

const DEFAULT_SETTINGS = {
  backupHour: 2,
  backupMinute: 0,
  backupEnabled: true,
  driveFolderId: "1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy",
  driveFolderUrl: "https://drive.google.com/drive/folders/1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy",
  lastBackupAt: null,
  lastBackupStatus: null
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, value) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, JSON.stringify(value, null, 2), "utf8");
}

function getUsers() {
  return readJson(USERS_FILE, []);
}

function saveUsers(users) {
  writeJson(USERS_FILE, users);
}

function getLogs() {
  return readJson(LOGS_FILE, []);
}

function appendLog(entry) {
  const logs = getLogs();
  const row = {
    id: uuidv4(),
    at: new Date().toISOString(),
    ...entry
  };
  logs.unshift(row);
  writeJson(LOGS_FILE, logs.slice(0, 1000));
  return row;
}

function getSettings() {
  return { ...DEFAULT_SETTINGS, ...readJson(SETTINGS_FILE, {}) };
}

function saveSettings(partial) {
  const next = { ...getSettings(), ...partial };
  writeJson(SETTINGS_FILE, next);
  return next;
}

function getTokens() {
  return readJson(TOKENS_FILE, {});
}

function saveTokens(tokens) {
  writeJson(TOKENS_FILE, tokens);
}

function createToken(userId) {
  const tokens = getTokens();
  const token = uuidv4();
  tokens[token] = { userId, createdAt: new Date().toISOString() };
  saveTokens(tokens);
  return token;
}

function resolveToken(token) {
  if (!token) return null;
  const tokens = getTokens();
  const row = tokens[token];
  if (!row) return null;
  const user = getUsers().find((u) => u.id === row.userId);
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    displayName: user.displayName || user.username
  };
}

function revokeToken(token) {
  const tokens = getTokens();
  delete tokens[token];
  saveTokens(tokens);
}

module.exports = {
  DATA_DIR,
  DEFAULT_SETTINGS,
  ensureDir,
  getUsers,
  saveUsers,
  getLogs,
  appendLog,
  getSettings,
  saveSettings,
  createToken,
  resolveToken,
  revokeToken,
  uuidv4
};
