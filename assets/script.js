var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var questionElement = document.querySelector(".question-card");
var ans1Element = document.querySelector("#a1");
var ans2Element = document.querySelector("#a2");
var ans3Element = document.querySelector("#a3");
var ans4Element = document.querySelector("#a4");
var a1, a2, a3, a4;

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
    startButton.disabled = true;
    
    questionElement.textContent = questionArray[0];

    a1 = document.createElement('button');
    a2 = document.createElement('button');
    a3 = document.createElement('button');
    a4 = document.createElement('button');

    a1.textContent = answerArray[0][0];
    a1.setAttribute("class", "answer-button");
    a2.textContent = answerArray[0][1];
    a2.setAttribute("class", "answer-button");
    a3.textContent = answerArray[0][2];
    a3.setAttribute("class", "answer-button");
    a4.textContent = answerArray[0][3];
    a4.setAttribute("class", "answer-button");


    questionElement.append(a1);
    questionElement.append(a2);
    questionElement.append(a3);
    questionElement.append(a4);
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