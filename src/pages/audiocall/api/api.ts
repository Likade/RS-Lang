
type User = {
  name: string,
  userId: string,
  token: string,
  refreshToken: string,
  errCode: string,
  message: string
}

export const dataUser: User = {
  name: '',
  userId: '',
  token: '',
  refreshToken: '',
  errCode: '',
  message: ''
};

export type DayStatistic = {
  learnedWords: number,
  optional: {
    wordsPerDay: number,
    audiocallwordsPerDay: number,
    audiocallRounds: number,
    audiocallPercent: number,
    audiocallSeries: number,
    sprintwordsPerDay: number,
    sprintRounds: number,
    sprintPercent: number,
    sprintSeries: number,
    allRounds: number,
    totalPercent: number,
    wordInGames: {},
    wordInAudiocall: {},
  }
}

export const userStatistic: any =  {
  wordsPerDay: 0,
  audiocallwordsPerDay: 0,
  sprintwordsPerDay: 0,
  wordsInQuiestions: [],
  totalPercent: 0,
  audiocallPercent: 0,
  sprintPercent: 0,
  allRounds: 0,
  audiocallRounds: 0,
  sprintRounds: 0,
  audiocallSeries: 0,
  sprintSeries: 0,
  wordInGames: {},
  wordInAudiocall: {},
  learnedWordsFromBook: 0
}


export async function getWords(page: number, group: number) {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words?page=${page}&group=${group}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const words = await response.json();
  return words;
}

export const getUserStatistic = async(id = dataUser.userId) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${id}/statistics`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${dataUser.token}`,
      'Accept': 'application/json',
      
    }
  });
  const settings = await rawResponse.json();
  return settings;
}

export const updateUserStatistic = async(id = dataUser.userId, body: DayStatistic) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${id}/statistics`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${dataUser.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const setting = await rawResponse.json();
  return setting;
}

export const createUserWord = async (userId: string, wordId: string, word: object) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${dataUser.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();
};

export const updateUserWord = async (userId: string, wordId: string, word: object) => {
  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${dataUser.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();
};
