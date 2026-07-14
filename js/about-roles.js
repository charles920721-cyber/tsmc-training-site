/** Role descriptions sourced primarily from TSMC Careers official pages. */
const ABOUT_ROLE_SOURCES = {
  careersExplore: {
    zh: "台積電官網職涯｜Explore Careers",
    en: "TSMC Careers | Explore Careers",
    url: "https://www.tsmc.com/english/careers/index.htm"
  },
  peCampus: {
    zh: "台積電徵才｜Process Engineer (校園徵才)",
    en: "TSMC Careers | Process Engineer (Campus)",
    url: "https://careers.tsmc.com/en_US/careers/JobDetail?jobId=19038"
  },
  eeJob: {
    zh: "台積電徵才｜Equipment Engineer (EQ)",
    en: "TSMC Careers | Equipment Engineer (EQ)",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail/Equipment-Engineer-EQ/5438"
  },
  pieCampus: {
    zh: "台積電徵才｜Process Integration Engineer (PIE)",
    en: "TSMC Careers | Process Integration Engineer (PIE)",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail/2026-TSMC-Campus-Recruitment-Process-Integration-Engineer-PIE/19037"
  },
  yeJob: {
    zh: "台積電徵才｜Sr. Yield Enhancement Engineer",
    en: "TSMC Careers | Sr. Yield Enhancement Engineer",
    url: "https://careers.tsmc.com/en_US/careers/JobDetail/Sr-Yield-Enhancement-Engineer/19691"
  },
  maeJob: {
    zh: "台積電徵才｜Module Associate Engineer (MAE)",
    en: "TSMC Careers | Module Associate Engineer (MAE)",
    url: "https://ro.careers.tsmc.com/job/Kumamoto-JASM-Fab23-Module-Associate-Engineer-%28MAE%29%283101%29-43/777986310/"
  },
  mfgTech12: {
    zh: "台積電徵才｜南科製造部技術員(12吋廠)",
    en: "TSMC Careers | Manufacturing Technician (12\")",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail?jobId=445"
  },
  apTech: {
    zh: "台積電徵才｜南科先進封裝製造部技術員",
    en: "TSMC Careers | Advanced Packaging Manufacturing Technician",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail?jobId=5407"
  }
};

