export const getWords = async (group:number, page = 0) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words?page=${page}&group=${group}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const content = await response.json();
  return content;
};

export const getWord = async (id:string) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words/${id}`);
  const data = await response.json();
  return data;
  // let wordHTML = '';
  // const wordContainer = <HTMLElement>document.querySelector('#main_word-review');
  // wordHTML = `<div class="main_word-item" id="${data.id}">
  //   <div class="main_word-item-text">
  //     <span class="word"><b>${data.word}</b></span><br>
  //     <span class="wordTranslate">${data.wordTranslate}</span>
  //     <div class="transcription">${data.transcription}</div>
  //     <audio controls src="https://rs-lang-work.herokuapp.com/${data.audio}"></audio>
  //     <div class="textMeaning">
  //       <h3>Значение</h3>
  //       <div class="title-textMeaning">${data.textMeaning}</div>
  //       <div class="title-textMeaningTranslate">${data.textMeaningTranslate}</div>
  //       <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioMeaning}"></audio>
  //     </div>
  //     <div class="textExample">
  //       <h3>Пример</h3>
  //       <div class="title-textExample">${data.textExample}</div>
  //       <div class="title-textExampleTranslate">${data.textExampleTranslate}</div>
  //       <audio controls src="https://rs-lang-work.herokuapp.com/${data.audioExample}"></audio>
  //     </div>
  //  </div>
  //  <div class="main_word-item-img">
  //    <img src="https://rs-lang-work.herokuapp.com/${data.image}" alt=""/>
  //  </div>
  //  </div>`;
  // wordContainer.innerHTML = `${wordHTML}`;
};

// getWord("5e9f5ee35eb9e72bc21af4b1");

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
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhjZGEyOWIxM2FlMDAxNjIxN2U5NyIsImlhdCI6MTY2MTUyNDE1MiwiZXhwIjoxNjYxNTM4NTUyfQ.OjbR3WpKwwfNYJlPlg6kiXXMo1HHEvWwEjRaJgXPC8c';
// const wordId ="5e9f5ee35eb9e72bc21af716";

// export const createUserWord = async ({ userId, wordId, word }:any) => {
//   const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
//     method: 'POST',
//     withCredentials: true,
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(word)
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };
// createUserWord({
//   userId: "6308cda29b13ae0016217e97",
//   wordId: "5e9f5ee35eb9e72bc21af716",
//   word: { "difficulty": "weak", "optional": {testFieldString: 'test', testFieldBoolean: true} }
// });

// export const getUserWord = async (userId:string, wordId:string) => {
//   const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
//     method: 'GET',
//     withCredentials: true,
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Accept': 'application/json',
//     }
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };
// getUserWord(userId, wordId);
// getUserWord({
//   userId: "6308cda29b13ae0016217e97",
//   wordId: "5e9f5ee35eb9e72bc21af716"
// });
export const getUserWords = async (userId: string) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words`, {
    method: 'GET',
    // withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  // console.log(data);

  let wordsHardGroupHTML = '';
  const wordContainer = <HTMLElement>document.querySelector('#main_word-container');
  data.forEach(
    (id:number, wordId:string, difficulty:string) => {
      wordsHardGroupHTML = `<div class="main_word-items" id="${id}">
            <span class="title" id="${wordId}"><b>${difficulty}</b></span>

         </div>`;
      wordContainer.insertAdjacentHTML('beforeend', wordsHardGroupHTML);
    },
  );
};
// getUserWords({
//   userId: "6308cda29b13ae0016217e97"
// });

export async function createBook(group = 0, page = 0) {
  const arrWords = await getWords(group, page);
  const containerWords = <HTMLElement>document.querySelector('#main_word-container');
  containerWords.innerHTML = '';
  for (let i = 0; i < arrWords.length; i++) {
    containerWords.innerHTML += `
      <div class="main_word-items" id="${arrWords[i].id}">
              <span class="title"><b>${arrWords[i].word}</b></span>
              <span class="title">${arrWords[i].wordTranslate}</span>
              <div class="btn_ctrl">
                <button class="btn_learned">Выучил</button>
                <button class="btn_repeat">Сложно</button>
              </div>
           </div>
    `;
  }
}

export async function createItem(id:string) {
  const data = await getWord(id);
  const wordContainer = <HTMLElement>document.querySelector('#main_word-review');
  wordContainer.innerHTML += `<div class="main_word-item" id="${data.id}">
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
     </div>
    `;
}
