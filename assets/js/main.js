var iconBtn = document.querySelectorAll('.header-btn__icon');
[...iconBtn].forEach((item, index) => {
  item.onclick = () => {
    if (item.classList.contains('header-btn__icon--active')) {
      item.classList.remove('header-btn__icon--active')
    } else {
      [...iconBtn].forEach((item) => {
        item.classList.remove('header-btn__icon--active')
      });
      item.classList.add('header-btn__icon--active');
    }
  }
})

var tabProduct = document.querySelectorAll('[class*=today-menu__category-]');
var todaySliders = document.querySelectorAll('.today-menu .product-slider');
[...tabProduct].forEach((item, index) => {
  item.onclick = () => {
    [...tabProduct].forEach((item) => {
      item.classList.remove('btn-primary--active');
    });
    [...todaySliders].forEach((item) => {
      item.classList.remove('product-slider--active');
    });
    item.classList.add('btn-primary--active');
    todaySliders[index].classList.add('product-slider--active')
    console.log(todaySliders[index])
  }
});

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

  $('.product-slider2').slick(
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