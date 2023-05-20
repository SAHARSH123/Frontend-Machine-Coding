const content = document.getElementById("content");
const htmlTab = document.getElementById("html");
const cssTab = document.getElementById("css");
const jsTab = document.getElementById("js");
const openTab = function (tabName) {
  console.log(tabName);

  if (tabName === "html") {
    cssTab.style = "background:white";
    jsTab.style = "background:white";
    htmlTab.style = "background:yellow";
    content.innerHTML = "<div>HTML TAB</div>";
  }
  if (tabName === "js") {
    cssTab.style = "background:white";
    htmlTab.style = "background:white";
    jsTab.style = "background:yellow";
    content.innerHTML = "<div>JS TAB</div>";
  }
  if (tabName === "css") {
    jsTab.style = "background:white";
    cssTab.style = "background:yellow";
    htmlTab.style = "background:white";
    content.innerHTML = "<div>CSS TAB</div>";
  }
};
