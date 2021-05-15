var iconBtn = document.querySelectorAll('.header-btn__icon');
[...iconBtn].forEach((item) => {
  item.onclick = () => {
    if (!item.classList.contains('modal-visible')) {
      [...iconBtn].forEach((item) => {
        item.querySelector('.header-modal').classList.remove('modal-visible')
      });
      item.querySelector('.header-modal').classList.add('modal-visible');
    } else {
      item.querySelector('.header-modal').classList.remove('modal-visible')
    }
  }
})

$(document).ready(() => {
  $('.banner-slider').slick(
    {
      arrows: false,
      dots: true,
      autoplay: true
    }
  );
});