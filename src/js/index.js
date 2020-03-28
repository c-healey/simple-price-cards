import { cards } from "./model/PriceCard";

import * as cardView from "./views/PriceCardview";
import { elements } from "./views/base";

let featured = true;
// const state = {};
// window.state = state;
// window.listView = listView;

const controlCard = () => {
  // state.priceCard = new Card();
  cardView.renderCards(cards);
};
elements.container.addEventListener("mousemove", e => {
  if (e.target.matches(".card") && featured === true) {
    // console.log("toggle featured", featured, elements.featured);
    if (featured === true) {
      featured = false;

      document.querySelector(".featured").classList.remove("featured");
    }
  }
});

elements.priceToggle.addEventListener("change", e => {
  e.preventDefault();
  console.log("triggered check event", e.target.checked);

  const prices = [...document.querySelectorAll(".price--amount")];
  prices.forEach((price, idx) => {
    console.log(price.innerHTML);
    if (e.target.checked) {
      price.innerHTML = cards[idx].priceMonthly;
    } else {
      price.innerHTML = cards[idx].priceAnnual;
    }
  });
});

window.addEventListener("load", e => {
  controlCard();
});
