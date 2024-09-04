// this code snippet initializes a carousel with `currentIndex` set to 0, indicating the first slide. It selects all elements with the class `carousel-slide` and calculates the total number of slides. The `showSlide` function updates the display to show the current slide based on `currentIndex`, while the `nextSlide` and `prevSlide` functions adjust the index to cycle through slides, wrapping around when reaching the start or end. Initially, it shows the first slide.
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// The `showSlide` function manages the visibility of slides in the carousel. It iterates through all slides and removes the `active` class from each one. For the slide at the specified `index`, it adds the `active` class, ensuring only the current slide is visible while others are hidden. This function effectively controls which slide is displayed based on the provided index.
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
