(function () {
  const toc = document.getElementById("toc");
  const content = document.getElementById("knowledge-content");
  const source =
    typeof KNOWLEDGE_CHAPTERS !== "undefined" ? KNOWLEDGE_CHAPTERS : null;
  if (!toc || !content || !source) return;

  function L(value) {
    if (typeof I18N !== "undefined" && I18N.L) return I18N.L(value);
    if (value && typeof value === "object" && !Array.isArray(value) && ("zh" in value || "en" in value)) {
      return value.zh ?? value.en ?? "";
    }
    return value;
  }

  function render() {
    const chapters = source;
    toc.innerHTML = chapters
      .map((ch) => `<a href="#${ch.id}">${L(ch.title)}</a>`)
      .join("");

    content.innerHTML = chapters
      .map(
        (ch) => `
      <section class="chapter" id="${ch.id}">
        <h2 class="chapter-title">${L(ch.title)}</h2>
        ${ch.articles
          .map(
            (a) => `
          <article class="article">
            <h3>${L(a.title)}</h3>
            ${L(a.html)}
          </article>`
          )
          .join("")}
      </section>`
      )
      .join("");

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
