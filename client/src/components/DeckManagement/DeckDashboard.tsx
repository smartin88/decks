import './DeckManagement.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as DeckActions from '../../actions/DeckActions';
import * as CardActions from '../../actions/CardActions';
import { useEffect, useState } from 'react';
import { Deck } from '../../Interfaces';
import DeckItem from './DeckItem';
import Nav from '../Nav/Nav';

export default function DeckManagement() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootStore) => state.user);
  const deckState = useSelector((state: RootStore) => state.deck);
  const [decks, setDecks] = useState<Deck[]>();

  useEffect(() => {
    dispatch(DeckActions.GetAllDecks());
    dispatch(CardActions.GetAllCards());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDecks(deckState.decks);
  }, [deckState.decks]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {console.log('new render')}
      <div className="sticky__navbar">
        <Nav />
      </div>
      <div className="deck__management__container">
        <div className="deck__list__container">
          <div className="deck__list">
            <div className="deck__item">
              <a href="/newdeck" className="deck__item__create__new__deck">
                <img
                  className="deck__item__create__new__deck__logo"
                  src="/assets/newDeckLogo.svg"
                  alt="update deck"
                ></img>
                <div>create new deck</div>
              </a>
              <a href="/friends" className="deck__item__get__friends__deck">
                <img
                  src="/assets/friendsLogo.svg"
                  alt="update deck"
                  className="deck__item__create__new__deck__logo"
                ></img>
                <div>get deck from one of your friends</div>
              </a>
            </div>
            {decks && userState.user
              ? decks
                  .filter((deck: Deck) => deck.userId === userState.user!.id)
                  .map((deck: Deck, index: number) => {
                    return (
                      <div key={index}>
                        <DeckItem deck={deck} />
                      </div>
                    );
                  })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
