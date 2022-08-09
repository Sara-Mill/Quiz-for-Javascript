var username  = document.getElementById("username");
var saveScoreBtn = document.getElementById('saveScoreBtn');

var finalScore = document.getElementById('finalScore');
//saves most recent score in local storage
var mostRecentScore = localStorage.getItem('mostRecentScore');

//converts to an array
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

var MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  // if nothing typed in username form, button is disabled, if there is something there, this will enable the submit (save) button
  saveScoreBtn.disabled = !username.value;
});


saveHighScore = (e) => {
  console.log("clicked the save button!");
  e.preventDefault();

  var score = {
    score: Math.floor(Math.random()*100),
    name: username.value
  };
  //adds saved name to an array
  highScores.push(score);
  //add scores to list, sort the list, cut off the lowest scores after 5 high scores.  if b is higher than a then put b before a: define algorithm
  highScores.sort( (a,b) => b.score - a.score)

  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign("index.html");
};