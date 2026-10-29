const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let currentIndex = cases.findIndex((el) => el.classList.contains('rotator__case_active'));

  if (currentIndex === -1) {
    currentIndex = 0;
    cases[0].classList.add('rotator__case_active');
  }

  function rotate() {
    const currentCase = cases[currentIndex];

    
    if (currentCase.dataset.color) {
      currentCase.style.color = currentCase.dataset.color;
    }

    
    const speed = parseInt(currentCase.dataset.speed, 10) || 1000;

    setTimeout(() => {
      currentCase.classList.remove('rotator__case_active');

     
      currentIndex = (currentIndex + 1) % cases.length;

      const nextCase = cases[currentIndex];
      nextCase.classList.add('rotator__case_active');

      
      rotate();
    }, speed);
  }

   rotate();
});