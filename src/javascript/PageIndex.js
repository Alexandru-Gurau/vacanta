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

const dropdownMenu = document.getElementById('navigation-dropdown');
const buttonShoppingCard = document.getElementById('buttonShopping');

buttonShoppingCard.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hide-dropdown');
});
