function Abstract() {
    var _this = this;
    this.appendContent();
    $('#mainModal').on('hidden.bs.modal', function () {
        console.warn('here', _this);
        _this.onClose();
    });
}
Abstract.prototype.show = function () {
    $('#mainModal').modal();

};
Abstract.prototype.appendContent = function () {
    this.content.appendTo('#modalContainer');
};
Abstract.prototype.onClose = function () {

};

module.exports = Abstract;