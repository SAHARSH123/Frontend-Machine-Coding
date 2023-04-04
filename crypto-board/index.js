let data = [];
console.log("HI");
let cardContainer = document.getElementById("card-container");
document.addEventListener("DOMContentLoaded", (e) => {
  data = [
    {
      name: "Bitcoin",
      price: "$28326",
      shortName: "btc",
      loss: "1%",
      img: "https://media.istockphoto.com/id/951412868/photo/bitcoin-on-white-background.jpg?s=612x612&w=0&k=20&c=h6bSw-lkIDHle3Qz_6RXvluUttHEmsHsblMmwDra9sA=",
    },
    {
      name: "Dogecoin",
      price: "$0.10",
      shortName: "Doge",
      loss: "50%",
      img: "https://assets.gadgets360cdn.com/img/crypto/dogecoin-og-logo.png",
    },
  ];

  data.forEach((d) => {
    cardContainer.innerHTML += ` <div class="card">
        <div class="card-img">
          <img src="${d.img}" alt="" />
        </div>
        <div class="card-detail">
          <div class="row">
            <span>${d.name}</span>
            <span>${d.price}</span>
          </div>
          <div class="row">
            <span>${d.shortName}</span>
            <span>${d.loss}</span>
          </div>
        </div>
      </div>`;
  });
});
