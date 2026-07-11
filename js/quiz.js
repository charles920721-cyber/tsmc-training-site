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
    const bank = QUIZ_BANK[type] || [];
    if (!bank.length) return [];
    const pool = shuffle(bank);
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push({ ...pool[i % pool.length], _uid: `${type}-${i}-${Math.random().toString(36).slice(2, 7)}` });
    }
    return result;
  }

  function renderQuestions() {
    list.innerHTML = currentQuestions
      .map((item, idx) => {
        if (selectedType === "mc") {
          const choices = item.choices
            .map(
              (c, i) => `
              <label class="choice">
                <input type="radio" name="q-${idx}" value="${i}" />
                <span>${String.fromCharCode(65 + i)}. ${c}</span>
              </label>`
            )
            .join("");
          return `
            <article class="question-card" data-idx="${idx}">
              <div class="q-meta"><span>第 ${idx + 1} 題</span><span>選擇題</span></div>
              <p class="q-text">${item.q}</p>
              <div class="choices">${choices}</div>
              <div class="answer-reveal" id="reveal-${idx}"></div>
            </article>`;
        }
        return `
          <article class="question-card" data-idx="${idx}">
            <div class="q-meta"><span>第 ${idx + 1} 題</span><span>簡答題</span></div>
            <p class="q-text">${item.q}</p>
            <textarea class="short-answer" id="sa-${idx}" placeholder="請輸入你的答案…"></textarea>
            <div class="answer-reveal" id="reveal-${idx}"></div>
          </article>`;
      })
      .join("");
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[，。、；：！？,.!?;:'"“”‘’（）()【】\[\]《》<>]/g, "");
  }

  function gradeShort(userText, keywords) {
    const n = normalize(userText);
    if (!n) return false;
    const hit = (keywords || []).filter((k) => n.includes(normalize(k))).length;
    const need = Math.max(1, Math.ceil((keywords || []).length * 0.35));
    return hit >= need;
  }

  function gradeAll() {
    let correct = 0;
    currentQuestions.forEach((item, idx) => {
      const card = list.querySelector(`.question-card[data-idx="${idx}"]`);
      const reveal = document.getElementById(`reveal-${idx}`);
      let ok = false;
      let your = "";

      if (selectedType === "mc") {
        const checked = list.querySelector(`input[name="q-${idx}"]:checked`);
        your = checked ? item.choices[Number(checked.value)] : "（未作答）";
        ok = checked && Number(checked.value) === item.answer;
        reveal.innerHTML = `
          <span class="label">本題正確答案</span>
          <p class="your-answer">你的答案：${your}</p>
          <p class="correct-answer">${String.fromCharCode(65 + item.answer)}. ${item.choices[item.answer]}${item.explain ? `（${item.explain}）` : ""}</p>`;
      } else {
        const ta = document.getElementById(`sa-${idx}`);
        your = (ta && ta.value.trim()) || "（未作答）";
        ok = gradeShort(your === "（未作答）" ? "" : your, item.keywords);
        reveal.innerHTML = `
          <span class="label">本題參考答案</span>
          <p class="your-answer">你的答案：${your}</p>
          <p class="correct-answer">${item.answer}</p>`;
      }

      reveal.classList.add("visible");
      card.classList.remove("correct", "wrong");
      card.classList.add(ok ? "correct" : "wrong");
      if (ok) correct += 1;
    });
    return correct;
  }

  startBtn.addEventListener("click", () => {
    submitted = false;
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
    const correct = gradeAll();
    const total = currentQuestions.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    scoreTitle.textContent = `成績：${correct} / ${total}（${percent}%）`;
    scoreDetail.textContent =
      selectedType === "mc"
        ? "選擇題以標準答案計分；每題下方已公布正確答案。"
        : "簡答題依關鍵概念自動評分（含意接近即可）；每題下方已公布參考答案。";
    scoreBanner.classList.add("visible");
    submitBtn.classList.add("hidden");

    // 鎖住作答
    list.querySelectorAll("input, textarea").forEach((el) => {
      el.disabled = true;
    });

    scoreBanner.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  retryBtn.addEventListener("click", () => {
    submitted = false;
    panel.classList.remove("visible");
    setup.classList.remove("hidden");
    scoreBanner.classList.remove("visible");
    list.innerHTML = "";
    submitBtn.classList.remove("hidden");
    submitBtn.disabled = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
