(function () {
  const toc = document.getElementById("toc");
  const content = document.getElementById("about-content");
  const source = typeof ABOUT_CHAPTERS !== "undefined" ? ABOUT_CHAPTERS : null;
  if (!toc || !content || !source) return;

  const ROLE_MAP = {
    engineers: typeof ABOUT_ENGINEER_ROLES !== "undefined" ? ABOUT_ENGINEER_ROLES : [],
    associates: typeof ABOUT_ASSOCIATE_ROLES !== "undefined" ? ABOUT_ASSOCIATE_ROLES : [],
    technicians: typeof ABOUT_TECH_ROLES !== "undefined" ? ABOUT_TECH_ROLES : []
  };
  const SOURCE_MAP = typeof ABOUT_ROLE_SOURCES !== "undefined" ? ABOUT_ROLE_SOURCES : {};

  const openRoleIds = new Set();

  function L(value) {
    if (typeof I18N !== "undefined" && I18N.L) return I18N.L(value);
    if (value && typeof value === "object" && !Array.isArray(value) && ("zh" in value || "en" in value)) {
      return value.zh ?? value.en ?? "";
    }
    return value;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderSources(sourceKeys) {
    const items = (sourceKeys || [])
      .map((key) => SOURCE_MAP[key])
      .filter(Boolean);
    if (!items.length) return "";
    return `
      <p class="role-sources-label">${escapeHtml(
        L({ zh: "資料來源", en: "Sources" })
      )}</p>
      <ul class="role-sources">
        ${items
          .map(
            (s) =>
              `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
                L({ zh: s.zh, en: s.en })
              )}</a></li>`
          )
          .join("")}
      </ul>`;
  }

  function renderRole(role) {
    const open = openRoleIds.has(role.id) ? " open" : "";
    const duties = L(role.duties) || [];
    return `
      <details class="role-accordion" data-role-id="${escapeHtml(role.id)}"${open}>
        <summary>
          <span class="role-summary-main">
            <span class="role-track">${escapeHtml(L(role.track))}</span>
            <span class="role-title">${escapeHtml(L(role.title))}</span>
            <span class="role-code">${escapeHtml(role.code || "")}</span>
          </span>
          <span class="role-chevron" aria-hidden="true"></span>
        </summary>
        <div class="role-body">
          <p class="role-blurb">${escapeHtml(L(role.summary))}</p>
          <p class="subhead">${escapeHtml(L({ zh: "主要工作內容", en: "Key responsibilities" }))}</p>
          <ul>
            ${duties.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
          </ul>
          ${renderSources(role.sources)}
        </div>
      </details>`;
  }

  function renderRoleList(article) {
    const parts = [];
    if (article.hint) {
      parts.push(`<p class="role-hint">${escapeHtml(L(article.hint))}</p>`);
    }

    if (article.groups && article.groups.length) {
      article.groups.forEach((group) => {
        const roles = ROLE_MAP[group.roleKey] || [];
        parts.push(`<p class="subhead">${escapeHtml(L(group.heading))}</p>`);
        parts.push(`<div class="role-list">${roles.map(renderRole).join("")}</div>`);
      });
    } else {
      const roles = ROLE_MAP[article.roleKey] || [];
      parts.push(`<div class="role-list">${roles.map(renderRole).join("")}</div>`);
    }

    return parts.join("");
  }

  function renderArticle(article) {
    const body =
      article.type === "roleList" ? renderRoleList(article) : L(article.html) || "";
    return `
      <article class="article">
        <h3>${escapeHtml(L(article.title))}</h3>
        ${body}
      </article>`;
  }

  function bindAccordions() {
    content.querySelectorAll(".role-accordion").forEach((el) => {
      el.addEventListener("toggle", () => {
        const id = el.getAttribute("data-role-id");
        if (!id) return;
        if (el.open) openRoleIds.add(id);
        else openRoleIds.delete(id);
      });
    });
  }

  function render() {
    const chapters = source;
    toc.innerHTML = chapters.map((ch) => `<a href="#${ch.id}">${L(ch.title)}</a>`).join("");

    content.innerHTML = chapters
      .map(
        (ch) => `
      <section class="chapter" id="${ch.id}">
        <h2 class="chapter-title">${L(ch.title)}</h2>
        ${ch.articles.map(renderArticle).join("")}
      </section>`
      )
      .join("");

    bindAccordions();

    const links = [...toc.querySelectorAll("a")];
    const sections = chapters.map((ch) => document.getElementById(ch.id));

    function setActive() {
      let current = sections[0]?.id;
      for (const section of sections) {
        if (!section) continue;
        if (section.getBoundingClientRect().top <= 120) current = section.id;
      }
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    }

    window.removeEventListener("scroll", setActive);
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  render();
  window.addEventListener("langchange", render);
})();
