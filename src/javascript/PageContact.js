const btnMessage = document.getElementById('button-contact-message');
const formMessage = document.getElementById('form-contact-message');
const headerMessage = document.getElementById('header-contact-message');
const containerMessage = document.querySelector('.contact__message');
const hiddenMessage = document.getElementById('messageHidden');

const nameMessage = document.getElementById('name-message');
const emailMessage = document.getElementById('email-message');
const textareaMessage = document.getElementById('textarea-message'); //momentan .value nu functioneaza. Area val null

const clearInputsMessage = () => {
  nameMessage.value = '';
  emailMessage.value = '';
};

const messageSend = () => {
  headerMessage.style.display = 'none';
  formMessage.style.display = 'none';
  hiddenMessage.classList.remove('message-hidden');
};
const init = () => {
  hiddenMessage.classList.add('message-hidden');
  headerMessage.style.display = 'block';
  formMessage.style.display = 'flex';
  clearInputsMessage();
};

btnMessage.addEventListener('click', (e) => {
  e.preventDefault();
  messageSend();
  console.log(nameMessage.value);
  console.log(emailMessage.value);
  setTimeout(() => {
    init();
  }, 3000);
});
