const expandCardText = () => {
  const aboutCard = document.querySelectorAll('.about-story__card');
  const aboutCardText = document.getElementsByClassName('about-story__text');
  const header = document.getElementsByClassName('headerJS');
  const paragraph = document.getElementsByClassName('paragraphJS');

  aboutCard.forEach((el, i) => {
    el.addEventListener('mouseover', function () {
      aboutCardText[i].style.width = '100%';
      header[i].style.display = 'none';
      setTimeout(function () {
        paragraph[i].classList.remove('p-hidden');
      }, 300);
    });
    el.addEventListener('mouseout', function () {
      aboutCardText[i].style.width = '40%';
      header[i].style.display = 'block';
      paragraph[i].classList.add('p-hidden');
    });
  });
};
expandCardText();
