//12-08-2020

class LevusOnslide {
    constructor(slider) {
        // слайдер
        this.slider = document.querySelector(slider);
        // слайди
        this.slides = this.slider.querySelectorAll('article');
        // вліво
        this.left = this.slider.querySelector('#levus-left');
        // вправо
        this.right = this.slider.querySelector('#levus-right');
        // кількість слайдів
        this.length = this.slides.length - 1;
        // 1 слайд
        this.first = this.slides[0];
        // лічильник
        this.cnt = 0;
    }

    // клік на кпоку вправо/вліво
    click() {
        // клік на ліву
        this.left.addEventListener('click', () => {
            setTimeout(() => {
                this.slides.forEach(slide => slide.removeAttribute('class'));
                this.cnt < this.length ? this.cnt++ : this.cnt = 0;
                this.slides[this.cnt].classList.add('show');
            }, 500);
        });

        // клік на праву кнопку
        this.right.addEventListener('click', () => {
            setTimeout(() => {
                this.slides.forEach(slide => slide.removeAttribute('class'));
                this.cnt === 0 ? this.cnt = this.length : this.cnt--;
                this.slides[this.cnt].classList.add('show');
            }, 500);
        });
    }

    arrow() {
        // ховаємо
        this.left.classList.add('hide');
        this.right.classList.add('hide');

        // показати стрілки при наведенні на слайдер
        this.slider.addEventListener('mouseover', () => {
            this.left.removeAttribute('class');
            this.right.removeAttribute('class');
        });

        // сховати стрілки
        this.slider.addEventListener('mouseout', () => {
            this.left.classList.add('hide');
            this.right.classList.add('hide');
        });
    }

    autoScroll() {
        setInterval(() => {
            this.slides.forEach(slide => slide.removeAttribute('class'));
            this.cnt < this.length ? this.cnt++ : this.cnt = 0;
            this.slides[this.cnt].classList.add('show');
        }, 8000);
    }

    init() {
        this.click();

        // присвоюємо клас 1 елементу
        this.first.classList.add('show');

        // показуємо стрілочки при завантаженні
        this.arrow();

        // автоскрол на всі екранах
        this.autoScroll();
    }
}

new LevusOnslide('#levus-slider').init();