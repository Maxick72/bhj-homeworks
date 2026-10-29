const reveals = document.querySelectorAll('.reveal');

function checkReveals() {
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();

    
    if (top < windowHeight && bottom > 0) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveals);


checkReveals();