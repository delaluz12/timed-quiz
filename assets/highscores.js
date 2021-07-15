//DOM elements
var resetBtnEl = document.getElementById('resetBtn');
var highscoresListEl = document.getElementById('highscores-list');

function reset() {
    localStorage.clear();
    /// removing children list items using for loop
    var children = highscoresListEl.children; // return an html collection
    for (var i = 0; i < children.length; i++) {
        highscoresListEl.remove(children[i])
    }
};
//function to render scores when submit button is click or when a tag view highscores is clicked
function renderScores() {
     //get objects from local storage ---parse as they are strings
    var scores = JSON.parse(localStorage.getItem('scores'));
    console.log(scores);

    //check to see if scores exists
    if (scores !== null) {
        //sort scores from high to low
        scores.sort(function (a, b) {
            return b.score - a.score;
        });
        // //for each loop to render items as li elements
        scores.forEach(score => {
            var scoreItem = document.createElement('li');
            scoreItem.textContent = score.initials + "     " + score.score;

            highscoresListEl.append(scoreItem);
        });
    }

}

//click clear scores btn start reset function
resetBtnEl.onclick = reset;
//call render scores functions on page load
renderScores();