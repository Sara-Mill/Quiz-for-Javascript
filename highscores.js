//reference high scores list
var highScoresList = document.getElementById('highScoresList');
//get high scores out of local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

highScoresList.innerHTML = highScores

//get reference to each high score
highScores.map(score => {
  console.log(score.name, score.mostRecentScore);
  return(score.name, score.mostRecentScore);
}).join('');

