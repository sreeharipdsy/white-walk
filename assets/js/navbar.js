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
