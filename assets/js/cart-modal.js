
// document.addEventListener('DOMContentLoaded', () => {
//     const cartModal = document.getElementById('cart-modal');
//     const closeModalButton = document.querySelector('.modal .close');
//     const cartIcon = document.getElementById('cart-icon');
//     cartIcon.addEventListener('click', () => {
//         cartModal.style.display = 'block';
//     });
//     closeModalButton.addEventListener('click', () => {
//         cartModal.style.display = 'none';
//     });
//     window.addEventListener('click', (event) => {
//         if (event.target === cartModal) {
//             cartModal.style.display = 'none';
//         }
//     });
// });

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}
