import { combineReducers } from 'redux';
import { userReducer, deckReducer, cardReducer } from './Reducers';

export const RootReducer = combineReducers({
  user: userReducer,
  deck: deckReducer,
  card: cardReducer
});

