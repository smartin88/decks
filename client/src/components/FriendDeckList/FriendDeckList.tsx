import FriendDeckItem from '../FriendDeckItem/FriendDeckItem';
import React, { useState, useEffect } from 'react';
import * as ApiService from '../../ApiService';
import { Deck, Card } from '../../Interfaces';

interface Props {
  selectedFriendID: number;
}

export default function FriendDeckList({ selectedFriendID }: Props) {
  const [decks, setDecks] = useState<Deck[]>();
  const [cards, setCards] = useState<Card[]>();

  useEffect(() => {
    ApiService.getAllDecksFromUser(selectedFriendID).then((decks) =>
      setDecks(decks)
    );
  }, [selectedFriendID]);

  useEffect(() => {
    let promises = (decks || []).map((deck) => {
      return ApiService.getAllCardsFromDeck(deck.id);
    });
    Promise.all(promises).then((resultCards) => setCards(resultCards.flat()));
  }, [decks]);

  return (
    <div>
      <main>
        {decks?.map((deck) => {
          return (
            cards && <FriendDeckItem deck={deck} key={deck.id} cards={cards} />
          );
        })}
      </main>
    </div>
  );
}
