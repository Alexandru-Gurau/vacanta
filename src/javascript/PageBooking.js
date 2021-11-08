import { btnCloseModalAccount, btnSignup, btnRegister } from './logreg.js';
import {
  dropdownMenu,
  buttonShoppingCard,
  buttonCheckOut,
  buttonShoppingX,
} from './Shopping/shopping';
import { bookingContainer } from './Trips/tripsLayout';
import { buttonLeftBooking, buttonRightBooking } from './reviewsBooking';

// BUTTON SEE MORE or LESS
const btnSeeMore = document.getElementById('button-see-more');
const btnSeeLess = document.getElementById('button-see-less');

const showBookingContainer = () => {
  bookingContainer.style.height = 'auto';
  btnSeeMore.style.display = 'none';
  btnSeeLess.style.display = 'block';
};
const hideBookingContainer = () => {
  bookingContainer.style.height = '100rem';
  btnSeeMore.style.display = 'block';
  btnSeeLess.style.display = 'none';
};
btnSeeMore.addEventListener('click', showBookingContainer);
btnSeeLess.addEventListener('click', hideBookingContainer);

// /////////////////////////////////////////////////////////
