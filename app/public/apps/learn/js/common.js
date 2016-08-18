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
        setNavActive();
    });
}

function setNavActive() {
    var reg = /day([0-9])/i;
    var match = reg.exec(window.location.href);
    if (match && match[1]) {
        var index = match[1] - 1;
        $("header nav ul.daylist li:eq(" + index +")").addClass("active");
    }
}

function populateFooter() {
    var url = "html/foot.html";
    if (pagePath){
        url = pagePath + url;
    }

    $.get(url, function (data) {
        $("footer").replaceWith(data);
    });
}

function onDay(day) {
    var url = "day"+day+"/main.html";
    if (pagePath){
        url = pagePath + url;
    }

    window.location.href = url;
}

function onContents() {
    if (pagePath) {
        window.location.href = pagePath;
    }
}

function commonDOMInitWithPagePath(path) {
    pagePath = path;

    populateHeader();
    populateFooter();
}