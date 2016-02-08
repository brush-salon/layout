require('../less/main.less');
require('bootstrap/js/modal');


var PressPage = require('./pages/press.js');
var AboutPage = require('./pages/about.js');

var PressModal = require('./modal/press.js');

function PageController(page, layout) {
    this.pages = {
        press: PressPage,
        about: AboutPage
    };
    this.layouts = {
        layout: function () {
        }
    };
    this.modals = {
        press: PressModal,
    };
    this.layout = new this.layouts[layout];
    this.page = new this.pages[page];
}

PageController.prototype.showModal = function (modal, options) {
    if (this.modals[modal]) {
        this.modal = new this.modals[modal](options);
    }
    this.modal.show();
};

window.page = new PageController(window.url, 'layout');