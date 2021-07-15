//Psuedo Code 
//create questions as an array of object
var questions = [
   {
      header: "1+1 =",
      choices: ['2', '3', '50', '4'],
      answer: '2'
   },
   {
      header: "49+1 =",
      choices: ['2', '3', '50', '4'],
      answer: '50'
   },
   {
      header: "3+1 =",
      choices: ['2', '3', '50', '4'],
      answer: '4'
   },
   {
      header: "2+1 =",
      choices: ['2', '3', '50', '4'],
      answer: '3'
   },
   {
      header: "4+1 =",
      choices: ['2', '5', '50', '4'],
      answer: '5'
   },
];
//variable to keep track of which question user is on
var questionTracking = 0;
//timer game time variable
var time = 60;
var timerID;
//DOM variables
var welcomeScreen = document.getElementById('welcomeScreen');
var questionsEl = document.getElementById('questions');
var startBtnEl = document.getElementById('startBtn');
var gameOverEl = document.getElementById('gameOver');
var submitBtnEl = document.getElementById('submitBtn');
var initialsEl = document.getElementById('initials');
var questionHeaderEl = document.getElementById('question-header');
var choicesEl = document.getElementById('choices');
var rightWrongEl = document.getElementById('rightWrong');

//Taking a timed code quiz - I am presented with a welcome screen with instructions

//create startGame function 
function startGame(e) {
   e.preventDefault();
   //make welcomeScreen disappear
   console.log(welcomeScreen);
   welcomeScreen.setAttribute('class', 'hidden');

   //display questions div
   questionsEl.removeAttribute('class', 'hidden');

   //display actual quiz questions
   //create function to loop through questions & call it here
   displayQuestions(questionTracking);

   //setInterval function calls startTimer function to be excuted 
   timerID = setInterval(startTimer, 1000);


};

//timer function called on line 31 startTimer ();
function startTimer() {
   time--;
   var timerText = document.getElementById('timer-text');
   timerText.textContent = time;
   if (time <= 0) {
      //call function that clears interval, ends game, displays score & initals input
      gameOver();

   };
};

//displayQuestions function --need parameter to pass in will not read this one only the one we pass in when we call it
function displayQuestions(butthole) {
   var currentQuestion = questions[butthole];
   //display question-header
   questionHeaderEl.textContent = currentQuestion.header;

   //forEach loop to loop through generating all 4 choice btns
   questions[butthole].choices.forEach(function (choice, i) {
      var existingChoiceBtn = document.getElementById('choice-' + i);
      // before creating a button element
      // check if element exists by calling document.getElementById('choice-' + i)
      // if document.getElementById('choice-' + i) is = null
      if (!existingChoiceBtn) {
         // then we createElement('button'), set all attributes, set onclick, and append
         var choiceBtns = document.createElement('button');
         //style button with choiceButton class
         choiceBtns.setAttribute('class', 'choiceButton');
         //add text from questions[0].choice[0];
         choiceBtns.textContent = choice;
         choiceBtns.setAttribute('value', choice);
         choiceBtns.setAttribute('id', 'choice-' + i);
         choiceBtns.onclick = checkAnswer;
         choicesEl.append(choiceBtns);

      }
      else {
         // if document.getElementById('choice-' + i) is != null
         // then we set value and id
         existingChoiceBtn.textContent = choice;
         existingChoiceBtn.setAttribute('value', choice);

      }


   });
};
//checkAnswer function choice, questions[0].answer

function checkAnswer(e) {
   var selectedAnswer = e.target.value;
   if (selectedAnswer === questions[questionTracking].answer) {
      var correctEl = document.getElementById('rightWrong');
      correctEl.setAttribute('class', 'rightWrong');
      correctEl.textContent = "Correct!";
      //increment questionTracking to move to next question in index of array
      questionTracking++;
      // console.log(questionTracking);
      //check to see what questio user is on
      if (questionTracking < 5) {
         displayQuestions(questionTracking);
      } else {
         gameOver();
      }
   }
   else {
      //decrement time by 5 seconds each time user guesses wrong answer
      time -= 5;
      //check to make sure time does not go into the negatives when decrementing
      if (time <0){
         time =0;
      };
      //create DOM element for displaying rightWrong div that will alert user if they are right or wrong
      var incorrectEl = document.getElementById('rightWrong');
      incorrectEl.setAttribute('class', 'rightWrong');
      incorrectEl.textContent = "Wrong!";
   }
};

//gameOVer function - clears interval, ends game - displays score & initals input
function gameOver() {
   clearInterval(timerID);
   //hide rightWrong div 
   rightWrongEl.setAttribute('class', 'hidden');
   //clear question div
   questionsEl.setAttribute('class', 'hidden');
   //display score 
   var finalScore = document.getElementById('finalScore');
   finalScore.textContent = time;
   //display gameOver div
   gameOverEl.removeAttribute('class', 'hidden');

};

//saveScore function - saves each new score and initals to local storage 
function saveScore() {
   event.preventDefault();
   //grab initals entered in input div --trim() spaces before and after input
   var newInitials = initialsEl.value.trim();
   console.log(newInitials);
   console.log (time);

   //object to store each new player score
   var newScore = {
      score: time,
      initials: newInitials,
   };
   console.log(newScore);

   //check to see if there exists an array holding object scores in local storage if not then create an empty array
   if (!localStorage.getItem('scores')){
      localStorage.setItem('scores','[]');
   }
   //else grab existing scores array to add on new score object -remeber to parse!!
   var scores = JSON.parse(localStorage.getItem('scores'));
   //pushing new score object to parsed array
   scores.push(newScore);

   //save updated scores to local storage -- remember to stringify 
   localStorage.setItem('scores', JSON.stringify(scores));

   //display highscores page
   window.location.href="./assets/highscores.html";
   
};

//user clicks start button - to initate function to start game
startBtnEl.onclick = startGame;

//user enters initals and clicks submit btn - calls saveScore function
submitBtnEl.onclick = saveScore;


