const root = document.getElementById("root");
let count = 0;

function add() {
  if (count === 0) {
    count++;
    create(5);
  } else {
    count++;
  }
}

function create(n = 3) {
  const el = document.createElement("div");
  el.classList.add("progress");
  el.style = `transition: width ${n}s ease;`;
  root.appendChild(el);

  setTimeout(() => {
    el.classList.add("addWidth");
  }, 50);

  el.addEventListener("transitionend", () => {
    count--;
    if (count > 0) {
      create(5);
    }
  });
  el.removeEventListener("transitionend", () => {});
}
