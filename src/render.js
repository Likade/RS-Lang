async function getWords(page, group) {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words?page=${page}&group=${group}`);
  const data = await response.json();
      let wordHTML ='';
      const wordContainer = document.querySelector('#main_word-container');
      data.forEach(
        ({id, group, page	,word	,image, audio	,audioMeaning	,audioExample, textMeaning, textExample, transcription, wordTranslate, textMeaningTranslate, textExampleTranslate
        }) => {

          wordHTML  =
          `<div class="main_word-item" id="${id}">
          <span class="title"><b>${word}</b></span>
          <span style="display:none">${wordTranslate}</span>
          <div><img src="https://rs-lang-work.herokuapp.com/${image}" alt=""/></div>
          <div class="">${textExample}</div>
          <div class="" style="display:none">${textExampleTranslate}</div>
          <div class="">${textMeaning}</div>
          <div class="" style="display:none">${textMeaningTranslate}</div>
          <div class="">${transcription}</div>
          <div>Audio</div>
          <audio controls src="https://rs-lang-work.herokuapp.com/${audio}"></audio>
          <div>Audio Meaning</div>
          <audio controls src="https://rs-lang-work.herokuapp.com/${audioMeaning}"></audio>
          <div>Audio Example</div>
          <audio controls src="https://rs-lang-work.herokuapp.com/${audioExample}"></audio>

         </div>`;
         wordContainer.insertAdjacentHTML('beforeend', wordHTML);
        });
    }
    getWords(0,0);
    // export default '*';
