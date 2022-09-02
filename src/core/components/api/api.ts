import { dataUser, DayStatistic  } from "../interfaces/interface";
	// регистрация нового пользователя
	export const createUser = async (user: object) => {
		try {
			const rawResponse = await fetch('https://rs-lang-work.herokuapp.com/users', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user)
			});
<<<<<<< HEAD
	
=======

>>>>>>> book
			if (!rawResponse.ok) {
				throw new Error(`${rawResponse.status}`);
			}
				const content = await rawResponse.json();
<<<<<<< HEAD
			} 
=======
			}
>>>>>>> book
			catch (err) {
				if (err instanceof Error) dataUser.errCode = err.message;
			}
	};
<<<<<<< HEAD
	
=======

>>>>>>> book
	// вход уже зарегистрированного пользователя
	export const loginUser = async (user: object) => {
			try {
					const rawResponse = await fetch('https://rs-lang-work.herokuapp.com/signin', {
							method: 'POST',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(user)
					});
<<<<<<< HEAD
			
					if (!rawResponse.ok) {
							throw new Error(`${rawResponse.status}`);
					}
			
					const content = await rawResponse.json();
			
=======

					if (!rawResponse.ok) {
							throw new Error(`${rawResponse.status}`);
					}

					const content = await rawResponse.json();

>>>>>>> book
					dataUser.name = content.name;
					dataUser.token = content.token;
					dataUser.refreshToken = content.refreshToken;
					dataUser.userId = content.userId;
					dataUser.message = content.message;
<<<<<<< HEAD
			} 
=======
			}
>>>>>>> book
			catch (err) {
					if (err instanceof Error) dataUser.errCode = err.message;
			}
	};
<<<<<<< HEAD
	
=======

>>>>>>> book
	// получение пользователя по id
	export const getUser = async (id: string, token: string) => {
			const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
			 }
			});
			return rawResponse.json();
		};
<<<<<<< HEAD
	
=======

>>>>>>> book
	// получение нового токена пользователя
	export const getNewTokenUser = async (id: string, refreshToken: string) => {
			const rawResponse = await fetch(`https://rs-lang25.herokuapp.com/users/${id}/tokens`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${refreshToken}`,
			 }
			});
			return rawResponse.json();
		};
<<<<<<< HEAD
	
=======

>>>>>>> book
	function setLocalStorageUser() {
		localStorage.setItem('token', dataUser.token);
		localStorage.setItem('userId', dataUser.userId);
		localStorage.setItem('nameUser', dataUser.name);
	}
	window.addEventListener('beforeunload', setLocalStorageUser);
<<<<<<< HEAD
	
=======

>>>>>>> book
	function getLocalStorageUser() {
		if (localStorage.getItem('nameUser')) {
			dataUser.token = <string>localStorage.getItem('token');
			dataUser.userId = <string>localStorage.getItem('userId');
<<<<<<< HEAD
			dataUser.name = <string>localStorage.getItem('nameUser');  
=======
			dataUser.name = <string>localStorage.getItem('nameUser');
>>>>>>> book
		}
	}
	window.addEventListener('load', getLocalStorageUser);

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
<<<<<<< HEAD
	  
=======

  export const getWord = async (id:string) => {
  const response = await fetch(`https://rs-lang-work.herokuapp.com/words/${id}`);
  const data = await response.json();
  return data;
  };

>>>>>>> book
	  export const getUserStatistic = async(id = dataUser.userId) => {
		const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${id}/statistics`, {
		  method: 'GET',
		  headers: {
			'Authorization': `Bearer ${dataUser.token}`,
			'Accept': 'application/json',
<<<<<<< HEAD
			
=======

>>>>>>> book
		  }
		});
		const settings = await rawResponse.json();
		return settings;
	  }
<<<<<<< HEAD
	  
=======

>>>>>>> book
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
<<<<<<< HEAD
	  
=======

>>>>>>> book
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
<<<<<<< HEAD
	  
=======

>>>>>>> book
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

<<<<<<< HEAD
=======
    export const getUserWord = async (userId:string, wordId:string) => {
      const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
        method: 'GET',
        // withCredentials: true,
        headers: {
          Authorization: `Bearer ${dataUser.token}`,
          Accept: 'application/json',
        },
      });
      const content = await rawResponse.json();
      return content;
    };

>>>>>>> book
	  export const getUserWords = async (userId: string) => {
		try {
		  const rawResponse = await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words`, {
			method: 'GET',
			headers: {
			  'Authorization': `Bearer ${dataUser.token}`,
			  'Accept': 'application/json',
			}
		  });
		  if (!rawResponse.ok) {
			throw new Error(`${rawResponse.status}`);
		  }
		  const content = await rawResponse.json();
		  return content;
<<<<<<< HEAD
	  
=======

>>>>>>> book
		} catch (err) {
		  if (err instanceof Error) dataUser.errCode = err.message;
		}
	  };

//запрос для удаления слова
export const deleteUserWord = async (userId: string, wordId: string) => {
<<<<<<< HEAD
  
=======

>>>>>>> book
	await fetch(`https://rs-lang-work.herokuapp.com/users/${userId}/words/${wordId}`, {
	  method: 'DELETE',
	  headers: {
		'Authorization': `Bearer ${dataUser.token}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  },
	});
  };

