import {
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
  UserDispatchTypes,
} from '../actions/UserActionTypes';
import {
  DECK_FAIL,
  DECK_LOADING,
  DECK_SUCCESS,
  DeckDispatchTypes,
} from '../actions/DeckActionTypes';
import {
  CARD_FAIL,
  CARD_LOADING,
  CARD_SUCCESS,
  CardDispatchTypes,
} from '../actions/CardActionTypes';
import { User, Deck, Card } from '../Interfaces';

interface defaultUserStateType {
  loading: boolean;
  user?: User;
}

interface defaultDeckStateType {
  loading: boolean;
  decks: Deck[];
}

interface defaultCardStateType {
  loading: boolean;
  cards: Card[];
}

// interface defaultCardStateType {
//   loading: boolean;
//   card?: Card;
// }

const defaultUserState: defaultUserStateType = {
  loading: false,
};

const defaultDeckState: defaultDeckStateType = {
  loading: false,
  decks: [],
};

const defaultCardState: defaultCardStateType = {
  loading: false,
  cards: [],
};

export const userReducer = (
  state: defaultUserStateType = defaultUserState,
  action: UserDispatchTypes
): defaultUserStateType => {
  switch (action.type) {
    case USER_FAIL:
      return {
        loading: false,
      };
    case USER_LOADING:
      return {
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const deckReducer = (
  state: defaultDeckStateType = defaultDeckState,
  action: DeckDispatchTypes
): defaultDeckStateType => {
  switch (action.type) {
    case DECK_FAIL:
      return {
        ...state,
        loading: false,
      };
    case DECK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DECK_SUCCESS:
      return {
        loading: false,
        decks: action.payload,
      };
    default:
      return state;
  }
};

export const cardReducer = (
  state: defaultCardStateType = defaultCardState,
  action: CardDispatchTypes
): defaultCardStateType => {
  switch (action.type) {
    case CARD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CARD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CARD_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
      };
    default:
      return state;
  }
};

// export const cardReducer = (
//   state: defaultCardStateType = defaultCardState,
//   action: CardDispatchTypes
// ): defaultCardStateType => {
//   switch (action.type) {
//     case CARD_FAIL:
//       return {
//         loading: false,
//       };
//     case CARD_LOADING:
//       return {
//         loading: true,
//       };
//     case CARD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         card: action.payload,
//       };
//     default:
//       return state;
//   }
// };
