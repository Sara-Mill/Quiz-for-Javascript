
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var questionCounterText = document.getElementById('questionCounter');
var scoreText = document.getElementById('score');
//create variables (object)
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
//timer for quiz
var timeLeft = 75;
var downloadTimer = setInterval(function() {
  if(timeLeft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    window.alert(" Your Time is Up");
  } else {
    document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
  }
  timeLeft -=1;
}, 1000);
//full question set minus  used questions
let availableQuestions = [];

let questions = [
  {
    question: "Arrays in Javascript can be used for _________",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. Booleans",
    choice4: "4. all of the above",
    answer: 4
  },
  {
    question: "Commonly used data types do not include _________",
    choice1: "1. strings",
    choice2: "2. booleans",
    choice3: "3. alerts",
    choice4: "4. numbers",
    answer: 3
  },
  {
    question: "The condition in an if/else statement is enclosed with ________",
    choice1: "1. quotes",
    choice2: "2. curly brackets",
    choice3: "3. parenthesis",
    choice4: "4. square brackets",
    answer: 3
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is________",
    choice1: "1. javascript",
    choice2: "2. terminal/bash",
    choice3: "3. for loops",
    choice4: "4. console.log",
    answer: 4
  },
  {
    question: "String values must be enclosed with________ before being assigned to variables",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    choice3: "3. quotes",
    choice4: "4. parenthesis",
    answer: 3
  }
];


//constants
var CORRECT_BONUS = 20;
var MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  // use spread operator (...) to take the "availableQuestions" array, spread out the items and put in a new array called questions
  availableQuestions = [...questions];
  getNewQuestion();
};
//use arrow syntax for a more concise way to write a function
getNewQuestion = () => {
  //when user goes through all assigned questions
  if(availableQuestions.length === 0 || questionCounter >=MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    //go to the end of page
    return window.location.assign("end.html");
  };
 
  //load questions from an array
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // update UI to reflect available questions
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
      //Gets data (number) from custom attribute
      var number = choice.dataset["number"];
      choice.innerText = currentQuestion['choice' + number];
    });
    //Takes out used questions from array
    availableQuestions.splice(questionIndex, 1);
    //allows user to select an answer from multiple choice
    acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    //this is a number
    var selectedChoice = e.target;
    //this is a string
    var selectedAnswer = selectedChoice.dataset['number'];

    //compare an (default)incorrect class to a correct class
    var classToApply = "incorrect";
     //since we are comparing a number to a string, we use == not strict ===
    if(selectedAnswer == currentQuestion.answer) {
      classToApply = 'correct'
    };
    
      
   //apply the class
   selectedChoice.parentElement.classList.add(classToApply);
    
   
   //remove the class ( we want the class to be there just long enough to show the color and move on; we use the callback function 'setTimeOut' for 1 second)
    setTimeout( () => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});


startGame();
