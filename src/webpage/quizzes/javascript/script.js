// Array of quiz questions and answers
var codeQuiz = [
    {
        question: 'What is the correct syntax to declare a variable in JavaScript?', 
        a: 'var = myVariable;',
        b: 'variable myVariable;',
        c: 'myVariable var;',
        d: 'var myVariable',
        answer: 'd'
    }, 
    {
        question: 'Which of the following is NOT a JavaScript data type?',
        a: 'String',
        b: 'Boolean',
        c: 'Array',
        d: 'Number',
        answer: 'c'
    },
    {
        question: 'What is the output of the following code snippet? console.log(2 + "2");',
        a: '4',
        b: '22',
        c: '"22"',
        d: 'TypeError',
        answer: 'c'
    },
    {
        question: 'Which JavaScript method is used to add an element to the end of an array?',
        a: 'array.push()',
        b: 'array.add()',
        c: 'array.append()',
        d: 'array.concat()',
        answer: 'a'
    },
    {
        question: 'What does the "typeof" operator return for the data type "null"?',
        a: 'null',
        b: 'undefined',
        c: "object",
        d: 'string',
        answer: 'c'
    }
]
// Selecting DOM elements
var background = document.querySelector("body");
var startBtn = document.querySelector("#start-btn");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var scoreEl = document.querySelector(".score");
// Counter variables
var questionCounter = 0;
var currentScore = 99;
var highScores = [];

// Function to start the score counter upon quiz start
var scoreCounter = function() {
    scoreEl.textContent = "100 seconds left"
// Updates the score every second
    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < codeQuiz.length) {
            scoreEl.textContent =  currentScore + " seconds left";
            currentScore--
        }
        else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 1000);
}
// Function to create the quiz and start it
var createQuiz = function() {
    document.querySelector("#Guidelines").remove();
    quizEl.classList.remove("hide")

    nextQues(questionCounter);
    scoreCounter();
}

// Function to display the next question
var nextQues = function(index) {
    var questionHeader = document.querySelector(".question-header");
    var questionEl = document.querySelector(".question");
    var btnA = document.getElementById("btn-a");
    var btnB = document.getElementById("btn-b");
    var btnC = document.getElementById("btn-c");
    var btnD = document.getElementById("btn-d");

    questionHeader.textContent = "Question #" + parseInt(index + 1)
    questionEl.textContent = codeQuiz[index].question;
    btnA.textContent = codeQuiz[index].a;
    btnB.textContent = codeQuiz[index].b;
    btnC.textContent = codeQuiz[index].c;
    btnD.textContent = codeQuiz[index].d;

    btnA.addEventListener("click", checkAnswer);
    btnB.addEventListener("click", checkAnswer);
    btnC.addEventListener("click", checkAnswer);
    btnD.addEventListener("click", checkAnswer);
}
// Function to check the selected answer
var checkAnswer = function(event) {
    var clickedBtn = event.target.getAttribute("value");
    var feedbackEl = document.querySelector(".feedback");
    feedbackEl.classList.remove("hide");
    
    // Compares the clicked button value with the correct answer in the array
    if (clickedBtn === codeQuiz[questionCounter].answer) {
        background.className = "correct";
        feedbackEl.textContent = "CORRECT!"
    }
    else {
        if (currentScore >= 5) {
            currentScore -= 5;
            scoreEl.textContent = "Current score: " + currentScore;
            }
        background.className = "incorrect";
        feedbackEl.classList.remove("hide");
        feedbackEl.textContent = "INCORRECT!"
    }

    questionCounter++

    if (questionCounter < codeQuiz.length) {        
        nextQues(questionCounter);
    }
    else {
        endQuiz();
    }
}
// Function to end the quiz
var endQuiz = function() {
    quizEl.remove();
    scoreEl.remove();
 
    endEl.innerHTML = "<h2 class='end-title'>Game Over!</h2><p>Your final score is " + currentScore + ".  Please insert your name.</p>";

    var scoreForm = document.createElement("form");
    scoreForm.id = "score-form";
    endEl.appendChild(scoreForm);

    var nameInput = document.createElement("input");
    nameInput.className = "name-input";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "player-name");
    nameInput.setAttribute("placeholder", "ENTER YOUR NAME");
    scoreForm.appendChild(nameInput);

    var nameBtn = document.createElement("button");
    nameBtn.className = "btn";
    nameBtn.id = "name-btn"
    nameBtn.textContent = "SUBMIT";
    scoreForm.appendChild(nameBtn);

    nameBtn.addEventListener("click", saveScore);
}
// Function to save the player's score
var saveScore = function() {
    event.preventDefault()

    var playerName = document.querySelector("input[name='player-name']").value;

    if (!playerName) {
        alert("Please enter your name!")
    }
    else {
        var scoreObj = {
            name: playerName,
            score: currentScore
        }
    
        highScores.push(scoreObj);
        document.querySelector("#score-form").reset();
        localStorage.setItem("scores", JSON.stringify(highScores));
        document.location.href = "quizhighscore.html";
    }
}
// Function to load the saved scores from local storage
var loadScores = function() { 
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);
}
// Event listeners
loadScores();
startBtn.addEventListener("click", createQuiz)