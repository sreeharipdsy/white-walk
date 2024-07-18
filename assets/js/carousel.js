
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
};

document.querySelector('.nav.next').addEventListener('click', nextSlide);
document.querySelector('.nav.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 2500);
