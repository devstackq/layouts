const username = document.getElementById('username'); // имя пользователя при вводе
const saveScoreBtn = document.getElementById('saveScoreBtn'); // 
const mostRecentScore = localStorage.getItem('mostRecentScore'); 
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // берем массив данных из Localstorage  с полями score и name 


finalScore.innerText = mostRecentScore; // отображает рекорд В end.html

// не доступен пока не введет свои данные(имя)
username.addEventListener('keyup', () => {
	saveScoreBtn.disabled = !username.value 
});

 // user нажимает кнопку сохранить вызов функции
 // создается объект - c полями score name и внедряет их в LocalStorage, сортирует и оставляет только 3 лучших рез-та, 
 // после чего redirect  в highscores.html
saveHighScore = event => {
	event.preventDefault();
	const score = { 
		score: mostRecentScore,
		name: username.value
	};
	highScores.push(score);
	highScores.sort((a,b) => b.score - a.score);
	highScores.splice(3);

	localStorage.setItem('highScores', JSON.stringify(highScores));
	window.location.assign('highscore.html');
};
 
