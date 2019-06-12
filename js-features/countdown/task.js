const addTimer = function() {
    const timerHour = document.getElementById("timerHour");
    const timerMinute = document.getElementById("timerMinute");
    const timerSecond = document.getElementById("timerSecond");
    const endTimer = false;
    
    if (timerSecond > 0) {
        timerSecond.textContent -= 1;
        } else {
            timerSecond = 59;

            if (timerMinute > 0) timerMinute.textContent -= 1;
            else {
                timerMinute = 59;

                if (timerHour > 0) timerHour.textContent -= 1;
                else end = true;
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