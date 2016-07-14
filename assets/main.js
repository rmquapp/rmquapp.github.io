 $(function() {
    $.scrollify({
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
});

$(function () {
    $("#home-s").click(function() {
        $.scrollify.move("#home");
        return false;
    });
    $("#about-s").click(function() {
        $.scrollify.move("#about");
        return false;
    });
    $("#projects-s").click(function() {
        $.scrollify.move("#projects");
        return false;
    });
    $("#resume-s").click(function() {
        $.scrollify.move("#resume");
        return false;
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if (window.location.hash == "#resume") {
            setTimeout(function() {
                document.getElementById("bottom").style.visibility = "visible";
            }, 400);
        }
        else {
            setTimeout(function() {
                document.getElementById("bottom").style.visibility = "hidden";
            }, 5);
        }
    });
});