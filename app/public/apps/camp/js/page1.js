/**
 * Created by brillwill on 16/7/22.
 */
var page1 = {};

//data


//functions
page1.handleMinutesDetail = function (param) {
    var url = 'html/page1sub/m'+param+'.html';
    $.get(url, function (data) {
        $("#idPage1MinutesBodyDiv").empty().append(data);
    });

    $('#idPage1ModalLabel').text("讨论记录 - "+param);

    $("#idPage1MinutesModal").modal('show');
}
