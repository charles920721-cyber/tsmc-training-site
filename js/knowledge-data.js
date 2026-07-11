const KNOWLEDGE_CHAPTERS = [
  {
    id: "industry",
    title: "產業與垂直分工",
    articles: [
      {
        title: "台灣半導體如何達成垂直分工？",
        html: `
          <p>台灣半導體產業之所以能達成並穩固獨步全球的垂直分工（設計、製造、封測各司其職），主要基於三大關鍵因素：</p>
          <p class="subhead">1. 商業模式創新（代工模式）</p>
          <p>1987 年台積電首創「專業晶圓代工」模式，讓沒有工廠的 IC 設計公司也能開發晶片。這項典範轉移成功將「設計」與「製造」拆開，形成互利共生的分工體系。</p>
          <p class="subhead">2. 政策推動與產業聚落</p>
          <p>1970 年代起，政府透過工研院引進半導體技術，隨後設立新竹科學園區。上下游廠商（如聯發科、台積電、日月光）在地理位置上高度集中，大幅降低溝通、運輸與交易成本。</p>
          <p class="subhead">3. 資本與技術門檻急遽升高</p>
          <p>隨著摩爾定律推進，蓋一座先進晶圓廠需要數百億美元，且各環節技術難度極高。垂直分工讓企業能將資源集中在單一領域，達到規模經濟與技術領先。</p>
        `
      },
      {
        title: "台灣半導體垂直產業鏈主要大廠",
        html: `
          <ul>
            <li><strong>上游 IC 設計：</strong>聯發科 (MediaTek)、聯詠 (Novatek)、瑞昱 (Realtek)</li>
            <li><strong>中游 晶圓代工：</strong>台積電 (TSMC)、聯電 (UMC)、力積電 (PSMC)</li>
            <li><strong>下游 封測：</strong>日月光 (ASE)、矽品 (SPIL)、力成 (PTI)</li>
          </ul>
          <p>晶圓代工廠 (Foundry) 主要專注於「裸晶圓 → 圖案化晶圓」階段，不自己設計晶片，而是幫無廠半導體公司（Fabless）把設計圖變成實體晶圓。</p>
        `
      }
    ]
  },
  {
    id: "ic-design",
    title: "IC 設計基礎",
    articles: [
      {
        title: "Analog IC 與 Digital IC 的差異",
        html: `
          <p class="subhead">設計階段</p>
          <p><strong>Digital IC</strong> 高度依賴 EDA 工具。工程師使用硬體描述語言撰寫邏輯，再由軟體自動邏輯合成與佈局繞線。重點在邏輯正確性、時序與系統架構。</p>
          <p><strong>Analog IC</strong> 通常在電晶體等級手工打造，需手動調整電晶體長寬比與佈局。重點在對抗物理效應：雜訊、匹配、阻抗與寄生效應。</p>
          <p class="subhead">製程階段</p>
          <p><strong>Digital IC</strong> 是摩爾定律主要推動者，追求先進製程（如 3nm、5nm）以提升運算力並降低功耗。</p>
          <p><strong>Analog IC</strong> 多採用 28nm、90nm 甚至微米級成熟製程。先進製程漏電流大、耐壓低，且微縮會放大物理雜訊；類比也常需特殊元件（高精度電容、電感、高壓元件）。</p>
        `
      },
      {
        title: "Full Custom 與 Cell-based VLSI 設計比較",
        html: `
          <ul>
            <li><strong>設計層級：</strong>Full Custom 著重電晶體級；Cell-based 著重邏輯閘或系統級。</li>
            <li><strong>基本單元：</strong>Full Custom 客製化多邊形；Cell-based 使用標準單元庫（AND、OR、Flip-Flop 等）。</li>
            <li><strong>自動化：</strong>Full Custom 高度仰賴人工；Cell-based 高度依賴 EDA 自動合成與佈局繞線。</li>
            <li><strong>開發週期：</strong>Full Custom 週期長、成本高；Cell-based Time-to-market 優勢明顯。</li>
            <li><strong>效能面積：</strong>Full Custom 可做到極致最佳化；Cell-based 常為妥協後的次佳解。</li>
            <li><strong>應用：</strong>Full Custom 多用在類比、記憶體、RF、感測器與高效能核心；Cell-based 用於多數數位 IC 與 SoC 邏輯。</li>
          </ul>
        `
      },
      {
        title: "PDK 是什麼？",
        html: `
          <p>PDK (Process Design Kit，製程設計套件) 是晶圓代工廠提供給 IC 設計公司的「製程專屬資料庫與設計規範」，必須掛載於 EDA 工具（如 Cadence、Synopsys）才能使用。</p>
          <p>它像設計端與製造端之間的「橋樑」或「硬體 API」。完整 PDK 通常包含：</p>
          <ul>
            <li><strong>元件模型：</strong>描述電晶體、電阻、電容的真實電氣行為，供電路模擬。</li>
            <li><strong>設計規則：</strong>定義金屬最小寬度、線距等物理底線。</li>
            <li><strong>參數化單元：</strong>輸入參數即可自動生成元件幾何圖形。</li>
            <li><strong>驗證與萃取檔案：</strong>LVS 規則、寄生電容電阻萃取等。</li>
          </ul>
        `
      },
      {
        title: "Full Custom Design 到 Tapeout",
        html: `
          <ol>
            <li>用 HSPICE 或 Spectre 做初步前模擬。</li>
            <li>用 Cadence Virtuoso 進行 cell layout（buffer、主要電路、輔助電路；主電路常多 bits 疊加）。</li>
            <li>將 cell 與 PAD 擺放、串接，以多層金屬連到 PAD（訊號、電路電源、PAD 電源、接地），做後模擬並補 dummy 滿足 density。</li>
            <li>完成 DRC、LVS、ANTENNA 等規則確認後上傳 GDS，附驗證檔案與 Tapeout Review Form。</li>
          </ol>
        `
      },
      {
        title: "簡單 Cell Layout 例子（反相器）",
        html: `
          <p>以 180nm 為例，層次大致由 Diffusion(OD) → Poly → Metal 1~6；金屬互連需 Via/Contact，另有 Nwell、PIMP、NIMP 與 prboundary。</p>
          <p>反相器：輸入連到 PMOS 與 NMOS 共用的 Poly（一根 Poly 貫穿兩者主動區，經 Contact 到 Metal 1 作為輸入）。PMOS 與 NMOS 的汲極分別打 Contact，再用直向 Metal 1 相連作為輸出。</p>
        `
      }
    ]
  },
  {
    id: "mosfet",
    title: "MOSFET 與 CMOS",
    articles: [
      {
        title: "MOSFET、NMOS、PMOS 與 CMOS",
        html: `
          <p><strong>MOSFET</strong>：金屬氧化物半導體場效電晶體，是現代 IC 最基礎的開關。透過閘極電壓控制源極與汲極之間的電流。</p>
          <p><strong>NMOS：</strong>以電子為載子；閘極高電壓 (Logic 1) 時導通，速度快、面積效率好。</p>
          <p><strong>PMOS：</strong>以電洞為載子；閘極低電壓 (Logic 0) 時導通。</p>
          <p><strong>CMOS：</strong>互補式金氧半導體架構，將 NMOS 與 PMOS 成對搭配。反相器上方 PMOS 接 VDD、下方 NMOS 接 GND，閘極綁在一起當輸入。</p>
          <p class="subhead">Why CMOS？</p>
          <ul>
            <li><strong>極低靜態功耗：</strong>互補開啟，靜態時 VDD 到 GND 無直通路徑。</li>
            <li><strong>高抗雜訊：</strong>輸出可穩定拉到 Logic 1 / 0。</li>
            <li><strong>易微縮高整合：</strong>結構對稱，適合遵循摩爾定律高密度整合。</li>
          </ul>
        `
      },
      {
        title: "IC Cross-section（截面結構）",
        html: `
          <ol>
            <li><strong>基板與 FEOL：</strong>矽晶圓上以前段製程做出電晶體（MOSFET、FinFET），是邏輯與儲存核心。</li>
            <li><strong>MOL：</strong>以金屬接點（常為鎢）連接源極、汲極與閘極。</li>
            <li><strong>BEOL 金屬互連：</strong>多層金屬線（M1、M2…）與 Vias，介電層防短路；下層細密、上層粗大負責電源。</li>
            <li><strong>保護層與 Pads/Bumps：</strong>頂層保護膜與對外接點。</li>
          </ol>
        `
      },
      {
        title: "NMOS 工作原理重點",
        html: `
          <ul>
            <li><strong>Substrate：</strong>通常為 P 型矽，充滿電洞，是元件地基。</li>
            <li><strong>Source/Drain 的 n+：</strong>高濃度 N 型摻雜（電子很多），常以離子植入後退火形成。</li>
            <li><strong>Gate Poly：</strong>多晶矽閘極材料；先進製程已改用金屬閘極 (HKMG)。</li>
            <li><strong>薄 SiO2：</strong>閘極氧化層絕緣，越薄電場控制越強，可用更低電壓開關。</li>
            <li><strong>Channel：</strong>閘極加足夠正電壓時，排斥電洞、吸引電子，形成反轉層通道使電流流通。</li>
            <li><strong>L（通道長度）：</strong>越短越快、密度越高（製程微縮核心）。</li>
            <li><strong>W（通道寬度）：</strong>越寬驅動電流越大，但佔用面積也越大。</li>
          </ul>
        `
      },
      {
        title: "P-well / N-well 與金屬閘極",
        html: `
          <p>為在同一晶圓實現 CMOS，需在基板中製作對應的 well。現代常採雙井設計，獨立優化 NMOS/PMOS 摻雜並降低寄生短路風險。</p>
          <p>Gate 可用 Metal：微縮到約 28nm 以下時，Poly 會有空乏效應。業界導入 HKMG（高介電常數金屬閘極），降低電阻、減少漏電並提升開關速度。</p>
        `
      },
      {
        title: "為什麼 NMOS 比 PMOS 快？",
        html: `
          <p>NMOS 以電子傳導，PMOS 以電洞傳導。矽中電子移動率約為電洞的 2～3 倍，因此相同尺寸與電壓下，NMOS 驅動電流更大、切換更快。</p>
        `
      }
    ]
  },
  {
    id: "doping",
    title: "摻雜與保護結構",
    articles: [
      {
        title: "雜質、摻雜、擴散與離子植入",
        html: `
          <p>半導體中的「雜質」是刻意加入純矽晶格的特定元素。純矽幾乎不導電；摻入極微量雜質可大幅改變導電性。</p>
          <ul>
            <li><strong>V 族（磷、砷）→ N 型：</strong>多出自由電子。</li>
            <li><strong>III 族（硼）→ P 型：</strong>形成電洞。</li>
          </ul>
          <p class="subhead">擴散 (Diffusion)</p>
          <p>高溫下雜質由高濃度向低濃度擴散。等向性、成本較低，但深度與濃度控制較粗。</p>
          <p class="subhead">離子植入 (Ion Implantation)</p>
          <p>以高壓加速離子射入晶圓，深度與濃度極精準、非等向性，適合先進製程。植入後需退火修復晶格並活化雜質。</p>
        `
      },
      {
        title: "Guard Ring 的用途",
        html: `
          <ol>
            <li><strong>預防閂鎖 (Latch-up)：</strong>以低阻抗路徑穩定 Well/Substrate 偏壓，避免寄生 SCR 導通短路。</li>
            <li><strong>基底雜訊隔離：</strong>吸收少數載子與雜訊，保護敏感類比/RF 電路。</li>
            <li><strong>穩定本體偏壓：</strong>以 p+/n+ 環形成良好歐姆接觸，避免 Vth 飄移。</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "manufacturing",
    title: "IC 製造流程",
    articles: [
      {
        title: "從晶錠到晶片",
        html: `
          <ol>
            <li><strong>晶錠 → 裸晶圓：</strong>單晶矽柱切片拋光成 Blank Wafer。</li>
            <li><strong>裸晶圓 → 圖案化晶圓：</strong>反覆薄膜沉積、光微影、蝕刻、摻雜等數百道工序。</li>
            <li><strong>圖案化晶圓 → 晶粒：</strong>晶圓測試標記不良品後切割成 Die。</li>
            <li><strong>晶粒 → 晶片：</strong>封裝保護並引出接腳，再做最終測試。</li>
          </ol>
          <p><strong>光罩：</strong>像底片/網版，承載電路圖案供曝光轉移。</p>
          <p><strong>光刻機：</strong>將光罩圖案縮小投影到光阻上，決定製程極限（如 3nm、2nm），是門檻最高、最昂貴的設備之一（如 ASML EUV）。</p>
          <p><strong>封測：</strong>封裝讓脆弱晶粒可對外連接；測試確保功能與可靠度。</p>
        `
      },
      {
        title: "Layout → 光罩 → 蝕刻到晶圓",
        html: `
          <p class="subhead">製作光罩</p>
          <ol>
            <li>Layout 輸出標準幾何檔交給光罩廠。</li>
            <li>電子束在塗有鉻與光阻的石英板上「畫」出圖案。</li>
            <li>顯影後蝕刻鉻，形成透光/不透光電路圖案。</li>
          </ol>
          <p class="subhead">轉移到晶圓</p>
          <ol>
            <li>塗佈光阻</li>
            <li>曝光（DUV / EUV 等）</li>
            <li>顯影留下保護圖案</li>
            <li>蝕刻（乾式電漿或濕式酸液）雕刻裸露區域</li>
            <li>去光阻</li>
          </ol>
          <p>現代晶片不斷重複「塗佈 → 曝光 → 顯影 → 蝕刻」循環，層數越多重複次數越多。Foundry 的核心工作就在此。</p>
        `
      },
      {
        title: "台灣光罩與晶錠廠商",
        html: `
          <p class="subhead">光罩</p>
          <ul>
            <li>獨立廠：台灣光罩 (TMC)、台灣美日先進光罩 (PDMC)、台灣凸版中華電子、滿力科技</li>
            <li>代工廠內部：台積電擁有大規模內部光罩部門服務先進製程與機密設計</li>
          </ul>
          <p class="subhead">晶錠 / 晶棒</p>
          <ul>
            <li>矽／太陽能：環球晶圓、中美矽晶、台灣飛羅得、錦霆科技</li>
            <li>碳化矽 SiC：穩晟材料、盛新材料、永泉晶圓</li>
          </ul>
        `
      },
      {
        title: "CVD 沉積 SiO2",
        html: `
          <p>化學氣相沉積 (CVD) 利用氣態前驅物在晶圓表面反應生成固態 SiO2。</p>
          <ol>
            <li>氣體引入與傳輸（如 SiH4 / TEOS + O2 / N2O）</li>
            <li>表面吸附</li>
            <li>化學反應生成薄膜</li>
            <li>副產物脫附並抽離</li>
          </ol>
          <ul>
            <li><strong>PECVD：</strong>低溫（約 300–400°C），常用於後段層間絕緣。</li>
            <li><strong>LPCVD：</strong>較高溫（約 600–900°C），薄膜緻密、階梯覆蓋佳，常用於前段。</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "lithography",
    title: "光刻技術",
    articles: [
      {
        title: "什麼是光刻技術？",
        html: `
          <p>光刻是半導體生產關鍵工藝：在矽晶圓塗覆光敏光阻，覆蓋有圖案的掩模後以紫外光照射。曝光引發化學反應改變光阻溶解度，再經顯影去除特定區域，得到理想圖案。此過程重複多次以製造複雜積體電路。</p>
        `
      },
      {
        title: "光刻工藝步驟",
        html: `
          <ol>
            <li>基板清洗 (Substrate Cleaning)</li>
            <li>光阻覆蓋 (Photoresist Covering)</li>
            <li>軟烤 (Soft Bake)</li>
            <li>掩模對準 (Mask Alignment)</li>
            <li>曝光 (Exposure)</li>
            <li>曝光後烘烤 (Post-Exposure Bake)</li>
            <li>顯影 (Development)</li>
            <li>硬烘烤 (Hard Bake)</li>
            <li>蝕刻或植入 (Etching or Implantation)</li>
            <li>光阻剝離 (Photoresist Stripping)</li>
          </ol>
        `
      },
      {
        title: "光刻優勢、缺點與應用",
        html: `
          <p class="subhead">優勢</p>
          <ul>
            <li>高品質精細圖案、大規模高效生產、量產後成本效益佳</li>
            <li>材料用途廣、精準對齊、處理速度快</li>
          </ul>
          <p class="subhead">缺點</p>
          <ul>
            <li>受光波長限制，極微小結構有尺寸極限</li>
            <li>流程複雜、設備與光罩昂貴、化學品有環境議題</li>
          </ul>
          <p class="subhead">應用</p>
          <p>半導體製造、電子元件、電路板、光學元件、醫療器材、奈米技術等。</p>
        `
      },
      {
        title: "光阻是什麼？正性與負性",
        html: `
          <p>光阻是對光敏感的「掩模」材料，光照後化學性質改變，顯影時去除特定區域。</p>
          <p><strong>正性光阻：</strong>曝光區變得更易溶，顯影去除曝光區，留下未曝光圖案；高精度、邊緣清晰。</p>
          <p><strong>負性光阻：</strong>曝光區溶解度降低，顯影去除未曝光區；耐化學性佳，適合特定複雜圖案。</p>
          <p>選擇光阻時需考量波長敏感度、解析度與後續製程耐受性。</p>
        `
      },
      {
        title: "結論",
        html: `
          <p>光刻技術透過半導體微加工，推動更輕薄精巧的電子設備。隨著精度需求上升，光刻持續突破極限，從精密電路到生技等領域都仍是關鍵技術。</p>
        `
      }
    ]
  }
];
