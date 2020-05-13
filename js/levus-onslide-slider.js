{
  'use strict';

  // обгортка
  const slider = document.querySelector('#levus-slider');

  // якщо слайдер існує, тоді робимо все решта
  if (slider !== undefined || slider !== null) {
    // елементи
    const slides = slider.querySelectorAll('article');

    // 1 елемент
    const first = slides[0];

    // вліво
    const left = slider.querySelector('#levus-left');

    // вправо
    const right = slider.querySelector('#levus-right');

    // лічильник
    let cnt = 0;

    // кількість елементів
    const length = slides.length - 1;

    // клік на ліву кнопку
    left.addEventListener('click', () => {
      setTimeout(() => {
        slides.forEach(slide => slide.removeAttribute('class'));
        cnt < length ? cnt++ : cnt = 0;
        slides[cnt].classList.add('show');
      }, 500);
    });

    // клік на праву кнопку
    right.addEventListener('click', () => {
      setTimeout(() => {
        slides.forEach(slide => slide.removeAttribute('class'));
        cnt === 0 ? cnt = length : cnt--;
        slides[cnt].classList.add('show');
      }, 500);
    });

    // показуємо стрілочки при завантаженні
    document.addEventListener('DOMContentLoaded', () => window.innerWidth < 1200 ? autoScroll() : hideArrow());

    // присвоюємо клас 1 елементу
    document.addEventListener('DOMContentLoaded', () => first.classList.add('show'));

    // показуємо при зміні розміру екрану
    window.addEventListener('resize', () => window.innerWidth < 1200 ? autoScroll() : hideArrow());

    // сховати стрілки
    function hideArrow() {

      // ховаємо
      left.classList.add('hide');
      right.classList.add('hide');

      // показати стрілки при наведенні на слайдер
      slider.addEventListener('mouseover', () => {
        left.removeAttribute('class');
        right.removeAttribute('class');
      });

      // сховати стрілки
      slider.addEventListener('mouseout', () => {
        left.classList.add('hide');
        right.classList.add('hide');
      });
    }

    // автоскрол на мобільних + приховати стрілки
    function autoScroll() {
      setInterval(() => {
        slides.forEach(slide => slide.removeAttribute('class'));
        cnt < length ? cnt++ : cnt = 0;
        slides[cnt].classList.add('show');
      }, 8000);
    }
  }
}