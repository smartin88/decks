import { Dispatch } from 'redux';
import {
  CARD_FAIL,
  CARD_LOADING,
  CARD_SUCCESS,
  CardDispatchTypes,
} from './CardActionTypes';
import * as ApiService from '../ApiService';
import { Card } from '../Interfaces';

export const GetAllCards = () => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  try {
    dispatch({ type: CARD_LOADING });
    const res: Card[] = await ApiService.getAllCards();
    dispatch({
      type: CARD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: CARD_FAIL });
  }
};

export const CreateNewCard = (card: Card) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  try {
    dispatch({ type: CARD_LOADING });
    ApiService.createNewCard(card);
  } catch (error) {
    dispatch({ type: CARD_FAIL });
  }
};

export const GetCardByDeckId = (id: number) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  try {
    dispatch({ type: CARD_LOADING });
    const res: Card[] = await ApiService.getAllCardsFromDeck(id);
    dispatch({
      type: CARD_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({ type: CARD_FAIL });
  }
};

export const DeleteCard = (id: number) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  try {
    dispatch({ type: CARD_LOADING });
    ApiService.deleteCard(id);
  } catch (error) {
    dispatch({ type: CARD_FAIL });
  }
};

export const UpdateCard = (id: number, card: Card) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  try {
    dispatch({ type: CARD_LOADING });
    ApiService.updateCard(id, card);
  } catch (error) {
    dispatch({ type: CARD_FAIL });
  }
};
