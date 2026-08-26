const grid = document.querySelector("#styleGrid"),
  search = document.querySelector("#search"),
  filters = document.querySelector("#filters"),
  empty = document.querySelector("#empty");
let active = "全部";
document.querySelector("#heroCount").textContent = STYLES.length;
const safe = (s) =>
  String(s).replace(
    /[&<>]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c],
  );
function thumb(x) {
  const c = x.category;
  let type = c.includes("金融")
    ? "finance"
    : c.includes("编辑")
      ? "editorial"
      : c.includes("视觉")
        ? "playful"
        : c.includes("复古")
          ? "retro"
          : c.includes("运动")
            ? "sport"
            : c.includes("协作")
              ? "workspace"
              : "saas";
  return (
    '<div class="thumb thumb-' +
    type +
    '" style="--card-accent:' +
    x.accent +
    '"><i></i><i></i><i></i><div class="thumb-copy">' +
    safe(x.name) +
    '</div><div class="thumb-lines"><b></b><b></b><b></b></div></div>'
  );
}
function render() {
  let q = search.value.trim().toLowerCase(),
    a = STYLES.filter(
      (x) =>
        (active === "全部" || x.category === active) &&
        (!q || Object.values(x).join(" ").toLowerCase().includes(q)),
    );
  document.querySelector("#resultCount").textContent =
    a.length + " / " + STYLES.length + " 个结果";
  grid.innerHTML = a
    .map(
      (x, i) =>
        '<a class="style-card" href="detail.html?style=' +
        encodeURIComponent(x.slug) +
        '"><div>' +
        thumb(x) +
        "<small>" +
        String(i + 1).padStart(2, "0") +
        " / " +
        x.category +
        "</small><h3>" +
        safe(x.name) +
        "</h3><p>" +
        safe(x.summary) +
        "</p></div><footer><span>VIEW SYSTEM</span><b>↗</b></footer></a>",
    )
    .join("");
  empty.hidden = a.length > 0;
}
filters.innerHTML = CATEGORIES.map(
  (x) =>
    '<button class="' +
    (x === active ? "active" : "") +
    '" data-category="' +
    x +
    '">' +
    x +
    "</button>",
).join("");
filters.onclick = (e) => {
  if (e.target.tagName === "BUTTON") {
    active = e.target.dataset.category;
    filters
      .querySelectorAll("button")
      .forEach((b) => b.classList.toggle("active", b === e.target));
    render();
  }
};
search.oninput = render;
document.querySelector("#clearSearch").onclick = () => {
  search.value = "";
  active = "全部";
  render();
};
document.querySelector("#themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.dark = document.body.classList.contains("dark");
};
if (localStorage.dark === "true") document.body.classList.add("dark");
render();
