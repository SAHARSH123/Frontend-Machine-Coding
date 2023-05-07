const ele = document.getElementById("slider");
const pieChart = document.getElementsByClassName("pieChart")[0];

function onInput(e) {
  pieChart.style = `background-image: conic-gradient(red ${e.target.value}%, lightgreen 0)`;
}
