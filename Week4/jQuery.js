$(document).ready(function() {


    // =========================
    // GET & SET
    // =========================


    // Show Name
    $("#show-name").click(function() {

        var name = $("#student-name").text();

        $("#output").text(name);

    });


    // Change Name
    $("#change-name").click(function() {

    var name = $("#nickname-input").val();

    $("#student-name").text(name);

    $("#output").text("Name changed to: " + name);

});


    // Show Bio
    $("#show-bio").click(function() {

        var bio = $("#student-bio").html();

        $("#output").text(bio);

    });


    // Get Input
    $("#get-input").click(function() {

        var nickname = $("#nickname-input").val();

        $("#output").text("Your nickname is: " + nickname);

    });


    // Set Input
    $("#set-input").click(function() {

        $("#nickname-input").val("jQuery Pro");

        $("#output").text("Input changed to: jQuery Pro");

    });



    // =========================
    // CSS CLASSES
    // =========================


    // Add Highlight
    $("#highlight-card").click(function() {

        $("#profile-card").addClass("highlighted");

        $("#output").text("Highlight added!");

    });


    // Remove Highlight
    $("#remove-highlight").click(function() {

        $("#profile-card").removeClass("highlighted");

        $("#output").text("Highlight removed!");

    });


    // Toggle Dark Mode
    $("#dark-mode").click(function() {

        $("#profile-card").toggleClass("dark-mode");

        $("#output").text("Dark mode toggled!");

    });


    // Toggle Rounded
    $("#rounded").click(function() {

        $("#profile-photo").toggleClass("rounded");

        $("#output").text("Rounded class toggled!");

    });



    // =========================
    // CSS METHOD
    // =========================


    // Red Background
    $("#red-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "#e74c3c"
        );

        $("#output").text("Background changed to red!");

    });


    // Reset Background
    $("#reset-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "white"
        );

        $("#output").text("Background reset!");

    });



    // =========================
    // HIDE & SHOW
    // =========================


    // Hide Photo
    $("#hide-photo").click(function() {

        $("#profile-photo").hide("slow");

        $("#output").text("Photo hidden!");

    });


    // Show Photo
    $("#show-photo").click(function() {

        $("#profile-photo").show("slow");

        $("#output").text("Photo shown!");

    });


    // Toggle Bio
    $("#toggle-bio").click(function() {

        $("#student-bio").toggle();

        $("#output").text("Bio toggled!");

    });



    // =========================
    // FADE
    // =========================


    // Fade Out
    $("#fade-out").click(function() {

        $("#profile-card").fadeOut();

        $("#output").text("Card faded out!");

    });


    // Fade In
    $("#fade-in").click(function() {

        $("#profile-card").fadeIn();

        $("#output").text("Card faded in!");

    });


    // Fade to 50%
    $("#fade-50").click(function() {

        $("#profile-card").fadeTo(
            "slow",
            0.5
        );

        $("#output").text("Card opacity is now 50%!");

    });



    // =========================
    // SLIDE
    // =========================


    // Slide Up
    $("#slide-up").click(function() {

        $("#skills-list").slideUp();

        $("#output").text("Skills hidden!");

    });


    // Slide Down
    $("#slide-down").click(function() {

        $("#skills-list").slideDown();

        $("#output").text("Skills shown!");

    });


    // Slide Toggle
    $("#slide-toggle").click(function() {

        $("#skills-list").slideToggle();

        $("#output").text("Skills toggled!");

    });



    // =========================
    // ANIMATE
    // =========================


    $("#animate-card").click(function() {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

        $("#output").text("Card animated!");

    });



    // =========================
    // EVENTS
    // =========================


    // Mouse enters photo
    $("#profile-photo").mouseenter(function() {

        $("#profile-photo").addClass("shadow");

        $("#output").text("Mouse entered the photo!");

    });


    // Mouse leaves photo
    $("#profile-photo").mouseleave(function() {

        $("#profile-photo").removeClass("shadow");

        $("#output").text("Mouse left the photo!");

    });


    // Key pressed
    $("#nickname-input").keydown(function(event) {

        $("#output").text(
            "You pressed: " + event.key
        );

    });

});