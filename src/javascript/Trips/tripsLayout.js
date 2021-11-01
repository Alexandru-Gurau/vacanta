import { trips } from './trips';

export const bookingContainer = document.querySelector('.booking-container');

const renderTrips = () => {
  trips.forEach((el) => {
    let html = `<div class="booking-container__card">
    <div class="booking-container__picture">
      <img src="${el.img}" alt="${el.title}" />
    </div>
    <div class="booking-container__box">
      <h1 class="header header__normal">${el.title}</h1>
      <h1 class="header header__desc">${el.desc}</h1>
      <h1 class="header header__normal">${el.price}</h1>
      <button class="button-checkout">Add to cart</button>
    </div>
  </div>`;
    bookingContainer.insertAdjacentHTML('beforeend', html);
  });
};
renderTrips();
