const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const arrowLeft = document.querySelector('.carousel-arrow-left');
const arrowRight = document.querySelector('.carousel-arrow-right');
let currentIndex = 0;

// Set initial position of slide
carouselSlide.style.transform = `translateX(-${currentIndex * (100/3)}%)`;

// Add event listeners to arrow buttons
arrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselSlide.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
  }
});

arrowRight.addEventListener('click', () => {
  if (currentIndex < carouselImages.length - 3) {
    currentIndex++;
    carouselSlide.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
  }
});
