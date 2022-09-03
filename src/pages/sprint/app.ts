import { Word } from "../audiocall/utils/utils";
import './style.scss'

export const sprintScript = () => {

  
const app = document.querySelector('.app');

const wrapper = document.createElement('div');
wrapper.classList.add('sprint-wrapper');
app.append(wrapper);

const timer = document.createElement('div');
const scoreCounter = document.createElement('span');
const question = document.createElement('div');
const answer = document.createElement('div');
const buttonsContainer = document.createElement('div');
const card = document.createElement('div');


const apiURL = 'https://rs-lang-work.herokuapp.com/';
let secondsForGame = 30;
const progressBarWidth = 100 / secondsForGame;
let wordsArray: Word[];
let shuffleDictionary: any[] = [];
let currentWord: Word;
let userLearningLevel = 1;
const dictionary: { audio: any; word: any; transcription: string; wordTranslate: any; truth: string; }[] = [];
let wordIsTrue = false;
let rightAnswers = 0;

let answersArray:Word[] = [];

let count = 5;


const showGameLoadScreen = () => {
document.body.classList.add('loading-screen');

const gameStartScreen = document.createElement('div');
gameStartScreen.classList.add('game-start-screen');
wrapper.append(gameStartScreen);

const gameTitle = document.createElement('h2');
gameTitle.classList.add('game-title');
gameTitle.innerText = 'Спринт';
gameStartScreen.append(gameTitle);

const gameDescription = document.createElement('p');
gameDescription.classList.add('game-description');
gameDescription.innerHTML = 'Добро пожаловать!<br>В этой игре вам нужно будет быстро определять правильность соответствия слова и его перевода за ограниченный промежуток времени. Удачи! <br>Выберите уровень сложности';
gameStartScreen.append(gameDescription);

const level = document.createElement('select');
for(let i = 0; i<6; i++) {
  let elem = document.createElement('option');
  elem.innerHTML = `${i+1}`;
  level.append(elem);
 }
gameStartScreen.append(level);

const gameStartButton = document.createElement('button');
gameStartButton.classList.add('button');
gameStartButton.classList.add('game-start-button');
gameStartButton.classList.add('btn');
gameStartButton.innerText = 'Начать';
gameStartScreen.append(gameStartButton);
answersArray =[];
};

showGameLoadScreen();

const showGameMainScreen = () => {
wrapper.innerHTML = '';

card.classList.add('card');
wrapper.append(card);

const score = document.createElement('div');
score.classList.add('score');
scoreCounter.classList.add('score-counter');
scoreCounter.innerText = "0";
score.append(scoreCounter);
card.append(score);

question.classList.add('question');
card.append(question);

answer.classList.add('answer');
card.append(answer);

buttonsContainer.classList.add('buttons');
card.append(buttonsContainer);

const buttonAgree = document.createElement('button');
buttonAgree.classList.add('button');
buttonAgree.classList.add('agree');
buttonAgree.innerText = '← true';
buttonAgree.dataset.name = 'true';
buttonsContainer.append(buttonAgree);

const buttonDisagree = document.createElement('button');
buttonDisagree.classList.add('button');
buttonDisagree.classList.add('disagree');
buttonDisagree.innerText = 'false →';
buttonDisagree.dataset.name = 'false';
buttonsContainer.append(buttonDisagree);

timer.classList.add('timer');
timer.innerHTML = `
  <div class="progress-container" >
    <div class="progress-bar" id="myBar"></div>
  </div>
  `;
card.append(timer);
};

const showGameResults = () => {
wrapper.innerHTML = '';
const gameResult = document.createElement('section');
gameResult.classList.add('game-result');
const gameResultText = document.createElement('p');
const resTable = document.createElement('tbody');
resTable.className = 'table sprint-table';

if (localStorage.rsLangGameSprintScore) {
  const savedScore = localStorage.rsLangGameSprintScore;
  if (savedScore > rightAnswers) {
    gameResultText.innerText = `Ваш счёт ${rightAnswers}. Не плохо, но сможете ли вы побить предыдущий рекорд: ${savedScore}`;
  } else {
    gameResultText.innerText = `Поздравляем! Ваш счёт - ${rightAnswers}. Вы побили свой!`;
    localStorage.rsLangGameSprintScore = rightAnswers;
  }
} else {
  localStorage.rsLangGameSprintScore = rightAnswers;
}
const resetLink = document.createElement('a');
resetLink.classList.add('button');
resetLink.classList.add('game-reset-button');
resetLink.classList.add('btn');
resetLink.setAttribute('href', '#/sprint');
resetLink.innerText = 'Try again!';

gameResult.append(gameResultText);
gameResult.append(resetLink);
wrapper.append(gameResult);

let html = '';
answersArray.map(word=>{
  dictionary.map(dword=>{
    if(word.word==dword.word)
    html+=`<tr>
    <td onclick="document.querySelector('#${dword.word}-audio').play()" class="statistic-audio"><audio id="${dword.word}-audio" src="https://rs-lang-work.herokuapp.com/${dword.audio}"></audio></td>
    <td>${dword.word}</td>
    <td>${dword.transcription}</td>
    <td>${dword.wordTranslate}</td>
    <td class="${word.choice}-choice"></td>
  </tr>`;
  });
});

resTable.innerHTML = html;
wrapper.append(resTable);
};

const progressBarChange = (param: number) => {
const newWidth = param * progressBarWidth;
const myBar = document.getElementById('myBar');
if (myBar) {
  myBar.style.width = `${newWidth}%`;
}
};

const gameTimer = () => {
const timerCounter = setInterval(() => {
  if (secondsForGame >= 0) {
    secondsForGame -= 1;
    progressBarChange(secondsForGame);
  } else {
    scoreCounter.classList.remove('card-true');
    scoreCounter.classList.remove('card-false');
    showGameResults();
    clearInterval(timerCounter);
  }
  if (secondsForGame >= 0 && secondsForGame < 10) {
    const myBar = document.getElementById('myBar');
    if (myBar) {
      myBar.style.background = 'tomato';
    }
  }
}, 1000);
};

const showWord = () => {
currentWord = shuffleDictionary.pop();
question.innerText = currentWord.word;
answer.innerText = currentWord.wordTranslate;
wordIsTrue = currentWord.truth;
currentWord.choice = 'wrong';
answersArray.push(currentWord);
};

const makeDictionary = () => {
while (wordsArray.length) {
  currentWord = wordsArray.pop();
  const { audio } = currentWord;
  const { word } = currentWord;
  const { wordTranslate } = currentWord;
  const { transcription } = currentWord;
  dictionary.push({ audio, word, transcription, wordTranslate, truth: 'true' });
}

// make shuffle true/false dictionary array
const arrayTrue = dictionary.slice(0, Math.floor(dictionary.length / 2));
let arrayFalse = dictionary.slice(Math.floor(dictionary.length / 2));
const tempWords: any[] = [];
const tempTranslations: any[] = [];
arrayFalse.forEach((item) => {
  tempWords.push(item.word);
  tempTranslations.push(item.wordTranslate);
});
tempTranslations.unshift(tempTranslations.pop());
arrayFalse = [];
for (let i = 0; i < dictionary.length / 2; i += 1) {
  arrayFalse.push({audio: tempWords[i], word: tempWords[i], transcription:tempWords[i], wordTranslate: tempTranslations[i], truth: 'false' });
}
shuffleDictionary = [...arrayTrue, ...arrayFalse].sort(() => 0.5 - Math.random());
if(dictionary.length>79)
  showWord();
};

const getWords = (page: number, group: number) => {
fetch(`${apiURL}words?page=${page}&group=${group}`)
  .then((response) => response.json())
  .then((data:Word[]) => {
    wordsArray = data;
    wordsArray.sort(() => 0.5 - Math.random());
    makeDictionary();
  });
};

app.addEventListener('click', (event) => {
if ((event.target as Element).classList.contains('game-start-button')) {
  userLearningLevel = Number(document.querySelector('select').value);
  for(let i =0; i<4; i++) getWords(Math.random() * 29, Math.floor(Math.random() * userLearningLevel));
  wrapper.innerHTML = '';
  const timerStart = document.createElement('div');
  timerStart.className = 'timer-start';
  wrapper.append(timerStart);
  timerStart!.innerHTML = String(count);
  const timer = setInterval(async () => {
    count--;
    timerStart!.innerHTML = String(count);
    if (count > 0) {
      const audio = new Audio();
      audio.src = "final.mp3"; //помогите подключить файлик
      audio.autoplay = true;
    }
    if (count < 0) {
      timerStart.remove;
      clearInterval(timer);
      showGameMainScreen();
      gameTimer();
    }
  }, 1000);
}
});

buttonsContainer.addEventListener('click', (event) => {
if ((event.target as HTMLElement).tagName === 'BUTTON') {
  const audio = new Audio();
  if (shuffleDictionary.length && secondsForGame > 0) {
    if ((event.target as HTMLButtonElement).dataset.name === wordIsTrue.toString()) {
      rightAnswers += 1;
      scoreCounter.innerText = `${rightAnswers}`;
      answersArray[answersArray.length-1].choice = 'right';
      audio.src = "./assets./audio./jg-032316-sfx-elearning-correct-answer-sound-1.mp3"; //помогите подключить файлик
      audio.play();
    } else {
      console.log('No! It\'s wrong answer!');
      audio.src = "./assets./audio./zvukovoy-effekt-nepravilnogo-otveta-wrong-buzzer-sound-effect.mp3"; //помогите подключить файлик
      audio.play();
    }
    showWord();
  } else {
    console.error('Error: Time is over or no more words!');
    showGameResults();
  }
}
});

document.addEventListener('mousedown', (event) => {
if ((event.target as Element).classList.contains('button') && shuffleDictionary.length && secondsForGame > 0) {
  if ((event.target as HTMLButtonElement).dataset.name === wordIsTrue.toString()) {
    scoreCounter.classList.add('card-true');
  } else {
    scoreCounter.classList.add('card-false');
  }
}
});

document.addEventListener('mouseup', () => {
scoreCounter.classList.remove('card-true');
scoreCounter.classList.remove('card-false');
});

document.addEventListener('keydown', (event) => {
if (shuffleDictionary.length && secondsForGame > 0) {
  if (event.code === 'ArrowLeft') {
    (document.querySelector('.agree') as HTMLElement).style.opacity = '0.5';
    if ((document.querySelector('.agree') as HTMLElement).innerHTML.includes(String(wordIsTrue)))
      scoreCounter.classList.add('card-true');
    else scoreCounter.classList.add('card-false');
  }
  if (event.code === 'ArrowRight') {
    (document.querySelector('.disagree') as HTMLElement).style.opacity = '0.5';
    if ((document.querySelector('.disagree') as HTMLElement).innerHTML.includes(String(wordIsTrue)))
      scoreCounter.classList.add('card-true');
    else scoreCounter.classList.add('card-false');
  }

} else {
  showGameResults();
}
});

document.addEventListener('keyup', (event) => {
scoreCounter.classList.remove('card-true');
scoreCounter.classList.remove('card-false');
if (shuffleDictionary.length && secondsForGame > 0) {
  document
    .querySelectorAll('button')
    .forEach((element) => {
      const el = element;
      el.style.opacity = '1';
    });

  if (shuffleDictionary.length && secondsForGame > 0) {
    if ((event.code === 'ArrowRight' && (document.querySelector('.disagree') as HTMLElement).innerHTML.includes(String(wordIsTrue)))||(event.code === 'ArrowLeft'&&(document.querySelector('.agree') as HTMLElement).innerHTML.includes(String(wordIsTrue)))) {
      rightAnswers += 1;
      scoreCounter.innerText = `${rightAnswers}`;
      answersArray[answersArray.length-1].choice = 'right';
    } else if (event.code === 'ArrowRight' || event.code === 'ArrowLeft'){
      console.log('No! It\'s wrong answer!');
      showWord();
    }
  } else {
    console.error('Error: Time is over or no more words!');
  }
}
});

document.addEventListener('click', (event) => {
  if ((event.target as Element).classList.contains('game-reset-button')){
    location.reload();
  }   
});
};