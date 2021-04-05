import axios from 'axios';
import { Card, Deck, Word, User } from './Interfaces';
const url = 'http://localhost:3001';

// GET ALL USERS FROM DB
export async function getAllUser(): Promise<User[]> {
  try {
    const response = await axios.get(`${url}/user`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// CREATE A NEW USER
export async function createNewUser(options: User) {
  axios
    .post(`${url}/user`, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

// GET ONE USER FROM DB BY UUID
export async function getUserByUUId(UUId: string): Promise<User> {
  try {
    const response = await axios.get(`${url}/user/${UUId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET ONE USER FROM DB BY ID
export async function getUserById(id: number): Promise<User> {
  try {
    const response = await axios.get(`${url}/user/userId/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET ONE USER FROM DB BY EMAIL
export async function getUserByEmail(email: string): Promise<User> {
  try {
    const response = await axios.get(`${url}/user/userEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// DELETE A USER FROM DB
export async function deleteUser(id: number) {
  axios
    .delete(`${url}/user/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// UPDATE USER INFORMATION
export async function updateUser(id: number, options: Partial<User>) {
  axios
    .put(`${url}/user/${id}`, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// GET ALL DECKS FROM DB
export async function getAllDecks(): Promise<Deck[]> {
  try {
    const response = await axios.get(`${url}/deck`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// CREATE A NEW DECK
export async function createNewDeck(options: Partial<Deck>): Promise<Deck> {
  try {
    const response = await axios.post(`${url}/deck`, options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET ALL DECKS FROM DB WHICH BELONG TO A SPECIFIC USER
export async function getAllDecksFromUser(id: number): Promise<Deck[]> {
  try {
    const response = await axios.get(`${url}/deck/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// UPDATE DECK INFORMATION
export async function updateDeck(id: number, options: Deck) {
  axios
    .put(`${url}/deck/${id}`, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// DELETE DECK FROM DB
export async function deleteDeck(id: number) {
  axios
    .delete(`${url}/deck/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// GET ALL CARDS FROM DB
export async function getAllCards(): Promise<Card[]> {
  try {
    const response = await axios.get(`${url}/card`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET ALL CARDS FROM DB WHICH BELONG TO A SPECIFIC DECK
export async function getAllCardsFromDeck(id: number): Promise<Card[]> {
  try {
    const response = await axios.get(`${url}/card/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// CREATE A NEW CARD
export async function createNewCard(options: Card) {
  axios
    .post(`${url}/card`, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// DELETE DECK FROM DB
export async function deleteCard(id: number) {
  axios
    .delete(`${url}/card/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// UPDATE CARD
export async function updateCard(id: number, options: Card) {
  axios
    .put(`${url}/card/${id}`, options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function createDeckWithCards(
  id: number,
  name: string,
  lang1: string,
  lang2: string,
  words: Word[] | []
) {
  const deck = await createNewDeck({
    id: 0,
    userId: id,
    deckName: name,
    details: '',
    private: true,
  });
  const deckId = deck.id;
  if (words) {
    words.forEach((word) => {
      createNewCard({
        id: 0,
        deckId: deckId,
        front: word.lang1,
        back: word.lang2,
        languageFront: lang1,
        languageBack: lang2,
        stage: 1,
      });
    });
  }
}
