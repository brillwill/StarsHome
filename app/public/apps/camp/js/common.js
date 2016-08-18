/**
 * Created by brillwill on 16/6/27.
 */

function populateHeader() {
    var url = "html/head.html";

    $.get(url, function (data) {
        $("header").replaceWith(data);
    });
}

function populateFooter() {
    var url = "html/foot.html";
    $.get(url, function (data) {
        $("footer").replaceWith(data);
    });
}

function onPart(part) {
    var url = "html/page" + part + ".html";
    $.get(url, function (data) {
        $("#idCampBodyContent").empty().append(data);
    });

    $("header nav ul.daylist li").removeClass("active");
    if (part > 0) {
        var index = part - 1;
        $("header nav ul.daylist li:eq(" + index + ")").addClass("active");
    }
}

function onPageClicked(page) {
    var url = window.location.href;
    if (url.match(/page=/)){
        url = url.replace(/\?page=(\d)/, "?page="+page);
    }else{
        url = url + "?page=" + page;
    }

    window.location.href = url;
}

$(function () {
    populateHeader();
    populateFooter();

    var reg = /\?page=(\d)/;
    var result = window.location.href.match(reg);
    if (result) {
        onPart(result[1]);
    }
    else {
        onPart(0);
    }
});