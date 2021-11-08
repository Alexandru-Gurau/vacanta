import { card } from '../Trips/tripsLayout';

export const dropdownMenu = document.getElementById('navigation-dropdown');
export const buttonShoppingCard = document.getElementById('buttonShopping');
export const buttonCheckOut = document.getElementById('buttonCheckOut');
export const buttonShoppingX = document.getElementById('closeShoppingBox');

const shoppingContainer = document.querySelector('.navigation__container');
const shoppingMessage = document.getElementById('navMessage');
const headerMesage = document.querySelector('#header-message');

const openShoppingBox = () => {
  dropdownMenu.classList.toggle('hide-dropdown');
  headerMesage.innerHTML = 'Add some trips 😞';
};
const closeShoppingBox = () => {
  dropdownMenu.classList.add('hide-dropdown');
};
buttonShoppingCard.addEventListener('click', openShoppingBox);

buttonShoppingX.addEventListener('click', closeShoppingBox);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeShoppingBox();
  }
});

const clear = () => {
  shoppingContainer.innerHTML = '';
};

export const renderCards = () => {
  card.map((el) => {
    let html = `
          <div class="navigation__box">
            <img
              src="${el.img}"
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
const totalPrice = () => {
  let i;
  let total = 0;
  for (i = 0; i < card.length; i++) {
    total += card[i].price;
  }
  return total;
};

// After rendering
const updateUI = () => {
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
  shoppingBoxClose.forEach((el, i) => {
    el.addEventListener('click', () => {
      card.splice(i, 1);
      init();
    });
  });

  if (card.length === 0) {
    shoppingContainer.style.display = 'none';
    shoppingMessage.style.display = 'flex';
    buttonCheckOut.style.display = 'none';
  } else {
    shoppingContainer.style.display = 'flex';
    shoppingMessage.style.display = 'none';
    buttonCheckOut.style.display = 'block';
  }
  buttonCheckOut.innerHTML = `You have to pay ${totalPrice()} €`;
  buttonCheckOut.addEventListener('click', () => {
    card.length = 0;
    init();
    headerMesage.innerHTML = 'Thank you for shopping 🥳';
    setTimeout(closeShoppingBox, 3000);
  });
};

export const init = () => {
  clear();
  renderCards();
  totalPrice();
  updateUI();
};
init();
