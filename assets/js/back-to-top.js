
window.onscroll = function() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
