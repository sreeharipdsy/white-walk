// document.addEventListener('DOMContentLoaded', () => {
//     const carouselImages = document.querySelector('.carousel-images');
//     const images = document.querySelectorAll('.carousel-images img');
//     const leftNav = document.querySelector('.left-nav');
//     const rightNav = document.querySelector('.right-nav');

//     let currentIndex = 0;
//     const totalImages = images.length;
//     let autoSlideInterval;

//     function startAutoSlide() {
//         autoSlideInterval = setInterval(showNextImage, 1500);
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//     }

//     function showNextImage() {
//         currentIndex = (currentIndex + 1) % totalImages;
//         updateCarousel();
//     }

//     function showPrevImage() {
//         currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//         updateCarousel();
//     }

//     function updateCarousel() {
//         const translateXValue = -currentIndex * 100;
//         carouselImages.style.transform = `translateX(${translateXValue}%)`;
//     }

//     leftNav.addEventListener('click', showPrevImage);
//     rightNav.addEventListener('click', showNextImage);

//     const carousel = document.querySelector('.carousel');
//     carousel.addEventListener('mouseover', stopAutoSlide);
//     carousel.addEventListener('mouseout', startAutoSlide);

//     startAutoSlide();
// });


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

setInterval(nextSlide, 2000);
