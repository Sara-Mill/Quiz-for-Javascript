//reference high scores list
var highScoresList = document.getElementById('highScoresList');
//get high scores out of local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);


highScoresList.innerHTML = highScores

//get reference to each high score by creating a new array populated with the results of calling a function on every element in the calling array
highScores.map(score => {
  console.log(score.name, score.mostRecentScore);
  return(score.name, score.mostRecentScore);
}).join('');

