
const getWords = async (group, page = 0) => {
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
    getWords(0);


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
        <h3>Значение</h3>
        <div class="title-textMeaning">${data.textMeaning}</div>
        <div class="title-textMeaningTranslate">${data.textMeaningTranslate}</div>
        <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioMeaning}"></audio>
      </div>
      <div class="textExample">
        <h3>Пример</h3>
        <div class="title-textExample">${data.textExample}</div>
        <div class="title-textExampleTranslate">${data.textExampleTranslate}</div>
        <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioExample}"></audio>
      </div>
   </div>
   <div class="main_word-item-img">
     <img src="https://rs-lang-work.herokuapp.com/${data.image}" alt=""/>
   </div>
   </div>`;
   wordContainer.innerHTML = `${wordHTML}`;
  //  console.log(`${data.id}`);
};

getWord("5e9f5ee35eb9e72bc21af4b1");









// const user1 = {
//   name: "varenik40000",
//   userId: "40000",
//   token: "v40000",
//   refreshToken: "v40000",
//   errCode: "error40000",
//   message: "varenik40000 - not good js-programmist"
// };

// const createUser = async user => {
//   const rawResponse = await fetch('https://rs-lang-work.herokuapp.com/users', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();
//   console.log(content);
// };
// createUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

// const loginUser = async user => {
//   const rawResponse = await fetch('https://rs-lang-work.herokuapp.com/signin', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();
//   // console.log(content);
// };
// loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });



//  const dataUser= {
//   name: '',
//   userId: '',
//   token: '',
//   refreshToken: '',
//   errCode: '',
//   message: ''
// };





// const userId = "6308cda29b13ae0016217e97";
// const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhjZGEyOWIxM2FlMDAxNjIxN2U5NyIsImlhdCI6MTY2MTUyNDE1MiwiZXhwIjoxNjYxNTM4NTUyfQ.OjbR3WpKwwfNYJlPlg6kiXXMo1HHEvWwEjRaJgXPC8c";
// const wordId ="5e9f5ee35eb9e72bc21af716";


const createUserWord = async ({ userId, wordId, word }) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();

  console.log(content);
};
// createUserWord({
//   userId: "6308cda29b13ae0016217e97",
//   wordId: "5e9f5ee35eb9e72bc21af716",
//   word: { "difficulty": "weak", "optional": {testFieldString: 'test', testFieldBoolean: true} }
// });

const getUserWord = async (userId, wordId) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  const content = await rawResponse.json();

  console.log(content);
};
// getUserWord(userId, wordId);
// getUserWord({
//   userId: "6308cda29b13ae0016217e97",
//   wordId: "5e9f5ee35eb9e72bc21af716"
// });
const getUserWords = async (userId) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  const data = await response.json();

  console.log(data);

  let wordsHardGroupHTML ='';
      const wordContainer = document.querySelector('#main_word-container');
      data.forEach(
        ({id, wordId, difficulty}) => {

          wordsHardGroupHTML  =
          `<div class="main_word-items" id="${id}">
            <span class="title" id="${wordId}"><b>${difficulty}</b></span>

         </div>`;
         wordContainer.insertAdjacentHTML('beforeend', wordsHardGroupHTML);
        });

};
// getUserWords({
//   userId: "6308cda29b13ae0016217e97"
// });
