var Abstract = require('./abstract');

function About() {
    Abstract.apply(this, arguments);
    console.warn('here', $('.swiper-container'), $('.swiper-wrapper'));
    this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        loop: true,
        nextButton: $('.aboutSliderControl').find('.next')[0],
        prevButton: $('.aboutSliderControl').find('.prev')[0]
    });
}

About.prototype = $.extend({constructor: About}, Object.create(Abstract.prototype), {});

module.exports = About;