const ABOUT_ENGINEER_ROLES = [
  {
    id: "pe",
    code: "PE",
    track: { zh: "製程", en: "Process" },
    title: { zh: "製程工程師", en: "Process Engineer" },
    summary: {
      zh: "最小化製程變異與異常，最大化晶圓良率；負責解題交付與製程改善。",
      en: "Minimize process variation/excursions to maximize wafer yield; sustain operations and drive process improvement."
    },
    duties: {
      zh: [
        "一線負責晶片製造製程參數設定與優化，提升良率、單位時間產出並降低成本。",
        "Operation：解決製程問題以確保交貨，並支援新製程導入、技術移轉或量產爬坡。",
        "Process improvement：開發／導入工具方法以提升良率或降低生產成本。",
        "常見模組脈絡含薄膜沈積、黃光微影、溼式／乾式蝕刻、熱製程與離子摻雜（擴散）等。"
      ],
      en: [
        "Own front-line process parameter setup/optimization to improve yield, throughput, and cost.",
        "Operations: solve process issues for wafer delivery; support new-process ramp, transfer, or production.",
        "Process improvement: develop methods/tools to raise yield or cut production cost.",
        "Typical modules include thin film, lithography, wet/dry etch, thermal process, and ion implant/diffusion."
      ]
    },
    sources: ["careersExplore", "peCampus"]
  },
  {
    id: "ee",
    code: "EE / EQ",
    track: { zh: "設備", en: "Equipment" },
    title: { zh: "設備工程師", en: "Equipment Engineer" },
    summary: {
      zh: "機台的「醫生」：維護、暖機、故障排除，並執行分析／缺陷偵測專案以提升稼動率。",
      en: "The “doctor of equipment”: maintain, warm up, troubleshoot tools, and run analysis/defect-detection projects to raise efficiency."
    },
    duties: {
      zh: [
        "專精擴散、薄膜、微影、蝕刻或量測等高端半導體設備。",
        "維護設備並排除異常，縮短當機時間、提升可運轉時間。",
        "改善設備效率與產能；規劃並執行分析或缺陷偵測專案。",
        "與跨功能工程師或設備廠商（vendor）溝通協作。"
      ],
      en: [
        "Master diffusion, thin-film, lithography, etch, or metrology equipment.",
        "Sustain and troubleshoot high-tech tools to reduce downtime and improve availability.",
        "Improve equipment efficiency/productivity; plan and execute analysis or defect-detection projects.",
        "Communicate with cross-functional engineers and equipment vendors."
      ]
    },
    sources: ["careersExplore", "eeJob"]
  },
  {
    id: "pie",
    code: "PIE",
    track: { zh: "整合", en: "Integration" },
    title: { zh: "製程整合工程師", en: "Process Integration Engineer" },
    summary: {
      zh: "廠內整合協調者：彙整客戶客製需求，與各工程單位合作確保並提升產品良率與品質。",
      en: "Fab integration coordinator: consolidate customer requirements and work with fab teams to ensure and improve yield/quality."
    },
    duties: {
      zh: [
        "與客戶溝通客製化晶片應用需求，帶回廠內與各工程單位合作。",
        "開發／維持邏輯、快閃記憶體或特殊製程技術，推動先進整合模組開發與改善。",
        "跨團隊合作對象可含 Device、Integration、Yield、Lithography、Etch、Thin Films 或外部供應商。",
        "負擔日常 sustaining、設備異常排除，並指導技術員。"
      ],
      en: [
        "Capture customized application needs from customers and align internal fab engineering teams.",
        "Develop/sustain process technologies for logic, flash, and specialty products; drive integrated-module improvements.",
        "Collaborate with device, integration, yield, lithography, etch, thin films, or external suppliers.",
        "Own day-to-day sustaining, equipment troubleshooting, and technician mentoring."
      ]
    },
    sources: ["careersExplore", "pieCampus"]
  },
  {
    id: "ye",
    code: "YE / YEE",
    track: { zh: "良率", en: "Yield" },
    title: { zh: "良率精進／良率提升工程師", en: "Yield Enhancement Engineer" },
    summary: {
      zh: "監控晶片良率與缺陷，用量測／檢測機台找問題，再與製程單位共同解決。",
      en: "Monitor yield and defects with inspection/metrology tools, then resolve root causes with process teams."
    },
    duties: {
      zh: [
        "使用 bright-field／dark-field wafer scan、OM、SEM／EDX 等檢測／量測手段分析在線缺陷異常。",
        "快速鑑定缺陷類型並歸因可能製程來源，維持 baseline 缺陷穩定。",
        "以 SPC 等方法監控產線健康、防止缺陷 excursion，並帶動跨模組改善。",
        "產出技術報告、建立／優化標準作業程序（SOP）。"
      ],
      en: [
        "Analyze in-process wafers with BF/DF scan, OM, SEM/EDX and related metrology/inspection tools.",
        "Characterize defect types quickly and assign probable process sources to keep baseline stable.",
        "Use SPC and related methods to prevent defect excursions and drive cross-module improvements.",
        "Write technical reports and maintain/enhance SOPs for team accuracy and efficiency."
      ]
    },
    sources: ["careersExplore", "pieCampus", "yeJob"]
  },
  {
    id: "mfg",
    code: "MFG",
    track: { zh: "製造", en: "Manufacturing" },
    title: { zh: "智慧製造工程師", en: "Intelligent Manufacturing Engineer" },
    summary: {
      zh: "產線領導角色：帶領技術員執行生產，監督晶圓代工日常運作，確保流程順暢。",
      en: "Production-line leader who guides technicians and supervises daily foundry operations for a smooth workflow."
    },
    duties: {
      zh: [
        "領導技術員執行生產任務，確保派工／產線運作順暢。",
        "監督 IC Foundry 日常營運指標與現場狀況。",
        "協調異常處理與跨單位溝通，維持產能與交期。"
      ],
      en: [
        "Lead technicians to execute production and keep dispatch/line flow healthy.",
        "Supervise daily IC-foundry operations and key production metrics.",
        "Coordinate abnormality handling and cross-team communication for capacity and delivery."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "rd",
    code: "RD",
    track: { zh: "研發", en: "R&D" },
    title: { zh: "研究與發展工程師", en: "Research & Development Engineer" },
    summary: {
      zh: "進行先進 CMOS 與 beyond／More-than-Moore 探索研究，評估材料、設備與 recipe，並處理先進元件與製程整合。",
      en: "Conduct exploratory research in advanced CMOS and beyond/More-than-Moore; evaluate materials, tools, recipes, and advanced device/process integration."
    },
    duties: {
      zh: [
        "探索先進 CMOS 與延伸技術路徑。",
        "評估先進材料、設備／工具與製程 recipe 調校。",
        "處理先進元件（device）與製程整合相關課題。",
        "常見子方向含 R&D Module／Device／Integration 等。"
      ],
      en: [
        "Explore advanced CMOS and related technology directions.",
        "Evaluate advanced materials, equipment/tools, and process recipe tuning.",
        "Handle advanced device and process-integration topics.",
        "Common tracks include R&D Module / Device / Integration."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "design",
    code: "Design / DTCO",
    track: { zh: "設計支援", en: "Design support" },
    title: { zh: "IC 設計工程師（DTP）", en: "IC Design Engineer (DTP)" },
    summary: {
      zh: "Design Technology Platform：銜接客戶與製程技術開發，推動 process-design 共優化，降低客戶導入門檻。",
      en: "Design Technology Platform bridges customers and process R&D, driving process-design co-optimization and easing technology adoption."
    },
    duties: {
      zh: [
        "在客戶與製程技術開發團隊之間溝通協調。",
        "推動 process-design optimization，強化技術領先。",
        "降低客戶採用台積電技術的障礙，並以設計差異化支持業務。"
      ],
      en: [
        "Communicate between customers and process technology development teams.",
        "Drive process-design optimization to sustain technology leadership.",
        "Lower customer barriers to adopting TSMC technology and enable business via design differentiation."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "qr",
    code: "QR",
    track: { zh: "品質", en: "Quality" },
    title: { zh: "品質與可靠性工程師", en: "Quality & Reliability Engineer" },
    summary: {
      zh: "品質聲譽守門人：致力交付無缺陷、可靠且具競爭力的產品，加速客戶 time-to-market。",
      en: "Guardian of TSMC quality reputation—deliver defect-free, reliable, competitive products and accelerate customers’ time-to-market."
    },
    duties: {
      zh: [
        "以電性、物理、材料、化學與統計分析為基礎，提出全代工流程品管解決方案。",
        "涵蓋設計、技術開發、量產到先進封裝與測試等階段。",
        "提供材料分析與失效分析，並與 RD／營運／客戶協作。"
      ],
      en: [
        "Resolve quality issues using electrical, physical, material, chemical, and statistical analysis.",
        "Cover design, technology development, mass production, and advanced packaging/testing stages.",
        "Provide material/failure analyses and partner with R&D, operations, and customers."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "te",
    code: "TE",
    track: { zh: "測試", en: "Test" },
    title: { zh: "測試工程師", en: "Test Engineer" },
    summary: {
      zh: "隸屬 Testing Development and Technology 等專業領域，開發／支援測試技術以驗證產品品質與可靠度。",
      en: "Under Testing Development and Technology career areas: develop/support test technology to verify product quality and reliability."
    },
    duties: {
      zh: [
        "參與測試技術開發、驗證與量產導入相關工作。",
        "與品質可靠度、製程／產品工程等單位協作，確保測試涵蓋與問題診斷。",
        "實際職缺責任以台積電徵才系統當期職缺說明為準。"
      ],
      en: [
        "Contribute to test technology development, validation, and production enablement.",
        "Collaborate with QR / process / product engineering on coverage and diagnosis.",
        "Exact duties follow the current posting on TSMC Careers."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "fme",
    code: "FME",
    track: { zh: "廠務", en: "Facility" },
    title: { zh: "廠務工程師", en: "Facility Engineer" },
    summary: {
      zh: "負責機械、儀電、水、氣／化學等廠務系統維運與安全管理。",
      en: "Maintain facility systems (mechanical, instrument & electrical, water, gas/chemical) and safety management."
    },
    duties: {
      zh: [
        "維護廠務系統與安全管理系統。",
        "執行合規稽核、追蹤改善行動，參與安委會與風險評估協調。",
        "跨機械、儀電、水務與氣／化學等分部協作。"
      ],
      en: [
        "Maintain facility systems and the safety management system.",
        "Conduct compliance auditing, follow improvement actions, join safety committees, and coordinate risk assessments.",
        "Cover mechanical, instrument & electrical, water, and gas/chemical sections."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "isep",
    code: "ISEP / EHS",
    track: { zh: "工安環保", en: "EHS" },
    title: { zh: "工安環保工程師", en: "Industrial Safety & Environmental Protection Engineer" },
    summary: {
      zh: "屬 Facility & Industrial Safety / Environmental Protection 領域，推動工安、環保合規與風險控管。",
      en: "Under Facility & Industrial Safety / Environmental Protection: drive EHS compliance and risk control."
    },
    duties: {
      zh: [
        "支援工安／環保法規遵循與稽核改善。",
        "參與風險評估、安全委員會與改善追蹤。",
        "與廠務及製造單位協作，落實安全管理制度。"
      ],
      en: [
        "Support industrial-safety / environmental compliance and audit follow-up.",
        "Join risk assessments, safety committees, and corrective-action tracking.",
        "Partner with facility and manufacturing teams to implement safety management systems."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "it",
    code: "IT",
    track: { zh: "資訊", en: "IT" },
    title: { zh: "資訊技術工程師", en: "Information Technology Engineer" },
    summary: {
      zh: "以具成本效益、強健且可擴充的 IT 系統提升競爭力，支援生產力、創新、客戶服務與決策。",
      en: "Enhance competitiveness via cost-efficient, robust, scalable IT systems that improve productivity, innovation, customer service, and decision-making."
    },
    duties: {
      zh: [
        "建置／優化企業 IT 系統與解決方案。",
        "提升生產力、加速創新、強化客戶服務與管理決策支援。",
        "強調程式能力、邏輯思考、問題解決與持續學習。"
      ],
      en: [
        "Build and improve enterprise IT systems and solutions.",
        "Boost productivity, accelerate innovation, empower customer service, and enable decisions.",
        "Requires programming, logic, problem-solving, and lifelong learning."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "ap",
    code: "AP / 3DIC",
    track: { zh: "封裝", en: "Packaging" },
    title: { zh: "先進封裝／3DIC 相關工程師", en: "Advanced Packaging / 3DIC Engineer" },
    summary: {
      zh: "屬 Advanced Packaging Technology Development 等領域，開發與支援先進封裝／3DIC 製程與整合。",
      en: "Under Advanced Packaging Technology Development: develop and support advanced packaging / 3DIC process and integration."
    },
    duties: {
      zh: [
        "參與先進封裝技術開發、導入與產量／良率改善。",
        "可能與 PE／EE／整合／品質等單位協作，視職缺掛於製造或研發。",
        "實際職責以徵才系統「先進封裝技術開發／製造」相關職缺為準。"
      ],
      en: [
        "Contribute to advanced packaging technology development, ramp, and yield/productivity improvement.",
        "May collaborate with PE/EE/integration/quality; posting may sit in manufacturing or R&D packaging orgs.",
        "Exact scope follows Advanced Packaging postings on TSMC Careers."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "other",
    code: "SCM / Planning",
    track: { zh: "其他", en: "Other" },
    title: { zh: "供應鏈、企業規劃、產品工程等", en: "Supply Chain, Corporate Planning, Product Eng." },
    summary: {
      zh: "涵蓋 Materials Management、Corporate Planning、Product Development 等職涯領域。",
      en: "Covers Materials Management, Corporate Planning, Product Development, and related career areas."
    },
    duties: {
      zh: [
        "企業規劃：資源、產銷與需求規劃、定價與系統整合，協調工廠與客戶需求以提升營運效益。",
        "材料／供應鏈：支援物料管理與供應節奏（以當期 Materials Management 職缺為準）。",
        "產品工程：支援產品開發與量產介面相關工作（以當期 Product Development 職缺為準）。"
      ],
      en: [
        "Corporate Planning: flexible resource/production/demand planning, pricing, and system integration between fabs and customers.",
        "Materials/supply chain: support materials management cadence per current postings.",
        "Product engineering: support product development and production interfaces per current postings."
      ]
    },
    sources: ["careersExplore"]
  }
];

const ABOUT_ASSOCIATE_ROLES = [
  {
    id: "mae",
    code: "MAE",
    track: { zh: "設備／模組（主力）", en: "Equipment / Module (main)" },
    title: { zh: "模組副工程師", en: "Module Associate Engineer" },
    summary: {
      zh: "在無塵室處理擴散／薄膜／微影／蝕刻等設備：裝機驗證、排除關鍵機況、提升稼動率與硬體能力。",
      en: "Handle diffusion/thin-film/lithography/etch tools in the cleanroom: install/qualify, fix critical issues, raise uptime and hardware capability."
    },
    duties: {
      zh: [
        "於無塵室操作／維護擴散、薄膜、微影或蝕刻機台。",
        "依計畫安裝／驗證新機台以及時擴充產能。",
        "以系統化方法排除關鍵設備問題，提升可用率與利用率。",
        "尋找硬體能力強化機會；保养（PM）後執行目視／品質檢查。"
      ],
      en: [
        "Handle Diffusion, Thin Film, Lithography or Etching equipment in a cleanroom.",
        "Install/qualify new tools on schedule to add capacity.",
        "Solve critical equipment issues systematically; improve uptime and utilization.",
        "Pursue hardware capability enhancements; perform visual/quality checks after PM."
      ]
    },
    sources: ["maeJob"]
  },
  {
    id: "reserve-mae",
    code: "Trainee MAE",
    track: { zh: "設備／模組", en: "Equipment / Module" },
    title: { zh: "儲備模組副工程師", en: "Reserve / Trainee MAE" },
    summary: {
      zh: "正式 MAE 前的訓練職缺；訓練通過後轉任模組副工程師，工作內容對齊 MAE。",
      en: "Training track before formal MAE; duties align with MAE after qualification."
    },
    duties: {
      zh: [
        "依部門訓練計畫學習機台保養、Alarm 排除與安全規範。",
        "逐步承接與正式 MAE 相同的模組設備實務。",
        "考核／認證通過後轉為正式模組副工程師。"
      ],
      en: [
        "Follow department training on PM, alarm handling, and safety rules.",
        "Gradually take on the same module-equipment practices as formal MAE.",
        "Transfer to formal MAE after qualification/certification."
      ]
    },
    sources: ["maeJob"]
  },
  {
    id: "process-ae",
    code: "Process AE",
    track: { zh: "製程", en: "Process" },
    title: { zh: "製程副工程師／儲備製程副工程師", en: "Process Associate Engineer" },
    summary: {
      zh: "協助製程維持與異常排除，並支援指導技術員；職責常與 PE／PIE sustaining 任務銜接。",
      en: "Support process sustaining and troubleshooting, and help coach technicians; often aligned with PE/PIE sustaining work."
    },
    duties: {
      zh: [
        "協助日常製程維持、異常通報與初步排除。",
        "與設備工程單位協作處理機況／製程交叉問題。",
        "依官方校園／社會職缺說明，相關單位亦強調 mentoring technicians 與現場參與。"
      ],
      en: [
        "Assist daily process sustaining, abnormality reporting, and first-line troubleshooting.",
        "Work with equipment teams on tool/process cross issues.",
        "Official PE/PIE postings also emphasize mentoring technicians and fab presence."
      ]
    },
    sources: ["peCampus", "pieCampus"]
  },
  {
    id: "pkg-mae",
    code: "Packaging MAE",
    track: { zh: "先進封裝", en: "Advanced packaging" },
    title: { zh: "先進封裝模組副工程師", en: "Packaging MAE" },
    summary: {
      zh: "在先進封裝產線執行與 MAE 類似的機台保養、裝機驗證與線上排除。",
      en: "Perform MAE-like PM, install/qualify, and line troubleshooting on advanced packaging tools."
    },
    duties: {
      zh: [
        "負責封裝產線機台保養與線上異常排除。",
        "工作型態對齊模組副工程師：現場／輪班／設備可用性優先。",
        "細節以台積電先進封裝相關副工職缺為準。"
      ],
      en: [
        "Own packaging-line tool PM and on-line troubleshooting.",
        "Work pattern aligns with MAE: fab floor, shifts, tool availability first.",
        "Details follow current advanced-packaging associate postings on TSMC Careers."
      ]
    },
    sources: ["maeJob", "careersExplore"]
  },
  {
    id: "rdpc-mae",
    code: "RDPC MAE",
    track: { zh: "研發製程中心", en: "RDPC / 3DIC" },
    title: { zh: "RDPC／3DIC 儲備模組副工程師", en: "RDPC / 3DIC MAE" },
    summary: {
      zh: "在研發／3DIC 環境執行模組設備實務，支援新技術與新機台導入。",
      en: "Perform module equipment practice in R&D / 3DIC environments supporting new technology and tool introduction."
    },
    duties: {
      zh: [
        "支援研發端設備安裝、保養與異常排除。",
        "與研發製程／整合單位配合實驗與設備驗證。",
        "能力要求與 MAE 相近，環境偏研發節奏。"
      ],
      en: [
        "Support R&D-side tool install, PM, and troubleshooting.",
        "Partner with R&D process/integration on experiments and tool qualification.",
        "Skill set similar to MAE, with a more R&D-paced environment."
      ]
    },
    sources: ["maeJob", "careersExplore"]
  },
  {
    id: "fac-ae",
    code: "Facility AE",
    track: { zh: "廠務", en: "Facility" },
    title: { zh: "廠務助理工程師", en: "Facility Assistant Engineer" },
    summary: {
      zh: "協助廠務工程範疇（機械、儀電、水、氣／化學）現場施工、配管與安全品質管理。",
      en: "Assist facility engineering scope (mechanical, I&E, water, gas/chemical) on construction, piping, safety, and quality."
    },
    duties: {
      zh: [
        "協助廠務系統維運與現場施工作業。",
        "配合安全管理制度與合規稽核改善。",
        "細節以 Facility 職涯領域與當期廠務助理職缺為準。"
      ],
      en: [
        "Assist facility-system sustainment and field construction tasks.",
        "Support safety management and compliance improvement actions.",
        "Details follow Facility career area and current facility associate postings."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "assoc-admin",
    code: "Associate Admin",
    track: { zh: "行政對應", en: "Admin parallel" },
    title: { zh: "副管理師", en: "Associate Admin" },
    summary: {
      zh: "與副工程師職級對應的管理／幕僚職；屬 Administration 等職涯領域。",
      en: "Admin/staff track parallel to associate-engineer grades; under Administration career areas."
    },
    duties: {
      zh: [
        "支援部門行政、資料／流程與跨單位協調等幕僚工作。",
        "實際職掌依單位而異，以台積電徵才「Administration」相關職缺說明為準。"
      ],
      en: [
        "Support departmental administration, process/data work, and cross-team coordination.",
        "Exact scope varies by org; follow current Administration postings on TSMC Careers."
      ]
    },
    sources: ["careersExplore"]
  }
];

const ABOUT_TECH_ROLES = [
  {
    id: "mfg-tech",
    code: "MFG Tech",
    track: { zh: "製造（最大宗）", en: "Manufacturing (largest)" },
    title: { zh: "製造部技術員（12 吋廠）", en: "Manufacturing Technician (12\")" },
    summary: {
      zh: "監控派工與產線指標，協調異常，執行晶圓盒／物料作業；四班二輪、日夜輪替。",
      en: "Monitor dispatch and line KPIs, coordinate abnormalities, handle FOUP/materials; compressed week with day/night rotation."
    },
    duties: {
      zh: [
        "透過全自動化電腦派工系統，監控生產線機台與生產相關指標。",
        "溝通協調相關單位，協助處理機台、派工等產品生產異常。",
        "無塵室拆／包裝晶圓盒、盤點原物料作業。",
        "採四班二輪（做二休二）；日夜班須輪替（班別區間常見 7:20–7:20）。"
      ],
      en: [
        "Monitor tools and production KPIs via fully automated dispatch systems.",
        "Coordinate with related units to handle tool/dispatch production abnormalities.",
        "FOUP packing/unpacking and materials inventory in the cleanroom.",
        "Compressed week (2 on / 2 off) with day/night rotation (often 7:20–7:20 windows)."
      ]
    },
    sources: ["mfgTech12"]
  },
  {
    id: "ap-tech",
    code: "AP Tech",
    track: { zh: "先進封裝製造", en: "Advanced packaging" },
    title: { zh: "先進封裝製造部技術員", en: "Advanced Packaging Manufacturing Technician" },
    summary: {
      zh: "在先進封裝黃光無塵室執行派工監控、異常協調與物料／化學品上下貨。",
      en: "In advanced-packaging lithography cleanrooms: monitor dispatch, coordinate abnormalities, and handle materials/chemicals."
    },
    duties: {
      zh: [
        "透過全自動化派工系統監控機台與生產指標。",
        "協調處理機台／派工等生產異常。",
        "拆包裝晶圓盒、盤點原物料，並操作機台面板與上下物料（含電子元件、膠管類化學品）。",
        "四班二輪、須輪班。"
      ],
      en: [
        "Monitor tools/KPIs via automated dispatch systems.",
        "Coordinate tool/dispatch production abnormalities.",
        "FOUP handling, materials inventory, panel ops, and loading materials (including electronic parts and tubing chemicals).",
        "Compressed week with required shift rotation."
      ]
    },
    sources: ["apTech"]
  },
  {
    id: "eng-tech",
    code: "Eng Tech",
    track: { zh: "工程支援", en: "Engineering support" },
    title: { zh: "工程部技術員", en: "Engineering Technician" },
    summary: {
      zh: "協助工程單位現場執行、量測與支援；職缺類型為 Technician。",
      en: "Assist engineering teams with field execution, metrology, and support; Technician job type on TSMC Careers."
    },
    duties: {
      zh: [
        "支援工程單位在廠內的執行與量測作業。",
        "依指派協助資料記錄、樣品／實驗準備與異常回報。",
        "細節以當期「工程部技術員」職缺為準。"
      ],
      en: [
        "Support engineering units with fab-floor execution and metrology tasks.",
        "Assist data logging, sample/experiment prep, and abnormality reporting as assigned.",
        "Exact scope follows current Engineering Technician postings."
      ]
    },
    sources: ["careersExplore", "mfgTech12"]
  },
  {
    id: "process-tech",
    code: "Process Tech",
    track: { zh: "製程模組技術員", en: "Process module" },
    title: { zh: "製程模組技術員（Process Technician）", en: "Process Technician" },
    summary: {
      zh: "掛靠特定模組（LIT／Etch／CVD／PVD／DIF／EPI／CMP／Metrology／Yield）的技術員。",
      en: "Technician assigned to a specific module (LIT/Etch/CVD/PVD/DIF/EPI/CMP/Metrology/Yield)."
    },
    duties: {
      zh: [
        "在指定製程模組執行操作、監控與基礎支援。",
        "配合 PE／EE／技術單位處理模組相關異常與例行任務。",
        "海外職缺較常見此命名；台灣職缺可能歸於製造／工程技術員。"
      ],
      en: [
        "Run operations, monitoring, and basic support in an assigned process module.",
        "Work with PE/EE/tech teams on module abnormalities and routine tasks.",
        "Naming is common in overseas postings; Taiwan postings may sit under manufacturing/engineering technician titles."
      ]
    },
    sources: ["careersExplore", "mfgTech12"]
  },
  {
    id: "logistics-tech",
    code: "Logistics",
    track: { zh: "物流運籌", en: "Logistics" },
    title: { zh: "物流運籌系統部技術員", en: "Logistics / AMHS Technician" },
    summary: {
      zh: "監控物料／AMHS 等物流系統，確保晶圓與物料搬運節奏。",
      en: "Monitor material/AMHS logistics systems to keep wafer and material flow on cadence."
    },
    duties: {
      zh: [
        "監控物流／AMHS 系統狀態與異常告警。",
        "協調物料流與相關單位排除搬運異常。",
        "細節以當期物流運籌相關技術員職缺為準。"
      ],
      en: [
        "Monitor logistics/AMHS system status and alarms.",
        "Coordinate material flow and resolve transport abnormalities with related teams.",
        "Exact scope follows current logistics technician postings."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "qr-tech",
    code: "Q&R Tech",
    track: { zh: "品質可靠度", en: "Q&R" },
    title: { zh: "可靠度測試／量測／SPC／Q&R Lab 技術員", en: "Reliability / Metrology / SPC / Lab Tech" },
    summary: {
      zh: "支援測試、量測、SPC 與實驗室作業，隸屬品質與可靠性相關單位。",
      en: "Support test, metrology, SPC, and lab work under Quality & Reliability-related organizations."
    },
    duties: {
      zh: [
        "執行可靠度測試、量測或實驗室例行作業。",
        "協助 SPC 資料收集與異常回報。",
        "與 QR 工程師協作，細節以當期 Q&R／測試相關技術員職缺為準。"
      ],
      en: [
        "Perform reliability test, metrology, or lab routine work.",
        "Assist SPC data collection and abnormality reporting.",
        "Partner with QR engineers; follow current Q&R/test technician postings."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "data-tech",
    code: "Data / ADC",
    track: { zh: "數據／系統", en: "Data / Systems" },
    title: { zh: "AI／大數據分析、系統技術員", en: "AI / Big Data / System Technician" },
    summary: {
      zh: "支援系統與資料相關技術作業（如 ADC 等）；屬製造／IT 支援型技術員。",
      en: "Support systems and data-related technician work (e.g., ADC); manufacturing/IT support technician track."
    },
    duties: {
      zh: [
        "協助產線／系統數據監控、彙整或基礎分析支援。",
        "配合 IT／智慧製造相關系統操作與異常回報。",
        "細節以當期系統／數據技術員職缺為準。"
      ],
      en: [
        "Assist line/system data monitoring, collection, or basic analysis support.",
        "Support IT/smart-manufacturing system operations and abnormality reporting.",
        "Exact scope follows current system/data technician postings."
      ]
    },
    sources: ["careersExplore"]
  },
  {
    id: "fac-tech",
    code: "Facility Tech",
    track: { zh: "廠務相關", en: "Facility" },
    title: { zh: "廠務技術員", en: "Facility Technician" },
    summary: {
      zh: "協助廠務系統操作與維護；公開招募較少，名稱可能因廠區而異。",
      en: "Assist facility-system operation and maintenance; fewer public postings; title may vary by fab."
    },
    duties: {
      zh: [
        "協助廠務設備／系統日常操作與維護支援。",
        "配合廠務工程與工安規範執行現場任務。",
        "細節以 Facility 領域當期技術員職缺為準。"
      ],
      en: [
        "Support day-to-day facility equipment/system operations and maintenance.",
        "Follow facility engineering and EHS rules on field tasks.",
        "Exact scope follows current Facility technician postings."
      ]
    },
    sources: ["careersExplore"]
  }
];
