const QUIZ_BANK = {
  mc: [
    {
      q: { zh: "台積電在哪一年首創專業晶圓代工模式？", en: "In which year did TSMC pioneer the pure-play foundry model?" },
      choices: {
        zh: ["1970 年", "1980 年", "1987 年", "1997 年"],
        en: ["1970", "1980", "1987", "1997"]
      },
      answer: 2,
      explain: { zh: "1987 年台積電首創專業晶圓代工模式，將設計與製造拆開。", en: "In 1987 TSMC pioneered pure-play wafer foundry services, separating design from manufacturing." }
    },
    {
      q: { zh: "台灣半導體垂直分工中，負責「畫出晶片電路圖」的是哪一環？", en: "In Taiwan’s vertical chain, who draws the chip circuit diagram?" },
      choices: {
        zh: ["IC 封測", "IC 設計", "晶圓代工", "光罩清洗"],
        en: ["OSAT", "IC design", "Foundry", "Mask cleaning"]
      },
      answer: 1,
      explain: { zh: "上游 IC 設計負責畫出電路圖並提供光罩圖案。", en: "Upstream IC design creates the circuit and mask patterns." }
    },
    {
      q: { zh: "下列何者屬於台灣中游晶圓代工大廠？", en: "Which is a Taiwan midstream foundry?" },
      choices: {
        zh: ["聯發科", "日月光", "台積電", "瑞昱"],
        en: ["MediaTek", "ASE", "TSMC", "Realtek"]
      },
      answer: 2,
      explain: { zh: "台積電、聯電、力積電屬中游晶圓代工。", en: "TSMC, UMC, and PSMC are midstream foundries." }
    },
    {
      q: { zh: "Digital IC 設計主要依賴什麼工具？", en: "What tools does Digital IC design mainly rely on?" },
      choices: {
        zh: ["手工焊接", "EDA 工具", "示波器", "真空幫浦"],
        en: ["Hand soldering", "EDA tools", "Oscilloscope", "Vacuum pump"]
      },
      answer: 1,
      explain: { zh: "Digital IC 高度依賴 EDA 做邏輯合成與自動佈局繞線。", en: "Digital design heavily uses EDA for synthesis and P&R." }
    },
    {
      q: { zh: "Analog IC 通常較適合哪類製程？", en: "Which processes suit Analog IC better?" },
      choices: {
        zh: ["最先進的 3nm", "成熟製程如 28nm / 90nm", "只做封裝不需製程", "只用光學微影不做摻雜"],
        en: ["Cutting-edge 3nm", "Mature nodes like 28nm/90nm", "Packaging only", "Lithography without doping"]
      },
      answer: 1,
      explain: { zh: "類比對雜訊敏感，多採成熟製程並需要特殊元件支援。", en: "Analog prefers mature nodes and special devices due to noise/leakage." }
    },
    {
      q: { zh: "Full Custom 設計主要著重哪個層級？", en: "What level does Full Custom focus on?" },
      choices: {
        zh: ["系統行銷層級", "電晶體級", "物流倉儲層級", "包裝印刷層級"],
        en: ["Marketing", "Transistor level", "Warehouse logistics", "Print packaging"]
      },
      answer: 1,
      explain: { zh: "Full Custom 深入處理每個電晶體的長寬與物理特性。", en: "Full Custom works at transistor-level sizing and physics." }
    },
    {
      q: { zh: "Cell-based 設計的基本構成單元是什麼？", en: "Basic building blocks of Cell-based design are?" },
      choices: {
        zh: ["標準單元庫", "任意手繪多邊形", "包裝紙箱", "測試機台"],
        en: ["Standard-cell library", "Arbitrary hand polygons", "Cartons", "Testers"]
      },
      answer: 0,
      explain: { zh: "Cell-based 使用標準單元庫中的固定邏輯元件。", en: "Cell-based design uses standard-cell libraries." }
    },
    {
      q: { zh: "PDK 的全名是？", en: "PDK stands for?" },
      choices: {
        zh: ["Product Data Key", "Process Design Kit", "Power Drive Kernel", "Package Delivery Kit"],
        en: ["Product Data Key", "Process Design Kit", "Power Drive Kernel", "Package Delivery Kit"]
      },
      answer: 1,
      explain: { zh: "PDK 是 Process Design Kit（製程設計套件）。", en: "PDK means Process Design Kit." }
    },
    {
      q: { zh: "PDK 在設計流程中最像什麼角色？", en: "In the design flow, a PDK is most like?" },
      choices: {
        zh: ["行銷簡報", "設計端與製造端的橋樑", "物流單據", "員工考勤表"],
        en: ["A pitch deck", "A bridge between design and manufacturing", "A shipping note", "An attendance sheet"]
      },
      answer: 1,
      explain: { zh: "PDK 讓 EDA 工具知道特定製程的真實物理與電氣限制。", en: "PDK tells EDA the real process limits." }
    },
    {
      q: { zh: "Full Custom 到 tapeout 的第一步常做什麼？", en: "First step toward Full Custom tapeout is often?" },
      choices: {
        zh: ["直接切割晶圓", "用 HSPICE 或 Spectre 前模擬", "先封裝再設計", "先做銷售預測"],
        en: ["Dice the wafer", "Pre-sim with HSPICE/Spectre", "Package then design", "Sales forecast"]
      },
      answer: 1,
      explain: { zh: "先以前模擬確認電路行為，再進入 layout。", en: "Pre-simulation comes before layout." }
    },
    {
      q: { zh: "Tapeout 前常見需通過的規則檢查包含？", en: "Common rule checks before tapeout include?" },
      choices: {
        zh: ["DRC / LVS / ANTENNA", "僅 HR 考核", "僅財務報表", "僅物流追蹤"],
        en: ["DRC / LVS / ANTENNA", "HR only", "Finance only", "Logistics only"]
      },
      answer: 0,
      explain: { zh: "需完成 DRC、LVS、ANTENNA 等驗證並上傳 GDS。", en: "DRC, LVS, ANTENNA etc. then GDS upload." }
    },
    {
      q: { zh: "以 180nm 反相器為例，輸入常透過什麼連到 PMOS 與 NMOS？", en: "In a 180nm inverter, input commonly connects via?" },
      choices: {
        zh: ["共用 Poly", "玻璃蓋板", "塑膠外殼", "錫膏印刷"],
        en: ["Shared poly", "Glass cover", "Plastic case", "Solder paste"]
      },
      answer: 0,
      explain: { zh: "一根 Poly 貫穿 PMOS 與 NMOS 主動區作為輸入。", en: "A shared poly runs through PMOS/NMOS active regions." }
    },
    {
      q: { zh: "MOSFET 的全名概念中，「場效」指的是？", en: "In MOSFET, “field effect” means?" },
      choices: {
        zh: ["用磁場產生電力", "用閘極電壓控制通道電流", "只用電阻發熱", "用風扇散熱"],
        en: ["Magnetic power generation", "Gate voltage controls channel current", "Resistor heating only", "Fan cooling"]
      },
      answer: 1,
      explain: { zh: "透過閘極電壓形成電場，控制源極與汲極間電流。", en: "Gate voltage forms a field that controls S–D current." }
    },
    {
      q: { zh: "NMOS 的主要導電載子是？", en: "Primary carriers in NMOS are?" },
      choices: {
        zh: ["電洞", "電子", "中子", "光子"],
        en: ["Holes", "Electrons", "Neutrons", "Photons"]
      },
      answer: 1,
      explain: { zh: "NMOS 以電子作為主要導電載子。", en: "NMOS uses electrons as majority carriers." }
    },
    {
      q: { zh: "PMOS 何時較容易導通？", en: "When does PMOS turn on more easily?" },
      choices: {
        zh: ["閘極輸入高電壓", "閘極輸入低電壓", "完全不加任何電壓永遠導通", "只在封裝後才導通"],
        en: ["High gate voltage", "Low gate voltage", "Always on with no bias", "Only after packaging"]
      },
      answer: 1,
      explain: { zh: "PMOS 在閘極為 Logic 0（低電壓）時導通。", en: "PMOS turns on with Logic 0 (low gate)." }
    },
    {
      q: { zh: "CMOS 反相器的典型接法是？", en: "Typical CMOS inverter hookup?" },
      choices: {
        zh: ["上方 PMOS 接 VDD、下方 NMOS 接 GND", "兩個 NMOS 串接電源", "只有一個電容", "只用電感振盪"],
        en: ["PMOS to VDD on top, NMOS to GND below", "Two NMOS on the supply", "Only a capacitor", "Only an inductor"]
      },
      answer: 0,
      explain: { zh: "CMOS 反相器以 PMOS/NMOS 互補搭配。", en: "CMOS inverter uses complementary PMOS/NMOS." }
    },
    {
      q: { zh: "CMOS 最大優勢之一是？", en: "A major CMOS advantage is?" },
      choices: {
        zh: ["極高靜態功耗", "極低靜態功耗", "完全無法微縮", "無法做數位邏輯"],
        en: ["Very high static power", "Very low static power", "Cannot scale", "Cannot do digital logic"]
      },
      answer: 1,
      explain: { zh: "互補開啟使靜態時幾乎無 VDD 到 GND 直通電流。", en: "Complementary switching yields near-zero static path." }
    },
    {
      q: { zh: "IC 截面中，做出電晶體的主要區段是？", en: "In an IC stack, transistors are mainly made in?" },
      choices: {
        zh: ["FEOL", "只做最頂層印刷", "僅外包裝紙", "物流標籤層"],
        en: ["FEOL", "Top print only", "Outer box only", "Label layer"]
      },
      answer: 0,
      explain: { zh: "前段製程 FEOL 在矽表面打造電晶體。", en: "FEOL builds transistors on silicon." }
    },
    {
      q: { zh: "BEOL 主要負責什麼？", en: "BEOL mainly provides?" },
      choices: {
        zh: ["金屬互連與佈線", "切割火腿", "員工訓練", "倉庫理貨"],
        en: ["Metal interconnects", "Ham slicing", "Training", "Warehousing"]
      },
      answer: 0,
      explain: { zh: "後段製程建立多層金屬網路傳遞訊號與電源。", en: "BEOL builds multilayer wiring for signal/power." }
    },
    {
      q: { zh: "NMOS 中 Source/Drain 的 n+ 代表？", en: "n+ at NMOS S/D means?" },
      choices: {
        zh: ["低濃度 P 型", "高濃度 N 型摻雜", "絕緣體", "純金屬塊"],
        en: ["Lightly doped P-type", "Heavily doped N-type", "Insulator", "Solid metal"]
      },
      answer: 1,
      explain: { zh: "n 代表 N 型，+ 代表高濃度摻雜。", en: "n = N-type, + = heavy doping." }
    },
    {
      q: { zh: "傳統長時間使用 Poly 當閘極的重要原因是？", en: "A key historical reason for poly gates?" },
      choices: {
        zh: ["顏色好看", "可承受高溫退火，利於自我對準製程", "比較便宜所以永遠最好", "完全不會電阻"],
        en: ["Looks nice", "Survives high-temp anneal for self-aligned process", "Always lowest resistance", "Cheap so forever best"]
      },
      answer: 1,
      explain: { zh: "多晶矽耐高溫，利於自我對準閘極製程。", en: "Poly tolerates high-temperature annealing." }
    },
    {
      q: { zh: "閘極氧化層 SiO2 為什麼需要很薄？", en: "Why must gate SiO2 be thin?" },
      choices: {
        zh: ["為了好看", "增強閘極對通道的電容耦合，可用更低電壓控制", "讓電流直接短路", "防止任何電場產生"],
        en: ["Looks better", "Stronger capacitive coupling for lower-voltage control", "To short intentionally", "To block all fields"]
      },
      answer: 1,
      explain: { zh: "越薄控制越強，有助效能與低功耗。", en: "Thinner oxide strengthens gate control." }
    },
    {
      q: { zh: "製程微縮早期常對應哪個幾何參數？", en: "Early process scaling mapped mainly to which geometry?" },
      choices: {
        zh: ["通道長度 L", "包裝盒長度", "廠房樓層高", "運費單號"],
        en: ["Channel length L", "Box length", "Building height", "Tracking number"]
      },
      answer: 0,
      explain: { zh: "L 越短速度越快、密度越高，與製程節點高度相關。", en: "Shorter L means speed/density—and historically the node name." }
    },
    {
      q: { zh: "為什麼需要 N-well？", en: "Why is an N-well needed?" },
      choices: {
        zh: ["為了在同一晶圓上製作 PMOS 以實現 CMOS", "只為了裝飾", "取代所有金屬層", "取消光刻步驟"],
        en: ["To build PMOS and enable CMOS on one wafer", "Decoration only", "Replace all metals", "Skip lithography"]
      },
      answer: 0,
      explain: { zh: "在 P 型基板上形成 N-well，才能整合 PMOS。", en: "N-well provides the environment for PMOS." }
    },
    {
      q: { zh: "先進製程改用金屬閘極（HKMG）的主因包含？", en: "Why advanced nodes switched to metal gates (HKMG)?" },
      choices: {
        zh: ["Poly 空乏效應導致效能下降", "金屬比較好看", "法規禁止使用矽", "不需要絕緣層"],
        en: ["Poly depletion degraded performance", "Metal looks nicer", "Law bans silicon", "No insulator needed"]
      },
      answer: 0,
      explain: { zh: "約 28nm 以下 Poly 空乏效應明顯，改用 HKMG。", en: "Below ~28nm, poly depletion hurts; HKMG helps." }
    },
    {
      q: { zh: "摻入磷或砷到矽中，通常形成？", en: "Doping silicon with P or As typically forms?" },
      choices: {
        zh: ["P 型半導體", "N 型半導體", "超導體", "絕緣陶瓷"],
        en: ["P-type", "N-type", "Superconductor", "Ceramic insulator"]
      },
      answer: 1,
      explain: { zh: "V 族元素提供多餘電子，形成 N 型。", en: "Group-V dopants donate electrons → N-type." }
    },
    {
      q: { zh: "摻入硼到矽中，通常形成？", en: "Doping silicon with boron typically forms?" },
      choices: {
        zh: ["N 型半導體", "P 型半導體", "真空", "純金屬"],
        en: ["N-type", "P-type", "Vacuum", "Pure metal"]
      },
      answer: 1,
      explain: { zh: "III 族元素形成電洞，成為 P 型。", en: "Group-III boron creates holes → P-type." }
    },
    {
      q: { zh: "離子植入相對擴散的重要優點是？", en: "A key implant advantage vs diffusion?" },
      choices: {
        zh: ["無法控制深度", "深度與濃度控制更精準", "一定更便宜且不用退火", "會往旁邊大量擴散"],
        en: ["Cannot control depth", "More precise depth and dose", "Always cheaper and no anneal", "Strong lateral spreading"]
      },
      answer: 1,
      explain: { zh: "可調加速電壓與劑量，且具非等向性。", en: "Implant dose/depth are finely controlled and anisotropic." }
    },
    {
      q: { zh: "離子植入後為什麼需要退火？", en: "Why anneal after ion implantation?" },
      choices: {
        zh: ["讓晶格修復並活化雜質", "把晶圓烤成零食", "去掉所有摻雜", "改成太陽能板"],
        en: ["Repair lattice and activate dopants", "Bake a snack", "Remove all doping", "Make a solar panel"]
      },
      answer: 0,
      explain: { zh: "植入會破壞晶格，退火修復並活化雜質。", en: "Implant damage must be repaired and dopants activated." }
    },
    {
      q: { zh: "Guard ring 的關鍵用途之一是？", en: "A key use of guard rings is?" },
      choices: {
        zh: ["預防閂鎖效應", "增加靜態功耗", "取消井區偏壓", "取代光罩"],
        en: ["Prevent latch-up", "Increase static power", "Remove well bias", "Replace masks"]
      },
      answer: 0,
      explain: { zh: "提供低阻抗路徑穩定偏壓，抑制 latch-up。", en: "Low-impedance ties stabilize bias and suppress latch-up." }
    },
    {
      q: { zh: "為什麼 NMOS 通常比 PMOS 切換更快？", en: "Why does NMOS usually switch faster than PMOS?" },
      choices: {
        zh: ["電子移動率高於電洞", "電洞永遠比較快", "NMOS 不需要電壓", "PMOS 沒有通道"],
        en: ["Electron mobility > hole mobility", "Holes are always faster", "NMOS needs no voltage", "PMOS has no channel"]
      },
      answer: 0,
      explain: { zh: "矽中電子移動率約為電洞的 2～3 倍。", en: "Electrons move ~2–3× faster than holes in Si." }
    },
    {
      q: { zh: "Foundry 主要負責哪個階段？", en: "Where do foundries mainly work?" },
      choices: {
        zh: ["裸晶圓 → 圖案化晶圓", "只做零售包裝", "只做終端手機組裝", "只做廣告投放"],
        en: ["Blank wafer → patterned wafer", "Retail packaging only", "Phone final assembly only", "Ads only"]
      },
      answer: 0,
      explain: { zh: "代工廠專注最核心的微影與晶圓製造。", en: "Foundries do the hard lithography/manufacturing stage." }
    },
    {
      q: { zh: "光罩在製程中的角色最像？", en: "A photomask is most like?" },
      choices: {
        zh: ["底片 / 網版", "包裝紙", "電源線", "散熱膏"],
        en: ["Film / stencil", "Wrapping paper", "Power cord", "Thermal paste"]
      },
      answer: 0,
      explain: { zh: "光罩承載電路圖案，供光線轉移到晶圓。", en: "Masks carry the circuit pattern for exposure." }
    },
    {
      q: { zh: "光刻機為什麼極重要？", en: "Why are lithography tools critical?" },
      choices: {
        zh: ["它決定可做到多細的線寬與製程極限", "它只負責運送員工", "它取代所有測試", "它專門切割紙箱"],
        en: ["They set minimum feature size and node limits", "They only shuttle workers", "They replace all test", "They only cut boxes"]
      },
      answer: 0,
      explain: { zh: "曝光解析度直接影響電晶體密度與效能。", en: "Exposure resolution drives density and performance." }
    },
    {
      q: { zh: "封測中的「封裝」主要目的是？", en: "Main goal of packaging in OSAT?" },
      choices: {
        zh: ["保護晶粒並引出對外接點", "把設計圖刪除", "取消功能測試", "把晶圓變大"],
        en: ["Protect the die and provide external I/O", "Delete the schematic", "Skip functional test", "Enlarge the wafer"]
      },
      answer: 0,
      explain: { zh: "晶粒脆弱，需保護殼與接腳/錫球才能上板。", en: "Bare dies need a package and pins/balls to connect." }
    },
    {
      q: { zh: "下列何者是台灣獨立光罩廠？", en: "Which is a Taiwan independent mask shop?" },
      choices: {
        zh: ["台灣光罩 (TMC)", "聯發科", "瑞昱", "日月光"],
        en: ["Taiwan Mask Corp (TMC)", "MediaTek", "Realtek", "ASE"]
      },
      answer: 0,
      explain: { zh: "台灣光罩是台灣重要的獨立光罩廠。", en: "TMC is a major independent mask maker." }
    },
    {
      q: { zh: "CVD 沉積 SiO2 的核心概念是？", en: "Core idea of CVD SiO2?" },
      choices: {
        zh: ["氣態前驅物在表面反應生成固態薄膜", "用锤子敲出氧化層", "只靠室溫自然長膜且無法控制", "用印表機列印金屬"],
        en: ["Gas precursors react on the surface to form a solid film", "Hammer on an oxide", "Room-temp spontaneous film with no control", "Print metal with an office printer"]
      },
      answer: 0,
      explain: { zh: "CVD 透過化學反應在晶圓表面生成薄膜。", en: "CVD grows films by surface chemical reaction." }
    },
    {
      q: { zh: "PECVD 相對於 LPCVD 的常見特點是？", en: "Vs LPCVD, PECVD is often?" },
      choices: {
        zh: ["可在較低溫度沉積，利於後段金屬層", "一定需要 900°C 以上", "不能做絕緣膜", "只能沉積金"],
        en: ["Lower-temperature deposition good for BEOL metals", "Always needs >900°C", "Cannot make dielectrics", "Only deposits gold"]
      },
      answer: 0,
      explain: { zh: "電漿輔助可在約 300–400°C 進行，適合後段。", en: "Plasma assist enables ~300–400°C deposition." }
    },
    {
      q: { zh: "光刻流程中，軟烤的主要目的是？", en: "Soft bake mainly aims to?" },
      choices: {
        zh: ["去除光阻中的溶劑並提升均勻性", "直接蝕刻金屬", "植入離子", "切割晶粒"],
        en: ["Remove resist solvent and improve uniformity", "Etch metal directly", "Implant ions", "Dice dies"]
      },
      answer: 0,
      explain: { zh: "Soft Bake 去除溶劑，穩定光阻膜。", en: "Soft bake drives out solvent." }
    },
    {
      q: { zh: "正性光阻曝光後通常會？", en: "After exposure, positive resist usually?" },
      choices: {
        zh: ["變得更易溶解，顯影時去除曝光區", "變得完全不溶解且去除未曝光區", "立刻變成金屬", "失去所有感光性且無法顯影"],
        en: ["Becomes more soluble; exposed areas are removed", "Never dissolves and removes unexposed only", "Turns into metal", "Loses photosensitivity forever"]
      },
      answer: 0,
      explain: { zh: "正性光阻曝光區溶解度上升，顯影去掉曝光區。", en: "Positive: exposed regions develop away." }
    },
    {
      q: { zh: "負性光阻曝光後通常會？", en: "After exposure, negative resist usually?" },
      choices: {
        zh: ["溶解度降低，顯影去除未曝光區", "一定變成正性光阻", "自動完成封裝", "取消對準需求"],
        en: ["Becomes less soluble; unexposed areas are removed", "Always becomes positive resist", "Packages itself", "Needs no alignment"]
      },
      answer: 0,
      explain: { zh: "負性光阻曝光區不易溶，留下曝光圖案。", en: "Negative: exposed regions remain." }
    },
    {
      q: { zh: "光刻完整步驟順序，曝光之後通常接著？", en: "After exposure, lithography usually continues with?" },
      choices: {
        zh: ["曝光後烘烤 (PEB)", "先切割晶錠", "先做零售", "先寫行銷文案"],
        en: ["Post-exposure bake (PEB)", "Ingot slicing first", "Retail first", "Marketing copy first"]
      },
      answer: 0,
      explain: { zh: "曝光後常做 Post-Exposure Bake，再顯影。", en: "PEB is commonly done before develop." }
    },
    {
      q: { zh: "下列何者不是光刻常見優點？", en: "Which is NOT a common lithography advantage?" },
      choices: {
        zh: ["可做精細圖案", "量產效率高", "完全沒有尺寸限制", "對準精準"],
        en: ["Fine patterns", "High-volume efficiency", "No size limit at all", "Precise alignment"]
      },
      answer: 2,
      explain: { zh: "光波長會限制可做結構尺寸，並非毫無極限。", en: "Wavelength sets a resolution limit." }
    },
    {
      q: { zh: "從 Layout 做光罩時，常用什麼把圖案「畫」在光阻上？", en: "When making masks from layout, patterns are often written by?" },
      choices: {
        zh: ["電子束微影", "水彩筆", "噴漆罐", "雷射筆隨便掃"],
        en: ["Electron-beam lithography", "Watercolor brush", "Spray paint", "Random laser wand"]
      },
      answer: 0,
      explain: { zh: "光罩製作常用電子束依資料曝光圖案。", en: "E-beam writes the microscopic chrome mask pattern." }
    },
    {
      q: { zh: "晶圓上真正「雕刻」出結構的關鍵步驟是？", en: "The step that truly “carves” wafer structures is?" },
      choices: {
        zh: ["蝕刻", "只塗光阻不做後續", "只軟烤", "只看設計圖"],
        en: ["Etching", "Coat-only with no follow-up", "Soft bake only", "Looking at the drawing"]
      },
      answer: 0,
      explain: { zh: "蝕刻去除未被光阻保護的區域，形成真實圖案。", en: "Etch removes unprotected material." }
    },
    {
      q: { zh: "台灣下游封測代表廠商包含？", en: "Taiwan OSAT leaders include?" },
      choices: {
        zh: ["日月光、矽品、力成", "僅有聯發科", "僅有環球晶圓", "僅有 ASML"],
        en: ["ASE, SPIL, PTI", "MediaTek only", "GlobalWafers only", "ASML only"]
      },
      answer: 0,
      explain: { zh: "日月光、矽品、力成是封測重要業者。", en: "ASE/SPIL/PTI are major OSAT players." }
    },
    {
      q: { zh: "MOL（中段製程）主要連接什麼？", en: "MOL mainly connects?" },
      choices: {
        zh: ["電晶體與上方金屬線", "手機與充電器包裝", "倉庫與門市", "簡報與投影機"],
        en: ["Transistors to upper metals", "Phones to charger boxes", "Warehouses to shops", "Slides to projectors"]
      },
      answer: 0,
      explain: { zh: "以 Contact 連接源極、汲極、閘極到後段金屬。", en: "Contacts bridge devices to BEOL." }
    },
    {
      q: { zh: "Cell-based 相對 Full Custom 的優勢通常是？", en: "Cell-based vs Full Custom advantage is usually?" },
      choices: {
        zh: ["開發週期較短、較快上市", "一定面積最小效能最高", "完全不需 EDA", "只能做類比"],
        en: ["Shorter development / faster time-to-market", "Always smallest area and best PPA", "No EDA needed", "Analog-only"]
      },
      answer: 0,
      explain: { zh: "自動化程度高，Time-to-market 較有利。", en: "Automation speeds delivery." }
    },
    {
      q: { zh: "純矽在室溫下導電性大致如何？", en: "Room-temp conductivity of pure silicon is roughly?" },
      choices: {
        zh: ["接近絕緣，幾乎不導電", "像銅一樣超導電", "一定是超導體", "會自動變成金屬"],
        en: ["Near insulating / barely conducts", "Copper-like", "Always superconducting", "Automatically metallic"]
      },
      answer: 0,
      explain: { zh: "純矽價電子被共價鍵綁住，需摻雜才實用。", en: "Pure Si needs doping to be useful." }
    },
    {
      q: { zh: "光刻技術的核心材料「光阻」本質是？", en: "Photoresist is essentially?" },
      choices: {
        zh: ["對光敏感的感光材料", "只導電的銅線", "包裝泡棉", "散熱片"],
        en: ["A light-sensitive material", "Only copper wire", "Foam packaging", "A heatsink"]
      },
      answer: 0,
      explain: { zh: "光阻經曝光改變溶解度，用以轉移圖案。", en: "Resist enables pattern transfer." }
    },
    {
      q: { zh: "圖案化晶圓之後，切割前通常會先做？", en: "Before dicing a patterned wafer one usually?" },
      choices: {
        zh: ["晶圓測試標記不良品", "直接丟棄整片", "先賣給消費者", "先印說明書"],
        en: ["Wafer-test and mark failed dies", "Scrap the whole wafer", "Sell to consumers first", "Print manuals first"]
      },
      answer: 0,
      explain: { zh: "Wafer test 找出不良 die 再切割。", en: "Wafer sort marks bad dies first." }
    },
    {
      q: { zh: "台積電維持內部光罩能力的重要原因包含？", en: "TSMC keeps captive mask capability partly to?" },
      choices: {
        zh: ["先進製程光學校正與設計機密保護", "完全不需要微影", "法規禁止外包所有光罩", "光罩與製程無關"],
        en: ["Match advanced OPC and protect confidential designs", "Avoid lithography entirely", "Laws ban all outsourced masks", "Masks are unrelated to process"]
      },
      answer: 0,
      explain: { zh: "先進節點與客戶機密需求使內部光罩很關鍵。", en: "Advanced nodes + secrecy make captive masks critical." }
    },
    {
      q: { zh: "下列關於 Analog 與 Digital 的敘述何者較正確？", en: "Which statement about Analog vs Digital is better?" },
      choices: {
        zh: ["Digital 更追求先進製程；Analog 常留在成熟製程", "兩者都只能用 3nm", "Analog 完全不需考慮雜訊", "Digital 不能用 EDA"],
        en: ["Digital pushes advanced nodes; analog often stays mature", "Both must use only 3nm", "Analog ignores noise", "Digital cannot use EDA"]
      },
      answer: 0,
      explain: { zh: "數位受益於微縮；類比受雜訊與特殊元件限制。", en: "Digital benefits from scaling; analog is noise/device limited." }
    },
    {
      q: { zh: "Guard ring 除了防閂鎖，還有助於？", en: "Besides latch-up, guard rings also help?" },
      choices: {
        zh: ["基底雜訊隔離與穩定 body bias", "提高靜態短路電流", "取消所有井區", "取代封裝測試"],
        en: ["Substrate noise isolation and stable body bias", "Raise static short current", "Remove all wells", "Replace package test"]
      },
      answer: 0,
      explain: { zh: "可吸收雜訊並提供良好歐姆接觸偏壓。", en: "They collect noise and stabilize bias." }
    },
    {
      q: { zh: "光刻顯影步驟的目的是？", en: "Purpose of the develop step?" },
      choices: {
        zh: ["去除該去的光阻以顯現圖案", "植入硼原子", "長出金屬凸塊", "切割晶錠"],
        en: ["Remove the intended resist regions to reveal the pattern", "Implant boron", "Grow bumps", "Slice an ingot"]
      },
      answer: 0,
      explain: { zh: "顯影液依正/負光阻特性去除特定區域。", en: "Developer removes soluble resist per tone." }
    },
  ],
  sa: [
    {
      q: { zh: "請簡述台積電專業晶圓代工模式如何促成垂直分工。", en: "Briefly explain how TSMC’s foundry model enabled vertical specialization." },
      keywords: {
        zh: ["設計", "製造", "代工", "拆開", "分離", "1987", "design", "manufacturing", "foundry", "separate"],
        en: ["設計", "製造", "代工", "拆開", "分離", "1987", "design", "manufacturing", "foundry", "separate"]
      },
      answer: { zh: "1987 年台積電首創專業代工，把設計與製造拆開，讓無廠設計公司可開發晶片，形成垂直分工。", en: "In 1987 TSMC pioneered pure-play foundry, separating design from manufacturing so fabless firms could develop chips." }
    },
    {
      q: { zh: "台灣半導體垂直分工的三大關鍵因素是什麼？", en: "What are the three key factors behind Taiwan’s semiconductor vertical specialization?" },
      keywords: {
        zh: ["代工", "商業模式", "聚落", "政策", "園區", "門檻", "資本", "foundry", "business model", "cluster", "policy", "park", "barrier", "capital"],
        en: ["代工", "商業模式", "聚落", "政策", "園區", "門檻", "資本", "foundry", "business model", "cluster", "policy", "park", "barrier", "capital"]
      },
      answer: { zh: "商業模式創新（代工）、政策與產業聚落、資本與技術門檻升高促使專精分工。", en: "Foundry business-model innovation, policy/clusters, and rising capital/tech barriers." }
    },
    {
      q: { zh: "舉出台灣上游 IC 設計、中游代工、下游封測各一家代表廠商。", en: "Name one Taiwan firm each for design, foundry, and OSAT." },
      keywords: {
        zh: ["聯發科", "台積電", "日月光", "聯詠", "瑞昱", "聯電", "矽品", "力成", "MediaTek", "TSMC", "ASE", "Novatek", "Realtek", "UMC", "SPIL", "PTI"],
        en: ["聯發科", "台積電", "日月光", "聯詠", "瑞昱", "聯電", "矽品", "力成", "MediaTek", "TSMC", "ASE", "Novatek", "Realtek", "UMC", "SPIL", "PTI"]
      },
      answer: { zh: "例如：聯發科（設計）、台積電（代工）、日月光（封測）。", en: "e.g., MediaTek (design), TSMC (foundry), ASE (OSAT)." }
    },
    {
      q: { zh: "Digital IC 與 Analog IC 在設計方法上有何不同？", en: "How do Digital and Analog IC design methods differ?" },
      keywords: {
        zh: ["EDA", "HDL", "電晶體", "手工", "雜訊", "匹配", "transistor", "hand", "noise", "matching"],
        en: ["EDA", "HDL", "電晶體", "手工", "雜訊", "匹配", "transistor", "hand", "noise", "matching"]
      },
      answer: { zh: "Digital 多用 HDL + EDA 自動流程；Analog 多在電晶體級手工調整，重點在雜訊與匹配。", en: "Digital uses HDL+EDA automation; analog is often transistor-level handcraft focused on noise/matching." }
    },
    {
      q: { zh: "為什麼 Analog IC 通常不追求最先進製程？", en: "Why doesn’t Analog IC usually chase the most advanced node?" },
      keywords: {
        zh: ["漏電", "雜訊", "耐壓", "成熟", "特殊元件", "leakage", "noise", "voltage", "mature", "special device"],
        en: ["漏電", "雜訊", "耐壓", "成熟", "特殊元件", "leakage", "noise", "voltage", "mature", "special device"]
      },
      answer: { zh: "先進製程漏電大、耐壓低、雜訊放大，且特殊元件在成熟製程支援較好。", en: "Advanced nodes have high leakage, low voltage headroom, more noise; special devices are better on mature processes." }
    },
    {
      q: { zh: "比較 Full Custom 與 Cell-based 的自動化程度。", en: "Compare automation of Full Custom vs Cell-based." },
      keywords: {
        zh: ["人工", "EDA", "標準單元", "自動", "佈局", "manual", "standard cell", "auto", "layout"],
        en: ["人工", "EDA", "標準單元", "自動", "佈局", "manual", "standard cell", "auto", "layout"]
      },
      answer: { zh: "Full Custom 高度人工；Cell-based 高度依賴 EDA 與標準單元庫自動合成繞線。", en: "Full Custom is mostly manual; Cell-based relies on EDA and standard cells." }
    },
    {
      q: { zh: "什麼是 PDK？請說明其用途。", en: "What is a PDK and what is it for?" },
      keywords: {
        zh: ["Process Design Kit", "製程", "EDA", "橋樑", "設計規則", "模型", "process", "bridge", "design rule", "model"],
        en: ["Process Design Kit", "製程", "EDA", "橋樑", "設計規則", "模型", "process", "bridge", "design rule", "model"]
      },
      answer: { zh: "PDK 是代工廠提供的製程設計套件，掛在 EDA 上提供模型、設計規則與驗證資料，連接設計與製造。", en: "A foundry Process Design Kit loaded into EDA with models, rules, and verification data bridging design and manufacturing." }
    },
    {
      q: { zh: "請列出 Full Custom 到 tapeout 的主要步驟。", en: "List main steps from Full Custom to tapeout." },
      keywords: {
        zh: ["前模擬", "layout", "PAD", "後模擬", "DRC", "LVS", "GDS", "pre-sim", "post-sim"],
        en: ["前模擬", "layout", "PAD", "後模擬", "DRC", "LVS", "GDS", "pre-sim", "post-sim"]
      },
      answer: { zh: "前模擬 → cell layout → 與 PAD 整合並後模擬/補 dummy → DRC/LVS 等檢查後上傳 GDS。", en: "Pre-sim → cell layout → PAD assembly/post-sim/dummy → DRC/LVS then GDS." }
    },
    {
      q: { zh: "用反相器說明輸入與輸出在 layout 上大致如何連接。", en: "Using an inverter, how are input/output connected in layout?" },
      keywords: {
        zh: ["Poly", "PMOS", "NMOS", "Contact", "Metal", "輸出", "output"],
        en: ["Poly", "PMOS", "NMOS", "Contact", "Metal", "輸出", "output"]
      },
      answer: { zh: "輸入經共用 Poly 貫穿 PMOS/NMOS；兩者汲極以 Contact 與 Metal 相連作為輸出。", en: "Shared poly for input across PMOS/NMOS; drains tied via contacts/Metal as output." }
    },
    {
      q: { zh: "什麼是 MOSFET？用一句話說明其工作概念。", en: "What is a MOSFET in one sentence?" },
      keywords: {
        zh: ["閘極", "電壓", "電流", "源極", "汲極", "開關", "gate", "voltage", "current", "source", "drain", "switch"],
        en: ["閘極", "電壓", "電流", "源極", "汲極", "開關", "gate", "voltage", "current", "source", "drain", "switch"]
      },
      answer: { zh: "以閘極電壓控制源極與汲極之間電流的場效電晶體開關。", en: "A field-effect transistor switch where gate voltage controls source–drain current." }
    },
    {
      q: { zh: "說明 NMOS 與 PMOS 的導通條件差異。", en: "Explain NMOS vs PMOS turn-on conditions." },
      keywords: {
        zh: ["高電壓", "低電壓", "Logic 1", "Logic 0", "電子", "電洞", "high voltage", "low voltage", "electron", "hole"],
        en: ["高電壓", "低電壓", "Logic 1", "Logic 0", "電子", "電洞", "high voltage", "low voltage", "electron", "hole"]
      },
      answer: { zh: "NMOS 閘極高電位導通（電子）；PMOS 閘極低電位導通（電洞）。", en: "NMOS on with high gate (electrons); PMOS on with low gate (holes)." }
    },
    {
      q: { zh: "CMOS 是什麼？為何成為主流？", en: "What is CMOS and why did it win?" },
      keywords: {
        zh: ["互補", "NMOS", "PMOS", "靜態功耗", "抗雜訊", "微縮", "complementary", "static power", "noise", "scale"],
        en: ["互補", "NMOS", "PMOS", "靜態功耗", "抗雜訊", "微縮", "complementary", "static power", "noise", "scale"]
      },
      answer: { zh: "CMOS 是 NMOS/PMOS 互補架構，具低靜態功耗、高抗雜訊且易微縮整合。", en: "Complementary NMOS/PMOS architecture with low static power, good noise margin, and scalable density." }
    },
    {
      q: { zh: "簡述 IC cross-section 由下到上的主要分層。", en: "Briefly list IC cross-section layers bottom to top." },
      keywords: {
        zh: ["FEOL", "電晶體", "MOL", "BEOL", "金屬", "Pad", "保護", "transistor", "metal", "passivation"],
        en: ["FEOL", "電晶體", "MOL", "BEOL", "金屬", "Pad", "保護", "transistor", "metal", "passivation"]
      },
      answer: { zh: "基板/FEOL 電晶體 → MOL 接點 → BEOL 金屬互連 → 保護層與 Pads/Bumps。", en: "FEOL transistors → MOL contacts → BEOL metals → passivation/pads/bumps." }
    },
    {
      q: { zh: "Source/Drain 的 n+ 是什麼意思？如何形成？", en: "What does n+ S/D mean and how is it formed?" },
      keywords: {
        zh: ["高濃度", "N 型", "離子植入", "退火", "電子", "heavy", "N-type", "implant", "anneal", "electron"],
        en: ["高濃度", "N 型", "離子植入", "退火", "電子", "heavy", "N-type", "implant", "anneal", "electron"]
      },
      answer: { zh: "高濃度 N 型區，富含電子；通常離子植入後退火活化形成。", en: "Heavily doped N regions rich in electrons, typically by implant then anneal." }
    },
    {
      q: { zh: "為什麼閘極下方需要薄 SiO2？", en: "Why is thin SiO2 needed under the gate?" },
      keywords: {
        zh: ["絕緣", "電場", "耦合", "漏電", "控制", "insulate", "field", "coupling", "leakage", "control"],
        en: ["絕緣", "電場", "耦合", "漏電", "控制", "insulate", "field", "coupling", "leakage", "control"]
      },
      answer: { zh: "作為閘極氧化層絕緣，薄層可強化電場耦合，用更低電壓快速控制通道且避免閘極電流直通。", en: "Gate oxide insulates; thinner film strengthens coupling for lower-voltage fast control without direct gate current." }
    },
    {
      q: { zh: "NMOS 通道（channel）如何形成？", en: "How does an NMOS channel form?" },
      keywords: {
        zh: ["正電壓", "電場", "電洞", "電子", "反轉", "positive voltage", "field", "hole", "electron", "inversion"],
        en: ["正電壓", "電場", "電洞", "電子", "反轉", "positive voltage", "field", "hole", "electron", "inversion"]
      },
      answer: { zh: "閘極加足夠正壓，電場排開電洞、吸引電子，形成反轉層通道。", en: "Enough positive gate bias repels holes and attracts electrons into an inversion channel." }
    },
    {
      q: { zh: "解釋 W 與 L 的意義與重要性。", en: "Explain W and L and why they matter." },
      keywords: {
        zh: ["通道長度", "通道寬度", "速度", "電流", "面積", "channel length", "channel width", "speed", "current", "area"],
        en: ["通道長度", "通道寬度", "速度", "電流", "面積", "channel length", "channel width", "speed", "current", "area"]
      },
      answer: { zh: "L 是通道長度，越短越快、密度越高；W 是通道寬度，越寬電流越大但更佔面積。", en: "L is channel length (shorter → faster/denser); W is width (wider → more current, more area)." }
    },
    {
      q: { zh: "為什麼需要 P-well 與 N-well？", en: "Why are P-well and N-well needed?" },
      keywords: {
        zh: ["CMOS", "NMOS", "PMOS", "摻雜", "雙井", "doping", "twin well"],
        en: ["CMOS", "NMOS", "PMOS", "摻雜", "雙井", "doping", "twin well"]
      },
      answer: { zh: "為在同一晶圓整合 NMOS 與 PMOS；雙井可獨立優化並降低寄生風險。", en: "To integrate NMOS and PMOS on one wafer; twin wells allow independent optimization." }
    },
    {
      q: { zh: "閘極為何從 Poly 走向金屬閘極（HKMG）？", en: "Why move from poly to metal gates (HKMG)?" },
      keywords: {
        zh: ["空乏", "28", "漏電", "金屬", "HKMG", "depletion", "leakage", "metal"],
        en: ["空乏", "28", "漏電", "金屬", "HKMG", "depletion", "leakage", "metal"]
      },
      answer: { zh: "微縮後 Poly 空乏效應使效能下降；HKMG 降電阻、減漏電並提升速度。", en: "Poly depletion at advanced nodes; HKMG cuts resistance/leakage and boosts speed." }
    },
    {
      q: { zh: "半導體中的「雜質」與日常生活髒汙有何不同？", en: "How do semiconductor “impurities” differ from dirt?" },
      keywords: {
        zh: ["刻意", "摻雜", "元素", "磷", "硼", "導電", "intentional", "doping", "element", "phosphorus", "boron", "conduct"],
        en: ["刻意", "摻雜", "元素", "磷", "硼", "導電", "intentional", "doping", "element", "phosphorus", "boron", "conduct"]
      },
      answer: { zh: "此處雜質是精準加入的特定元素（如磷、硼），用來控制導電類型與能力。", en: "They are intentional dopants (e.g., P, B) used to control conductivity type and strength." }
    },
    {
      q: { zh: "說明 N 型與 P 型半導體如何形成。", en: "How are N-type and P-type semiconductors formed?" },
      keywords: {
        zh: ["V 族", "III 族", "電子", "電洞", "磷", "硼", "Group V", "Group III", "electron", "hole", "phosphorus", "boron"],
        en: ["V 族", "III 族", "電子", "電洞", "磷", "硼", "Group V", "Group III", "electron", "hole", "phosphorus", "boron"]
      },
      answer: { zh: "摻 V 族形成多餘電子（N 型）；摻 III 族形成電洞（P 型）。", en: "Group V → extra electrons (N); Group III → holes (P)." }
    },
    {
      q: { zh: "比較擴散與離子植入的差異。", en: "Compare diffusion vs ion implantation." },
      keywords: {
        zh: ["高溫", "等向", "精準", "非等向", "退火", "high temperature", "isotropic", "precise", "anisotropic", "anneal"],
        en: ["高溫", "等向", "精準", "非等向", "退火", "high temperature", "isotropic", "precise", "anisotropic", "anneal"]
      },
      answer: { zh: "擴散靠高溫自然擴散，等向且較粗；離子植入深度/濃度精準、非等向，但需退火。", en: "Diffusion is hot/isotropic/coarser; implant is precise/anisotropic and needs anneal." }
    },
    {
      q: { zh: "Guard ring 如何幫助預防閂鎖效應？", en: "How do guard rings help prevent latch-up?" },
      keywords: {
        zh: ["低阻抗", "偏壓", "SCR", "井", "基底", "latch", "low impedance", "bias", "well", "substrate"],
        en: ["低阻抗", "偏壓", "SCR", "井", "基底", "latch", "low impedance", "bias", "well", "substrate"]
      },
      answer: { zh: "以高摻雜環提供低阻抗路徑，把 well/substrate 綁在穩定電壓，抑制寄生 SCR。", en: "Heavily doped rings provide low-impedance ties that keep wells/substrate biased and suppress SCR." }
    },
    {
      q: { zh: "為什麼說 NMOS 比 PMOS「游」得比較快？", en: "Why is NMOS said to “swim” faster than PMOS?" },
      keywords: {
        zh: ["電子", "電洞", "移動率", "2", "3", "electron", "hole", "mobility"],
        en: ["電子", "電洞", "移動率", "2", "3", "electron", "hole", "mobility"]
      },
      answer: { zh: "電子移動率約為電洞 2～3 倍，故 NMOS 驅動與切換通常更快。", en: "Electron mobility is ~2–3× hole mobility, so NMOS is usually faster." }
    },
    {
      q: { zh: "請依序說明從晶錠到晶片的四大階段。", en: "List the four stages from ingot to chip." },
      keywords: {
        zh: ["晶錠", "裸晶圓", "圖案化", "晶粒", "封裝", "測試", "ingot", "blank wafer", "patterned", "die", "package", "test"],
        en: ["晶錠", "裸晶圓", "圖案化", "晶粒", "封裝", "測試", "ingot", "blank wafer", "patterned", "die", "package", "test"]
      },
      answer: { zh: "晶錠→裸晶圓；裸晶圓→圖案化晶圓；測試切割成晶粒；封裝測試成晶片。", en: "Ingot→blank wafer; blank→patterned; test/dice to dies; package/test to chips." }
    },
    {
      q: { zh: "光罩與光刻機分別扮演什麼角色？", en: "Roles of photomask and lithography tool?" },
      keywords: {
        zh: ["圖案", "底片", "曝光", "縮小", "投影", "解析度", "pattern", "film", "exposure", "reduce", "project", "resolution"],
        en: ["圖案", "底片", "曝光", "縮小", "投影", "解析度", "pattern", "film", "exposure", "reduce", "project", "resolution"]
      },
      answer: { zh: "光罩承載電路圖案；光刻機將圖案縮小精準投影曝光到光阻上，決定線寬極限。", en: "Mask carries the pattern; the scanner/stepper exposes/shrinks it onto resist and sets resolution limits." }
    },
    {
      q: { zh: "封測（Assembly and Test）在做什麼？", en: "What does Assembly and Test do?" },
      keywords: {
        zh: ["封裝", "保護", "接腳", "測試", "良率", "package", "protect", "pin", "test", "yield"],
        en: ["封裝", "保護", "接腳", "測試", "良率", "package", "protect", "pin", "test", "yield"]
      },
      answer: { zh: "封裝保護晶粒並引出接點；測試驗證功能與可靠度後出貨。", en: "Packaging protects and connects the die; testing verifies function/reliability." }
    },
    {
      q: { zh: "從 Layout 到光罩的製作流程重點？", en: "Key steps from layout to mask?" },
      keywords: {
        zh: ["檔案", "電子束", "鉻", "石英", "顯影", "蝕刻", "file", "e-beam", "chrome", "quartz", "develop", "etch"],
        en: ["檔案", "電子束", "鉻", "石英", "顯影", "蝕刻", "file", "e-beam", "chrome", "quartz", "develop", "etch"]
      },
      answer: { zh: "輸出幾何檔→電子束曝光石英鉻板光阻→顯影蝕刻鉻→形成透光/不透光圖案。", en: "Export geometry → e-beam write chrome/resist quartz → develop/etch chrome pattern." }
    },
    {
      q: { zh: "說明晶圓上「塗佈→曝光→顯影→蝕刻→去光阻」的意義。", en: "Meaning of coat→expose→develop→etch→strip?" },
      keywords: {
        zh: ["光阻", "圖案", "保護", "蝕刻", "轉移", "resist", "pattern", "protect", "etch", "transfer"],
        en: ["光阻", "圖案", "保護", "蝕刻", "轉移", "resist", "pattern", "protect", "etch", "transfer"]
      },
      answer: { zh: "以光阻定義保護圖案，蝕刻把 Layout 圖案永久轉移到晶圓，並可重複多層。", en: "Resist defines protection; etch permanently transfers layout to the wafer, repeatable across layers." }
    },
    {
      q: { zh: "請舉出至少兩家台灣光罩相關廠商或單位。", en: "Name at least two Taiwan mask-related firms/units." },
      keywords: {
        zh: ["台灣光罩", "TMC", "PDMC", "凸版", "台積電", "滿力", "Taiwan Mask", "Toppan", "TSMC", "M&R"],
        en: ["台灣光罩", "TMC", "PDMC", "凸版", "台積電", "滿力", "Taiwan Mask", "Toppan", "TSMC", "M&R"]
      },
      answer: { zh: "例如台灣光罩、PDMC、凸版中華電子、滿力科技，或台積電內部光罩部門。", en: "e.g., TMC, PDMC, Tekscend, M&R, or TSMC’s captive mask shop." }
    },
    {
      q: { zh: "請舉出台灣晶錠/晶棒相關廠商至少兩家。", en: "Name at least two Taiwan ingot/boule related firms." },
      keywords: {
        zh: ["環球晶圓", "中美矽晶", "飛羅得", "錦霆", "穩晟", "盛新", "永泉", "GlobalWafers", "Sino-American", "Photronics", "SAS"],
        en: ["環球晶圓", "中美矽晶", "飛羅得", "錦霆", "穩晟", "盛新", "永泉", "GlobalWafers", "Sino-American", "Photronics", "SAS"]
      },
      answer: { zh: "例如環球晶圓、中美矽晶；SiC 則有穩晟、盛新、永泉等。", en: "e.g., GlobalWafers, Sino-American Silicon; plus SiC crystal specialists." }
    },
    {
      q: { zh: "CVD 沉積 SiO2 的四個連續步驟是什麼？", en: "Four continuous CVD SiO2 steps?" },
      keywords: {
        zh: ["引入", "吸附", "反應", "脫附", "排出", "introduce", "adsorb", "react", "desorb", "exhaust"],
        en: ["引入", "吸附", "反應", "脫附", "排出", "introduce", "adsorb", "react", "desorb", "exhaust"]
      },
      answer: { zh: "氣體引入傳輸→表面吸附→化學反應成膜→副產物脫附排出。", en: "Gas in/transport → adsorb → film-forming reaction → byproduct desorption/exhaust." }
    },
    {
      q: { zh: "PECVD 與 LPCVD 各適合什麼情境？", en: "When are PECVD vs LPCVD preferred?" },
      keywords: {
        zh: ["低溫", "後段", "高溫", "緻密", "前段", "階梯", "low temperature", "BEOL", "high temperature", "dense", "FEOL", "step"],
        en: ["低溫", "後段", "高溫", "緻密", "前段", "階梯", "low temperature", "BEOL", "high temperature", "dense", "FEOL", "step"]
      },
      answer: { zh: "PECVD 低溫適合後段金屬層絕緣；LPCVD 較高溫、膜質緻密，常用前段。", en: "PECVD low-temp for BEOL; LPCVD hotter/denser with good step coverage for FEOL." }
    },
    {
      q: { zh: "什麼是光刻技術？請用自己的話說明。", en: "What is photolithography in your own words?" },
      keywords: {
        zh: ["光阻", "掩模", "曝光", "顯影", "圖案", "resist", "mask", "exposure", "develop", "pattern"],
        en: ["光阻", "掩模", "曝光", "顯影", "圖案", "resist", "mask", "exposure", "develop", "pattern"]
      },
      answer: { zh: "在晶圓塗光阻，透過掩模曝光改變溶解度，再顯影形成圖案並重複多次。", en: "Coat resist, expose through a mask, change solubility, develop the pattern, and repeat." }
    },
    {
      q: { zh: "請列出至少五個光刻工藝步驟。", en: "List at least five lithography process steps." },
      keywords: {
        zh: ["清洗", "塗佈", "軟烤", "對準", "曝光", "顯影", "硬烤", "蝕刻", "剝離", "clean", "coat", "soft bake", "align", "expose", "develop", "hard bake", "etch", "strip"],
        en: ["清洗", "塗佈", "軟烤", "對準", "曝光", "顯影", "硬烤", "蝕刻", "剝離", "clean", "coat", "soft bake", "align", "expose", "develop", "hard bake", "etch", "strip"]
      },
      answer: { zh: "如：清洗、光阻塗佈、軟烤、掩模對準、曝光、PEB、顯影、硬烤、蝕刻/植入、剝離。", en: "e.g., clean, coat, soft bake, align, expose, PEB, develop, hard bake, etch/implant, strip." }
    },
    {
      q: { zh: "光刻技術的主要優勢有哪些？", en: "Main advantages of lithography?" },
      keywords: {
        zh: ["精細", "量產", "成本", "對齊", "速度", "fine", "volume", "cost", "align", "speed"],
        en: ["精細", "量產", "成本", "對齊", "速度", "fine", "volume", "cost", "align", "speed"]
      },
      answer: { zh: "可做高品質精細圖案、量產效率高、量產後具成本效益、對準精準、處理快。", en: "Fine patterns, volume efficiency, post-setup economics, precise alignment, fast processing." }
    },
    {
      q: { zh: "光刻技術的主要缺點有哪些？", en: "Main disadvantages of lithography?" },
      keywords: {
        zh: ["尺寸", "波長", "複雜", "昂貴", "環境", "size", "wavelength", "complex", "expensive", "environment"],
        en: ["尺寸", "波長", "複雜", "昂貴", "環境", "size", "wavelength", "complex", "expensive", "environment"]
      },
      answer: { zh: "受光波長尺寸限制、流程複雜、設備與光罩昂貴、化學品有環境風險。", en: "Wavelength resolution limits, complex flow, costly tools/masks, chemical risks." }
    },
    {
      q: { zh: "正性光阻與負性光阻有何差異？", en: "Difference between positive and negative photoresist?" },
      keywords: {
        zh: ["曝光", "溶解", "去除", "正性", "負性", "expose", "dissolve", "remove", "positive", "negative"],
        en: ["曝光", "溶解", "去除", "正性", "負性", "expose", "dissolve", "remove", "positive", "negative"]
      },
      answer: { zh: "正性：曝光區易溶被去掉；負性：曝光區難溶，未曝光區被去掉。", en: "Positive: exposed dissolves away; negative: exposed remains, unexposed dissolves." }
    },
    {
      q: { zh: "光阻選擇需考慮哪些特性？", en: "What properties matter when choosing resist?" },
      keywords: {
        zh: ["波長", "解析度", "耐受", "製程", "wavelength", "resolution", "tolerance", "process"],
        en: ["波長", "解析度", "耐受", "製程", "wavelength", "resolution", "tolerance", "process"]
      },
      answer: { zh: "對特定波長敏感度、解析度，以及承受後續製程步驟的能力。", en: "Wavelength sensitivity, resolution, and durability through later process steps." }
    },
    {
      q: { zh: "為什麼說 Foundry 的工作常是「重複很多遍」？", en: "Why is foundry work “repeated many times”?" },
      keywords: {
        zh: ["層", "重複", "沉積", "微影", "蝕刻", "layer", "repeat", "deposition", "litho", "etch"],
        en: ["層", "重複", "沉積", "微影", "蝕刻", "layer", "repeat", "deposition", "litho", "etch"]
      },
      answer: { zh: "複雜設計層數多，需反覆沉積/微影/蝕刻等步驟堆疊立體電路。", en: "Complex chips have many layers, so deposition/litho/etch loops many times." }
    },
    {
      q: { zh: "什麼是 Latch-up？Guard ring 如何相關？", en: "What is latch-up and how do guard rings relate?" },
      keywords: {
        zh: ["寄生", "SCR", "短路", "保護環", "偏壓", "parasitic", "short", "guard ring", "bias"],
        en: ["寄生", "SCR", "短路", "保護環", "偏壓", "parasitic", "short", "guard ring", "bias"]
      },
      answer: { zh: "Latch-up 是寄生 PNPN/SCR 被觸發造成電源短路；Guard ring 穩定偏壓避免觸發。", en: "Latch-up is parasitic SCR turn-on shorting supplies; guard rings stabilize bias to prevent it." }
    },
    {
      q: { zh: "說明 FEOL、MOL、BEOL 各自重點。", en: "Summarize FEOL, MOL, BEOL." },
      keywords: {
        zh: ["電晶體", "接點", "金屬", "互連", "transistor", "contact", "metal", "interconnect"],
        en: ["電晶體", "接點", "金屬", "互連", "transistor", "contact", "metal", "interconnect"]
      },
      answer: { zh: "FEOL 做電晶體；MOL 做接點過渡；BEOL 做多層金屬互連。", en: "FEOL: transistors; MOL: contacts; BEOL: metal interconnects." }
    },
    {
      q: { zh: "為什麼純矽需要摻雜才有用？", en: "Why must pure silicon be doped to be useful?" },
      keywords: {
        zh: ["不導電", "共價鍵", "導電率", "控制", "insulating", "covalent", "conductivity", "control"],
        en: ["不導電", "共價鍵", "導電率", "控制", "insulating", "covalent", "conductivity", "control"]
      },
      answer: { zh: "純矽幾乎不導電；摻雜可大幅且精準控制導電能力與 N/P 型。", en: "Pure Si barely conducts; doping precisely controls conductivity and N/P type." }
    },
    {
      q: { zh: "光刻機（尤其 EUV）為何昂貴且關鍵？", en: "Why are lithography tools (esp. EUV) costly and critical?" },
      keywords: {
        zh: ["解析度", "線寬", "電晶體", "效能", "ASML", "resolution", "linewidth", "transistor", "performance"],
        en: ["解析度", "線寬", "電晶體", "效能", "ASML", "resolution", "linewidth", "transistor", "performance"]
      },
      answer: { zh: "它決定可做到多細的線寬與電晶體密度，技術門檻極高，直接影響先進製程能力。", en: "They determine linewidth/density limits and thus node capability; very high tech barriers." }
    },
    {
      q: { zh: "圖案化晶圓到晶粒之間還有哪些重要動作？", en: "Important steps between patterned wafer and die?" },
      keywords: {
        zh: ["測試", "標記", "切割", "dicer", "test", "mark", "dice"],
        en: ["測試", "標記", "切割", "dicer", "test", "mark", "dice"]
      },
      answer: { zh: "先做晶圓測試標記不良品，再用切割機切成一顆顆 die。", en: "Wafer test marks fails, then a dicer separates dies." }
    },
    {
      q: { zh: "請說明「設計規則」在 PDK 中的角色。", en: "Role of design rules in a PDK?" },
      keywords: {
        zh: ["寬度", "間距", "光罩", "短路", "可製造", "width", "spacing", "mask", "short", "manufacturable"],
        en: ["寬度", "間距", "光罩", "短路", "可製造", "width", "spacing", "mask", "short", "manufacturable"]
      },
      answer: { zh: "定義最小線寬、間距等物理底線，確保可被光罩與製程成功做出且不短路。", en: "They define min width/spacing so masks/process can build circuits without shorts." }
    },
    {
      q: { zh: "為什麼 CMOS 靜態功耗可以很低？", en: "Why can CMOS static power be very low?" },
      keywords: {
        zh: ["互補", "導通", "關閉", "路徑", "切換", "complementary", "on", "off", "path", "switch"],
        en: ["互補", "導通", "關閉", "路徑", "切換", "complementary", "on", "off", "path", "switch"]
      },
      answer: { zh: "NMOS 與 PMOS 互補，靜態時其一關閉，VDD 到 GND 無直通路徑，幾乎只在切換瞬間耗電。", en: "Complementary devices; when idle one is off so no DC VDD–GND path—power mainly during switching." }
    },
    {
      q: { zh: "軟烤與硬烤在光刻中各有何目的？", en: "Soft bake vs hard bake purposes?" },
      keywords: {
        zh: ["溶劑", "均勻", "耐用", "硬化", "solvent", "uniform", "durable", "harden"],
        en: ["溶劑", "均勻", "耐用", "硬化", "solvent", "uniform", "durable", "harden"]
      },
      answer: { zh: "軟烤去溶劑並均勻化；硬烤強化剩餘光阻耐久性以利後續製程。", en: "Soft bake removes solvent/uniformizes; hard bake hardens remaining resist for later steps." }
    },
    {
      q: { zh: "乾式蝕刻與濕式蝕刻大致差別？", en: "Rough difference between dry and wet etch?" },
      keywords: {
        zh: ["電漿", "酸液", "化學", "攻擊", "裸露", "plasma", "acid", "chemical", "attack", "exposed"],
        en: ["電漿", "酸液", "化學", "攻擊", "裸露", "plasma", "acid", "chemical", "attack", "exposed"]
      },
      answer: { zh: "乾式多用電漿氣體；濕式用化學酸液，皆攻擊無光阻保護的裸露區域。", en: "Dry etch uses plasma; wet etch uses liquid etchants—both attack unprotected regions." }
    },
    {
      q: { zh: "台灣半導體聚落集中在科學園區帶來什麼好處？", en: "Benefit of Taiwan’s science-park clusters?" },
      keywords: {
        zh: ["溝通", "運輸", "交易成本", "上下游", "communication", "logistics", "transaction cost", "supply chain"],
        en: ["溝通", "運輸", "交易成本", "上下游", "communication", "logistics", "transaction cost", "supply chain"]
      },
      answer: { zh: "上下游靠近，降低溝通、運輸與交易成本，強化垂直分工效率。", en: "Nearby supply chain lowers communication, shipping, and transaction costs." }
    },
    {
      q: { zh: "什麼是參數化單元（在 PDK 脈絡）？", en: "What is a PCell in PDK context?" },
      keywords: {
        zh: ["參數", "長寬", "自動", "版圖", "元件", "parameter", "length", "width", "auto", "layout", "device"],
        en: ["參數", "長寬", "自動", "版圖", "元件", "parameter", "length", "width", "auto", "layout", "device"]
      },
      answer: { zh: "代工廠預先建好的元件版圖模組，輸入長寬等參數即可自動生成幾何，不必從零手繪。", en: "Parameterized cells auto-generate device layout from inputs so designers need not draw from scratch." }
    },
    {
      q: { zh: "為什麼先進晶圓廠資本門檻會推升垂直分工？", en: "Why do huge fab capital costs push vertical specialization?" },
      keywords: {
        zh: ["數百億", "專注", "規模", "技術", "tens of billions", "focus", "scale", "technology"],
        en: ["數百億", "專注", "規模", "技術", "tens of billions", "focus", "scale", "technology"]
      },
      answer: { zh: "先進廠投資巨大且技術極難，企業需專精單一環節才能達規模與領先。", en: "Advanced fabs are hugely expensive/hard, so firms specialize in one segment for scale and leadership." }
    },
    {
      q: { zh: "請說明光刻在半導體製造中為何是「關鍵工藝」。", en: "Why is lithography a “key process” in manufacturing?" },
      keywords: {
        zh: ["圖案", "重複", "積體電路", "解析度", "pattern", "repeat", "IC", "resolution"],
        en: ["圖案", "重複", "積體電路", "解析度", "pattern", "repeat", "IC", "resolution"]
      },
      answer: { zh: "幾乎所有微觀電路圖案都靠光刻轉移並層層堆疊，解析度決定製程能力。", en: "Almost all microscopic patterns are transferred by lithography, and resolution sets process capability." }
    },
    {
      q: { zh: "滿力科技等光罩廠除了半導體，還可能服務哪些領域？", en: "Besides semiconductors, mask shops may also serve?" },
      keywords: {
        zh: ["光電", "感測", "MEMS", "微影", "optoelectronics", "sensor", "lithography"],
        en: ["光電", "感測", "MEMS", "微影", "optoelectronics", "sensor", "lithography"]
      },
      answer: { zh: "也可支援光電、感測器、MEMS 等高解析度微影相關應用。", en: "High-resolution lithography for optoelectronics, sensors, MEMS, etc." }
    },
  ]
};
