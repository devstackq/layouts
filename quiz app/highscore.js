const highScoreList = document.getElementById('highScoreList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // берет массив объектов о рекорде, имя и баллы из localStorage
console.log(highScores);
highScoreList.innerHTML = 
highScores.map( score => {
	return `<li class="high-score">${score.name} - ${score.score} </li>`
})
.join('');
// отображает через метод map каждого рекордсмена, его имя и очки В highscore.html
