const openCard = document.querySelectorAll('.open-card-text');
const closeCard = document.querySelectorAll('.close-card-text');

const card = document.querySelectorAll('.about-story__card');
const cardText = document.getElementsByClassName('about-story__text');
const header = document.getElementsByClassName('headerJS');
const paragraph = document.getElementsByClassName('paragraph-card');

openCard.forEach((el, i) => {
  el.addEventListener('click', () => {
    cardText[i].style.width = '100%';
    header[i].style.display = 'none';
    openCard[i].style.display = 'none';
    setTimeout(() => {
      closeCard[i].style.display = 'block';
      paragraph[i].style.display = 'block';
    }, 100);
  });
});
closeCard.forEach((el, i) => {
  el.addEventListener('click', () => {
    cardText[i].style.width = 'fit-content';
    header[i].style.display = 'block';
    openCard[i].style.display = 'block';
    closeCard[i].style.display = 'none';
    paragraph[i].style.display = 'none';
  });
});
