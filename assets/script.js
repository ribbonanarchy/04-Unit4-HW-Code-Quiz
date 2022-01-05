var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var questionElement = document.querySelector(".question-card");

//Q&A arrays
var questionArray = ["Which tag do we use in HTML for Javascript code/links?", "Which JavaScript method is used to write on browser's console?", "In JavaScript, single line comment begins with what?", "Which property is used to get the length of a string in JavaScript?"];
var answerArray = [["<script>...</script>", "<div>...</div>", "<body>...</body>", "<p>...</p>"], ["console.write()", "console.output()", "console.log()", "console.writeHTML()"], ["#", "//", "/*", "%"], ["len", "strlen", "stringlength", "length"]];

//Score variables
var currentScore = 0;
var highScore = 0;

//Timer variables
var timerCount;
var timer; 

function startQuiz() {
    timerCount = 30;
    startTimer();
    
    questionElement.textContent = questionArray[0];
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