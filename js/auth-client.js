(function () {
  const SESSION_KEY = "tsmc-lab-session";
  const USERS_KEY = "tsmc-lab-users";
  const LOGS_KEY = "tsmc-lab-logs";
  const SETTINGS_KEY = "tsmc-lab-settings";
  const SALT = "tsmc-lab-v1";
  const API_BASE = localStorage.getItem("tsmc-lab-api") || "";

  const DEFAULT_SETTINGS = {
    backupHour: 2,
    backupMinute: 0,
    backupEnabled: true,
    driveFolderId: "1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy",
    driveFolderUrl: "https://drive.google.com/drive/folders/1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy"
  };

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  function uid() {
    return crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async function ensureSeedUsers() {
    let users = readJson(USERS_KEY, null);
    if (users && users.length) return users;
    const passwordHash = await sha256(`${SALT}:m215`);
    users = [
      {
        id: uid(),
        username: "charles",
        passwordHash,
        role: "admin",
        displayName: "Charles",
        createdAt: nowIso(),
        createdBy: "system"
      }
    ];
    writeJson(USERS_KEY, users);
    return users;
  }

  function getSession() {
    return readJson(SESSION_KEY, null);
  }

  function setSession(session) {
    if (!session) localStorage.removeItem(SESSION_KEY);
    else writeJson(SESSION_KEY, session);
  }

  function getSettings() {
    return { ...DEFAULT_SETTINGS, ...readJson(SETTINGS_KEY, {}) };
  }

  function saveSettings(partial) {
    const next = { ...getSettings(), ...partial };
    writeJson(SETTINGS_KEY, next);
    return next;
  }

  function appendLog(entry) {
    const logs = readJson(LOGS_KEY, []);
    logs.unshift({
      id: uid(),
      at: nowIso(),
      ...entry
    });
    writeJson(LOGS_KEY, logs.slice(0, 500));
    return logs[0];
  }

  async function api(path, options = {}) {
    const session = getSession();
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };
    if (session?.token) headers.Authorization = `Bearer ${session.token}`;
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data.error || `HTTP ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  async function serverAvailable() {
    try {
      await api("/api/health");
      return true;
    } catch {
      return false;
    }
  }

  async function login(username, password) {
    const useServer = await serverAvailable();
    if (useServer) {
      const data = await api("/api/auth/login", {
        method: "POST",
        body: { username, password }
      });
      setSession({
        mode: "user",
        token: data.token,
        user: data.user,
        backend: "server"
      });
      return data.user;
    }

    const users = await ensureSeedUsers();
    const passwordHash = await sha256(`${SALT}:${password}`);
    const user = users.find((u) => u.username === username && u.passwordHash === passwordHash);
    if (!user) throw new Error("帳號或密碼錯誤");
    const safe = {
      id: user.id,
      username: user.username,
      role: user.role,
      displayName: user.displayName || user.username
    };
    setSession({ mode: "user", token: `local-${user.id}`, user: safe, backend: "local" });
    appendLog({
      username: safe.username,
      action: "login",
      detail: { zh: "使用者登入（本機模式）", en: "User login (local mode)" }
    });
    return safe;
  }

  function enterAsGuest() {
    setSession({ mode: "guest", user: null, token: null, backend: "none" });
  }

  function logout() {
    setSession(null);
  }

  function isGatePage() {
    const path = location.pathname.replace(/\\/g, "/");
    const file = path.split("/").pop() || "";
    return file === "" || file === "index.html";
  }

  function requireAccess() {
    if (isGatePage()) return getSession();
    const session = getSession();
    if (!session || (session.mode !== "guest" && session.mode !== "user")) {
      location.href = location.pathname.includes("/admin/") ? "../index.html" : "index.html";
      return null;
    }
    return session;
  }

  function requireAdmin() {
    const session = requireAccess();
    if (!session) return null;
    if (session.mode !== "user" || session.user?.role !== "admin") {
      location.href = "../home.html";
      return null;
    }
    return session;
  }

  function updateNavAdmin() {
    const el = document.getElementById("nav-admin");
    if (!el) return;
    const session = getSession();
    const show = session?.mode === "user" && session.user?.role === "admin";
    el.hidden = !show;
  }

  // Local admin helpers used when server is offline
  async function listUsersLocal() {
    const users = await ensureSeedUsers();
    return users.map(({ passwordHash, ...rest }) => rest);
  }

  async function createUserLocal({ username, password, role, displayName }, actor) {
    const users = await ensureSeedUsers();
    if (users.some((u) => u.username === username)) throw new Error("帳號已存在");
    const user = {
      id: uid(),
      username,
      passwordHash: await sha256(`${SALT}:${password}`),
      role: role === "admin" ? "admin" : "editor",
      displayName: displayName || username,
      createdAt: nowIso(),
      createdBy: actor || "admin"
    };
    users.push(user);
    writeJson(USERS_KEY, users);
    appendLog({
      username: actor || "admin",
      action: "user.create",
      detail: {
        zh: `新增使用者 ${username}（角色：${user.role}）`,
        en: `Created user ${username} (role: ${user.role})`
      }
    });
    const { passwordHash, ...safe } = user;
    return safe;
  }

  async function deleteUserLocal(id, actor) {
    let users = await ensureSeedUsers();
    const target = users.find((u) => u.id === id);
    if (!target) throw new Error("找不到使用者");
    if (target.username === "charles") throw new Error("不可刪除預設管理員 charles");
    users = users.filter((u) => u.id !== id);
    writeJson(USERS_KEY, users);
    appendLog({
      username: actor || "admin",
      action: "user.delete",
      detail: {
        zh: `刪除使用者 ${target.username}`,
        en: `Deleted user ${target.username}`
      }
    });
  }

  function listLogsLocal() {
    return readJson(LOGS_KEY, []);
  }

  function createLocalBackupMeta(actor) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const payload = {
      exportedAt: nowIso(),
      by: actor || "admin",
      users: readJson(USERS_KEY, []),
      logs: readJson(LOGS_KEY, []),
      settings: getSettings(),
      note: "Local-mode backup snapshot of CMS data"
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const filename = `tsmc-lab-backup-${stamp}.json`;
    appendLog({
      username: actor || "admin",
      action: "backup.manual",
      detail: {
        zh: `手動備份 ${filename}`,
        en: `Manual backup ${filename}`
      },
      meta: {
        driveFolder: getSettings().driveFolderUrl
      }
    });
    return { blob, filename, folderUrl: getSettings().driveFolderUrl };
  }

  window.AuthClient = {
    login,
    logout,
    enterAsGuest,
    getSession,
    requireAccess,
    requireAdmin,
    updateNavAdmin,
    serverAvailable,
    api,
    getSettings,
    saveSettings,
    listUsersLocal,
    createUserLocal,
    deleteUserLocal,
    listLogsLocal,
    createLocalBackupMeta,
    appendLog,
    DEFAULT_SETTINGS
  };

  document.addEventListener("DOMContentLoaded", () => {
    const isAdmin = location.pathname.replace(/\\/g, "/").includes("/admin/");
    if (isAdmin) requireAdmin();
    else if (!isGatePage()) requireAccess();
    updateNavAdmin();
  });
})();
