import { Word } from "../audiocall/utils/utils";
import './style.scss'
import { infoBook } from "../audiocall/utils/utils";
import { dataUser, userStatistic, DayStatistic } from "../../core/components/interfaces/interface";
import { createUserWord, getUserStatistic, updateUserStatistic, updateUserWord } from "../../core/components/api/api";

export const sprintScript = () => {

  async function getapi(){if (dataUser.userId !== '') {
    const statisticStorage: DayStatistic= await getUserStatistic();     
    userStatistic.wordsPerDay = statisticStorage.optional.wordsPerDay;
    userStatistic.audiocallwordsPerDay = statisticStorage.optional.audiocallwordsPerDay;
    userStatistic.audiocallPercent = String(statisticStorage.optional.audiocallPercent).substr(0, 4);
    userStatistic.audiocallRounds = statisticStorage.optional.audiocallRounds;
    userStatistic.allRounds = statisticStorage.optional.allRounds;
    userStatistic.totalPercent = String(statisticStorage.optional.totalPercent).substr(0, 4);
    userStatistic.audiocallSeries = statisticStorage.optional.audiocallSeries;
    userStatistic.wordInSprint = statisticStorage.optional.wordInSprint;
    userStatistic.wordInGames = statisticStorage.optional.wordInGames;
    console.log(statisticStorage);
  }}
  getapi();

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
const dictionary: {id: string, audio: any; word: any; transcription: string; wordTranslate: any; truth: string; }[] = [];
let wordIsTrue = false;
let rightAnswers = 0;
let maxAnswers = 0;
let bookDictionary: { audio: any; word: any; transcription: string; wordTranslate: any; truth: string; }[] = [];
let allRightAnswers = 0;

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
if(infoBook.isFromBook) gameDescription.innerHTML = 'Добро пожаловать!<br>В этой игре вам нужно будет быстро определять правильность соответствия слова и его перевода за ограниченный промежуток времени. Удачи!';
else gameDescription.innerHTML = 'Добро пожаловать!<br>В этой игре вам нужно будет быстро определять правильность соответствия слова и его перевода за ограниченный промежуток времени. Удачи! <br>Выберите уровень сложности';
gameStartScreen.append(gameDescription);

if(!infoBook.isFromBook){
  const level = document.createElement('select');
  for(let i = 0; i<6; i++) {
    let elem = document.createElement('option');
    elem.innerHTML = `${i+1}`;
    level.append(elem);
    gameStartScreen.append(level);}
 }


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
  if (savedScore > maxAnswers) {
    gameResultText.innerText = `Ваш счёт ${maxAnswers}. Не плохо, но сможете ли вы побить предыдущий рекорд: ${savedScore}`;
  } else {
    gameResultText.innerText = `Поздравляем! Ваш счёт - ${maxAnswers}. Вы побили свой!`;
    localStorage.rsLangGameSprintScore = maxAnswers;
  }
} else {
  gameResultText.innerText = `Поздравляем! Ваш счёт - ${maxAnswers}.`
  localStorage.rsLangGameSprintScore = maxAnswers;
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
  if(infoBook.isFromBook){
    bookDictionary.map(dword=>{
      if(word.word==dword.word)
      html+=`<tr>
      <td onclick="document.querySelector('#${dword.word}-audio').play()" class="statistic-audio"><audio id="${dword.word}-audio" src="https://rs-lang-work.herokuapp.com/${dword.audio}"></audio></td>
      <td>${dword.word}</td>
      <td>${dword.transcription}</td>
      <td>${dword.wordTranslate}</td>
      <td class="${word.choice}-choice"></td>
    </tr>`;
    });
  }
  else{dictionary.map(dword=>{
    if(word.word==dword.word)
    html+=`<tr>
    <td onclick="document.querySelector('#${dword.word}-audio').play()" class="statistic-audio"><audio id="${dword.word}-audio" src="https://rs-lang-work.herokuapp.com/${dword.audio}"></audio></td>
    <td>${dword.word}</td>
    <td>${dword.transcription}</td>
    <td>${dword.wordTranslate}</td>
    <td class="${word.choice}-choice"></td>
  </tr>`;
  });}

  answersArray.map(async (element: Word) => {
    if (dataUser.userId !== '' && userStatistic.wordsInQuiestions.includes(element.word) || dataUser.userId === '') return;
    else {
      if (dataUser.userId !== '') {userStatistic.sprintwordsPerDay = userStatistic.sprintwordsPerDay + 1;
      userStatistic.wordsPerDay = userStatistic.wordsPerDay + 1;
      userStatistic.wordsInQuiestions.push(element.word);
      if (maxAnswers > userStatistic.sprintSeries) {
        userStatistic.sprintSeries = maxAnswers;
      }} 
    }
  })
  if (dataUser.userId !== '') {
    userStatistic.sprintRounds = userStatistic.audiocallRounds + 1;
    userStatistic.allRounds = userStatistic.allRounds + 1;
    userStatistic.sprintPercent = (Number(userStatistic.sprintPercent) + Number(((allRightAnswers / 20) * 100))) / userStatistic.sprintRounds;
    userStatistic.totalPercent = (Number(userStatistic.totalPercent) + Number(((allRightAnswers / 20) * 100))) / userStatistic.allRounds;
    
    const wordPerDay = {
      learnedWords: 0,
      optional: {
        wordsPerDay: userStatistic.wordsPerDay,
        audiocallwordsPerDay: userStatistic.audiocallwordsPerDay,
        audiocallRounds: userStatistic.audiocallRounds,
        audiocallPercent: userStatistic.audiocallPercent,
        sprintwordsPerDay: userStatistic.sprintwordsPerDay,
        sprintRounds: userStatistic.sprintRounds,
        sprintPercent: userStatistic.sprintPercent,
        allRounds: userStatistic.allRounds,
        totalPercent: userStatistic.totalPercent,
        audiocallSeries: userStatistic.audiocallSeries,
        sprintSeries: userStatistic.sprintSeries,
        wordInGames: userStatistic.wordInGames,
        wordInAudiocall: userStatistic.wordInAudiocall,
        wordInSprint: userStatistic.wordInSprint,
      }
    }
    async function update(){await updateUserStatistic(dataUser.userId, wordPerDay);}
    update();
  }
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
if (dataUser.userId !== '') {userStatistic.wordInAudiocall[currentWord.id] = {
  audiocall: {
    guessed: 0,
    unguessed: 0,
    guessedInARow: 0,
  }
}}
};

