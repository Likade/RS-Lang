import { DayStatistic, 
         getUserStatistic, 
         updateUserStatistic, 
         userStatistic, 
         dataUser, 
         createUserWord, 
         updateUserWord } from './api/api';
import { audioElement, renderAuidoCallStatistic, renderLevel, updateLevel } from './audiocall-html';
import { array, showRightWord, Word } from './utils/utils';

import './audiocall.scss';

export let answer_number = -1;
export let array_of_results: Word[] = [];
export let right_answers_counter = 0;
export let series_of_answers = 0;


export class AudioCall {
  async render() {
    return audioElement();
  }

  async page_scripts() {
    if (dataUser.userId !== '') {
      const statisticStorage: DayStatistic= await getUserStatistic();     
      userStatistic.wordsPerDay = statisticStorage.optional.wordsPerDay;
      userStatistic.audiocallwordsPerDay = statisticStorage.optional.audiocallwordsPerDay;
      userStatistic.audiocallPercent = String(statisticStorage.optional.audiocallPercent).substr(0, 4);
      userStatistic.audiocallRounds = statisticStorage.optional.audiocallRounds;
      userStatistic.allRounds = statisticStorage.optional.allRounds;
      userStatistic.totalPercent = String(statisticStorage.optional.totalPercent).substr(0, 4);
      userStatistic.audiocallSeries = statisticStorage.optional.audiocallSeries;
      userStatistic.wordInAudiocall = statisticStorage.optional.wordInAudiocall;
      userStatistic.wordInGames = statisticStorage.optional.wordInGames;
    }
    
    const answersBody = document.querySelector('.answers__body') as HTMLElement;
    const repeatButton = (document.querySelector('.repeat') as HTMLButtonElement);
    const nextButton = (document.querySelector('.next') as HTMLButtonElement);
    const audioCall = document.querySelector('.audiocall') as HTMLElement;
    const audiocallContainer = document.querySelector('.audiocall .container') as HTMLElement;
    const audiocallRound = document.querySelector('.audiocall-round') as HTMLElement;
    const audiocallStat = document.querySelector('.audiocall-statistic') as HTMLElement;
    const answers = document.querySelectorAll('.answers');

    function showLevels() {
        audioCall.addEventListener('click', async (event) => {
          const target = event.target as HTMLButtonElement;
          if (target.classList.contains('levels')) {
            array_of_results = [];
            audiocallContainer.classList.add('hide');
            answer_number = 0;
            while (answersBody.firstChild) {
              answersBody.removeChild(answersBody.firstChild);
            }
            repeatButton.value = target.value;
            await renderLevel(+target.value);
            audiocallRound.classList.remove('hide');
          }
        }); 
    }
    showLevels();

    if (audiocallRound.classList.contains('hide')) {
      answer_number = 0;
      right_answers_counter = 0;
      series_of_answers = 0;
    };
    
      answersBody.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.classList.contains('answers')) {
          const auidoButton = document.querySelector('.audio-audiocall-game') as HTMLElement;
          const rightAnswer = auidoButton.getAttribute('data-word');
          const selected = target.value;
          const currentWord = { "difficulty": "hard" };
         
          userStatistic.wordInAudiocall[array[answer_number].id] = {
            audiocall: {
              guessed: 0,
              unguessed: 0,
              guessedInARow: 0,
            }
          }
          
          if (selected !== rightAnswer) {
            userStatistic.wordInAudiocall[array[answer_number].id].audiocall.guessedInARow = 0;
            userStatistic.wordInAudiocall[array[answer_number].id].audiocall.unguessed = userStatistic.wordInAudiocall[array[answer_number].id].audiocall.unguessed + 1;
            series_of_answers = 0;
            target.style.background = 'red';
            array[answer_number].choice = 'wrong';
            showRightWord();
            await createUserWord(dataUser.userId, array[answer_number].id, currentWord);
          } 
          else {
            userStatistic.wordInAudiocall[array[answer_number].id].audiocall.guessedInARow++;
            userStatistic.wordInAudiocall[array[answer_number].id].audiocall.guessed = userStatistic.wordInAudiocall[array[answer_number].id].audiocall.guessed + 1;
            right_answers_counter++;
            series_of_answers++;
            target.style.background = 'green';
            array[answer_number].choice = 'right';
            showRightWord();
            if (userStatistic.wordInAudiocall[array[answer_number].id].audiocall.guessedInARow > 2) {
              await updateUserWord(dataUser.userId, array[answer_number].id, { "difficulty": "learned" });
            }
          }
        }
      });
    
    repeatButton.addEventListener('click', async () => {
      array_of_results = [];
      (document.querySelector('.audiocall-statistic') as HTMLElement).classList.add('hide');
      audiocallRound.classList.remove('hide');
      answer_number = 0;
      right_answers_counter = 0;
      updateLevel();
    });

    async function nextQuestion() {
      
      if (answer_number === 19) {
        await renderAuidoCallStatistic();
        array_of_results.map(async (element: Word) => {
          if (userStatistic.wordsInQuiestions.includes(element.word) || dataUser.userId === '') return;
          else {
            userStatistic.audiocallwordsPerDay = userStatistic.audiocallwordsPerDay + 1;
            userStatistic.wordsPerDay = userStatistic.wordsPerDay + 1;
            userStatistic.wordsInQuiestions.push(element.word);
            if (series_of_answers > userStatistic.audiocallSeries) {
              userStatistic.audiocallSeries = series_of_answers;
            } 
          }
        })
        if (dataUser.userId !== '') {
          userStatistic.audiocallRounds = userStatistic.audiocallRounds + 1;
          userStatistic.allRounds = userStatistic.allRounds + 1;
          userStatistic.audiocallPercent = (Number(userStatistic.audiocallPercent) + Number(((right_answers_counter / 20) * 100))) / userStatistic.audiocallRounds;
          userStatistic.totalPercent = (Number(userStatistic.totalPercent) + Number(((right_answers_counter / 20) * 100))) / userStatistic.allRounds;
          
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
            }
          }
          await updateUserStatistic(dataUser.userId, wordPerDay);
        }
        
        while (answersBody.firstChild) {
          answersBody.removeChild(answersBody.firstChild);
        }
        audiocallRound.classList.add('hide');
        audiocallStat.classList.remove('hide');
      } 
      else {
        answer_number++;
        array[answer_number].choice = 'wrong';
        updateLevel();
      }
    }
 
    nextButton.addEventListener('click', nextQuestion);
    
      document.addEventListener('keydown', (event) => {
        answers.forEach(async (element) => {
          if (element.getAttribute('data-number') === event.code) {
            const auidoButton = document.querySelector('.audio-audiocall-game') as HTMLElement;
            const button = ((document.querySelector('.answers__container') as HTMLElement)?.children[Number(`${event.code.split('')[5]}`) - 1]);
            const rightAnswer = auidoButton.getAttribute('data-word');
            const selected = button.getAttribute('data-word');
            if (selected !== rightAnswer) {
              series_of_answers = 0;
              button.classList.add('wrong-answer');
              array[answer_number].choice = 'wrong';
              showRightWord();
            } else {
              right_answers_counter++;
              button.classList.add('right-answer');
              array[answer_number].choice = 'right';
              showRightWord();
            }
          } 
        });
      });
  }
}

