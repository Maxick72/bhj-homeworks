const reveals = document.querySelectorAll('.reveal');

function checkReveals() {
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();

    // Элемент считается видимым, когда его верхняя граница поднялась выше низа экрана,
    // а нижняя граница ещё не ушла за верхнюю границу экрана
    if (top < windowHeight && bottom > 0) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

// Отслеживаем событие скролла
window.addEventListener('scroll', checkReveals);

// Проверяем элементы при первой загрузке страницы
checkReveals();