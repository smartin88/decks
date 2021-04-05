import './DeckManagement.css';
import { useEffect, useState, ChangeEvent } from 'react';
import * as ApiService from '../../ApiService';
import { Card, UpdateDeckProps } from '../../Interfaces';
import Nav from '../Nav/Nav';
import { useDispatch } from 'react-redux';
import * as CardActions from '../../actions/CardActions';

export default function UpdateDeck(props: UpdateDeckProps) {
  console.log(props);

  const dispatch = useDispatch();
  const [cards, setCards] = useState<Card[]>([]);
  const [changeDeckname, setChangeDeckname] = useState(false);
  const [deckTitle, setChangeDeckTitle] = useState<any>(
    props.location.state[1].deckName
  );
  const [updateWord, setUpdateWord] = useState<any>({});
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [firstLanguage, setFirstLanguage] = useState('');
  const [secondLanguage, setSecondLanguage] = useState('');

  useEffect(() => {
    ApiService.getAllCardsFromDeck(
      props.location.state[0].deckId
    ).then((data: Card[]) => setCards(data));
  }, [cards]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    cards.map((card: Card) => {
      return setUpdateWord((prev: Card) => ({
        ...prev,
        [card.id]: false,
      }));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function updatedFront(event: ChangeEvent<HTMLInputElement>) {
    setFront(event.target.value);
  }

  function updatedBack(event: ChangeEvent<HTMLInputElement>) {
    setBack(event.target.value);
  }

  function updateDeckTitle(event: ChangeEvent<HTMLInputElement>) {
    setChangeDeckTitle(event.target.value);
  }

  function updateFirstLanguage(event: ChangeEvent<HTMLInputElement>) {
    setFirstLanguage(event.target.value);
  }

  function updateSecondLanguage(event: ChangeEvent<HTMLInputElement>) {
    setSecondLanguage(event.target.value);
  }

  function updateButton(card: Card): void {
    setUpdateWord((prev: Card) => ({
      ...prev,
      [card.id]: true,
    }));
  }

  function sendCardToDb(card: Card) {
    ApiService.updateCard(card.id, {
      id: card.id,
      deckId: card.deckId,
      front: front,
      back: back,
      languageFront: card.languageFront,
      languageBack: card.languageBack,
      stage: card.stage,
    });
    setUpdateWord(!updateWord);
  }

  function sendNewCardToDB() {
    dispatch(
      CardActions.CreateNewCard({
        id: 0,
        deckId: props.location.state[0].deckId,
        front: firstLanguage,
        back: secondLanguage,
        languageFront: 'test',
        languageBack: 'test',
        stage: 0,
      })
    );
    setFirstLanguage('');
    setSecondLanguage('');
  }

  function changeDeckTitle() {
    const deckId = props.location.state[0].deckId;
    ApiService.updateDeck(deckId, {
      id: props.location.state[2].deck.id,
      userId: props.location.state[2].deck.userId,
      deckName: deckTitle,
      details: props.location.state[2].deck.details,
      private: props.location.state[2].deck.private,
    });
    setChangeDeckname(!changeDeckname);
  }

  return (
    <div className="deck__management__container">
      <div className="sticky__navbar__update__deck">
        <Nav />
      </div>
      <div className="update__deck__container">
        <div className="card__list">
          {changeDeckname ? (
            <div className="card__list__title">
              <div>
                <input
                  type="text"
                  placeholder={props.location.state[1].deckName}
                  onChange={updateDeckTitle}
                  className="update__deck__title__input"
                />
              </div>
              <img
                src="/assets/done.svg"
                alt="edit card"
                className="edit__card__logo"
                onClick={() => changeDeckTitle()}
              />
            </div>
          ) : (
            <div className="card__list__title">
              <div>{deckTitle}</div>
              <img
                src="/assets/edit.svg"
                alt="edit card"
                className="edit__card__logo"
                onClick={() => setChangeDeckname(!changeDeckname)}
              />
            </div>
          )}
          {cards
            ? cards.map((card: Card, index: number) => {
                return (
                  <div key={index}>
                    {!updateWord[card.id] ? (
                      <div className="card__list__item">
                        <div className="card__word__item">
                          {card.front} - {card.back}
                        </div>
                        <div>
                          <img
                            src="/assets/edit.svg"
                            alt="edit card"
                            className="edit__card__logo"
                            onClick={() => updateButton(card)}
                          ></img>
                        </div>
                        <div>
                          <img
                            src="/assets/binLogo.svg"
                            alt="edit card"
                            className="delte__card__logo"
                            onClick={() => ApiService.deleteCard(card.id)}
                          ></img>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="text"
                          placeholder={card.front}
                          onChange={updatedFront}
                          className="input__deckmanagement__card"
                        />
                        <input
                          type="text"
                          placeholder={card.back}
                          onChange={updatedBack}
                          className="input__deckmanagement__card"
                        />
                        <button
                          onClick={() => sendCardToDb(card)}
                          className="input__deckmanagement__button"
                        >
                          update card
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            : null}
          <div className="add__word__container__update__deck">
            <div>
              <input
                type="text"
                className="add__word__input__field__update__deck"
                onChange={updateFirstLanguage}
                value={firstLanguage}
                placeholder="Front side ..."
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="add__word__input__field__update__deck"
                onChange={updateSecondLanguage}
                value={secondLanguage}
                placeholder="Back side ..."
              ></input>
            </div>
            <div className="add__word__button__update__deck__add__container">
              <button
                type="button"
                className="add__word__button__update__deck__add"
                onClick={() => sendNewCardToDB()}
              >
                Add word
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
