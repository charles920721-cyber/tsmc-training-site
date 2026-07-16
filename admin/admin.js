(function () {
  const session = AuthClient.requireAdmin();
  if (!session) return;

  const userLabel = document.getElementById("admin-user-label");
  const backendLabel = document.getElementById("admin-backend-label");
  userLabel.textContent = `${session.user.displayName || session.user.username}（${session.user.role}）`;

  function L(value) {
    if (typeof I18N !== "undefined" && I18N.L) return I18N.L(value);
    return value?.zh || value?.en || value || "";
  }

  function fmtTime(iso) {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso || "";
    }
  }

  async function refreshBackendLabel() {
    const online = await AuthClient.serverAvailable();
    backendLabel.textContent = online
      ? L({ zh: "後端：已連線", en: "Backend: online" })
      : L({ zh: "後端：本機模式", en: "Backend: local mode" });
    return online;
  }

  document.querySelectorAll(".admin-tabs .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tabs .chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.getAttribute("data-tab");
      document.getElementById("panel-accounts").hidden = tab !== "accounts";
      document.getElementById("panel-backup").hidden = tab !== "backup";
      document.getElementById("panel-logs").hidden = tab !== "logs";
      if (tab === "logs") loadLogs();
      if (tab === "backup") loadBackupSettings();
      if (tab === "accounts") loadUsers();
    });
  });

  document.getElementById("btn-logout").addEventListener("click", async () => {
    try {
      if (await AuthClient.serverAvailable()) {
        await AuthClient.api("/api/auth/logout", { method: "POST", body: {} });
      }
    } catch {
      /* ignore */
    }
    AuthClient.logout();
    location.href = "../index.html";
  });

  async function loadUsers() {
    const tbody = document.querySelector("#users-table tbody");
    tbody.innerHTML = "";
    let users = [];
    try {
      if (await AuthClient.serverAvailable()) {
        const data = await AuthClient.api("/api/users");
        users = data.users || [];
      } else {
        users = await AuthClient.listUsersLocal();
      }
    } catch (err) {
      document.getElementById("users-error").hidden = false;
      document.getElementById("users-error").textContent = err.message;
      return;
    }

    users.forEach((u) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${u.username}</td>
        <td>${u.displayName || "—"}</td>
        <td>${u.role}</td>
        <td>${fmtTime(u.createdAt)}</td>
        <td></td>`;
      const actionCell = tr.lastElementChild;
      if (u.username !== "charles") {
        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn btn-ghost";
        del.textContent = L({ zh: "刪除", en: "Delete" });
        del.addEventListener("click", async () => {
          if (!confirm(`刪除使用者 ${u.username}？`)) return;
          try {
            if (await AuthClient.serverAvailable()) {
              await AuthClient.api(`/api/users/${u.id}`, { method: "DELETE" });
            } else {
              await AuthClient.deleteUserLocal(u.id, session.user.username);
            }
            loadUsers();
            loadLogs();
          } catch (err) {
            alert(err.message);
          }
        });
        actionCell.appendChild(del);
      } else {
        actionCell.textContent = "—";
      }
      tbody.appendChild(tr);
    });
  }

  document.getElementById("create-user-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const errEl = document.getElementById("users-error");
    errEl.hidden = true;
    const fd = new FormData(e.target);
    const payload = {
      username: String(fd.get("username") || "").trim(),
      password: String(fd.get("password") || ""),
      displayName: String(fd.get("displayName") || "").trim(),
      role: String(fd.get("role") || "editor")
    };
    try {
      if (await AuthClient.serverAvailable()) {
        await AuthClient.api("/api/users", { method: "POST", body: payload });
      } else {
        await AuthClient.createUserLocal(payload, session.user.username);
      }
      e.target.reset();
      loadUsers();
      loadLogs();
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    }
  });

  async function loadBackupSettings() {
    const form = document.getElementById("backup-form");
    const status = document.getElementById("backup-status");
    let settings = AuthClient.getSettings();
    let driveOk = false;
    try {
      if (await AuthClient.serverAvailable()) {
        const data = await AuthClient.api("/api/settings/backup");
        settings = data.settings;
        driveOk = data.driveCredentials;
      }
    } catch {
      /* local */
    }
    form.backupHour.value = settings.backupHour;
    form.backupMinute.value = settings.backupMinute;
    form.backupEnabled.checked = !!settings.backupEnabled;
    document.getElementById("drive-folder-link").href =
      settings.driveFolderUrl || AuthClient.DEFAULT_SETTINGS.driveFolderUrl;

    const last = settings.lastBackupStatus;
    status.textContent = [
      L({
        zh: `排程：每日 ${String(settings.backupHour).padStart(2, "0")}:${String(settings.backupMinute).padStart(2, "0")}（${
          settings.backupEnabled ? "啟用" : "停用"
        }）`,
        en: `Schedule: daily ${String(settings.backupHour).padStart(2, "0")}:${String(settings.backupMinute).padStart(2, "0")} (${
          settings.backupEnabled ? "on" : "off"
        })`
      }),
      driveOk
        ? L({ zh: "Google Drive 憑證：已設定", en: "Google Drive credentials: configured" })
        : L({
            zh: "Google Drive 憑證：未設定（請見 server/credentials）",
            en: "Google Drive credentials: missing (see server/credentials)"
          }),
      last
        ? L({
            zh: `最近備份：${fmtTime(last.at)}／${last.filename}`,
            en: `Last backup: ${fmtTime(last.at)} / ${last.filename}`
          })
        : ""
    ]
      .filter(Boolean)
      .join(" · ");
  }

  document.getElementById("backup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const errEl = document.getElementById("backup-error");
    errEl.hidden = true;
    const fd = new FormData(e.target);
    const payload = {
      backupHour: Number(fd.get("backupHour")),
      backupMinute: Number(fd.get("backupMinute")),
      backupEnabled: fd.get("backupEnabled") === "on"
    };
    try {
      if (await AuthClient.serverAvailable()) {
        await AuthClient.api("/api/settings/backup", { method: "PUT", body: payload });
      } else {
        AuthClient.saveSettings(payload);
        AuthClient.appendLog({
          username: session.user.username,
          action: "backup.schedule",
          detail: {
            zh: `更新備份排程為每日 ${String(payload.backupHour).padStart(2, "0")}:${String(
              payload.backupMinute
            ).padStart(2, "0")}`,
            en: `Updated backup schedule`
          }
        });
      }
      loadBackupSettings();
      loadLogs();
    } catch (err) {
      errEl.textContent = err.message;
      errEl.hidden = false;
    }
  });

  document.getElementById("btn-manual-backup").addEventListener("click", async () => {
    const out = document.getElementById("backup-result");
    out.hidden = false;
    out.textContent = L({ zh: "備份中…", en: "Backing up…" });
    try {
      if (await AuthClient.serverAvailable()) {
        const data = await AuthClient.api("/api/backup/run", { method: "POST", body: {} });
        out.textContent = JSON.stringify(data.result, null, 2);
      } else {
        const { blob, filename, folderUrl } = AuthClient.createLocalBackupMeta(session.user.username);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
        out.textContent = L({
          zh: `已下載 ${filename}\n請上傳至：${folderUrl}`,
          en: `Downloaded ${filename}\nUpload to: ${folderUrl}`
        });
      }
      loadBackupSettings();
      loadLogs();
    } catch (err) {
      out.textContent = err.message;
    }
  });

  async function loadLogs() {
    const tbody = document.querySelector("#logs-table tbody");
    tbody.innerHTML = "";
    let logs = [];
    try {
      if (await AuthClient.serverAvailable()) {
        const data = await AuthClient.api("/api/logs");
        logs = data.logs || [];
      } else {
        logs = AuthClient.listLogsLocal();
      }
    } catch (err) {
      tbody.innerHTML = `<tr><td colspan="4">${err.message}</td></tr>`;
      return;
    }
    if (!logs.length) {
      tbody.innerHTML = `<tr><td colspan="4">${L({ zh: "尚無紀錄", en: "No logs yet" })}</td></tr>`;
      return;
    }
    logs.forEach((log) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${fmtTime(log.at)}</td>
        <td>${log.username || "—"}</td>
        <td><code>${log.action || ""}</code></td>
        <td>${L(log.detail) || ""}</td>`;
      tbody.appendChild(tr);
    });
  }

  document.getElementById("btn-refresh-logs").addEventListener("click", loadLogs);

  refreshBackendLabel();
  loadUsers();
  loadBackupSettings();
  loadLogs();
})();
