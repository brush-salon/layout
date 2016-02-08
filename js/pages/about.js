var Abstract = require('./abstract');

function About() {
    Abstract.apply(this, arguments);
    $('.aboutSlider').slick({
        dots: false,
        infinity: true,
        centerMode: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        appendArrows: '.aboutSliderControl',
        prevArrow: '<a href="#" class="i-row1 i-row1__prev"></a>',
        nextArrow: '<a href="#" class="i-row1 i-row1__next"></a>',
    });
    console.warn('here');
}

About.prototype = $.extend({constructor: About}, Object.create(Abstract.prototype), {});

module.exports = About;