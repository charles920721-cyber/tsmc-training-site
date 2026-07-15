/** Workplace glossary with cited reliable sources (TSMC / equipment vendors / industry standards). */
const ABOUT_GLOSSARY_SOURCES = {
  tsmcCareers: {
    zh: "台積電徵才系統／職涯說明",
    en: "TSMC Careers",
    url: "https://www.tsmc.com/english/careers/index.htm"
  },
  tsmcCowos: {
    zh: "台積電技術頁｜CoWoS®",
    en: "TSMC Technology | CoWoS®",
    url: "https://www.tsmc.com/english/dedicatedFoundry/technology/cowos"
  },
  tsmc3DFabric: {
    zh: "台積電｜3DFabric®",
    en: "TSMC | 3DFabric®",
    url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm"
  },
  tsmcSoic: {
    zh: "台積電｜TSMC-SoIC®",
    en: "TSMC | TSMC-SoIC®",
    url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/SoIC.htm"
  },
  tsmcVocab: {
    zh: "台積電英文詞彙手冊（官網 PDF）",
    en: "TSMC English Vocabulary booklet (official PDF)",
    url: "https://www.tsmc.com/sites/dcom/2023-11/tsmc_vocabulary.pdf"
  },
  amatGlossary: {
    zh: "Applied Materials Technical Glossary",
    en: "Applied Materials Technical Glossary",
    url: "https://www.appliedmaterials.com/us/en/glossary.html"
  },
  hitachiGlossary: {
    zh: "Hitachi High-Tech Semiconductor Glossary",
    en: "Hitachi High-Tech Semiconductor Glossary",
    url: "https://www.hitachi-hightech.com/global/en/knowledge/semiconductor/room/words.html"
  },
  smtaAcronyms: {
    zh: "SMTA Electronics Manufacturing Acronyms",
    en: "SMTA Electronics Manufacturing Acronyms",
    url: "https://cdn.ymaws.com/smta.org/resource/resmgr/files/Electronics_Industry_Acronym.pdf"
  },
  peCampus: {
    zh: "台積電徵才｜Process Engineer",
    en: "TSMC Careers | Process Engineer",
    url: "https://careers.tsmc.com/en_US/careers/JobDetail?jobId=19038"
  },
  eeJob: {
    zh: "台積電徵才｜Equipment Engineer",
    en: "TSMC Careers | Equipment Engineer",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail/Equipment-Engineer-EQ/5438"
  },
  mfgTech: {
    zh: "台積電徵才｜製造部技術員",
    en: "TSMC Careers | Manufacturing Technician",
    url: "https://careers.tsmc.com/zh_TW/careers/JobDetail?jobId=445"
  }
};

