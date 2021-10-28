// Import accounts from accounts.js
import { accounts } from './account';

// ACCOUNT MODAL
export const btnAccount = document.getElementById('btn-account');
export const btnLogin = document.getElementById('button-login');
export const btnSignup = document.getElementById('button-signup');
export const btnRegister = document.getElementById('buttonRegister');
export const btnConnect = document.getElementById('buttonConnect');
export const btnCloseModalAccount = document.getElementById(
  'btn-closeModalAccount'
);

// ONLY HERE
const inputLoginUsername = document.querySelector('#input-login-username');
const inputLoginPassword = document.querySelector('#input-login-password');
const inputSignUpName = document.querySelector('#input-signup-name');
const inputSignUpUsername = document.querySelector('#input-signup-username');
const inputSignUppassword = document.querySelector('#input-signup-password');
const inputs = document.querySelectorAll('.input');
const boxSignup = document.querySelector('#box-signup');
const boxRegistred = document.getElementById('box-registred');
const boxLogin = document.querySelector('#box-login');
const boxMessage = document.getElementById('box-message');
const modalAccount = document.querySelector('#modal-account');

// LOGIN
const toLowerCase = () => {
  inputLoginUsername.value = inputLoginUsername.value.toLowerCase();
  inputSignUpUsername.value = inputSignUpUsername.value.toLowerCase();
};
// Clear inputs
const clearInputs = () => {
  inputs.forEach((input) => (input.value = ''));
};

// Modal [open / close]
export const openModalAccount = () => {
  modalAccount.classList.remove('hidden');
  boxMessage.classList.add('hidden');
  boxLogin.classList.remove('hidden');
  clearInputs();
};
export const closeModalAccount = () => {
  modalAccount.classList.add('hidden');
};

export const loginLayout = () => {
  btnLogin.classList.add('button-active');
  btnSignup.classList.remove('button-active');
  boxLogin.classList.remove('hidden');
  boxSignup.classList.add('hidden');
  boxRegistred.classList.add('hidden');
};

export const signupLayout = () => {
  clearInputs();
  btnLogin.classList.remove('button-active');
  btnSignup.classList.add('button-active');
  boxLogin.classList.add('hidden');
  boxSignup.classList.remove('hidden');
};

let currentAccount;
export const login = () => {
  boxLogin.classList.add('hidden');
  boxMessage.classList.remove('hidden');
  toLowerCase();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.password === inputLoginPassword.value) {
    boxMessage.innerHTML = `<h2 class="message message--success">Welcome ${currentAccount.name}</h2>`;
    btnAccount.innerHTML = `${currentAccount.name}`;
    setTimeout(() => {
      closeModalAccount();
    }, 2500);
  } else {
    boxMessage.innerHTML = `<h2 class="message message--failed">Failed to connect</h2>`;
    setTimeout(() => {
      clearInputs();
      boxLogin.classList.remove('hidden');
      boxMessage.classList.add('hidden');
    }, 2500);
  }
};

export const register = () => {
  boxSignup.classList.add('hidden');
  boxRegistred.classList.remove('hidden');
  toLowerCase();
  if (
    inputSignUpName.value == 0 ||
    inputSignUpUsername.value == 0 ||
    inputSignUppassword.value == 0
  ) {
    boxRegistred.innerHTML = `<h2 class="message message--failed">Complete all inputs</h2>`;
    setTimeout(function () {
      clearInputs();
      boxSignup.classList.remove('hidden');
      boxRegistred.classList.add('hidden');
    }, 2500);
    return;
  } else {
    boxRegistred.innerHTML = `<h2 class="message message--success">${inputSignUpName.value}, you can log in now</h2>`;
    setTimeout(loginLayout, 2500);
  }
  accounts.push({
    name: inputSignUpName.value,
    username: inputSignUpUsername.value,
    password: inputSignUppassword.value,
  });
};
