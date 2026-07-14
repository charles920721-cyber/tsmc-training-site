const I18N_UI = {
  zh: {
    "nav.home": "首頁",
    "nav.about": "認識台積電",
    "nav.knowledge": "半導體知識屋",
    "nav.quiz": "隨機測驗",
    "home.title": "台積電訓練網站",
    "home.h1": "台積電訓練網站",
    "home.lead": "先認識台積電組織與制度，再複習半導體與光刻教材，並以隨機測驗驗證理解。",
    "home.ctaAbout": "認識台積電",
    "home.ctaKnowledge": "進入知識屋",
    "home.ctaQuiz": "開始測驗",
    "about.title": "認識台積電｜台積電訓練網站",
    "about.h1": "認識台積電",
    "about.lead": "公司基本資料、職稱職等、加班獎金、內轉制度與 MAE 實務整理。",
    "knowledge.title": "半導體知識屋｜台積電訓練網站",
    "knowledge.h1": "半導體知識屋",
    "knowledge.lead": "依主題整理講義與光刻簡報內容，可先閱讀再進入隨機測驗驗收。",
    "quiz.title": "隨機測驗｜台積電訓練網站",
    "quiz.h1": "隨機測驗",
    "quiz.lead": "選擇題型與題數後開始作答；按下「作答完畢」會回到頁面上方公布成績，並在每題下方顯示正確答案。",
    "quiz.typeLabel": "題型",
    "quiz.mc": "選擇題",
    "quiz.sa": "簡答題",
    "quiz.countLabel": "題數",
    "quiz.countN": "{n} 題",
    "quiz.start": "開始測驗",
    "quiz.submit": "作答完畢",
    "quiz.retry": "重新設定測驗",
    "quiz.score": "成績",
    "quiz.scoreResult": "成績：{correct} / {total}（{percent}%）",
    "quiz.scoreMc": "選擇題以標準答案計分；每題下方已公布正確答案。",
    "quiz.scoreSa": "簡答題依關鍵概念自動評分（含意接近即可）；每題下方已公布參考答案。",
    "quiz.qMetaMc": "選擇題",
    "quiz.qMetaSa": "簡答題",
    "quiz.qNum": "第 {n} 題",
    "quiz.placeholder": "請輸入你的答案…",
    "quiz.correctLabel": "本題正確答案",
    "quiz.refLabel": "本題參考答案",
    "quiz.yourAnswer": "你的答案：{answer}",
    "quiz.unanswered": "（未作答）",
    "quiz.footer": "題目依半導體知識屋與光刻技術教材隨機抽題",
    "lang.zh": "繁中",
    "lang.en": "EN",
    "lang.aria": "切換語言"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About TSMC",
    "nav.knowledge": "Knowledge House",
    "nav.quiz": "Quiz",
    "home.title": "TSMC Training Site",
    "home.h1": "TSMC Training Site",
    "home.lead": "Start with TSMC company basics, review semiconductor and lithography materials, then check understanding with a quiz.",
    "home.ctaAbout": "About TSMC",
    "home.ctaKnowledge": "Enter Knowledge House",
    "home.ctaQuiz": "Start Quiz",
    "about.title": "About TSMC | TSMC Training Site",
    "about.h1": "About TSMC",
    "about.lead": "Company basics, job grades, overtime & bonuses, internal transfers, and MAE field notes.",
    "knowledge.title": "Knowledge House | TSMC Training Site",
    "knowledge.h1": "Knowledge House",
    "knowledge.lead": "Lecture notes and lithography materials organized by topic. Read first, then take the quiz.",
    "quiz.title": "Quiz | TSMC Training Site",
    "quiz.h1": "Random Quiz",
    "quiz.lead": "Choose question type and count, then start. After you submit, the score appears at the top and each question shows the correct answer.",
    "quiz.typeLabel": "Type",
    "quiz.mc": "Multiple Choice",
    "quiz.sa": "Short Answer",
    "quiz.countLabel": "Count",
    "quiz.countN": "{n} Qs",
    "quiz.start": "Start Quiz",
    "quiz.submit": "Submit",
    "quiz.retry": "Reset Quiz",
    "quiz.score": "Score",
    "quiz.scoreResult": "Score: {correct} / {total} ({percent}%)",
    "quiz.scoreMc": "Multiple-choice scored against the answer key; correct answers are shown under each question.",
    "quiz.scoreSa": "Short answers are graded by key concepts; reference answers are shown under each question.",
    "quiz.qMetaMc": "Multiple Choice",
    "quiz.qMetaSa": "Short Answer",
    "quiz.qNum": "Q{n}",
    "quiz.placeholder": "Type your answer…",
    "quiz.correctLabel": "Correct answer",
    "quiz.refLabel": "Reference answer",
    "quiz.yourAnswer": "Your answer: {answer}",
    "quiz.unanswered": "(No answer)",
    "quiz.footer": "Questions are randomly drawn from Knowledge House and lithography materials",
    "lang.zh": "繁中",
    "lang.en": "EN",
    "lang.aria": "Switch language"
  }
};

const I18N = {
  lang: localStorage.getItem("tsmc-lab-lang") === "en" ? "en" : "zh",

  t(key, vars) {
    const dict = I18N_UI[this.lang] || I18N_UI.zh;
    let text = dict[key] ?? I18N_UI.zh[key] ?? key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
      });
    }
    return text;
  },

  L(value) {
    if (value && typeof value === "object" && !Array.isArray(value) && ("zh" in value || "en" in value)) {
      return value[this.lang] ?? value.zh ?? value.en ?? "";
    }
    return value;
  },

  setLang(lang) {
    this.lang = lang === "en" ? "en" : "zh";
    localStorage.setItem("tsmc-lab-lang", this.lang);
    document.documentElement.lang = this.lang === "en" ? "en" : "zh-Hant";
    this.applyUI();
    this.syncToggle();
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: this.lang } }));
  },

  applyUI() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const attr = el.getAttribute("data-i18n-attr");
      const text = this.t(key);
      if (attr) el.setAttribute(attr, text);
      else el.textContent = text;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = this.t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-count]").forEach((el) => {
      const n = el.getAttribute("data-i18n-count");
      el.textContent = this.t("quiz.countN", { n });
    });

    const titleKey = document.body.getAttribute("data-title-key");
    if (titleKey) document.title = this.t(titleKey);
  },

  syncToggle() {
    document.querySelectorAll(".lang-toggle [data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === this.lang);
    });
  },

  mountToggle() {
    if (document.querySelector(".lang-toggle")) return;
    const wrap = document.createElement("div");
    wrap.className = "lang-toggle";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", this.t("lang.aria"));
    wrap.innerHTML = `
      <button type="button" data-lang="zh" aria-label="繁體中文">繁中</button>
      <button type="button" data-lang="en" aria-label="English">EN</button>
    `;
    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (!btn) return;
      this.setLang(btn.getAttribute("data-lang"));
    });
    document.body.appendChild(wrap);
    this.syncToggle();
  },

  init() {
    document.documentElement.lang = this.lang === "en" ? "en" : "zh-Hant";
    this.mountToggle();
    this.applyUI();
  }
};

window.I18N = I18N;
document.addEventListener("DOMContentLoaded", () => I18N.init());
