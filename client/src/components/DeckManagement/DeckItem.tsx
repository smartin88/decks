import './DeckManagement.css';
import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as DeckActions from '../../actions/DeckActions';
import * as CardActions from '../../actions/CardActions';
import { RootStore } from '../../Store';
import Tooltip from '@material-ui/core/Tooltip';
import { Card, Deck, DeckItemProps } from '../../Interfaces';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

export default function DeckItem(props: DeckItemProps) {
  const deck: Deck = props.deck;
  const dispatch = useDispatch();
  const cardState = useSelector((state: RootStore) => state.card);
  const userState = useSelector((state: RootStore) => state.user);
  const [wantToDelete, setWantToDelete] = useState(false);
  const [addNewCard, setAddNewCard] = useState(false);
  const [firstLanguage, setFirstLanguage] = useState('');
  const [secondLanguage, setSecondLanguage] = useState('');
  const history: History = useHistory();

  function deleteDeckByClick(id: number) {
    dispatch(DeckActions.DeleteDeck(id));
  }

  function countCardsOfDeck(id: number) {
    const cardsofDeck = cardState.cards.filter(
      (card: Card) => card.deckId === id
    );
    return cardsofDeck.length;
  }

  function getLanguageOfDeck(id: number) {
    const language1 = cardState.cards.filter(
      (card: Card) => card.deckId === id
    )[0].languageFront;
    const language2 = cardState.cards.filter(
      (card: Card) => card.deckId === id
    )[0].languageBack;
    return { language1, language2 };
  }

  function changeStateAddButton() {
    setAddNewCard(!addNewCard);
  }

  function updateFirstLanguage(event: ChangeEvent<HTMLInputElement>) {
    setFirstLanguage(event.target.value);
  }

  function updateSecondLanguage(event: ChangeEvent<HTMLInputElement>) {
    setSecondLanguage(event.target.value);
  }

  function sendNewCardToDB() {
    const languages = getLanguageOfDeck(deck.id);
    dispatch(
      CardActions.CreateNewCard({
        id: 0,
        deckId: deck.id,
        front: firstLanguage,
        back: secondLanguage,
        languageFront: languages.language1,
        languageBack: languages.language2,
        stage: 0,
      })
    );
    setFirstLanguage('');
    setSecondLanguage('');
  }

  function startTraining(e: SyntheticEvent) {
    e.preventDefault();
    history.push({
      pathname: '/training',
      state: { deck: deck.id, method: '1' },
    });
  }

  return (
    <div>
      <div className="deck__item">
        <div
          className="deck__delete__button"
          onClick={() => setWantToDelete(!wantToDelete)}
        >
          <img
            src="/assets/binLogo.svg"
            alt="add new card logo"
            className="delete__button__logo"
          ></img>
          {!wantToDelete ? null : (
            <div className="confirm__delete">
              <div>Are you sure you want to delete your deck?</div>
              <div className="confirm__delete__choice">
                <div onClick={() => deleteDeckByClick(deck.id)}>Yes</div>
                <div onClick={() => setWantToDelete(!wantToDelete)}>No</div>
              </div>
            </div>
          )}
        </div>
        <div className="deck__name">
          <div className="deck__name__title">{deck.deckName}</div>
        </div>
        <div className="deck__username">
          {userState.user ? userState.user.firstName : null}'s Deck{' '}
          {deck.private ? (
            <div className="privacy__info">
              private deck
              <Tooltip
                title="a private deck can be copied by your friends but you stay the owner of your own deck. That means that no one can change its content"
                placement="right"
              >
                <img
                  src="/assets/infoLogo.svg"
                  alt="info about decks privacy"
                  className="info__logo"
                  style={{ cursor: 'pointer' }}
                ></img>
              </Tooltip>
            </div>
          ) : (
            <div className="privacy__info">
              shared deck
              <Tooltip
                title="a shared deck is mutable. That means if you or one of your friends change something in the deck it will change both - your deck and your friends deck"
                placement="right"
              >
                <img
                  src="/assets/infoLogo.svg"
                  alt="info about decks privacy"
                  className="info__logo"
                  style={{ cursor: 'pointer' }}
                ></img>
              </Tooltip>
            </div>
          )}
        </div>
        <div className="deck__number__of__cards">
          {countCardsOfDeck(deck.id)} cards
        </div>
        <div className="update__deck__container">
          <div className="deck__updated">update deck</div>
          <Link
            to={{
              pathname: '/update-deck',
              state: [
                { deckId: deck.id },
                { deckName: deck.deckName },
                { deck: deck },
              ], // your data array of objects
            }}
          >
            <img
              src="/assets/updateLogo.svg"
              alt="update deck"
              className="deck__update__logo"
            ></img>
          </Link>
        </div>
        {addNewCard ? (
          <div>
            <div className="card__popup__container">
              <div className="add__word__title">
                Add new card to deck {deck.deckName}
              </div>
              <div className="add__word__input__container">
                <div>
                  <input
                    type="text"
                    className="add__word__input__field"
                    onChange={updateFirstLanguage}
                    value={firstLanguage}
                    placeholder="type in word for front side ..."
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    className="add__word__input__field"
                    onChange={updateSecondLanguage}
                    value={secondLanguage}
                    placeholder="type in word for back side ..."
                  ></input>
                </div>
              </div>
              <div className="add__word__add__button">
                <button
                  onClick={() => sendNewCardToDB()}
                  className="login__form__button"
                >
                  Add Word
                </button>
              </div>
              <div
                className="add__word__close__button"
                onClick={() => changeStateAddButton()}
                style={{ cursor: 'pointer' }}
              >
                X
              </div>
            </div>
          </div>
        ) : null}
        <div className="deck__add__new__card">
          <img
            src="/assets/plusLogo.svg"
            alt="add new card logo"
            className="home__page__card__blob deck__add__new__card__logo"
            onClick={() => setAddNewCard(!addNewCard)}
          ></img>
        </div>
        <div className="start__training__container">
          <div className="deck__start__training">Start Training</div>
          <img
            src="/assets/playLogo.svg"
            alt="start Training"
            className="deck__start__training__logo"
            onClick={(e) => startTraining(e)}
          ></img>
        </div>
      </div>
    </div>
  );
}
