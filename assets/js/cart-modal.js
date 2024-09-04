
// The `toggleCartModal` function controls the visibility of a cart modal. If the modal is currently displayed (`display === 'block'`), it hides the modal by removing the `show` class, adding the `hide` class, and resetting the body overflow to auto. The modal's display is set to 'none' after a short delay for smooth transition. If the modal is not displayed, it adds the `show` class, removes the `hide` class, sets the body overflow to hidden, and changes the modal's display to 'block', making it visible.
function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal.style.display === 'block') {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = "auto";
    setTimeout(() => modal.style.display = 'none', 100); 
  } else {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = "hidden";
    modal.style.display = 'block';
  }
}
