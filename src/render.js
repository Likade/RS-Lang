const getWords = async (page, group) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words?page=${page}&group=${group}`);
  const data = await response.json();
      let wordsHTML ='';
      const wordContainer = document.querySelector('#main_word-container');
      data.forEach(
        ({id, group, page	,word	,image, audio	,audioMeaning	,audioExample, textMeaning, textExample, transcription, wordTranslate, textMeaningTranslate, textExampleTranslate
        }) => {

          wordsHTML  =
          `<div class="main_word-items" id="${id}">
            <span class="title"><b>${word}</b></span>
            <span class="title">${wordTranslate}</span>
            <div class="btn_ctrl">
              <button class="btn_learned">Выучил</button>
              <button class="btn_repeat">Сложно</button>
            </div>
         </div>`;
         wordContainer.insertAdjacentHTML('beforeend', wordsHTML);
        });
    }
    getWords(0,0);


const getWord = async (id) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words/${id}`);
  const data = await response.json();
  var person = data;
    let wordHTML ='';
    const wordContainer = document.querySelector('#main_word-review');
    wordHTML  =
    `<div class="main_word-item" id="${data.id}">
    <div class="main_word-item-text">
      <span class="word"><b>${data.word}</b></span><br>
      <span class="wordTranslate">${data.wordTranslate}</span>
      <div class="transcription">${data.transcription}</div>
      <audio controls src="https://rs-lang-work.herokuapp.com/${data.audio}"></audio>
      <div class="textMeaning">
        <div class="title-textMeaning">${data.textMeaning}</div>
        <div class="title-textMeaningTranslate">${data.textMeaningTranslate}</div>
        <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioMeaning}"></audio>
      </div>
      <div class="textExample">
        <div class="title-textExample">${data.textExample}</div>
        <div class="title-textExampleTranslate">${data.textExampleTranslate}</div>
        <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioExample}"></audio>
      </div>
   </div>
   <div lass="main_word-item-img">
     <img src="https://rs-lang-work.herokuapp.com/${data.image}" alt=""/>
   </div>
   </div>`;
   wordContainer.insertAdjacentHTML('beforeend', wordHTML);
};
getWord("5e9f5ee35eb9e72bc21af4a0");
