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

// BUTTON ACCOUNT
const btnAccount = document.getElementById('btn-account');
const modalAccount = document.querySelector('#modal-account');
const btnCloseModalAccount = document.getElementById('btn-closeModalAccount');

const openModalAccount = () => {
  modalAccount.classList.remove('hidden');
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
