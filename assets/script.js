var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");

var timerCount;
var timer; 

function startQuiz() {
    timerCount = 30;
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount; 
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);