const express = require("express");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const cron = require("node-cron");
const {
  getUsers,
  saveUsers,
  getLogs,
  appendLog,
  getSettings,
  saveSettings,
  createToken,
  resolveToken,
  revokeToken,
  uuidv4,
  ensureDir,
  DATA_DIR
} = require("./lib/store");
const { runBackup, CREDENTIALS_PATH } = require("./lib/backup");

const app = express();
const PORT = process.env.PORT || 8787;
const ROOT = path.join(__dirname, "..");

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.static(ROOT));

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  const user = resolveToken(token);
  if (!user) return res.status(401).json({ error: "未登入或登入已失效" });
  req.user = user;
  req.token = token;
  next();
}

function adminMiddleware(req, res, next) {
  if (req.user.role !== "admin") return res.status(403).json({ error: "需要管理員權限" });
  next();
}

async function seedAdmin() {
  ensureDir(DATA_DIR);
  const users = getUsers();
  if (users.some((u) => u.username === "charles")) return;
  const passwordHash = await bcrypt.hash("m215", 10);
  users.push({
    id: uuidv4(),
    username: "charles",
    passwordHash,
    role: "admin",
    displayName: "Charles",
    createdAt: new Date().toISOString(),
    createdBy: "system"
  });
  saveUsers(users);
  appendLog({
    username: "system",
    action: "user.seed",
    detail: { zh: "初始化管理員帳號 charles", en: "Seeded admin account charles" }
  });
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    driveCredentials: require("fs").existsSync(CREDENTIALS_PATH),
    settings: getSettings()
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "請輸入帳號與密碼" });
  const user = getUsers().find((u) => u.username === username);
  if (!user) return res.status(401).json({ error: "帳號或密碼錯誤" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "帳號或密碼錯誤" });
  const token = createToken(user.id);
  const safe = {
    id: user.id,
    username: user.username,
    role: user.role,
    displayName: user.displayName || user.username
  };
  appendLog({
    username: user.username,
    action: "login",
    detail: { zh: "使用者登入", en: "User login" }
  });
  res.json({ token, user: safe });
});

app.post("/api/auth/logout", authMiddleware, (req, res) => {
  revokeToken(req.token);
  appendLog({
    username: req.user.username,
    action: "logout",
    detail: { zh: "使用者登出", en: "User logout" }
  });
  res.json({ ok: true });
});

app.get("/api/auth/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

app.get("/api/users", authMiddleware, adminMiddleware, (_req, res) => {
  const users = getUsers().map(({ passwordHash, ...rest }) => rest);
  res.json({ users });
});

app.post("/api/users", authMiddleware, adminMiddleware, async (req, res) => {
  const { username, password, role, displayName } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "帳號與密碼必填" });
  if (String(username).length < 3) return res.status(400).json({ error: "帳號至少 3 字元" });
  if (String(password).length < 3) return res.status(400).json({ error: "密碼至少 3 字元" });
  const users = getUsers();
  if (users.some((u) => u.username === username)) return res.status(409).json({ error: "帳號已存在" });
  const user = {
    id: uuidv4(),
    username: String(username).trim(),
    passwordHash: await bcrypt.hash(String(password), 10),
    role: role === "admin" ? "admin" : "editor",
    displayName: displayName || username,
    createdAt: new Date().toISOString(),
    createdBy: req.user.username
  };
  users.push(user);
  saveUsers(users);
  appendLog({
    username: req.user.username,
    action: "user.create",
    detail: {
      zh: `新增使用者 ${user.username}（角色：${user.role}）`,
      en: `Created user ${user.username} (role: ${user.role})`
    }
  });
  const { passwordHash, ...safe } = user;
  res.status(201).json({ user: safe });
});

