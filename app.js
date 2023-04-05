
const pluginSlider = (activeSlider) => {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlider].classList.add('active');

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
}

pluginSlider(2);