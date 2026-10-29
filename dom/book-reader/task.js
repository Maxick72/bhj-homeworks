const book = document.getElementById('book');


const fontControls = document.querySelectorAll('.font-size');

fontControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    
    fontControls.forEach((btn) => btn.classList.remove('font-size_active'));
    control.classList.add('font-size_active');


    book.classList.remove('book_fs-big', 'book_fs-small');


    const size = control.dataset.size;
    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});


const textColorControls = document.querySelectorAll('[data-text-color]');
textColorControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    textColorControls.forEach((btn) => btn.classList.remove('color_active'));
    control.classList.add('color_active');

    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

    const color = control.dataset.textColor;
    if (color) {
      book.classList.add(`book_color-${color}`);
    }
  });
});

const bgColorControls = document.querySelectorAll('[data-bg-color]');
bgColorControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    bgColorControls.forEach((btn) => btn.classList.remove('color_active'));
    control.classList.add('color_active');

    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

    const bg = control.dataset.bgColor;
    if (bg) {
      book.classList.add(`book_bg-${bg}`);
    }
  });
});