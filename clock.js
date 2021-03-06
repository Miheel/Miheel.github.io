'use strict';
// Set the date we're counting down to"Jan 27, 2021 02:56:30"
var countDownDate = new Date("dec 31, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="clock"
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timecount").style.opacity = 0;
        document.getElementById("result").style.opacity = 1;
        document.getElementById("yearupt").style.opacity = 1;
        document.getElementById("finished").style.opacity = 0;

        document.getElementById("clock").innerHTML = "One more year";
	}
}, 1000);