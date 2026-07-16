document.addEventListener("DOMContentLoaded", () => {
  const session = AuthClient.getSession();
  if (session?.mode === "guest" || session?.mode === "user") {
    location.replace("home.html");
    return;
  }

  const choice = document.getElementById("gate-choice");
  const form = document.getElementById("login-form");
  const errorEl = document.getElementById("login-error");

  document.getElementById("btn-guest").addEventListener("click", () => {
    AuthClient.enterAsGuest();
    location.href = "home.html";
  });

  document.getElementById("btn-show-login").addEventListener("click", () => {
    choice.hidden = true;
    form.hidden = false;
    document.getElementById("login-username").focus();
  });

  document.getElementById("btn-back").addEventListener("click", () => {
    form.hidden = true;
    choice.hidden = false;
    errorEl.hidden = true;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.hidden = true;
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    try {
      const user = await AuthClient.login(username, password);
      location.href = user.role === "admin" ? "admin/index.html" : "home.html";
    } catch (err) {
      errorEl.textContent = err.message || "登入失敗";
      errorEl.hidden = false;
    }
  });
});
