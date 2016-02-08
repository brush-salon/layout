var Abstract = require('./abstract');
var Swiper = require('swiper/dist/js/swiper.js')

function Press(options) {
    Abstract.apply(this, arguments);
    this.slide = options.slide;
}

Press.prototype = $.extend({constructor: Press}, Object.create(Abstract.prototype), {
    content: $('#pressModal'),
    show: function () {
        Abstract.prototype.show.apply(this, arguments);
        this.createSlider();
    },
    onClose: function () {
        console.warn(this);
        if (this.swiper)
            this.swiper.destroy(false, true);
    },
    createSlider: function () {
        this.swiper = new Swiper('.swiper-container', {
            speed: 400,
            nextButton: $('#arrowControls').find('.next')[0],
            prevButton: $('#arrowControls').find('.prev')[0]
        });
        this.swiper.slideTo(this.slide);
    }
});

module.exports = Press;