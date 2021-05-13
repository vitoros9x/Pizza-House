var cartModal = document.querySelector('.header-cart__modal')
document.querySelector('.header-btn__icon-cart').onclick = () => {
  cartModal.classList.toggle('modal-visible')
}