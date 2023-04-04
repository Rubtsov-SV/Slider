const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active');
  })
};

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    if (slide.classList.contains('active')) {
      slide.classList.remove('active');
    };
  });
}