app.delete("/api/users/:id", authMiddleware, adminMiddleware, (req, res) => {
  const users = getUsers();
  const target = users.find((u) => u.id === req.params.id);
  if (!target) return res.status(404).json({ error: "找不到使用者" });
  if (target.username === "charles") return res.status(400).json({ error: "不可刪除預設管理員 charles" });
  saveUsers(users.filter((u) => u.id !== req.params.id));
  appendLog({
    username: req.user.username,
    action: "user.delete",
    detail: {
      zh: `刪除使用者 ${target.username}`,
      en: `Deleted user ${target.username}`
    }
  });
  res.json({ ok: true });
});

app.get("/api/logs", authMiddleware, adminMiddleware, (_req, res) => {
  res.json({ logs: getLogs() });
});

app.get("/api/settings/backup", authMiddleware, adminMiddleware, (_req, res) => {
  res.json({
    settings: getSettings(),
    driveCredentials: require("fs").existsSync(CREDENTIALS_PATH)
  });
});

app.put("/api/settings/backup", authMiddleware, adminMiddleware, (req, res) => {
  const { backupHour, backupMinute, backupEnabled } = req.body || {};
  const hour = Number(backupHour);
  const minute = Number(backupMinute);
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    return res.status(400).json({ error: "小時需為 0–23" });
  }
  if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
    return res.status(400).json({ error: "分鐘需為 0–59" });
  }
  const settings = saveSettings({
    backupHour: hour,
    backupMinute: minute,
    backupEnabled: Boolean(backupEnabled)
  });
  restartCron();
  appendLog({
    username: req.user.username,
    action: "backup.schedule",
    detail: {
      zh: `更新備份排程為每日 ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}（${
        settings.backupEnabled ? "啟用" : "停用"
      }）`,
      en: `Updated daily backup to ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} (${
        settings.backupEnabled ? "enabled" : "disabled"
      })`
    }
  });
  res.json({ settings });
});

app.post("/api/backup/run", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const result = await runBackup({ trigger: "manual", username: req.user.username });
    appendLog({
      username: req.user.username,
      action: "backup.manual",
      detail: {
        zh: `手動備份完成：${result.filename}${
          result.drive?.uploaded ? "（已上傳 Google Drive）" : "（僅本機，Drive 未上傳）"
        }`,
        en: `Manual backup done: ${result.filename}${
          result.drive?.uploaded ? " (uploaded to Google Drive)" : " (local only)"
        }`
      },
      meta: result
    });
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message || "備份失敗" });
  }
});

app.post("/api/content/log", authMiddleware, (req, res) => {
  const { action, detail, meta } = req.body || {};
  if (!action) return res.status(400).json({ error: "缺少 action" });
  const row = appendLog({
    username: req.user.username,
    action,
    detail: detail || { zh: action, en: action },
    meta
  });
  res.json({ log: row });
});

let cronTask = null;

function restartCron() {
  if (cronTask) {
    cronTask.stop();
    cronTask = null;
  }
  const settings = getSettings();
  if (!settings.backupEnabled) return;
  const expr = `${settings.backupMinute} ${settings.backupHour} * * *`;
  cronTask = cron.schedule(expr, async () => {
    try {
      const result = await runBackup({ trigger: "scheduled", username: "system" });
      appendLog({
        username: "system",
        action: "backup.scheduled",
        detail: {
          zh: `排程備份完成：${result.filename}`,
          en: `Scheduled backup done: ${result.filename}`
        },
        meta: result
      });
    } catch (err) {
      appendLog({
        username: "system",
        action: "backup.scheduled.error",
        detail: {
          zh: `排程備份失敗：${err.message}`,
          en: `Scheduled backup failed: ${err.message}`
        }
      });
    }
  });
}

async function main() {
  await seedAdmin();
  restartCron();
  app.listen(PORT, () => {
    console.log(`TSMC Lab CMS running at http://localhost:${PORT}`);
    console.log(`Admin: http://localhost:${PORT}/admin/`);
    console.log(`Default admin: charles / m215`);
  });
}

main();
