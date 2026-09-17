document.getElementById("start-animation").addEventListener("click", function() {

    var box = document.getElementById("box");

    box.style.backgroundColor = "red";

    box.style.transition = "all 1s";

    box.style.left = "450px";
    box.style.backgroundColor = "blue";

    setTimeout(function() {
        box.style.top = "250px";
        box.style.backgroundColor = "green";
    }, 1000);

    setTimeout(function() {
        box.style.left = "0px";
        box.style.backgroundColor = "orange";
    }, 2000);

    setTimeout(function() {
        box.style.top = "0px";
        box.style.backgroundColor = "red";
    }, 3000);

});