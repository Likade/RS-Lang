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
};

// АВТОРИЗАЦИЯ
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhjZGEyOWIxM2FlMDAxNjIxN2U5NyIsImlhdCI6MTY2MTg2ODc1NSwiZXhwIjoxNjYxODgzMTU1fQ.6Sy11dSv9Fpmi603oc3NFs2kXijpCSmj8ngg2nlr9k4';
// export type User = {
//   name: string,
//   userId: string,
//   token: string,
//   refreshToken: string,
//   errCode: string,
//   message: string
// };
// const loginUser = async (user: { email: string; password: string; }) => {
//   const rawResponse = await fetch('https://rs-lang-work.herokuapp.com/signin', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   const content = await rawResponse.json();
//   return content;
// };
// loginUser({ email: 'hello@user.com', password: 'Gfhjkm_123' });
// АВТОРИЗАЦИЯ

export const createUserWord = async (userId:string, wordId:string, word: { difficulty: string; }) => fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
  method: 'POST',
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(word),
});

export const deleteUserWord = async (userId: string, wordId: string) => {
  await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getUserWord = async (userId:string, wordId:string) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'GET',
    // withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  const content = await rawResponse.json();
  return content;
};

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
  return data;
};

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
                <button id="btn_learned" data-learned=${arrWords[i].id}>Выучил</button>
                <button id="btn_hard" data-hard=${arrWords[i].id}>Сложно</button>
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

export async function createBookHardWord(userId: string) {
  const arrHardWords = await getUserWords(userId);
  const containerWords = <HTMLElement>document.querySelector('#main_word-container');
  containerWords.innerHTML = '';
  for (let i = 0; i < arrHardWords.length; i++) {
    containerWords.innerHTML += `
    <div class="main_word-items" id="${arrHardWords[i].wordId}">
      <span class="title">${arrHardWords[i].difficulty}</span>
     </div>
  `;
  }
}

export async function createItemHardWord(wordId:string) {
  const data = await getWord(wordId);
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
