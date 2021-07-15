
var resetBtnEl = document.getElementById('resetBtn');
//click clear scores btn start reset function
resetBtnEl.onclick = reset;

function reset (){
    localStorage.clear();
 };
 //function to render scores when submit button is click or when a tag view highscores is clicked
function renderScores(){
    //check if working   
    console.log ('getting there Luz!');
    

 }


 //call render scores functions on page load
 renderScores();