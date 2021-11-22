const btnMessage = document.getElementById('button-contact-message');
const formMessage = document.getElementById('form-contact-message');
const headerMessage = document.getElementById('header-contact-message');
const containerMessage = document.querySelector('.contact__message');
const hiddenMessage = document.getElementById('messageHidden');
const contactContainerMessage = document.getElementById(
  'contact-message-container'
);

const nameMessage = document.getElementById('name-message');
const emailMessage = document.getElementById('email-message');
const textareaMessage = document.getElementById('myTextarea');

const clearInputsMessage = () => {
  nameMessage.value = '';
  emailMessage.value = '';
  textareaMessage.value = '';
};

const messageSend = () => {
  headerMessage.style.display = 'none';
  formMessage.style.display = 'none';
  contactContainerMessage.classList.remove('message-hidden');

  if (
    nameMessage.value == 0 ||
    emailMessage.value == 0 ||
    textareaMessage.value == 0
  ) {
    hiddenMessage.innerHTML = `
  <h2
              class="header header__contact text-color-tertiary"
              id="messageHidden"
            >
              Please complete all inputs.
            </h2>
  `;
    return;
  } else {
    hiddenMessage.innerHTML = `
  <h2
              class="header header__contact text-color-tertiary"
              id="messageHidden"
            >
              Thank you for message.
            </h2>
  `;
  }
};
const init = () => {
  headerMessage.style.display = 'block';
  formMessage.style.display = 'flex';
  clearInputsMessage();
  contactContainerMessage.classList.add('message-hidden');
};

btnMessage.addEventListener('click', (e) => {
  e.preventDefault();
  messageSend();
  setTimeout(() => {
    init();
  }, 3000);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    messageSend();
    setTimeout(() => {
      init();
    }, 3000);
  }
});
