var daysel = document.getElementById("days");
var hoursel = document.getElementById("hours");
var minutesel = document.getElementById("minutes");
var secondsel = document.getElementById("seconds");

const newYears = "25 May 2021";

function countdown () {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec = (newYearDate - currentDate) / 1000;


    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec) % 60;

    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minutesel.innerHTML = min;
    secondsel.innerHTML = sec;

}

countdown();

setInterval(countdown, 1000);
