// MODAL ABOUT
const modalAbout = document.querySelector('#modalAbout');
export const btnAbout = document.getElementById('btn-more-about');
export const btnAboutClose = document.getElementById('btn-closeModalAbout');

function openModalAbout() {
  modalAbout.classList.remove('hidden');
}
function closeModalAbout() {
  modalAbout.classList.add('hidden');
}
// MODAL ABOUT
btnAbout.addEventListener('click', openModalAbout);
btnAboutClose.addEventListener('click', closeModalAbout);
// //////////////////////////////////////////////////////

// MODAL EXAMPLE
const modalExample = document.querySelector('#modalExample');
export const btnExample = document.getElementById('btn-more-example');
export const btnExampleClose = document.getElementById('btn-closeModalExample');

function openModalExample() {
  modalExample.classList.remove('hidden');
}
function closeModalExample() {
  modalExample.classList.add('hidden');
}

// MODAL EXAMPLE
btnExample.addEventListener('click', openModalExample);
btnExampleClose.addEventListener('click', closeModalExample);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModalAbout();
    closeModalExample();
  }
});
