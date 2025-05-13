let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalSlides = 1;
  if (currentIndex >= totalSlides) currentIndex = 1;

  slides.style.transform = `translateX(-${currentIndex * 600}px)`;
}
