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

  $('.product-slider').slick(
    {
      slidesToShow: 3,
      prevArrow: '<i class="fas fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right next-arrow"></i>'
    }
  );

  $('.feedback-slider').slick(
    {
      slidesToShow: 3,
      prevArrow: '<i class="fas fa-chevron-left prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right next-arrow"></i>',
      centerMode: true,
      centerPadding: 0
    }
  );

  $('.logos-slider').slick(
    {
      arrows: false,
      slidesToShow: 6,
      dots: true,
      infinite: false
    }
  );
});