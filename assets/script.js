var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var scoreElement = document.querySelector("#score-count");
var questionElement = document.querySelector(".question-card");
var answerList = $("#answer-list");
var a1;
var index = 0;
var score = 0;
var buttonClicked;
var winFlag = false;
var initials;

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
        answer: "console.log()",
        ready: false
    },
    {
        question: "In JavaScript, single line comment begins with what?",
        options: ["#", "//", "/*", "%"],
        answer: "//",
        ready: false
    },
    {
        question: "Which property is used to get the length of a string in JavaScript?",
        options: ["len", "strlen", "stringlength", "length"],
        answer: "length",
        ready: false
    }
];

//Score variables
var currentScore = 0;
var highScore = 0;

//Timer variables
var timerCount = 30;
var timer; 

function startQuiz() {
    // Start the timer and make it so that it cannot be clicked again
    // timerCounter = 30;
    startTimer();
    startButton.disabled = true;
    
    //First Q: populate question, populate answer buttons, listen for click
    questionElement.textContent = questionsArray[index].question;
    populateAnswers(index);
    //This answerQ function will populate each question until the last one, at which point the field will be cleared
    answerList.on('click', '.answer-button', answerQ);


}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount; 
        if(timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function answerQ(event) {
    if(index == questionsArray.length) {
        
        return;
    }
    buttonClicked = event.target;
    console.log(buttonClicked.textContent);
    if(buttonClicked.textContent == questionsArray[index].answer){
        score++;
        scoreElement.textContent = score;
    } else {
        //5 second penalty for wrong answers
        timerCount-=5;
    }
    console.log(score);
    
    //Update the global index and re-populate questions (checking to make sure we don't go past last question object)
    if(index < questionsArray.length-1){
        index++;
        console.log(index);
        questionElement.textContent = questionsArray[index].question;
        populateAnswers(index);
    } else if(index == questionsArray.length-1) {
        winFlag = true;
        //Score is questions answered correctly plus the time left, add it before reducing time to trigger endQuiz
        score+=timerCount;
        timerCount = 1;
    }
}

function populateAnswers(index) {
    if(index == questionsArray.length) {
        return;
    }
    
    for(var i=0; i<4; i++) {
        a1 = document.createElement('button');
        a1.textContent = questionsArray[index].options[i];
        a1.setAttribute("class", "answer-button button"+i);
        questionElement.appendChild(a1);
    }
}

function endQuiz() {
    if(winFlag) {
        questionElement.textContent = 'SUCCESS! Good job. Your score is: ' + score + '. Enter your initials to save your score: ';
    } else {
        questionElement.textContent = 'Drats! Time is up. Your score is: ' + score + '. Enter your initials to save your score: ';
    }

    initials = document.createElement('INPUT');
    initials.setAttribute("type", "text");
    questionElement.appendChild(initials);
    var submit = document.createElement('INPUT');
    submit.setAttribute("type", "submit");
    questionElement.appendChild(submit);

    console.log(initials.value);
}

startButton.addEventListener('click', startQuiz);