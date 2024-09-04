// This JavaScript code listens for the `DOMContentLoaded` event to ensure the document is fully loaded before executing. It then selects the `.navbar` element and calculates the height of the `.section-two` element. On scrolling, it checks if the vertical scroll position (`window.scrollY`) exceeds the height of the `.section-two` element. If it does, it adds the `scrolled` class and removes the `transparent` class from the navbar. If the scroll position is within the height of `.section-two`, it reverses the process, effectively changing the navbar's appearance based on the scroll position.
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var heroSectionHeight = document.querySelector('.section-two').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroSectionHeight) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    });
});
