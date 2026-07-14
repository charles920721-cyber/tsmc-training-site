(function () {
  const typeOptions = document.getElementById("type-options");
  const countOptions = document.getElementById("count-options");
  const startBtn = document.getElementById("start-quiz");
  const setup = document.getElementById("quiz-setup");
  const panel = document.getElementById("quiz-panel");
  const list = document.getElementById("question-list");
  const submitBtn = document.getElementById("submit-quiz");
  const retryBtn = document.getElementById("retry-quiz");
  const scoreBanner = document.getElementById("score-banner");
  const scoreTitle = document.getElementById("score-title");
  const scoreDetail = document.getElementById("score-detail");

  let selectedType = "mc";
  let selectedCount = 5;
  let currentQuestions = [];
  let submitted = false;
  let lastScore = null;

  function t(key, vars) {
    return window.I18N ? I18N.t(key, vars) : key;
  }

  function L(value) {
    return window.I18N ? I18N.L(value) : value;
  }

  function bindChips(container, attr, onPick) {
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn || submitted) return;
      container.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      onPick(btn.dataset[attr]);
    });
  }

  bindChips(typeOptions, "type", (v) => {
    selectedType = v;
  });
  bindChips(countOptions, "count", (v) => {
    selectedCount = Number(v);
  });

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickQuestions(type, count) {
    const bank = (QUIZ_BANK[type] || []);
    if (!bank.length) return [];
    const pool = shuffle(bank);
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push({ ...pool[i % pool.length], _uid: `${type}-${i}-${Math.random().toString(36).slice(2, 7)}` });
    }
    return result;
  }

  function getChoices(item) {
    return L(item.choices);
  }

  function renderQuestions() {
    const answers = {};
    if (list.children.length) {
      currentQuestions.forEach((_, idx) => {
        if (selectedType === "mc") {
          const checked = list.querySelector(`input[name="q-${idx}"]:checked`);
          if (checked) answers[idx] = checked.value;
        } else {
          const ta = document.getElementById(`sa-${idx}`);
          if (ta) answers[idx] = ta.value;
        }
      });
    }

    list.innerHTML = currentQuestions
      .map((item, idx) => {
        if (selectedType === "mc") {
          const choices = getChoices(item)
            .map(
              (c, i) => `
              <label class="choice">
                <input type="radio" name="q-${idx}" value="${i}" ${answers[idx] === String(i) ? "checked" : ""} />
                <span>${String.fromCharCode(65 + i)}. ${c}</span>
              </label>`
            )
            .join("");
          return `
            <article class="question-card" data-idx="${idx}">
              <div class="q-meta"><span>${t("quiz.qNum", { n: idx + 1 })}</span><span>${t("quiz.qMetaMc")}</span></div>
              <p class="q-text">${L(item.q)}</p>
              <div class="choices">${choices}</div>
              <div class="answer-reveal" id="reveal-${idx}"></div>
            </article>`;
        }
        return `
          <article class="question-card" data-idx="${idx}">
            <div class="q-meta"><span>${t("quiz.qNum", { n: idx + 1 })}</span><span>${t("quiz.qMetaSa")}</span></div>
            <p class="q-text">${L(item.q)}</p>
            <textarea class="short-answer" id="sa-${idx}" placeholder="${t("quiz.placeholder")}">${answers[idx] || ""}</textarea>
            <div class="answer-reveal" id="reveal-${idx}"></div>
          </article>`;
      })
      .join("");

    if (submitted) {
      gradeAll(false);
      list.querySelectorAll("input, textarea").forEach((el) => {
        el.disabled = true;
      });
    }
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[，。、；：！？,.!?;:'"“”‘’（）()【】\[\]《》<>]/g, "");
  }

  function gradeShort(userText, item) {
    const n = normalize(userText);
    if (!n) return false;
    const keywords = L(item.keywords) || item.keywords || [];
    const hit = keywords.filter((k) => n.includes(normalize(k))).length;
    const need = Math.max(1, Math.ceil(keywords.length * 0.35));
    return hit >= need;
  }

  function gradeAll(updateScore) {
    let correct = 0;
    currentQuestions.forEach((item, idx) => {
      const card = list.querySelector(`.question-card[data-idx="${idx}"]`);
      const reveal = document.getElementById(`reveal-${idx}`);
      let ok = false;
      let your = "";
      const choices = getChoices(item);

      if (selectedType === "mc") {
        const checked = list.querySelector(`input[name="q-${idx}"]:checked`);
        your = checked ? choices[Number(checked.value)] : t("quiz.unanswered");
        ok = checked && Number(checked.value) === item.answer;
        const explain = L(item.explain);
        reveal.innerHTML = `
          <span class="label">${t("quiz.correctLabel")}</span>
          <p class="your-answer">${t("quiz.yourAnswer", { answer: your })}</p>
          <p class="correct-answer">${String.fromCharCode(65 + item.answer)}. ${choices[item.answer]}${explain ? `（${explain}）` : ""}</p>`;
      } else {
        const ta = document.getElementById(`sa-${idx}`);
        your = (ta && ta.value.trim()) || t("quiz.unanswered");
        ok = gradeShort(your === t("quiz.unanswered") ? "" : your, item);
        reveal.innerHTML = `
          <span class="label">${t("quiz.refLabel")}</span>
          <p class="your-answer">${t("quiz.yourAnswer", { answer: your })}</p>
          <p class="correct-answer">${L(item.answer)}</p>`;
      }

      reveal.classList.add("visible");
      card.classList.remove("correct", "wrong");
      card.classList.add(ok ? "correct" : "wrong");
      if (ok) correct += 1;
    });

    if (updateScore !== false) {
      const total = currentQuestions.length;
      const percent = total ? Math.round((correct / total) * 100) : 0;
      lastScore = { correct, total, percent };
      scoreTitle.textContent = t("quiz.scoreResult", lastScore);
      scoreDetail.textContent = selectedType === "mc" ? t("quiz.scoreMc") : t("quiz.scoreSa");
    } else if (lastScore) {
      scoreTitle.textContent = t("quiz.scoreResult", lastScore);
      scoreDetail.textContent = selectedType === "mc" ? t("quiz.scoreMc") : t("quiz.scoreSa");
    }
    return correct;
  }

  startBtn.addEventListener("click", () => {
    submitted = false;
    lastScore = null;
    currentQuestions = pickQuestions(selectedType, selectedCount);
    setup.classList.add("hidden");
    panel.classList.add("visible");
    scoreBanner.classList.remove("visible");
    submitBtn.classList.remove("hidden");
    submitBtn.disabled = false;
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  submitBtn.addEventListener("click", () => {
    if (submitted) return;
    submitted = true;
    gradeAll(true);
    scoreBanner.classList.add("visible");
    submitBtn.classList.add("hidden");
    list.querySelectorAll("input, textarea").forEach((el) => {
      el.disabled = true;
    });
    scoreBanner.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  retryBtn.addEventListener("click", () => {
    submitted = false;
    lastScore = null;
    panel.classList.remove("visible");
    setup.classList.remove("hidden");
    scoreBanner.classList.remove("visible");
    list.innerHTML = "";
    submitBtn.classList.remove("hidden");
    submitBtn.disabled = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("langchange", () => {
    if (window.I18N) I18N.applyUI();
    if (panel.classList.contains("visible") && currentQuestions.length) {
      renderQuestions();
    }
  });
})();
