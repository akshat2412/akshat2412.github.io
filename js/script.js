$(".tm-down-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-me-container").offset().top
    }, 2000);
});

console.log(localStorage);
if(localStorage.current_active_nav == undefined) {
    localStorage.current_active_nav = "about-me-nav";
}

$('#' + localStorage.current_active_nav).addClass("active");

$("#about-me-nav, #skills-nav, #projects-nav").click(function() {
    $('#' + localStorage.current_active_nav).removeClass("active");
    $('#' + this.id).addClass("active");
    localStorage.current_active_nav = this.id;
})

