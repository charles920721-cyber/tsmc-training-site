(function () {
  const toc = document.getElementById("toc");
  const content = document.getElementById("knowledge-content");
  if (!toc || !content || !window.KNOWLEDGE_CHAPTERS) return;

  const chapters = KNOWLEDGE_CHAPTERS;

  toc.innerHTML = chapters
    .map((ch) => `<a href="#${ch.id}">${ch.title}</a>`)
    .join("");

  content.innerHTML = chapters
    .map(
      (ch) => `
      <section class="chapter" id="${ch.id}">
        <h2 class="chapter-title">${ch.title}</h2>
        ${ch.articles
          .map(
            (a) => `
          <article class="article">
            <h3>${a.title}</h3>
            ${a.html}
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

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
