// обгортка
const slider = document.querySelector('#levus-slider');

// елементи
const slides = slider.querySelectorAll('article');

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

// показуємо стрілочки при завантаженні
document.addEventListener('DOMContentLoaded', () => {
  if(window.innerWidth > 1200){
    hideArrow();
  } else {
    showArrow();
  }
});

// показуємо при зміні розміру екрану
window.addEventListener('resize', () => {
  if(window.innerWidth > 1200){
    hideArrow();
  } else {
    showArrow();
  }
});

// сховати стрілки
function hideArrow(){

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

// показати стрілки
function showArrow(){
  left.removeAttribute('class');
  right.removeAttribute('class');
}