import { Card } from '../Interfaces';
export const CARD_LOADING = 'CARD_LOADING';
export const CARD_FAIL = 'CARD_FAIL';
export const CARD_SUCCESS = 'CARD_SUCCESS';

export interface CardLoading {
  type: typeof CARD_LOADING;
}

export interface CardFail {
  type: typeof CARD_FAIL;
}

export interface CardSuccess {
  type: typeof CARD_SUCCESS;
  payload: Card[];
}

export type CardDispatchTypes = CardLoading | CardFail | CardSuccess;
