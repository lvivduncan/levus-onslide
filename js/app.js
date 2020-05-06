// обгортка
const slider = document.querySelector('#levus-slider');

// елементи
const slides = document.querySelectorAll('#levus-slider article');

// вліво
const left = document.querySelector('#levus-left');

// вправо
const right = document.querySelector('#levus-right');

// лічильник
let cnt = 0;

// кількість елементів
const length = slides.length - 1;

// клік на ліву кнопку
left.addEventListener('click', () => {
  setTimeout(() => {    
    slides.forEach(slide => slide.removeAttribute('class'));
    if(cnt < length) cnt++;
    else cnt = 0;
    slides[cnt].classList.add('show');
  }, 500);
});

// клік на праву кнопку
right.addEventListener('click', () => {
  setTimeout(() => {    
    slides.forEach(slide => slide.removeAttribute('class'));
    if(cnt === 0) cnt = length;
    else cnt--;
    slides[cnt].classList.add('show');
  }, 500);
});