const btnElement = document.getElementById("btn");
const modalEle = document.getElementsByClassName("modal")[0];

function openModal() {
  modalEle.style.display = "block";
}

function closesBtn() {
  modalEle.style.display = "none";
}

btnElement.addEventListener("click", () => {
  openModal();
});
