'use strict';
// MODAL ABOUT
const modalAbout = document.querySelector('#modalAbout');
const btnAbout = document.getElementById('btn-more-about');
const btnAboutClose = document.getElementById('btn-closeModalAbout');

function openModalAbout() {
  modalAbout.classList.remove('hidden');
}
function closeModalAbout() {
  modalAbout.classList.add('hidden');
}
btnAbout.addEventListener('click', openModalAbout);
btnAboutClose.addEventListener('click', closeModalAbout);
// //////////////////////////////////////////////////////

// MODAL EXAMPLE
const modalExample = document.querySelector('#modalExample');
const btnExample = document.getElementById('btn-more-example');
const btnExampleClose = document.getElementById('btn-closeModalExample');

function openModalExample() {
  modalExample.classList.remove('hidden');
}
function closeModalExample() {
  modalExample.classList.add('hidden');
}
btnExample.addEventListener('click', openModalExample);
btnExampleClose.addEventListener('click', closeModalExample);

// //////////////////////////////////////////////////////

// REVIEWS sliders
const btnLeft = document.querySelector('#btn--left');
const btnRight = document.querySelector('#btn--right');

let slideIndex = 1;
showSlides(slideIndex);

const nextSlide = function plusSlide(n) {
  showSlides((slideIndex += n));
};

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('reviews__box');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide(1);
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    nextSlide(-1);
  }
});

btnLeft.addEventListener('click', function (e) {
  e.preventDefault();
  nextSlide(-1);
});
btnRight.addEventListener('click', function (e) {
  e.preventDefault();
  nextSlide(1);
});
// //////////////////////////////////////////////////////

// ACCOUNT MODAL
// BUTTON ACCOUNT
const btnAccount = document.getElementById('btn-account');
const modalAccount = document.querySelector('#modal-account');
const btnCloseModalAccount = document.getElementById('btn-closeModalAccount');

const openModalAccount = () => {
  modalAccount.classList.remove('hidden');
  boxMessage.classList.add('hidden');
  boxLogin.classList.remove('hidden');
  clearInputs();
};
const closeModalAccount = () => {
  modalAccount.classList.add('hidden');
};

btnAccount.addEventListener('click', openModalAccount);
btnCloseModalAccount.addEventListener('click', closeModalAccount);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModalAbout();
    closeModalExample();
    closeModalAccount();
  }
});

// CONNECT TO YOUR ACCOUNT
const btnLogin = document.getElementById('button-login');
const btnSignup = document.getElementById('button-signup');
const boxLogin = document.querySelector('#box-login');
const boxSignup = document.querySelector('#box-signup');
const btnConnect = document.getElementById('buttonConnect');
const btnRegister = document.getElementById('buttonRegister');
const loginForm = document.querySelector('#loginForm');
const boxMessage = document.getElementById('box-message');
const boxRegistred = document.getElementById('box-registred');
const inputs = document.querySelectorAll('.input');
const inputSignUpUsername = document.querySelector('#input-signup-username');
const inputSignUppassword = document.querySelector('#input-signup-password');

const clearInputs = () => {
  inputs.forEach((input) => (input.value = ''));
};

const loginLayout = () => {
  btnLogin.classList.add('button-active');
  btnSignup.classList.remove('button-active');
  boxLogin.classList.remove('hidden');
  boxSignup.classList.add('hidden');
  boxRegistred.classList.add('hidden');
};

const signupLayout = () => {
  clearInputs();
  btnLogin.classList.remove('button-active');
  btnSignup.classList.add('button-active');
  boxLogin.classList.add('hidden');
  boxSignup.classList.remove('hidden');
};

btnLogin.addEventListener('click', loginLayout);
btnSignup.addEventListener('click', signupLayout);

const login = () => {
  boxLogin.classList.add('hidden');
  boxMessage.classList.remove('hidden');
  setTimeout(closeModalAccount, 2500);
};

const register = () => {
  boxSignup.classList.add('hidden');
  boxRegistred.classList.remove('hidden');
  if (
    (inputSignUpUsername.value == 0 && inputSignUppassword.value == 0) ||
    (inputSignUpUsername.value !== 0 && inputSignUppassword.value == 0) ||
    (inputSignUpUsername.value == 0 && inputSignUppassword.value !== 0)
  ) {
    boxRegistred.innerHTML = `<h2 class="header header--failed">Please try again</h2>`;
  } else {
    boxRegistred.innerHTML = `<h2 class="header header--success">Account created, please login</h2>`;
  }

  setTimeout(loginLayout, 2500);
};

btnConnect.addEventListener('click', login);
btnRegister.addEventListener('click', register);
