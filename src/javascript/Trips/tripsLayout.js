import { trips } from './trips';
import { init } from '../Shopping/shopping';

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
      <h1 class="header header__normal">${el.price} €</h1>
      <button class="button-addToCard">Add to cart</button>
    </div>
  </div>`;
    if (bookingContainer === null) return;
    bookingContainer.insertAdjacentHTML('beforeend', html);
  });
};
renderTrips();

let img = document.createElement('img');
export let card = [];

const buttonClicked = () => {
  const bookingAddToCart = document.querySelectorAll('.button-addToCard');
  bookingAddToCart.forEach((el, i) => {
    el.addEventListener('click', function () {
      card.push(trips[i]);
      init();
    });
  });
};
buttonClicked();
