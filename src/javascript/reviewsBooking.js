export const buttonLeftBooking = document.querySelector('#booking-btn-left');
export const buttonRightBooking = document.querySelector('#booking-btn-right');
const slides = document.getElementsByClassName('booking-reviews__box');

let slideIndex = 1;
showSlides(slideIndex);

const nextSlide = function plusSlide(n) {
  showSlides((slideIndex += n));
};

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

buttonLeftBooking.addEventListener('click', function (e) {
  e.preventDefault();
  nextSlide(-1);
});
buttonRightBooking.addEventListener('click', function (e) {
  e.preventDefault();
  nextSlide(1);
});
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
