function Abstract() {
    this.bindEvents();
}
Abstract.prototype.showPopup = function () {

};
Abstract.prototype.bindEvents = function () {
    console.warn('abstract bind events');
};
module.exports = Abstract;