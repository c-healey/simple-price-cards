import { elements } from "./base";

export default "rendercards";

export const renderCards = cards => {
  const markup = cards.map((card, idx) => {
    return `<div class="card card--${idx + 1} ${
      card.featured ? "featured" : ""
    }" >
    
    <h4 class="card__heading">
      <span >${card.title} </span>
    </h4>
    <div class="card__details">
      <ul>
        <li ><div class="price"><span class='price--dollar-sign'>&dollar;</span><span class="price--amount">${
          card.priceMonthly
        }</span></div></li>
        ${card.features
          .map(feature => {
            return `<li>${feature}</li>`;
          })
          .join("")}
      </ul>
    </div>
    <button class="btn btn--primary">Learn More</button>
  </div>`;
  });

  elements.container.insertAdjacentHTML("beforeend", markup.join(""));
};
export const togglePrice = e => {
  console.log("toggle price");
};
