// https://leetcode.com/discuss/interview-question/1719943/Amazon-or-Phone-Screen-or-FEE-L5-or-Like-Button
const btnContainer = document.getElementsByClassName("buttonContainer")[0];
console.log(btnContainer);
const heartEle = document.getElementById("heart");
const progressEle = document.getElementById("progress");

const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([1, 2]);
    }, 5000);
  });
};

const fetchData = async () => {
  try {
    btnContainer.classList.add("btn-click");
    btnContainer.classList.add("disableHover");
    heartEle.style.display = "none";
    progressEle.style.display = "block";
    const data = await getData();
    progressEle.style.display = "none";
    heartEle.style.display = "block";
    btnContainer.classList.remove("disableHover");
  } catch (err) {}
};
