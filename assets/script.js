//Psuedo Code 

//DOM variables
 
//Taking a timed code quiz - I am presented with a welcome screen with instructions

//Once I am ready to start game I will click the start button
//user clicks start button - to initate function to start game
var startBtn = document.getElementById('startBtn');
console.log (startBtn);
startBtn.onclick = startGame;

//create startGame function 
function startGame (e){
    e.preventDefault();
    //make welcomeScreen disappear
    var welcomeScreen = document.getElementById('welcomeScreen');
    console.log (welcomeScreen);
    welcomeScreen.setAttribute('class', 'hidden');

    //display questions div
    var questionsEl = document.getElementById('questions');
    questionsEl.removeAttribute('class', 'hidden');
    //call function that will loop through questions

    //start countdown timer
    
    var timeLeft = setInterval(countDown, 60000); //calling the timer/countDown function


};

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






        //create questions as an array of object
var questions = [
    {
       header: "1+1 =" ,
       choices: ['2','3','50','4'],
       answer: '2'
    },
    {
        header: "49+1 =" ,
        choices: ['2','3','50','4'],
        answer: '50'
     },
     {
        header: "3+1 =" ,
        choices: ['2','3','50','4'],
        answer: '4'
     },
     {
        header: "2+1 =" ,
        choices: ['2','3','50','4'],
        answer: '3'
     },
     {
        header: "4+1 =" ,
        choices: ['2','5','50','4'],
        answer: '5'
     },
]      