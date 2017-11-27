$("#arrow1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$("#arrow2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});

