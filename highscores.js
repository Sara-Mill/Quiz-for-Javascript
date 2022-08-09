var highScoresList = document.getElementById('highScoresList');
//get high scores out of local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);