const ABOUT_GLOSSARY_GROUPS = [
  {
    id: "company",
    title: { zh: "公司／商業與市場", en: "Company / Business & Markets" },
    terms: [
      {
        abbr: "TSMC",
        en: "Taiwan Semiconductor Manufacturing Company",
        zh: "台灣積體電路製造股份有限公司／台積電",
        note: { zh: "專業積體電路製造服務（晶圓代工）公司。", en: "Dedicated IC foundry (pure-play foundry)." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "Foundry",
        en: "Dedicated / Pure-play Foundry",
        zh: "專業晶圓代工",
        note: { zh: "只幫客戶製造晶片，不設計／銷售自有品牌產品。", en: "Manufactures customer chips; does not design or sell own-brand ICs." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "Fabless",
        en: "Fabless (no fab)",
        zh: "無晶圓廠（IC 設計公司）",
        note: { zh: "自行設計、委外代工製造的商業模式客戶類型。", en: "Design companies without fabs that outsource manufacturing." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "HPC",
        en: "High Performance Computing",
        zh: "高效能運算",
        note: { zh: "終端市場之一，含 AI、伺服器、GPU 等應用。", en: "End market including AI, servers, GPUs, etc." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "IoT",
        en: "Internet of Things",
        zh: "物聯網",
        note: { zh: "台積電列為主要終端應用市場之一。", en: "Listed by TSMC among major end markets." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "ICIC",
        en: "Integrity, Commitment, Innovation, Customer Trust",
        zh: "誠信正直、承諾、創新、客戶信任",
        note: { zh: "台積電四大核心價值縮寫。", en: "TSMC’s four core values." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "GIGAFAB®",
        en: "GIGAFAB® Facilities",
        zh: "十二吋超大晶圓廠",
        note: { zh: "台積電對大型 12 吋晶圓廠的註冊名稱。", en: "TSMC’s branded large 12-inch fab facilities." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "OIP",
        en: "Open Innovation Platform®",
        zh: "開放創新平台",
        note: { zh: "串接 EDA／IP／封測等夥伴的設計生態系。", en: "Design ecosystem linking EDA, IP, OSAT partners." },
        sources: ["tsmcCareers"]
      }
    ]
  },
  {
    id: "roles",
    title: { zh: "職類代號（廠內常見）", en: "Common Job Codes" },
    terms: [
      {
        abbr: "PE",
        en: "Process Engineer",
        zh: "製程工程師",
        note: { zh: "降低製程變異／異常，拉高良率；處理交貨與製程改善。", en: "Minimize process variation; maximize yield; sustain delivery and improve process." },
        sources: ["tsmcCareers", "peCampus"]
      },
      {
        abbr: "EE / EQ",
        en: "Equipment Engineer",
        zh: "設備工程師",
        note: { zh: "機台維護、暖機、故障排除與稼動率改善。", en: "Tool maintenance, warm-up, troubleshooting, and efficiency improvement." },
        sources: ["tsmcCareers", "eeJob"]
      },
      {
        abbr: "PIE",
        en: "Process Integration Engineer",
        zh: "製程整合工程師",
        note: { zh: "整合協調者：對接客戶需求並與廠內各工程單位協作提升良率。", en: "Integration coordinator linking customer needs and fab engineering for yield." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "YE / YEE",
        en: "Yield Enhancement / Yield Excellence Engineer",
        zh: "良率精進／良率提升工程師",
        note: { zh: "缺陷檢測與良率改善，常與整合／製程單位協作。", en: "Defect monitoring and yield improvement with integration/process teams." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "MFG",
        en: "Intelligent Manufacturing Engineer",
        zh: "智慧製造工程師",
        note: { zh: "帶領技術員執行生產並監督日常產線運作。", en: "Leads technicians and supervises daily production-line operations." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "QR",
        en: "Quality & Reliability Engineer",
        zh: "品質與可靠性工程師",
        note: { zh: "品質聲譽守門，涵蓋設計到封測的品質方案。", en: "Quality guardian across design through packaging/test." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "FME / FAC",
        en: "Facility Engineer",
        zh: "廠務工程師",
        note: { zh: "機械、儀電、水、氣／化學等廠務系統與安全管理。", en: "Facility systems (mechanical, I&E, water, gas/chemical) and safety management." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "IT",
        en: "Information Technology Engineer",
        zh: "資訊技術工程師",
        note: { zh: "建置可擴充 IT 系統，支援生產力、創新與決策。", en: "Build scalable IT systems for productivity, innovation, and decisions." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "MAE",
        en: "Module Associate Engineer",
        zh: "模組副工程師",
        note: { zh: "無塵室模組設備裝機、保養、故障排除與稼動率提升。", en: "Cleanroom module tools: install, PM, troubleshooting, uptime." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "RD",
        en: "Research & Development Engineer",
        zh: "研究與發展工程師",
        note: { zh: "先進 CMOS／材料／設備／整合等探索與開發。", en: "Exploratory R&D on advanced CMOS, materials, tools, integration." },
        sources: ["tsmcCareers"]
      }
    ]
  },
  {
    id: "modules",
    title: { zh: "製程模組（Module）", en: "Process Modules" },
    terms: [
      {
        abbr: "LIT / Photo",
        en: "Lithography (Photolithography)",
        zh: "黃光／微影",
        note: { zh: "用曝光把圖形轉移到晶圓；PE／EE 職缺常見模組之一。", en: "Pattern transfer by exposure; a common PE/EE module." },
        sources: ["peCampus", "eeJob"]
      },
      {
        abbr: "Etch",
        en: "Etch (Dry / Wet)",
        zh: "蝕刻（乾蝕／溼蝕）",
        note: { zh: "移除薄膜／材料以形成線路結構。", en: "Remove film/material to form circuit structures." },
        sources: ["peCampus", "eeJob", "amatGlossary"]
      },
      {
        abbr: "CVD",
        en: "Chemical Vapor Deposition",
        zh: "化學氣相沉積",
        note: { zh: "以氣相反應在晶圓表面沉積薄膜。", en: "Deposit films via gas-phase reactions on the wafer." },
        sources: ["amatGlossary", "peCampus"]
      },
      {
        abbr: "PVD",
        en: "Physical Vapor Deposition",
        zh: "物理氣相沉積",
        note: { zh: "以物理方式（如濺鍍）沉積薄膜。", en: "Deposit films by physical means such as sputtering." },
        sources: ["amatGlossary", "peCampus"]
      },
      {
        abbr: "ALD",
        en: "Atomic Layer Deposition",
        zh: "原子層沉積",
        note: { zh: "以原子層等級精準沉積超薄膜。", en: "Ultra-thin film deposition with atomic-level control." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "PECVD",
        en: "Plasma Enhanced CVD",
        zh: "電漿增強化學氣相沉積",
        note: { zh: "以電漿輔助的 CVD 常見變體。", en: "Common plasma-assisted CVD variant." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "CMP",
        en: "Chemical Mechanical Planarization / Polishing",
        zh: "化學機械平坦化／研磨",
        note: { zh: "用化學＋機械方式把晶圓表面磨平。", en: "Chemically and mechanically planarize the wafer surface." },
        sources: ["amatGlossary", "peCampus"]
      },
      {
        abbr: "DIF / DIFF",
        en: "Diffusion / Thermal Process",
        zh: "擴散／熱製程",
        note: { zh: "高溫處理與摻雜相關製程；PE 說明常見模組之一。", en: "Thermal processing and doping-related steps; common PE module." },
        sources: ["peCampus", "eeJob"]
      },
      {
        abbr: "IMP / II",
        en: "Ion Implant",
        zh: "離子佈植／離子摻雜",
        note: { zh: "以離子束把雜質打入半導體；常與熱製程並提。", en: "Introduce dopants with an ion beam; often paired with thermal process." },
        sources: ["peCampus", "amatGlossary"]
      },
      {
        abbr: "Metrology",
        en: "Metrology",
        zh: "量測",
        note: { zh: "量測膜厚、關鍵尺寸等；設備職缺常見量測機台。", en: "Measure film thickness, CD, etc.; common metrology tools." },
        sources: ["eeJob", "amatGlossary"]
      },
      {
        abbr: "EPI",
        en: "Epitaxy",
        zh: "磊晶",
        note: { zh: "在晶圓上成長單晶薄層的製程模組。", en: "Grow a single-crystal layer on the wafer." },
        sources: ["peCampus"]
      }
    ]
  },
  {
    id: "tech",
    title: { zh: "微影／元件／前後段", en: "Lithography / Device / FEOL–BEOL" },
    terms: [
      {
        abbr: "EUV / EUVL",
        en: "Extreme Ultraviolet Lithography",
        zh: "極紫外光微影",
        note: { zh: "使用約 13.5nm 波長的先進曝光技術。", en: "Advanced lithography using ~13.5 nm wavelength light." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "DUV",
        en: "Deep Ultraviolet",
        zh: "深紫外光",
        note: { zh: "相對 EUV 的前代／並行微影光源波段。", en: "Prior/parallel lithography wavelength band relative to EUV." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "CD",
        en: "Critical Dimension",
        zh: "關鍵尺寸",
        note: { zh: "圖形／結構的關鍵最小特徵尺寸。", en: "Key minimum feature size of a pattern/structure." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "FEOL",
        en: "Front-End of Line",
        zh: "前段製程",
        note: { zh: "電晶體等主動元件製作階段。", en: "Transistor/active-device fabrication stage." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "BEOL",
        en: "Back-End of Line",
        zh: "後段製程（晶圓連線段）",
        note: { zh: "電晶體完成後的金屬連線等製程（晶圓廠內）。", en: "Interconnect steps after transistor fabrication (in-fab)." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "CMOS",
        en: "Complementary Metal-Oxide-Semiconductor",
        zh: "互補式金氧半導體",
        note: { zh: "主流邏輯製程架構。", en: "Mainstream logic process architecture." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "FinFET",
        en: "Fin Field-Effect Transistor",
        zh: "鰭式場效電晶體",
        note: { zh: "台積電先進／特殊製程常提及的電晶體結構。", en: "Transistor architecture widely cited in TSMC process offerings." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "GAA",
        en: "Gate-All-Around",
        zh: "環繞式閘極",
        note: { zh: "比 FinFET 更先進的電晶體結構方向。", en: "Next-generation transistor architecture beyond FinFET." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "SEM",
        en: "Scanning Electron Microscope",
        zh: "掃描式電子顯微鏡",
        note: { zh: "缺陷檢視／量測常用。", en: "Common for defect review and metrology." },
        sources: ["amatGlossary", "smtaAcronyms"]
      },
      {
        abbr: "Defect",
        en: "Defect",
        zh: "缺陷",
        note: { zh: "微粒或圖案異常等，會影響良率。", en: "Particles or pattern anomalies that can hurt yield." },
        sources: ["amatGlossary"]
      }
    ]
  },
  {
    id: "fabops",
    title: { zh: "產線／物流／無塵室", en: "Fab Ops / Logistics / Cleanroom" },
    terms: [
      {
        abbr: "FOUP",
        en: "Front Opening Unified Pod",
        zh: "前開式晶圓傳送盒",
        note: { zh: "300mm 晶圓密閉承載容器，符合 SEMI 相關標準；隔離外界微粒。", en: "Sealed 300mm wafer carrier (SEMI-related); isolates wafers from fab ambient." },
        sources: ["hitachiGlossary", "amatGlossary", "mfgTech"]
      },
      {
        abbr: "AMHS",
        en: "Automated Material Handling System",
        zh: "自動化物料搬運系統",
        note: { zh: "自動搬運 cassette／pod／FOUP 的系統。", en: "Automated transfer of cassettes/pods/FOUPs." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "OHT",
        en: "Overhead Hoist Transport",
        zh: "高架吊運搬送",
        note: { zh: "AMHS 常見子系統，在天花板軌道吊運 FOUP。", en: "Common AMHS subsystem moving FOUPs on overhead tracks." },
        sources: ["amatGlossary"]
      },
      {
        abbr: "Stocker",
        en: "Stocker",
        zh: "儲存櫃／暫存庫",
        note: { zh: "暫存 FOUP／載具的自動化倉儲設備（台積詞彙手冊亦列 stocker）。", en: "Automated storage for FOUPs/carriers (also listed in TSMC vocabulary booklet)." },
        sources: ["tsmcVocab", "amatGlossary"]
      },
      {
        abbr: "Cleanroom",
        en: "Cleanroom",
        zh: "無塵室",
        note: { zh: "控制微粒的製造環境；技術員職缺常要求穿無塵服作業。", en: "Particle-controlled environment; technician roles often require cleanroom garments." },
        sources: ["mfgTech", "hitachiGlossary"]
      },
      {
        abbr: "Dispatch",
        en: "Dispatch system",
        zh: "派工系統",
        note: { zh: "電腦派工／監控生產指標；製造部技術員核心工作。", en: "Computerized lot dispatch and KPI monitoring; core MFG technician work." },
        sources: ["mfgTech"]
      },
      {
        abbr: "Tool / Equipment",
        en: "Tool / Equipment",
        zh: "機台／設備",
        note: { zh: "廠內對製程設備的常用說法。", en: "Common fab term for process equipment." },
        sources: ["eeJob", "tsmcCareers"]
      },
      {
        abbr: "PM",
        en: "Preventive Maintenance",
        zh: "預防保養",
        note: { zh: "依計畫保養機台；設備／MAE 日常核心任務。", en: "Scheduled tool maintenance; core EE/MAE work." },
        sources: ["eeJob", "amatGlossary"]
      },
      {
        abbr: "Uptime / Availability",
        en: "Tool uptime / availability",
        zh: "機台稼動率／可用率",
        note: { zh: "設備可運轉時間比例；EE／MAE 績效常見指標。", en: "Share of time a tool is available; common EE/MAE metric." },
        sources: ["eeJob"]
      },
      {
        abbr: "Yield",
        en: "Yield",
        zh: "良率",
        note: { zh: "符合規格的產品比例；PE／YE／PIE 核心目標。", en: "Fraction of product meeting spec; core PE/YE/PIE objective." },
        sources: ["tsmcCareers", "peCampus"]
      }
    ]
  },
  {
    id: "quality",
    title: { zh: "品質與工程方法", en: "Quality & Engineering Methods" },
    terms: [
      {
        abbr: "SPC",
        en: "Statistical Process Control",
        zh: "統計製程管制",
        note: { zh: "用統計方法監控製程穩定度；PE／PIE 職缺常要求。", en: "Statistical monitoring of process stability; often required for PE/PIE." },
        sources: ["amatGlossary", "smtaAcronyms", "peCampus"]
      },
      {
        abbr: "DOE",
        en: "Design of Experiments",
        zh: "實驗設計",
        note: { zh: "系統化設計實驗以優化製程參數；PE／PIE 職缺常要求。", en: "Systematic experiments to optimize process inputs; often required for PE/PIE." },
        sources: ["smtaAcronyms", "peCampus"]
      },
      {
        abbr: "Excursion",
        en: "Excursion",
        zh: "製程偏移／異常事件",
        note: { zh: "偏離正常基線的製程異常；PE 要最小化。", en: "Process deviation from baseline; PE aims to minimize." },
        sources: ["tsmcCareers"]
      },
      {
        abbr: "Baseline",
        en: "Baseline",
        zh: "基線",
        note: { zh: "製程穩定的參考基準狀態。", en: "Reference stable state of a process." },
        sources: ["peCampus"]
      },
      {
        abbr: "SOP",
        en: "Standard Operating Procedure",
        zh: "標準作業程序",
        note: { zh: "標準化作業步驟文件。", en: "Documented standard work steps." },
        sources: ["smtaAcronyms"]
      },
      {
        abbr: "OOC / OOS",
        en: "Out of Control / Out of Spec",
        zh: "失控／超出規格",
        note: { zh: "SPC 與規格管制常用狀態描述（產業通用）。", en: "Common SPC/spec status terms across the industry." },
        sources: ["amatGlossary", "smtaAcronyms"]
      },
      {
        abbr: "Root Cause",
        en: "Root Cause Analysis",
        zh: "根因分析",
        note: { zh: "找出異常真正原因並改善。", en: "Find and fix the true cause of an abnormality." },
        sources: ["tsmcCareers"]
      }
    ]
  },
  {
    id: "packaging",
    title: { zh: "先進封裝（3DFabric®）", en: "Advanced Packaging (3DFabric®)" },
    terms: [
      {
        abbr: "3DFabric®",
        en: "TSMC 3DFabric®",
        zh: "台積電立體矽堆疊與先進封裝技術家族",
        note: { zh: "涵蓋 SoIC、CoWoS、InFO 等，支援異質／同質整合。", en: "Family covering SoIC, CoWoS, InFO for hetero/homogeneous integration." },
        sources: ["tsmc3DFabric"]
      },
      {
        abbr: "CoWoS®",
        en: "Chip on Wafer on Substrate",
        zh: "晶片－晶圓－基板",
        note: { zh: "高效能運算導向的晶圓級系統整合平台，可整合 SoC 與多顆 HBM。", en: "Wafer-level system integration for HPC; can integrate SoCs with multiple HBM cubes." },
        sources: ["tsmcCowos", "tsmc3DFabric"]
      },
      {
        abbr: "InFO",
        en: "Integrated Fan-Out",
        zh: "整合型扇出封裝",
        note: { zh: "3DFabric 先進封裝技術支柱之一，常見於行動／網路等應用。", en: "A 3DFabric packaging pillar often used for mobile/network applications." },
        sources: ["tsmc3DFabric"]
      },
      {
        abbr: "SoIC®",
        en: "System on Integrated Chips",
        zh: "系統整合晶片（立體堆疊）",
        note: { zh: "高密度垂直堆疊 chiplet，追求高效能、低功耗與小尺寸。", en: "Ultra-high-density vertical chiplet stacking for performance, power, and form factor." },
        sources: ["tsmcSoic", "tsmc3DFabric"]
      },
      {
        abbr: "HBM",
        en: "High Bandwidth Memory",
        zh: "高頻寬記憶體",
        note: { zh: "常與 CoWoS 平台一起提及的記憶體立方。", en: "Memory cubes frequently integrated via CoWoS platforms." },
        sources: ["tsmcCowos"]
      },
      {
        abbr: "TSV",
        en: "Through-Silicon Via",
        zh: "矽穿孔",
        note: { zh: "貫穿矽晶圓的垂直接點；SoIC 等立體整合常用。", en: "Vertical vias through silicon; used in SoIC-style 3D integration." },
        sources: ["tsmcSoic"]
      },
      {
        abbr: "Interposer",
        en: "Interposer",
        zh: "中介層",
        note: { zh: "CoWoS 等用於連結多顆晶片的中介基板。", en: "Intermediate substrate connecting multiple dies in CoWoS-class integration." },
        sources: ["tsmcCowos"]
      },
      {
        abbr: "SoC",
        en: "System on Chip",
        zh: "系統單晶片",
        note: { zh: "整合多功能於單一晶片；CoWoS 說明常見對象。", en: "Multiple functions on one chip; common CoWoS integration target." },
        sources: ["tsmcCowos"]
      }
    ]
  }
];
