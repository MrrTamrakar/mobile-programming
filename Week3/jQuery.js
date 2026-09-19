$(document).ready(function() {

    $("#show-name").click(function() {

        var name = $("#student-name").text();

        $("#output").text(name);

    });

    $("#change-name").click(function() {

    var name = $("#nickname-input").val();

    $("#student-name").text(name);

    $("#output").text("Name changed to: " + name);

});

    $("#show-bio").click(function() {

        var bio = $("#student-bio").html();

        $("#output").text(bio);

    });

    $("#get-input").click(function() {

        var nickname = $("#nickname-input").val();

        $("#output").text("Your nickname is: " + nickname);

    });

    $("#set-input").click(function() {

        $("#nickname-input").val("jQuery Pro");

        $("#output").text("Input changed to: jQuery Pro");

    });

    $("#highlight-card").click(function() {

        $("#profile-card").addClass("highlighted");

        $("#output").text("Highlight added!");

    });

    $("#remove-highlight").click(function() {

        $("#profile-card").removeClass("highlighted");

        $("#output").text("Highlight removed!");

    });

    $("#dark-mode").click(function() {

        $("#profile-card").toggleClass("dark-mode");

        $("#output").text("Dark mode toggled!");

    });

    $("#rounded").click(function() {

        $("#profile-photo").toggleClass("rounded");

        $("#output").text("Rounded class toggled!");

    });

    $("#red-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "#e74c3c"
        );

        $("#output").text("Background changed to red!");

    });

    $("#reset-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "white"
        );

        $("#output").text("Background reset!");

    });

    $("#hide-photo").click(function() {

        $("#profile-photo").hide("slow");

        $("#output").text("Photo hidden!");

    });

    $("#show-photo").click(function() {

        $("#profile-photo").show("slow");

        $("#output").text("Photo shown!");

    });

    $("#toggle-bio").click(function() {

        $("#student-bio").toggle();

        $("#output").text("Bio toggled!");

    });

    $("#fade-out").click(function() {

        $("#profile-card").fadeOut();

        $("#output").text("Card faded out!");

    });


    $("#fade-in").click(function() {

        $("#profile-card").fadeIn();

        $("#output").text("Card faded in!");

    });

    $("#fade-50").click(function() {

        $("#profile-card").fadeTo(
            "slow",
            0.5
        );

        $("#output").text("Card opacity is now 50%!");

    });

    $("#slide-up").click(function() {

        $("#skills-list").slideUp();

        $("#output").text("Skills hidden!");

    });

    $("#slide-down").click(function() {

        $("#skills-list").slideDown();

        $("#output").text("Skills shown!");

    });

    $("#slide-toggle").click(function() {

        $("#skills-list").slideToggle();

        $("#output").text("Skills toggled!");

    });

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

    $("#profile-photo").mouseenter(function() {

        $("#profile-photo").addClass("shadow");

        $("#output").text("Mouse entered the photo!");

    });

    $("#profile-photo").mouseleave(function() {

        $("#profile-photo").removeClass("shadow");

        $("#output").text("Mouse left the photo!");

    });

    $("#nickname-input").keydown(function(event) {

        $("#output").text(
            "You pressed: " + event.key
        );
    });
});