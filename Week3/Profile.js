$(document).ready(function() {

    $("#qrButton").click(function() {
        $("#qrBox").show();
    });

    $("#closeButton").click(function() {
        $("#qrBox").hide();
    });

    $(".profile-card").mouseenter(function() {
        $(this).css("background-color", "lightblue");
    });

    $(".profile-card").mouseleave(function() {
        $(this).css("background-color", "white");
    });

});