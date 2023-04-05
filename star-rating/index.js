// let container = document.getElementById("star-c");
let container = document.getElementsByClassName("star-container")[0];
let stars = document.querySelectorAll(".star");
let ratingContainer = document.getElementById("rating");
let filledStars = 0;
container.addEventListener(
  "click",
  (e) => {
    for (let index = 0; index < filledStars; index++) {
      stars[index].classList.remove("color-star");
    }

    let curClicked = e.target.dataset.index;
    if (curClicked) {
      filledStars = parseInt(curClicked) + 1;
      ratingContainer.innerHTML = `Rating is ${filledStars}`;

      for (let index = 0; index <= curClicked; index++) {
        stars[index].classList.add("color-star");
      }
    }
  },
  false
);

container.addEventListener(
  "mouseover",
  (e) => {
    let curClicked = e.target.dataset.index;
    if (curClicked) {
      for (let index = 0; index < 5; index++) {
        stars[index].classList.remove("color-star");
      }
      for (let index = 0; index <= curClicked; index++) {
        stars[index].classList.add("color-star");
      }
    }
  },
  false
);

container.addEventListener(
  "mouseleave",
  (e) => {
    let curClicked = e.target.dataset.index;
    for (let index = 0; index < 5; index++) {
      stars[index].classList.remove("color-star");
    }

    for (let index = 0; index < filledStars; index++) {
      stars[index].classList.add("color-star");
    }
  },
  false
);
