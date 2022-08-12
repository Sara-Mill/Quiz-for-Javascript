var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

//gives array of high scores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  //enables save score button when user enters text
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
  e.preventDefault();


var score = {
  mostRecentScore,
  name: username.value
};
highScores.push(score);
console.log(highScores);

localStorage.setItem("highScore", JSON.stringify(highScore));
window.location.assign("highscores.html");
return
};
