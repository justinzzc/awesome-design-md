const params = new URLSearchParams(location.search);
const slug = params.get("style") || "vercel";
const item =
  STYLES.find((x) => x.slug === slug) ||
  STYLES.find((x) => x.slug === "vercel");
const path = "../design-md/" + item.slug + "/DESIGN.md";
const official = {
  airbnb: "https://www.airbnb.com",
  apple: "https://www.apple.com",
  binance: "https://www.binance.com",
  claude: "https://claude.ai",
  clay: "https://www.clay.com",
  cursor: "https://www.cursor.com",
  figma: "https://www.figma.com",
  "linear.app": "https://linear.app",
  lovable: "https://lovable.dev",
  nike: "https://www.nike.com",
  notion: "https://www.notion.so",
  nvidia: "https://www.nvidia.com",
  pinterest: "https://www.pinterest.com",
  raycast: "https://www.raycast.com",
  spotify: "https://www.spotify.com",
  stripe: "https://stripe.com",
  supabase: "https://supabase.com",
  tesla: "https://www.tesla.com",
  theverge: "https://www.theverge.com",
  vercel: "https://vercel.com",
  wise: "https://wise.com",
  zapier: "https://zapier.com",
  ferrari: "https://www.ferrari.com",
  playstation: "https://www.playstation.com",
  "dell-1996": "https://www.dell.com",
  "nintendo-2001": "https://www.nintendo.com",
  "mistral.ai": "https://mistral.ai",
  resend: "https://resend.com",
  superhuman: "https://superhuman.com",
  webflow: "https://webflow.com",
  "x.ai": "https://x.ai",
  starbucks: "https://www.starbucks.com",
  uber: "https://www.uber.com",
  meta: "https://about.meta.com",
  mintlify: "https://mintlify.com",
  miro: "https://miro.com",
  mongodb: "https://www.mongodb.com",
  "opencode.ai": "https://opencode.ai",
  runwayml: "https://runwayml.com",
  slack: "https://slack.com",
  vodafone: "https://www.vodafone.com",
};
const site =
  official[item.slug] ||
  "https://www.google.com/search?q=" +
    encodeURIComponent(item.name + " official website");
const kind = item.category.includes("金融")
  ? "finance"
  : item.category.includes("编辑")
    ? "editorial"
    : item.category.includes("视觉")
      ? "playful"
      : item.category.includes("复古")
        ? "retro"
        : item.category.includes("运动")
          ? "sport"
          : item.category.includes("协作")
            ? "workspace"
            : "saas";
document.title = item.name + " / Design MD";
const basic =
  '<div class="basic-preview preview-' +
  kind +
  '" style="--preview-accent:' +
  item.accent +
  '"><div class="preview-nav"><span class="preview-logo">' +
  item.name.toLowerCase() +
  '</span><span>Product&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; Journal</span><button>Get started ↗</button></div><div class="preview-body"><span class="mini-kicker">A POINT OF VIEW</span><h3>Make the next<br>thing feel inevitable.</h3><p>' +
  item.summary +
  ' 将这套语言应用到一个小型产品落地页。</p><div class="preview-card"><div class="bar"></div><strong>Design tokens</strong><div class="line" style="width:82%"></div><div class="line" style="width:55%"></div><div class="line" style="width:68%"></div></div></div></div>';
const localShots = [
  "airbnb",
  "apple",
  "binance",
  "claude",
  "cursor",
  "ferrari",
  "figma",
  "linear.app",
  "meta",
  "mintlify",
  "miro",
  "mongodb",
  "nike",
  "notion",
  "opencode.ai",
  "raycast",
  "resend",
  "runwayml",
  "slack",
  "spotify",
  "starbucks",
  "stripe",
  "supabase",
  "superhuman",
  "tesla",
  "theverge",
  "uber",
  "vercel",
  "vodafone",
  "webflow",
  "wise",
  "x.ai",
  "zapier",
];
const screenshot = localShots.includes(item.slug)
  ? "screenshots/" + item.slug + ".png"
  : "https://image.thum.io/get/width/1400/crop/900/" + site;
