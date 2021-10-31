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
const shoppingCard = document.querySelectorAll('.navigation__box');
const shoppingPrice = document.querySelectorAll('.navigation__box__price');
const shoppingBoxClose = document.querySelectorAll('.navigation__box__close');

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
