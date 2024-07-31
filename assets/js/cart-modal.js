
// function toggleCartModal() {
//     const modal = document.getElementById('cart-modal');
//     modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
// }
function toggleCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal.style.display === 'block') {
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => modal.style.display = 'none', 100); // Wait for the animation to finish
  } else {
    modal.classList.remove('hide');
    modal.classList.add('show');
    modal.style.display = 'block';
  }
}