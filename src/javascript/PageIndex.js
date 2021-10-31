import {
  btnAccount,
  openModalAccount,
  closeModalAccount,
  login,
  register,
  btnCloseModalAccount,
  loginLayout,
  signupLayout,
  btnLogin,
  btnSignup,
  btnRegister,
  btnConnect,
} from './logreg.js';
import { btnLeft, btnRight } from './reviews';
import { btnAbout, btnAboutClose, btnExample, btnExampleClose } from './modals';

// This must to moved to another js file
const dropdownMenu = document.getElementById('navigation-dropdown');
const buttonShoppingCard = document.getElementById('buttonShopping');
const buttonCheckOut = document.getElementById('buttonCheckOut');
const buttonShoppingX = document.getElementById('closeShoppingBox');

const openShoppingBox = () => {
  dropdownMenu.classList.remove('hide-dropdown');
};
const closeShoppingBox = () => {
  dropdownMenu.classList.add('hide-dropdown');
};

buttonShoppingCard.addEventListener('click', function () {
  openShoppingBox();
});
buttonCheckOut.addEventListener('click', function (e) {
  e.preventDefault();
  closeShoppingBox();
});
buttonShoppingX.addEventListener('click', function (e) {
  e.preventDefault();
  closeShoppingBox();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeShoppingBox();
  }
});

// cards
const card = [
  {
    img: 'dest--1.jpg',
    title: 'Bahamas',
    desc: 'The best food',
    price: 299,
  },
  {
    img: '/dest--2.f992b28e.jpg',
    title: 'Bali',
    desc: 'Good prices',
    price: 199,
  },
  {
    img: '/dest--3.3d10ea30.jpg',
    title: 'Maldives',
    desc: 'Best overall',
    price: 399,
  },
];

const renderCards = () => {
  const shoppingContainer = document.querySelector('.navigation__container');
  card.map((el) => {
    let html = `
          <div class="navigation__box">
            <img
              src="../images/destinations/${el.img}"
              alt="${el.title}"
              class="navigation__box__img"
            />
            <div class="navigation__box__info">
              <h5 class="header header__card">${el.title}</h5>
              <h6 class="header header__desc">${el.desc}</h6>
            </div>
            <div class="navigation__box__price hidden">
              <h4 class="header header__price">${el.price} €</h4>
            </div>
            <div class="navigation__box__close">
              <h1>X</h1>
            </div>
          </div> 
          `;
    shoppingContainer.insertAdjacentHTML('beforeend', html);
  });
};
renderCards();

// After rendering
const shoppingCard = document.querySelectorAll('.navigation__box');
const shoppingPrice = document.querySelectorAll('.navigation__box__price');
const shoppingBoxClose = document.querySelectorAll('.navigation__box__close');
shoppingCard.forEach((el, i) => {
  el.addEventListener('mouseover', function () {
    shoppingPrice[i].style.display = 'none';
    shoppingBoxClose[i].style.display = 'flex';
  });
  el.addEventListener('mouseout', function () {
    shoppingPrice[i].style.display = 'flex';
    shoppingBoxClose[i].style.display = 'none';
  });
});
// //////////////////////
