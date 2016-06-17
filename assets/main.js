$(function() {
    $.scrollify({
        section : ".section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
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
    $("#home_s").click(function() {
        $.scrollify.move("#home");
        return false;
    });
    $("#about_s").click(function() {
        $.scrollify.move("#about");
        return false;
    });
    $("#projects_s").click(function() {
        $.scrollify.move("#projects");
        return false;
    });
    $("#resume_s").click(function() {
        $.scrollify.move("#resume");
        return false;
    });
});