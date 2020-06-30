//30-06-2020
"use strict";
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevusOnslide = function () {
  function LevusOnslide(slider) {
    _classCallCheck(this, LevusOnslide);

    this.slider = document.querySelector(slider);

    this.slides = this.slider.querySelectorAll('article');

    this.left = this.slider.querySelector('#levus-left');

    this.right = this.slider.querySelector('#levus-right');

    this.length = this.slides.length - 1;

    this.first = this.slides[0];

    this.cnt = 0;
  }

  _createClass(LevusOnslide, [{
    key: "click",
    value: function click() {
      var _this = this;

      this.left.addEventListener('click', function () {
        setTimeout(function () {
          _this.slides.forEach(function (slide) {
            return slide.removeAttribute('class');
          });

          _this.cnt < _this.length ? _this.cnt++ : _this.cnt = 0;

          _this.slides[_this.cnt].classList.add('show');
        }, 500);
      });

      this.right.addEventListener('click', function () {
        setTimeout(function () {
          _this.slides.forEach(function (slide) {
            return slide.removeAttribute('class');
          });

          _this.cnt === 0 ? _this.cnt = _this.length : _this.cnt--;

          _this.slides[_this.cnt].classList.add('show');
        }, 500);
      });
    }
  }, {
    key: "arrow",
    value: function arrow() {
      var _this2 = this;

      this.left.classList.add('hide');
      this.right.classList.add('hide');

      this.slider.addEventListener('mouseover', function () {
        _this2.left.removeAttribute('class');

        _this2.right.removeAttribute('class');
      });

      this.slider.addEventListener('mouseout', function () {
        _this2.left.classList.add('hide');

        _this2.right.classList.add('hide');
      });
    }
  }, {
    key: "autoScroll",
    value: function autoScroll() {
      var _this3 = this;

      setInterval(function () {
        _this3.slides.forEach(function (slide) {
          return slide.removeAttribute('class');
        });

        _this3.cnt < _this3.length ? _this3.cnt++ : _this3.cnt = 0;

        _this3.slides[_this3.cnt].classList.add('show');
      }, 8000);
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.click();

      this.first.classList.add('show');

      this.arrow();

      window.addEventListener('resize', function () {
        return window.innerWidth < 1200 && _this4.autoScroll();
      });
    }
  }]);

  return LevusOnslide;
}();

new LevusOnslide('#levus-slider').init();