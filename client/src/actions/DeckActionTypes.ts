import { Deck } from '../Interfaces';
export const DECK_LOADING = 'DECK_LOADING';
export const DECK_FAIL = 'DECK_FAIL';
export const DECK_SUCCESS = 'DECK_SUCCESS';

export interface DeckLoading {
  type: typeof DECK_LOADING;
}

export interface DeckFail {
  type: typeof DECK_FAIL;
}

export interface DeckSuccess {
  type: typeof DECK_SUCCESS;
  payload: Deck[];
}

export type DeckDispatchTypes = DeckLoading | DeckFail | DeckSuccess;
