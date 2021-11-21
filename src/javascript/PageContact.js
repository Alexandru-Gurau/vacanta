const btnMessage = document.getElementById('button-contact-message');
const formMessage = document.getElementById('form-contact-message');
const headerMessage = document.getElementById('header-contact-message');
const containerMessage = document.querySelector('.contact__message');
const hiddenMessage = document.getElementById('messageHidden');

const messageSend = () => {
  headerMessage.style.display = 'none';
  formMessage.style.display = 'none';
  hiddenMessage.classList.remove('message-hidden');
};
const init = () => {
  hiddenMessage.classList.add('message-hidden');
  headerMessage.style.display = 'block';
  formMessage.style.display = 'flex';
};

btnMessage.addEventListener('click', (e) => {
  e.preventDefault();
  messageSend();
  setTimeout(() => {
    init();
  }, 3000);
});