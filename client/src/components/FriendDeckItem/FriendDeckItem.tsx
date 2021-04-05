import './FriendDeckItem.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as ApiService from '../../ApiService';
import { Deck, Card } from '../../Interfaces';

interface Props {
  deck: Deck;
  cards: Card[];
}

export default function FriendDeckItem({ deck, cards }: Props) {
  const userState = useSelector((state: RootStore) => state.user);
  const [isAdded, setIsAdded] = useState(false);
  const deckId = deck.id;
  const deckName = deck.deckName;
  const userId = userState.user?.id;

  const optionsDeck = {
    userId: userId,
    deckName: deckName,
    details: `Original deck made by someone else`,
    private: false,
  };

  async function handlerAddDeck() {
    setIsAdded(true);
    let cardsFromDeckId = await ApiService.getAllCardsFromDeck(deckId);
    const newDeck = await ApiService.createNewDeck(optionsDeck);
    const newDeckId = newDeck.id;
    cardsFromDeckId.map(function (cardFromDeckId) {
      return (cardFromDeckId.deckId = newDeckId);
    });

    cardsFromDeckId.map((cardFromDeckId) =>
      ApiService.createNewCard(cardFromDeckId)
    );
  }

  return (
    <div className="friend__deck__item__container">
      <div className="friend__deck__item__name">
        <div> {`${deck.deckName}`}</div>
      </div>
      <div className="friend__deck__item__length">
        {cards ? (
          <div>
            {cards.filter((card) => card.deckId === deck.id).length || (
              <img src="/assets/loading.gif" alt="loading" width="20px" />
            )}{' '}
            words
          </div>
        ) : null}
      </div>
      {isAdded ? (
        <img
          src="/assets/added.svg"
          alt="add deck"
          className="friend__deck__item__add__button"
        />
      ) : (
        <img
          src="/assets/add.svg"
          alt="add deck"
          className="friend__deck__item__add__button"
          onClick={handlerAddDeck}
        />
      )}
    </div>
  );
}
