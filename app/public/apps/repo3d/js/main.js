/**
 * Created by brillwill on 16/8/22.
 */
var presenter = {};

presenter.show = function (title, url) {
    $("#idPresenterModalLabel").text(title);
    var frame = $("#idPresenterModalFrame");
    frame.attr("src", url);

    $("#idPresenterModal").modal('show');
}