document.querySelector("#detail").innerHTML =
  '<div class="detail-wrap"><div class="detail-hero"><div><span class="section-kicker">DESIGN SYSTEM / ' +
  item.category.toUpperCase() +
  '</span><h1 class="detail-title">' +
  item.name +
  '</h1><p class="detail-summary">' +
  item.summary +
  ' 这是从原始设计规范中提炼出的视觉方向，可用于品牌官网、产品界面和创意探索。</p><div class="detail-actions"><a class="button" href="' +
  path +
  '" download>下载 DESIGN.md ↓</a><a class="button ghost" href="' +
  site +
  '" target="_blank" rel="noreferrer">访问官方网站 ↗</a></div></div><div class="swatch-panel"><h3>PALETTE / SUGGESTED ACCENTS</h3><div class="swatches"><div class="swatch" style="background:' +
  item.accent +
  '">' +
  item.accent +
  '</div><div class="swatch" style="background:#171719">#171719</div><div class="swatch" style="background:#f7f7f5;color:#171719">#F7F7F5</div><div class="swatch" style="background:#dededb;color:#171719">#DEDEDB</div></div></div></div><section class="preview-section"><div class="preview-heading"><div><span class="section-kicker">LIVE DIRECTION</span><h2>效果查看器</h2><p>在基本效果和官网截图之间切换，比较风格语言与真实品牌页面。</p></div><div class="viewer-tabs"><button class="active" data-view="basic">基本效果</button><button data-view="shot">官网截图</button></div></div><div class="viewer-panel" id="basicView">' +
  basic +
  '</div><div class="viewer-panel screenshot-view" id="shotView" hidden><div class="shot-toolbar"><span class="browser-dots"><i></i><i></i><i></i></span><span>' +
  site.replace("https://", "") +
  '</span><a href="' +
  site +
  '" target="_blank" rel="noreferrer">打开官网 ↗</a></div><img src="' +
  screenshot +
  '" alt="' +
  item.name +
  ' 官方网站截图" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="shot-fallback" hidden>截图暂时不可用。<br><a href="' +
  site +
  '" target="_blank" rel="noreferrer">访问 ' +
  item.name +
  ' 官方网站 ↗</a></div></div></section><section class="markdown-section"><span class="section-kicker">SOURCE NOTES</span><h2>Markdown 规范预览</h2><div class="markdown-layout"><div class="md-panel"><h3>DESIGN.md / CONTENT</h3><pre id="mdContent">正在读取原始 Markdown…</pre></div><div class="md-panel"><h3>READING GUIDE</h3><p class="md-note">这份预览直接读取仓库中的 <code>design-md/' +
  item.slug +
  '/DESIGN.md</code>，用于补充官网观察到的颜色、字体、间距和组件原则。</p><p class="md-note">官网截图来自公开截图服务；顶部的“访问官方网站”可以查看最新版本。</p></div></div><div class="detail-footer"><a href="index.html">← 查看全部风格</a><span>' +
  item.category +
  "</span></div></section></div>";
document.querySelectorAll(".viewer-tabs button").forEach(
  (button) =>
    (button.onclick = () => {
      document
        .querySelectorAll(".viewer-tabs button")
        .forEach((x) => x.classList.toggle("active", x === button));
      document.querySelector("#basicView").hidden =
        button.dataset.view !== "basic";
      document.querySelector("#shotView").hidden =
        button.dataset.view !== "shot";
    }),
);
fetch(path)
  .then((r) => (r.ok ? r.text() : Promise.reject()))
  .then(
    (t) =>
      (document.querySelector("#mdContent").textContent = t.slice(0, 18000)),
  )
  .catch(
    () =>
      (document.querySelector("#mdContent").textContent =
        "无法在 file:// 模式读取文件。\n\n请使用静态服务器打开 site 目录，或点击上方“打开原文”。\n\nSource: " +
        path),
  );
document.querySelector("#themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.dark = document.body.classList.contains("dark");
};
if (localStorage.dark === "true") document.body.classList.add("dark");
