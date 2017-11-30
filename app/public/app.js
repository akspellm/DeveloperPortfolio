$("document").ready(function() {

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

$("#arrow3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});

$("#connect-form").on("submit", function(event) {
    event.preventDefault();
    var name = $("#user-name").val().trim();
    var email= $("#user-email").val().trim();
    var phone= $("#user-phone").val().trim();
    var message= $("#user-message").val().trim();

    var communication = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    var currentURL = window.location.origin;

    $.ajax({
        method: "POST",
        url: "/api/email",
        data: communication
    }).done(function(data) {
        $("#connect-form").attr("class", "d-none");
        $("#connect-text").append("<h4>").text("Thanks for your email! I'll get back to you shortly.")
    })
})


function sendForm(data) {
    $.ajax({
      method: "PUT",
      url: "/api/email",
      data: data
    }).done(response);
  }

})
