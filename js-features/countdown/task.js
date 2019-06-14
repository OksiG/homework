let timerHour = document.getElementById("timerHour");
let timerMinute = document.getElementById("timerMinute");
let timerSecond = document.getElementById("timerSecond");
let endTimer = false;

const addTimer = function() {    
    if ( timerSecond > 0) {
    timerSecond.textContent --;
    } else {
        timerSecond.textContent = 59;
        if (timerMinute > 0) {
            timerMinute.textContent --;
        } else {
            timerMinute.textContent = 59;
            if (timerHour > 0) {
                timerHour.textContent --;
            } else {
                endTimer = true;
            }
        }
    }
}

if (endTimer) {
    clearInterval(intervalID);
    alert("Вы победили в конкурсе!");
} else {
    document.getElementById("timerHour") = timerHour;
    document.getElementById("timerMinute") = timerMinute;
    document.getElementById("timerSecond") = timerSecond;
}

window.intervalID = setInterval(addTimer, 1000);