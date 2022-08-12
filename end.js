var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScoresList = document.getElementById("highScoresList");
var highScores = document.getElementById = ("highScores");
finalScore.innerText = mostRecentScore;

//gives array of high scores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  //enables save score button when user enters text
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value
});
z
saveHighScore = e => {
  e.preventDefault();


var score = {
  mostRecentScore,
  name: username.value
};
highScores.push(score);
console.log(highScores);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("highscores.html");
return
};
