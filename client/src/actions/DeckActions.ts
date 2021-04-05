import { Dispatch } from 'redux';
import {
  DECK_FAIL,
  DECK_LOADING,
  DECK_SUCCESS,
  DeckDispatchTypes,
} from './DeckActionTypes';
import * as ApiService from '../ApiService';
import { Deck } from '../Interfaces';

export const GetAllDecks = () => async (
  dispatch: Dispatch<DeckDispatchTypes>
) => {
  try {
    dispatch({ type: DECK_LOADING });
    const res: Deck[] = await ApiService.getAllDecks();
    dispatch({
      type: DECK_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: DECK_FAIL });
  }
};

export const CreateDeck = (options: Deck) => async (
  dispatch: Dispatch<DeckDispatchTypes>
) => {
  try {
    dispatch({ type: DECK_LOADING });
    ApiService.createNewDeck(options);
  } catch (error) {
    dispatch({ type: DECK_FAIL });
  }
};

export const GetDeckByUserId = (id: number) => async (
  dispatch: Dispatch<DeckDispatchTypes>
) => {
  try {
    dispatch({ type: DECK_LOADING });
    const res: Deck[] = await ApiService.getAllDecksFromUser(id);
    dispatch({
      type: DECK_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: DECK_FAIL });
  }
};

export const DeleteDeck = (id: number) => async (
  dispatch: Dispatch<DeckDispatchTypes>
) => {
  try {
    dispatch({ type: DECK_LOADING });
    await ApiService.deleteDeck(id);
    const res: Deck[] = await ApiService.getAllDecks();
    let filteredDecks = res.filter((deck: Deck) => deck.id !== id);
    dispatch({
      type: DECK_SUCCESS,
      payload: filteredDecks,
    });
  } catch (error) {
    dispatch({ type: DECK_FAIL });
  }
};

export const UpdateDeck = (id: number, options: Deck) => async (
  dispatch: Dispatch<DeckDispatchTypes>
) => {
  try {
    dispatch({ type: DECK_LOADING });
    ApiService.updateDeck(id, options);
  } catch (error) {
    dispatch({ type: DECK_FAIL });
  }
};
