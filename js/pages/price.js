var Abstract = require('./abstract');

function Price() {
    Abstract.apply(this, arguments);

}

Price.prototype = $.extend({constructor: Price}, Object.create(Abstract.prototype), {
    bindEvents: function () {
        var _this = this;
        $('.price-toggle-contoller').click(function (elem) {
            var target = $(elem.currentTarget).data('target');
            $(target).toggle();
        });
    },
});

module.exports = Price;