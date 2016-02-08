var Abstract = require('./abstract');

function Press() {
    Abstract.apply(this, arguments);
}

Press.prototype = $.extend({constructor: Press}, Object.create(Abstract.prototype), {
    bindEvents: function () {
        var _this = this;
        $('.showPopupButton').click(function () {
            console.warn($(this), $(this).data('slide'));
            _this.showPopup($(this).data('slide'));
        });
    },
    showPopup: function (slide) {
        window.page.showModal('press', {slide: slide});
    }
});

module.exports = Press;