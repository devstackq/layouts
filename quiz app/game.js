const questionText = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

//array questions
let questions = [
{
  question: "Существование множества исходных оснований и начал бытия утверждает:",
  choice1: "Агностицизм",
  choice2: "Плюрализм",
    choice3: "Релятивизм", //a
    choice4: "Эмпиризм",
    answer: 2
  },
  {
    question: "Сущность проблемы биологического и социального в человеке состоит в вопросе:?",
    choice1: "О формах борьбы за существование в человеческом обществе",
    choice2: "О приоритете материальных, либо духовных потребностей",
    choice3: "О соотношении сознательных и бессознательных факторов в детерминации человеческих поступков",
    choice4: "О взаимодействии и соотношении генов и воспитания",
    answer: 4
  },
  {
    question: "Метафизика – это:",
    choice1: "Учение о становлении мира из хаоса согласно единому принципу",
    choice2: "Философская позиция, утверждающая наличие сверхъестественных сил, оказывающих влияние на жизнь человека и общества",
    choice3: "Взгляд, согласно которому мир или отдельная его часть рассматриваются как неизменные, качественно постоянные",
    choice4: "Наиболее фундаментальный раздел современной физики, исследующий вопросы о происхождении и строении Вселенной",
    answer: 3
  },
  {
    question: "Положения о бесконечности Вселенной во времени и пространстве, о тождестве Бога и природы обосновал",
    choice1: "Клавдий Птолемей",
    choice2: "Франческо Петрарка",    
    choice3: "Фома Аквинский",
    choice4: "Джордано Бруно",
    answer: 4
  },
  {
    question: "Фактор, который, согласно социал-дарвинизму, является основной движущей силой развития общества:",
    choice1: "Воля выдающихся людей",
    choice2: "Классовая борьба",
    choice3: "Мировой дух",
    choice4: "Борьба за существование",
    answer: 4
  },
  {
    question: "Согласно Френсису Бэкону, любое познание должно",
    choice1: "опираться на опыт и двигаться от единичного к общему",
    choice2: "нисходить от абстрактного к конкретному",
    choice3: "пользоваться дедуктивными методами",
    choice4: "руководствоваться метафизическими первопринципами",
    answer: 1
  },
  {
    question: "Разделил действительность на «мир вещей в себе» и «мир явлений»:",
    choice1: "Кант",
    choice2: "Гегель",
    choice3: "Декарт",
    choice4: "Шелленг",
    answer: 1
  }

  ];

//CONSTANTS
const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 7;

//view - game.html
//первый запуск, значения по 0, и запуск функции getNewQuestion
//доступные вопросы грузятся из json файла
startGame = () => {
  questionCounter = 0; // счетчик для прогресс бара
  score = 0; // баллы
  availableQuesions = [...questions]; // данные из массива
  getNewQuestion();
};

getNewQuestion = () => {
  console.log(availableQuesions.length );
  if(availableQuesions.length == 0 || questionCounter >= MAX_QUESTIONS) { // когда вопросы закончились
    localStorage.setItem('mostRecentScore', score); // сохранение рекорда в localStorage
    //go to the end page
    return window.location.assign("./end.html"); // и редирект в end.html
  }
  questionCounter++; // счетчик инкрементиться при каждом вызове getNewQuestion

  questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS; // показ прогресс бара в view

  const questionIndex = Math.floor(Math.random() * availableQuesions.length); // вопросы генерируются методом Math.random
  console.log('quest index '+ questionIndex); 
  currentQuestion = availableQuesions[questionIndex]; // заголовок вопроса который выбран 
  console.log('current quest '+ currentQuestion);
  questionText.innerText = currentQuestion.question; //  затем отображается на странице view

  choices.forEach(choice => { // варианты ответов через цикл forEach() перебирают варианты из массива json и отправляют их в view
    const number = choice.dataset["number"]; //choice-text['number'] // атрибут data-number его значение
    choice.innerText = currentQuestion["choice" + number]; // каждый вариант ответа из json загружает в view
  });

  availableQuesions.splice(questionIndex, 1); // вырезает 1 вопрос из списка доступных вопросов -1,  availableQuesions = 6
  acceptingAnswers = true; 
};

choices.forEach(choice => { // события происходят на view, тот вариант который выбрал User
  choice.addEventListener("click", e => { 
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target; // выбран ответ из списка
    const selectedAnswer = selectedChoice.dataset["number"]; // записан его номер

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; // если выбранный с View пользователем ответ будет совпадать с объектом currentQuestion - его полем answer
      // то добавь стиль - correct - background - green

      if(classToApply === 'correct') { // если стиль == correct, то увеличь баллы
        incrementScore(CORRECT_BONUS)
      }

    selectedChoice.parentElement.classList.add(classToApply); // обращение к родителю варианта ответа - choice-prefix  и приминение стилей

    setTimeout(() => { // каждую секунду таймер убирает стили и запускает функцию getNewQuestion и все повторяется заново
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num; // первый раз score =0, if (true) { 0 +5 ...}
  scoreText.innerText = score; // отображение в view
};

// запуск функции
startGame();





