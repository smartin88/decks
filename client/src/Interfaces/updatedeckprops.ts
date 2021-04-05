import { Deck } from '.';

export default interface UpdateDeckProps {
  location: {
    state: [{ deckId: number }, { deckName: string }, { deck: Deck }];
  };
}
