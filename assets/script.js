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
var gameOverEl = document.getElementById('gameOver');
var submitBtn = document.getElementById('submitBtn');
var initialsEl = document.getElementById('initials');
var questionHeaderEl = document.getElementById('question-header');
var choicesEl = document.getElementById('choices');
var rightWrongEl = document.getElementById('rightWrong');
//Taking a timed code quiz - I am presented with a welcome screen with instructions

//Once I am ready to start game I will click the start button
//user clicks start button - to initate function to start game
var startBtn = document.getElementById('startBtn');
console.log(startBtn);
startBtn.onclick = startGame;

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
      console.log(questionTracking);
      //check to see what questio user is on
      if (questionTracking < 5) {
         displayQuestions(questionTracking);
      } else {
         gameOver();
      }
   }
   else {
      //decrement
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

//user enters initals and clicks submit btn - calls saveScore function
submitBtn.onclick = saveScore;

//saveScore function - saves score and initals to local storage pulls previous stored scores and loads highscore page
function saveScore() {
   //grab initals entered in input div --trim() spaces before and after input
   var initials = initialsEl.value.trim();
   console.log(initials);
   console.log (time);
   var existingScores = JSON.parse(localStorage.getItem('playerScore'));
   debugger
   var playerScores = {
      score: time,
      initials: initials,
   };
   if (!existingScores){
      existingScores = [];

      localStorage.setItem('playerScore',JSON.stringify(existingScores));
   } else {
      existingScores.push(playerScores);
      localStorage.setItem('playerScore',JSON.stringify(existingScores));
   }
   //set score to local storage
   localStorage.setItem('playerScore', JSON.stringify(existingScores));

   //render to scores page 
   renderScores();
};

//function to render scores when submit button is click or when a tag view highscores is clicked
function renderScores(playerScore){
   //display last saved scores
}

//create timer function
//When I click the start button welcome screen disappears
    //Timer will begin
    //I am presented with first question 
        //If I answer correctly then 1pt will be added to score & I will be presented with the next question
        //If I answer incorrectly I will be deducted time from the timer & then be presented with the next question
    //When all questions are answered/cycled through or timer reaches zero 
    //Then game is over
    //When game is over then I am presented with input for initals & my score from correctly        answered questions
    //Once I enter my initals I click the save button to save initals and score
    //Then I am presented with my initials with score and two buttons
        //button to "go back" to the welcome screen to restart game
        //button to clear all scores

//create timer 30 secs ==> 6 sec/question






