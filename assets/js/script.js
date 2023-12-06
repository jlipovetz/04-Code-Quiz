var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var home = document.getElementById("home")
var quiz = document.getElementById("quiz")
var total = document.getElementById("score")
var gameOver = document.getElementById("game-over")
var startOver = document.querySelector(".start-over");

let choice1 = document.getElementById("choice-1")
let choice2 = document.getElementById("choice-2")
let choice3 = document.getElementById("choice-3")
let choice4 = document.getElementById("choice-4")
let questionName = document.getElementById("question-name")

var timer;
var timerCount;
score = 0

let i = 0
quiz.style.display = "none"
gameOver.style.display = "none"

startButton.addEventListener("click", function() {
  home.style.display = "none";
  gameOver.style.display = "none"
  quiz.style.display = "block"
  startGame()
});

startOver.addEventListener("click", function() {
  home.style.display = "block";
  gameOver.style.display = "none"
  quiz.style.display = "none"
  i = 0
});

function nextQuestion() {
  console.log(answer)
  i = i+1
  if(answer === questions[1].answer)
  return score = 0+1
  else timerCount = timerCount - 10
  if(i > questions.length - 1)
  return endGame()
  else
  return choice1.textContent = questions[i].options[0], choice2.textContent = questions[i].options[1], choice3.textContent = questions[i].options[2], choice4.textContent = questions[i].options[3], questionName.textContent = questions[i].title
}

function startGame() {
  timerCount = 90;
  startTimer()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer)
      endGame()
    }
  }, 1000);
}

function endGame() {
  gameOver.style.display = "block"
}


var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<scripting>", "<js>", "<javascript>"],
    answer: "<script>"
  },
  {
    title: "How do you write 'Hello World' in an alert box?",
    options: ['alertBox("Hello World");', "msgBox('Hello World');", 'alert("Hello World");', 'msg("Hello World");'],
    answer: "alert('Hello World');"
  },
  {
    title: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function != myFunction()"],
    answer: "function myFunction()"
  },
  {
    title: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "call function myFunction()", "myFunction()", "now call myFunction()"],
    answer: "myFunction()"
  },
  {
    title: "How to write an IF statement in JavaScript?",
    options: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5 then"],
    answer: "if (i == 5)"
  },
  {
    title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i <> 5)", "if (i != 5)", "if i =! 5 then", "if i <> 5"],
    answer: "if (i != 5)"
  },
  {
    title: "How does a FOR loop start?",
    options: ["for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)"],
    answer: "for (i = 0; i <= 5; i++)"
  },
  {
    title: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)"
  },
]


let question = questions[i];

total.textContent = score

choice1.textContent = question.options[0]
choice2.textContent = question.options[1]
choice3.textContent = question.options[2]
choice4.textContent = question.options[3]
questionName.textContent = question.title


choice1.addEventListener("click", nextQuestion, answer = choice1.textContent)
choice2.addEventListener("click", nextQuestion, answer = choice2.textContent)
choice3.addEventListener("click", nextQuestion, answer = choice3.textContent)
choice4.addEventListener("click", nextQuestion, answer = choice1.textContent)



