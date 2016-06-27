/**
 * Created by brillwill on 16/6/27.
 */

var pagePath = null;

function setPagePath(path) {
    pagePath = path;
}

function populateHeader() {
    var url = "html/head.html";
    if (pagePath){
        url = pagePath + url;
    }

    $.get(url, function (data) {
        $("header").replaceWith(data);
    });
}

function populateFooter() {
    var url = "html/foot.html";
    if (pagePath){
        url = pagePath + url;
    }

    $("footer").load(url);
}

function onDay(day) {
    var url = "day"+day+"/main.html";
    if (pagePath){
        url = pagePath + url;
    }

    window.location.href = url;
}