const makeDictionary = () => {
while (wordsArray.length) {
  currentWord = wordsArray.pop();
  const { id } = currentWord;
  const { audio } = currentWord;
  const { word } = currentWord;
  const { wordTranslate } = currentWord;
  const { transcription } = currentWord;
  dictionary.push({id, audio, word, transcription, wordTranslate, truth: 'true' });
  bookDictionary.push(dictionary[dictionary.length-1]);
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
  arrayFalse.push({id: tempWords[i], audio: tempWords[i], word: tempWords[i], transcription:tempWords[i], wordTranslate: tempTranslations[i], truth: 'false' });
}
shuffleDictionary = [...arrayTrue, ...arrayFalse].sort(() => 0.5 - Math.random());
if(dictionary.length>79 || infoBook.isFromBook)
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
  if(infoBook.isFromBook){
    getWords(infoBook.page, infoBook.group);
  }
  else {
    userLearningLevel = Number(document.querySelector('select').value);
    for(let i =0; i<4; i++) getWords(Math.random() * 29, Math.floor(Math.random() * userLearningLevel));
  }
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
      allRightAnswers++;
      rightAnswers += 1;
      if(rightAnswers>maxAnswers)maxAnswers=rightAnswers;
      answersArray[answersArray.length-1].choice = 'right';
      if (dataUser.userId !== '') {userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessedInARow++;
        userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessed = userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessed + 1;}
        if (dataUser.userId !== '' && userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessedInARow > 2) {
          async function create(){await updateUserWord(dataUser.userId, answersArray[answersArray.length-1].id, { "difficulty": "learned" });}
          create();
        }
    } else {
      rightAnswers=0;
      console.log('No! It\'s wrong answer!');
      if (dataUser.userId !== '') {userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.guessedInARow = 0;
        userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.unguessed = userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.unguessed + 1;}
        async function create(){await createUserWord(dataUser.userId, answersArray[answersArray.length-1].id, { "difficulty": "hard" });}
        create();
    }
    scoreCounter.innerText = `${rightAnswers}`;
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
      allRightAnswers++;
      if(rightAnswers>maxAnswers) maxAnswers=rightAnswers;
      answersArray[answersArray.length-1].choice = 'right';
      if (dataUser.userId !== '') {userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessedInARow++;
        userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessed = userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessed + 1;}
        if (dataUser.userId !== '' && userStatistic.wordInAudiocall[answersArray[answersArray.length-1].id].audiocall.guessedInARow > 2) {
          async function create(){await updateUserWord(dataUser.userId, answersArray[answersArray.length-1].id, { "difficulty": "learned" });}
          create();
        }
    } else if (event.code === 'ArrowRight' || event.code === 'ArrowLeft'){
      rightAnswers=0;
      console.log('No! It\'s wrong answer!');
      if (dataUser.userId !== '') {userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.guessedInARow = 0;
        userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.unguessed = userStatistic.wordInSprint[answersArray[answersArray.length-1].id].sprint.unguessed + 1;}
        async function create(){await createUserWord(dataUser.userId, answersArray[answersArray.length-1].id, { "difficulty": "hard" });}
        create();
    }
    scoreCounter.innerText = `${rightAnswers}`;
    showWord();
  } else {
    console.error('Error: Time is over or no more words!');
  }
}
});

document.addEventListener('click', (event) => {
  if ((event.target as Element).classList.contains('game-reset-button')){
    if(infoBook.isFromBook)
    {infoBook.isFromBook = true;
    console.log(infoBook)}
    else location.reload();
  }   
});
};