var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var questionElement = document.querySelector(".question-card");
var answerList = $("#answer-list");
var a1, a2, a3, a4;
var buttonClicked;

//Q&A array
var questionsArray = [
    {
        question: "Which tag do we use in HTML for Javascript code/links?", 
        options: ["<script>...</script>", "<div>...</div>", "<body>...</body>", "<p>...</p>"],
        answer: "<script>...</script>"
    }, 
    {
        question: "Which JavaScript method is used to write on browser's console?",
        options: ["console.write()", "console.output()", "console.log()", "console.writeHTML()"],
        answer: "console.log()"
    },
    {
        question: "In JavaScript, single line comment begins with what?",
        options: ["#", "//", "/*", "%"],
        answer: "//"
    },
    {
        question: "Which property is used to get the length of a string in JavaScript?",
        options: ["len", "strlen", "stringlength", "length"],
        answer: "length"
    }
];

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
    
    questionElement.textContent = questionsArray[0].question;

    for(var i=0; i<4; i++) {
        a1 = document.createElement('button');
        a1.textContent = questionsArray[0].options[i];
        a1.setAttribute("class", "answer-button");
        questionElement.appendChild(a1);
    }
    
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount; 
        if(timerCount === 0) {
            clearInterval(timer);
            startButton.disabled = false;
        }
    }, 1000);
}

function answerQ(event) {
    buttonClicked = event.target;
    console.log(buttonClicked.textContent);
    questionElement.innerHTML = '';
}

startButton.addEventListener('click', startQuiz);
answerList.on('click', '.answer-button', answerQ);