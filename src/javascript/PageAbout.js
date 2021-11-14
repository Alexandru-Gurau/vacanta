const expandCardText = () => {
  const aboutCard = document.querySelectorAll('.about-story__card');
  const aboutCardText = document.getElementsByClassName('about-story__text');
  const header = document.getElementsByClassName('headerJS');
  const paragraph = document.getElementsByClassName('paragraphJS');

  aboutCard.forEach((el, i) => {
    el.addEventListener('mouseover', function () {
      aboutCardText[i].style.width = '100%';
      header[i].style.display = 'none';
      setTimeout(() => {
        paragraph[i].style.display = 'flex';
      }, 300);
    });
    el.addEventListener('mouseout', function () {
      aboutCardText[i].style.width = '50%';
      header[i].style.display = 'block';
      paragraph[i].style.display = 'none';
    });
  });
};
expandCardText();
