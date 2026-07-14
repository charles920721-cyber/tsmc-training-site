const ABOUT_CHAPTERS = [
  {
    id: "company",
    title: { zh: "基本資料", en: "Company Basics" },
    articles: [
      {
        title: { zh: "公司簡介", en: "Company Profile" },
        html: {
          zh: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>項目</th><th>內容</th></tr></thead>
              <tbody>
                <tr><td>全名</td><td>台灣積體電路製造股份有限公司</td></tr>
                <tr><td>英文</td><td>Taiwan Semiconductor Manufacturing Company Limited（TSMC）</td></tr>
                <tr><td>成立</td><td>1987年2月21日（民國76年）</td></tr>
                <tr><td>創辦人</td><td>張忠謀</td></tr>
                <tr><td>現任董事長／總裁</td><td>魏哲家</td></tr>
                <tr><td>總部</td><td>新竹科學園區力行六路 8 號</td></tr>
                <tr><td>統一編號</td><td>22099131</td></tr>
                <tr><td>股票代號</td><td>台灣證交所 2330／紐約證交所 TSM（ADR）</td></tr>
                <tr><td>聯絡電話</td><td>03-563-6688</td></tr>
                <tr><td>官網</td><td>tsmc.com</td></tr>
              </tbody>
            </table>
          </div>
          `,
          en: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Item</th><th>Detail</th></tr></thead>
              <tbody>
                <tr><td>Full name</td><td>Taiwan Semiconductor Manufacturing Company Limited</td></tr>
                <tr><td>Chinese name</td><td>台灣積體電路製造股份有限公司</td></tr>
                <tr><td>Founded</td><td>February 21, 1987</td></tr>
                <tr><td>Founder</td><td>Morris Chang</td></tr>
                <tr><td>Chairman / President</td><td>C.C. Wei</td></tr>
                <tr><td>HQ</td><td>8, Li-Hsin Rd. 6, Hsinchu Science Park</td></tr>
                <tr><td>Tax ID</td><td>22099131</td></tr>
                <tr><td>Ticker</td><td>TWSE 2330 / NYSE TSM (ADR)</td></tr>
                <tr><td>Phone</td><td>03-563-6688</td></tr>
                <tr><td>Website</td><td>tsmc.com</td></tr>
              </tbody>
            </table>
          </div>
          `
        }
      },
      {
        title: { zh: "商業模式（最重要概念）", en: "Business Model" },
        html: {
          zh: `
          <p><strong>Dedicated IC Foundry（專業晶圓代工）</strong> — 由台積電首創。</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>特點</th><th>說明</th></tr></thead>
              <tbody>
                <tr><td>只代工、不產品</td><td>不與客戶競爭，專注製造</td></tr>
                <tr><td>客戶類型</td><td>Fabless（無晶圓廠設計公司）為主，如 Apple、NVIDIA、AMD、Qualcomm、Broadcom 等</td></tr>
                <tr><td>價值主張</td><td>技術領先 × 製造卓越 × 客戶信任</td></tr>
                <tr><td>生態系</td><td>Open Innovation Platform®（OIP）串接 EDA、IP、封測等夥伴</td></tr>
              </tbody>
            </table>
          </div>
          <p>2025 年官方數據：服務 <strong>534</strong> 家客戶、製造 <strong>12,682</strong> 種產品；年產能超過 <strong>1,700 萬片</strong>十二吋約當晶圓。</p>
          `,
          en: `
          <p><strong>Dedicated IC Foundry</strong> — pioneered by TSMC.</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Trait</th><th>Detail</th></tr></thead>
              <tbody>
                <tr><td>Manufacture only</td><td>Never competes with customers; focuses on manufacturing</td></tr>
                <tr><td>Customer type</td><td>Mostly fabless firms (Apple, NVIDIA, AMD, Qualcomm, Broadcom, etc.)</td></tr>
                <tr><td>Value proposition</td><td>Technology leadership × manufacturing excellence × customer trust</td></tr>
                <tr><td>Ecosystem</td><td>Open Innovation Platform® (OIP) links EDA, IP, OSAT partners</td></tr>
              </tbody>
            </table>
          </div>
          <p>2025: served <strong>534</strong> customers, manufactured <strong>12,682</strong> products; annual capacity exceeded <strong>17 million</strong> 12-inch equivalent wafers.</p>
          `
        }
      },
      {
        title: { zh: "終端市場與核心價值（ICIC）", en: "End Markets & Core Values (ICIC)" },
        html: {
          zh: `
          <p class="subhead">常見五大應用領域</p>
          <ul>
            <li>高效能運算（HPC）— AI、伺服器、GPU（近年主力成長）</li>
            <li>智慧型手機</li>
            <li>物聯網（IoT）</li>
            <li>車用電子</li>
            <li>消費性電子</li>
          </ul>
          <p class="subhead">核心價值 ICIC</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>英文</th><th>中文</th><th>重點</th></tr></thead>
              <tbody>
                <tr><td>Integrity</td><td>誠信正直</td><td>說真話、不誇張；不容貪污、派系、公司政治</td></tr>
                <tr><td>Commitment</td><td>承諾</td><td>對客戶、員工、股東、社會信守承諾；承諾後全力以赴</td></tr>
                <tr><td>Innovation</td><td>創新</td><td>技術、管理、策略全面創新，且必須落地執行</td></tr>
                <tr><td>Customer Trust</td><td>客戶信任</td><td>視客戶為夥伴，客戶成功 = 台積成功</td></tr>
              </tbody>
            </table>
          </div>
          `,
          en: `
          <p class="subhead">Five major end markets</p>
          <ul>
            <li>High-performance computing (HPC) — AI, servers, GPUs (main growth driver)</li>
            <li>Smartphones</li>
            <li>IoT</li>
            <li>Automotive</li>
            <li>Consumer electronics</li>
          </ul>
          <p class="subhead">Core values: ICIC</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>English</th><th>Meaning</th><th>Focus</th></tr></thead>
              <tbody>
                <tr><td>Integrity</td><td>Integrity</td><td>Tell the truth; no corruption, factions, or company politics</td></tr>
                <tr><td>Commitment</td><td>Commitment</td><td>Keep promises to customers, employees, shareholders, society</td></tr>
                <tr><td>Innovation</td><td>Innovation</td><td>Innovate across tech, management, strategy — and execute</td></tr>
                <tr><td>Customer Trust</td><td>Customer trust</td><td>Customers are partners; their success is TSMC’s success</td></tr>
              </tbody>
            </table>
          </div>
          `
        }
      },
      {
        title: { zh: "財務速覽（2025）", en: "Financial Snapshot (2025)" },
        html: {
          zh: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>指標</th><th>數值</th></tr></thead>
              <tbody>
                <tr><td>全年合併營收</td><td>約 NT$ 3.81 兆（約 US$ 1,224 億）</td></tr>
                <tr><td>年增</td><td>約 +32%（台幣）／約 +36%（美元）</td></tr>
                <tr><td>毛利率</td><td>約 59.9%</td></tr>
                <tr><td>營業淨利率</td><td>約 50.8%</td></tr>
                <tr><td>EPS</td><td>NT$ 66.25</td></tr>
                <tr><td>資本支出</td><td>約 NT$ 1.27 兆</td></tr>
              </tbody>
            </table>
          </div>
          <p>資料來源：投資人關係／財報</p>
          `,
          en: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Metric</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Full-year revenue</td><td>~NT$ 3.81T (~US$ 122.4B)</td></tr>
                <tr><td>YoY growth</td><td>~+32% (NTD) / ~+36% (USD)</td></tr>
                <tr><td>Gross margin</td><td>~59.9%</td></tr>
                <tr><td>Operating margin</td><td>~50.8%</td></tr>
                <tr><td>EPS</td><td>NT$ 66.25</td></tr>
                <tr><td>CapEx</td><td>~NT$ 1.27T</td></tr>
              </tbody>
            </table>
          </div>
          <p>Source: Investor Relations / financial reports</p>
          `
        }
      },
      {
        title: { zh: "製造據點（全球布局）", en: "Manufacturing Footprint" },
        html: {
          zh: `
          <p class="subhead">台灣（產能主體）</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>類型</th><th>廠區概況</th></tr></thead>
              <tbody>
                <tr><td>12 吋 GIGAFAB®</td><td>Fab 12、14、15、18、20、22（涵蓋 0.13μm～2nm 等世代）</td></tr>
                <tr><td>8 吋</td><td>4 座</td></tr>
                <tr><td>6 吋</td><td>1 座</td></tr>
                <tr><td>主要園區</td><td>新竹、台中、台南、高雄；先進封裝亦擴及嘉義等</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">海外</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>地區</th><th>據點</th><th>說明</th></tr></thead>
              <tbody>
                <tr><td>美國</td><td>亞利桑那 Fab 21</td><td>12 吋先進製程</td></tr>
                <tr><td>美國</td><td>華盛頓州</td><td>8 吋</td></tr>
                <tr><td>日本</td><td>熊本 JASM</td><td>多數持股子公司；特殊製程</td></tr>
                <tr><td>中國</td><td>上海（8 吋）、南京（12 吋）</td><td>全資子公司</td></tr>
                <tr><td>德國</td><td>德累斯頓 ESMC</td><td>特殊製程廠建置中（約 28/22、16/12nm）</td></tr>
              </tbody>
            </table>
          </div>
          <p>另有北美、歐洲、日韓等地業務／工程服務辦公室。</p>
          `,
          en: `
          <p class="subhead">Taiwan (main capacity)</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Type</th><th>Overview</th></tr></thead>
              <tbody>
                <tr><td>12" GIGAFAB®</td><td>Fab 12, 14, 15, 18, 20, 22 (0.13μm to 2nm generations)</td></tr>
                <tr><td>8"</td><td>4 fabs</td></tr>
                <tr><td>6"</td><td>1 fab</td></tr>
                <tr><td>Campuses</td><td>Hsinchu, Taichung, Tainan, Kaohsiung; advanced packaging also in Chiayi, etc.</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">Overseas</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Region</th><th>Site</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>USA</td><td>Arizona Fab 21</td><td>12" advanced nodes</td></tr>
                <tr><td>USA</td><td>Washington</td><td>8"</td></tr>
                <tr><td>Japan</td><td>Kumamoto JASM</td><td>Majority-owned; specialty tech</td></tr>
                <tr><td>China</td><td>Shanghai (8"), Nanjing (12")</td><td>Wholly owned</td></tr>
                <tr><td>Germany</td><td>Dresden ESMC</td><td>Specialty fab under construction (~28/22, 16/12nm)</td></tr>
              </tbody>
            </table>
          </div>
          <p>Also offices in North America, Europe, Japan, China, and Korea for sales/engineering support.</p>
          `
        }
      },
      {
        title: { zh: "技術路線與里程碑", en: "Technology & Milestones" },
        html: {
          zh: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>項目</th><th>說明</th></tr></thead>
              <tbody>
                <tr><td>晶圓尺寸</td><td>主力 12 吋（300mm）；另有 8 吋、6 吋</td></tr>
                <tr><td>先進邏輯</td><td>如 N5／N4、N3、N2（2nm）等</td></tr>
                <tr><td>架構演進</td><td>Planar → FinFET → GAA / nanosheet</td></tr>
                <tr><td>微影</td><td>先進節點大量使用 EUV</td></tr>
                <tr><td>先進封裝</td><td>CoWoS、SoIC、InFO 等（AI 需求強）</td></tr>
              </tbody>
            </table>
          </div>
          <p>「節點數字愈小」通常代表電晶體更密、效能／功耗更優，但良率與成本也更難。</p>
          <p class="subhead">重要里程碑</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>年份</th><th>事件</th></tr></thead>
              <tbody>
                <tr><td>1987</td><td>成立，開創專業晶圓代工模式</td></tr>
                <tr><td>1994</td><td>台股上市（2330）</td></tr>
                <tr><td>1997</td><td>ADR 於紐約掛牌（TSM）</td></tr>
                <tr><td>2010s～</td><td>7nm、5nm、3nm 等先進製程陸續量產領先</td></tr>
                <tr><td>2018</td><td>張忠謀正式退休</td></tr>
                <tr><td>2020s</td><td>亞利桑那、熊本、德國布局；AI 驅動產能與營收大幅成長</td></tr>
              </tbody>
            </table>
          </div>
          `,
          en: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Topic</th><th>Detail</th></tr></thead>
              <tbody>
                <tr><td>Wafer size</td><td>Mainly 12" (300mm); also 8" and 6"</td></tr>
                <tr><td>Advanced logic</td><td>N5/N4, N3, N2 (2nm), etc.</td></tr>
                <tr><td>Architecture</td><td>Planar → FinFET → GAA / nanosheet</td></tr>
                <tr><td>Lithography</td><td>Heavy EUV use on advanced nodes</td></tr>
                <tr><td>Advanced packaging</td><td>CoWoS, SoIC, InFO, etc. (strong AI demand)</td></tr>
              </tbody>
            </table>
          </div>
          <p>Smaller node numbers usually mean denser transistors and better performance/power — but harder yields and cost.</p>
          <p class="subhead">Key milestones</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Year</th><th>Event</th></tr></thead>
              <tbody>
                <tr><td>1987</td><td>Founded; pioneered pure-play foundry</td></tr>
                <tr><td>1994</td><td>Listed on TWSE (2330)</td></tr>
                <tr><td>1997</td><td>ADR listed on NYSE (TSM)</td></tr>
                <tr><td>2010s–</td><td>Led volume production of 7nm, 5nm, 3nm, etc.</td></tr>
                <tr><td>2018</td><td>Morris Chang retired</td></tr>
                <tr><td>2020s</td><td>Arizona, Kumamoto, Germany; AI-driven capacity/revenue growth</td></tr>
              </tbody>
            </table>
          </div>
          `
        }
      }
    ]
  },
  {
    id: "grades",
    title: { zh: "職等／職稱", en: "Job Grades & Titles" },
    articles: [
      {
        title: { zh: "職等架構（1／2／3 字頭）", en: "Grade Structure (1x / 2x / 3x)" },
        html: {
          zh: `
          <p class="subhead">1 字頭 — 產線技術職系</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>職等</th><th>職稱</th></tr></thead>
              <tbody>
                <tr><td>11</td><td>助理技術員／實習技術員</td></tr>
                <tr><td>12</td><td>技術員</td></tr>
                <tr><td>13</td><td>資深技術員</td></tr>
                <tr><td>14</td><td>主任技術員／線上組長</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">2 字頭 — 設備助工職系</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>職等</th><th>職稱</th></tr></thead>
              <tbody>
                <tr><td>21～23</td><td>助理工程師／副工程師</td></tr>
                <tr><td>24</td><td>資深助理工程師／資深副工程師</td></tr>
                <tr><td>25</td><td>主任助理工程師／主任副工程師</td></tr>
                <tr><td>26</td><td>最高階助理工程師</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">3 字頭 — 工程研發與經營管理職系</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>職等</th><th>常見對應職稱</th></tr></thead>
              <tbody>
                <tr><td>31</td><td>工程師</td></tr>
                <tr><td>32</td><td>資深工程師</td></tr>
                <tr><td>33</td><td>主任工程師</td></tr>
                <tr><td>34</td><td>副理</td></tr>
                <tr><td>35</td><td>經理</td></tr>
                <tr><td>36</td><td>部經理</td></tr>
                <tr><td>37</td><td>副處長</td></tr>
                <tr><td>38</td><td>處長／廠長</td></tr>
                <tr><td>39</td><td>資深處長／副總經理以上</td></tr>
              </tbody>
            </table>
          </div>
          `,
          en: `
          <p class="subhead">1x — Technician track</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Grade</th><th>Title</th></tr></thead>
              <tbody>
                <tr><td>11</td><td>Assistant / Intern Technician</td></tr>
                <tr><td>12</td><td>Technician</td></tr>
                <tr><td>13</td><td>Senior Technician</td></tr>
                <tr><td>14</td><td>Lead Technician / Line Lead</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">2x — Associate engineer track</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Grade</th><th>Title</th></tr></thead>
              <tbody>
                <tr><td>21–23</td><td>Associate / Assistant Engineer</td></tr>
                <tr><td>24</td><td>Senior Associate / Senior Assistant Engineer</td></tr>
                <tr><td>25</td><td>Principal Associate / Principal Assistant Engineer</td></tr>
                <tr><td>26</td><td>Top associate engineer grade</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">3x — Engineer / R&D / management</p>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Grade</th><th>Common titles</th></tr></thead>
              <tbody>
                <tr><td>31</td><td>Engineer</td></tr>
                <tr><td>32</td><td>Senior Engineer</td></tr>
                <tr><td>33</td><td>Principal Engineer</td></tr>
                <tr><td>34</td><td>Assistant Manager</td></tr>
                <tr><td>35</td><td>Manager</td></tr>
                <tr><td>36</td><td>Department Manager</td></tr>
                <tr><td>37</td><td>Deputy Director</td></tr>
                <tr><td>38</td><td>Director / Fab Director</td></tr>
                <tr><td>39</td><td>Senior Director / VP and above</td></tr>
              </tbody>
            </table>
          </div>
          `
        }
      },
      {
        title: { zh: "工程師職類（Engineer）", en: "Engineer Job Families" },
        type: "roleList",
        hint: {
          zh: "點擊任一職類可展開工作內容介紹。內容整理自台積電官方職涯與徵才頁。",
          en: "Click a role to expand its job overview. Content is compiled from official TSMC Careers pages."
        },
        roleKey: "engineers"
      },
      {
        title: { zh: "副／助理工程師與技術員", en: "Associate Engineers & Technicians" },
        type: "roleList",
        hint: {
          zh: "點擊任一職類可展開工作內容介紹。以台積電徵才系統職缺說明為主。",
          en: "Click a role to expand its job overview. Primarily based on TSMC Careers job postings."
        },
        groups: [
          {
            heading: { zh: "副工程師／助理工程師", en: "Associate / Assistant Engineers" },
            roleKey: "associates"
          },
          {
            heading: { zh: "技術員／作業員", en: "Technicians / Operators" },
            roleKey: "technicians"
          }
        ]
      }
    ]
  },
  {
    id: "pay",
    title: { zh: "加班費與獎金", en: "Overtime & Bonuses" },
    articles: [
      {
        title: { zh: "加班費算法與實務狀況", en: "Overtime Rules & Practice" },
        html: {
          zh: `
          <p>依據內部員工分享，台積電的加班費基數完全合乎甚至優於勞基法，但「能不能報滿」非常取決於各部門主管的作風與預算。</p>
          <p class="subhead">加班費計算公式</p>
          <ol>
            <li><strong>時薪</strong> = 月薪（經常性給與）÷ 240</li>
            <li><strong>平日加班</strong>：第 9～10 小時 × 1.34；第 11～12 小時 × 1.67</li>
            <li><strong>休息日加班</strong>：1～2 小時 × 1.34；3～8 小時 × 1.67；9～12 小時 × 2.67（注意最低計薪時數）</li>
            <li><strong>國定假日</strong>：加發時薪 × 8（8 小時內）；超過再依平日倍率</li>
          </ol>
          <p class="subhead">員工實務分享</p>
          <ul>
            <li><strong>報滿型：</strong>部分前線產線或極缺人單位，主管允許每月報滿勞基法上限 46 小時，基層月收入會大幅躍升。</li>
            <li><strong>控管／換休型：</strong>許多 RD 或常態工程部門有「部門加班費預算上限」（例如每人每月最多報 20 小時），超過改補休。</li>
          </ul>
          `,
          en: `
          <p>Employee shares say TSMC’s overtime base meets or exceeds Labor Standards Act rules, but whether you can claim the full allowance depends heavily on each manager’s policy and budget.</p>
          <p class="subhead">Formulas</p>
          <ol>
            <li><strong>Hourly rate</strong> = monthly pay (regular payments) ÷ 240</li>
            <li><strong>Weekday OT</strong>: hours 9–10 × 1.34; hours 11–12 × 1.67</li>
            <li><strong>Rest-day OT</strong>: 1–2h × 1.34; 3–8h × 1.67; 9–12h × 2.67 (watch minimum billable hours)</li>
            <li><strong>National holidays</strong>: extra hourly × 8 (within 8h); beyond that use weekday multipliers</li>
          </ol>
          <p class="subhead">Practice notes</p>
          <ul>
            <li><strong>Full claim:</strong> some line teams allow the full 46h/month legal OT cap.</li>
            <li><strong>Cap / time-off:</strong> many RD/engineering teams cap OT pay (e.g. 20h/person) and convert the rest to compensatory leave.</li>
          </ul>
          `
        }
      },
      {
        title: { zh: "分紅與獎金算法", en: "Profit Sharing & Bonuses" },
        html: {
          zh: `
          <p class="subhead">1. 保證年終獎金</p>
          <p>每年固定發放 <strong>2 個月</strong>本薪，因此正職員工基本底薪＝<strong>14 個月</strong>。</p>
          <p class="subhead">2. 年度盈餘分紅</p>
          <p>個人全年度應得的分紅切成 <strong>8 等份</strong>發放：</p>
          <ul>
            <li><strong>季分紅：</strong>每年 2、5、8、11 月各發一次，每次約為該年度預估總分紅的 1/8。</li>
            <li><strong>年度結算分紅：</strong>隔年 7 月一次發放剩餘 4/8。</li>
          </ul>
          `,
          en: `
          <p class="subhead">1. Guaranteed year-end bonus</p>
          <p>Fixed <strong>2 months</strong> of base pay → full-time base package is effectively <strong>14 months</strong>.</p>
          <p class="subhead">2. Annual profit sharing</p>
          <p>Annual entitlement is split into <strong>8 parts</strong>:</p>
          <ul>
            <li><strong>Quarterly:</strong> Feb / May / Aug / Nov — each about 1/8 of the estimated annual total.</li>
            <li><strong>Settlement:</strong> remaining 4/8 paid the following July.</li>
          </ul>
          `
        }
      }
    ]
  },
  {
    id: "jos",
    title: { zh: "換單位（JOS）", en: "Internal Transfer (JOS)" },
    articles: [
      {
        title: { zh: "基本申請條件", en: "Basic Eligibility" },
        html: {
          zh: `
          <p>內部轉換部門或職務類型的官方制度稱為 <strong>JOS（Job Opportunity System）</strong>。</p>
          <ul>
            <li><strong>年資門檻：</strong>通常須在原部門待滿 <strong>18 個月～2 年</strong>（視廠區／時期）。未滿則系統不開放申請。</li>
            <li><strong>考績門檻：</strong>近期 PMD 不能太差；若有 O（Needs Observation）等較差考績，新主管通常不願收。</li>
          </ul>
          `,
          en: `
          <p>Internal transfers use <strong>JOS (Job Opportunity System)</strong>.</p>
          <ul>
            <li><strong>Tenure:</strong> usually <strong>18 months–2 years</strong> in the current org before applying.</li>
            <li><strong>Performance:</strong> recent PMD must not be poor; an “O” (Needs Observation) rating often blocks acceptance.</li>
          </ul>
          `
        }
      },
      {
        title: { zh: "大幅轉職系與實務潛規則", en: "Cross-Function Moves & Unwritten Rules" },
        html: {
          zh: `
          <p>單純平調（如 18 廠設備轉 15 廠設備）較容易；跨越職系（產線模組轉 IT、設備轉 RD）難度上升，形同內部重新求職。</p>
          <ul>
            <li><strong>學歷／背景：</strong>轉 IT 常須資工、資管、電機相關背景，或具體有規模的 Coding 專案經歷。</li>
            <li><strong>重新面試：</strong>例如轉 IT 常有 Coding Test（如 HackerRank）。</li>
          </ul>
          <p class="subhead">員工實務分享</p>
          <ul>
            <li>成功的 JOS 必須<strong>新主管願意收</strong>且<strong>現任主管願意放人</strong>。</li>
            <li>送出申請當下，系統會 Email 通知現任直屬主管。</li>
            <li><strong>大忌：</strong>未先溝通就送出，現任主管會覺得被偷襲。</li>
            <li><strong>黑掉：</strong>新單位沒錄取又惹怒現任主管，可能影響原單位發展、分紅與升遷。</li>
            <li><strong>較安全流程：</strong>私下探缺與口頭 Offer → 與現任主管溝通報 → 再送 JOS。</li>
          </ul>
          `,
          en: `
          <p>Same-role sideways moves are easier; cross-function moves (e.g. module → IT, equipment → RD) are like applying for a new job inside the company.</p>
          <ul>
            <li><strong>Background:</strong> IT transfers often need CS/IT/EE degrees or solid coding project proof.</li>
            <li><strong>Re-interview:</strong> IT often includes a coding test (e.g. HackerRank).</li>
          </ul>
          <p class="subhead">Practice notes</p>
          <ul>
            <li>Need both a receiving manager and a releasing manager.</li>
            <li>Submitting JOS emails your current manager immediately.</li>
            <li><strong>Don’t surprise</strong> your manager by applying without talking first.</li>
            <li>If rejected and you upset your manager, you may be “blacklisted” in your current team.</li>
            <li><strong>Safer path:</strong> soft probe + verbal offer → talk to current manager → then submit JOS.</li>
          </ul>
          `
        }
      }
    ]
  },
  {
    id: "mae",
    title: { zh: "模組副工程師（MAE）", en: "Module Associate Engineer (MAE)" },
    articles: [
      {
        title: { zh: "工作內容總整理", en: "Role Overview" },
        html: {
          zh: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>面向</th><th>說明</th></tr></thead>
              <tbody>
                <tr><td>職責定位</td><td>雖掛副工程師，實務需同時學 AE（保養）與 EE（修機／專案）工作</td></tr>
                <tr><td>核心任務</td><td>無塵室機台維護：定期 PM、換零件、異常判斷與排除，確保生產</td></tr>
                <tr><td>輪班與工時</td><td>通過考核後需獨立值班；配合日／夜／假日班；週末也常有固定加班</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">值班實務重點</p>
          <ul>
            <li>值班時需掌握全場多種機台狀況、警報與故障排除。</li>
            <li>無法處理時，有權利／義務呼叫設備廠商或 EE 支援。</li>
            <li>新廠區（如 20 廠）佔地廣，巡視耗體力，走一趟來回可能超過 20 分鐘。</li>
            <li>一個月約輪一次大夜；大夜上滿 5～6 天約多領 1 萬元加給。</li>
            <li>假日人力常見 1 位工程師搭配 2～3 位副工程師；假班做滿 12 小時加班費約為底薪的 1/5。</li>
          </ul>
          `,
          en: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Aspect</th><th>Detail</th></tr></thead>
              <tbody>
                <tr><td>Role</td><td>Title is associate eng., but in practice you learn both AE (PM) and EE (repair/projects)</td></tr>
                <tr><td>Core work</td><td>Cleanroom tool care: scheduled PM, parts, anomaly diagnosis & fix</td></tr>
                <tr><td>Shifts</td><td>Independent shifts after qualification; day/night/holiday coverage; weekend OT common</td></tr>
              </tbody>
            </table>
          </div>
          <p class="subhead">Shift practice</p>
          <ul>
            <li>During shifts you watch many tool types, alarms, and fixes.</li>
            <li>If stuck, call vendors or EE for help.</li>
            <li>New fabs (e.g. Fab 20) are large — a round trip can take 20+ minutes.</li>
            <li>~1 night-shift cycle/month; 5–6 nights may add ~NT$10k allowance.</li>
            <li>Holiday coverage often 1 engineer + 2–3 MAE; full 12h holiday OT ≈ 1/5 of base pay.</li>
          </ul>
          `
        }
      },
      {
        title: { zh: "三班制運作概況", en: "Three-Shift Overview" },
        html: {
          zh: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>班別</th><th>表定時間</th></tr></thead>
              <tbody>
                <tr><td>日班 (Day Shift)</td><td>08:30 ～ 17:30</td></tr>
                <tr><td>小夜班 (Swing Shift)</td><td>15:30 ～ 00:30</td></tr>
                <tr><td>大夜班 (Graveyard / Night Shift)</td><td>23:30 ～ 08:30</td></tr>
              </tbody>
            </table>
          </div>
          <p>實務上：MAE 多為日班與大夜輪替；一般工程師多負責日班與小夜（廠區規定可能略有不同）。</p>
          `,
          en: `
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Shift</th><th>Scheduled hours</th></tr></thead>
              <tbody>
                <tr><td>Day Shift</td><td>08:30 – 17:30</td></tr>
                <tr><td>Swing Shift</td><td>15:30 – 00:30</td></tr>
                <tr><td>Graveyard / Night Shift</td><td>23:30 – 08:30</td></tr>
              </tbody>
            </table>
          </div>
          <p>In practice: MAE often rotate day + graveyard; engineers often cover day + swing (varies by fab).</p>
          `
        }
      }
    ]
  },
  {
    id: "experience",
    title: { zh: "家人經驗分享", en: "Family Experience Notes" },
    articles: [
      {
        title: { zh: "職等、薪資與工作型態", en: "Grades, Pay & Work Pattern" },
        html: {
          zh: `
          <p class="subhead">職等與升遷</p>
          <ul>
            <li>研究所畢業通常才能任一般「工程師」；大學／實習生多從 MAE（助工）做起。</li>
            <li>MAE 職等最高到 26；工程師階層（31、32、33…）劃分較明顯。</li>
            <li>助工升一般工程師門檻高，需亮眼成績（如 CB）；待久表現佳也可能升到副理。</li>
            <li>工程師升遷與日常報告<strong>英文能力</strong>非常重要。</li>
          </ul>
          <p class="subhead">薪資與分紅（分享約略）</p>
          <ul>
            <li>助工底薪約 4.3～4.4 萬；上大夜約再加 1 萬（納入計算基準）。</li>
            <li>假班加滿 12 小時，加班費約相當底薪的 1/5（以 4 萬多底薪約一天多 5,000）。</li>
            <li>輪班＋加班後月薪平均可達 5 萬多甚至破 6 萬。</li>
            <li>分紅每季發（2／5／8／11）；公司獲利好時一季約 2～3 個多月底薪，先發一半、另一半隔年 7 月。</li>
            <li>第一年未滿年約可拿 6～7 萬分紅；整體常能達「百萬年薪」。</li>
          </ul>
          <p class="subhead">工時與輪調</p>
          <ul>
            <li>超過正常下班（如 17:30）可報加班；每月上限約 46～54 小時，過高會被上層檢討。</li>
            <li>正職待滿約一年可申請 JOS；實習生無法申請。往新廠調動機會較大。</li>
          </ul>
          `,
          en: `
          <p class="subhead">Grades & promotion</p>
          <ul>
            <li>Master’s grads often start as engineers; bachelor’s / interns often start as MAE.</li>
            <li>MAE grades top out around 26; engineer grades (31/32/33…) are clearer ladders.</li>
            <li>MAE → engineer is hard and needs outstanding results (e.g. CB); long tenure + strong performance may reach assistant manager.</li>
            <li>English is critical for engineers’ reports and promotion.</li>
          </ul>
          <p class="subhead">Pay & profit sharing (approximate shares)</p>
          <ul>
            <li>MAE base ~NT$43–44k; night shifts add ~NT$10k into the pay base.</li>
            <li>Full 12h holiday OT ≈ 1/5 of base (~NT$5k/day on ~40k+ base).</li>
            <li>With shift + OT, monthly cash often NT$50k+ or even 60k+.</li>
            <li>Profit sharing quarterly (Feb/May/Aug/Nov); strong quarters ≈ 2–3+ months base; half now, half next July.</li>
            <li>First incomplete year may still get ~NT$60–70k sharing; total package often hits NT$1M/year.</li>
          </ul>
          <p class="subhead">Hours & transfer</p>
          <ul>
            <li>OT after normal end time (e.g. 17:30); monthly cap ~46–54h; high team OT triggers management review.</li>
            <li>Full-timers after ~1 year can apply for JOS; interns cannot. New fabs often have more openings.</li>
          </ul>
          `
        }
      },
      {
        title: { zh: "職場文化與心態提醒", en: "Culture & Mindset Tips" },
        html: {
          zh: `
          <ul>
            <li>環境壓力大：值班吃不下、新人容易被資深刁難都可能出現。</li>
            <li><strong>心態</strong>最重要：被罵先別往心裡放；不懂一定要開口問；避開態度差的前輩，找願意教的人。</li>
            <li>若遇言語霸凌或被欺負，不要忍耐，直接往上通報主管或老闆。</li>
            <li>升上工程師後壓力型態不同：機台出事老闆常先找工程師寫報告，英文與書面能力吃重。</li>
          </ul>
          <p class="note">以上「員工／家人經驗」為分享整理，非公司官宣；實際制度與數字以公司當期規定與薪資單為準。</p>
          `,
          en: `
          <ul>
            <li>High pressure is common — some struggle to eat during shifts; new hires may face tough seniors.</li>
            <li><strong>Mindset</strong> matters: don’t take every scolding personally; always ask when unsure; skip harsh mentors and find teachers.</li>
            <li>If you face verbal bullying, escalate to your manager — don’t silently endure it.</li>
            <li>Engineer track pressures differ: tool issues often mean writing English reports for the boss.</li>
          </ul>
          <p class="note">“Family/employee experience” sections are informal shares, not official TSMC policy. Use current company rules and your payslip as the source of truth.</p>
          `
        }
      }
    ]
  }
];
