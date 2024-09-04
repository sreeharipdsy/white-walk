// window.onscroll Function: This function is triggered whenever the user scrolls. It checks if the vertical scroll position of the page is greater than 300 pixels. If so, it adds the show class to the scroll-to-top button, making it visible. If the scroll position is less than or equal to 300 pixels, it removes the show class, hiding the button.
window.onscroll = function () {
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
};

// scrollToTop Function: This function scrolls the window to the top smoothly when called. It uses the window.scrollTo method with the top property set to 0 and behavior set to smooth to ensure a smooth scrolling effect.
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
