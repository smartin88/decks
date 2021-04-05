import { useRef, useEffect, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../Store';
import { GetDeckByUserId } from '../../actions/DeckActions';
import Nav from '../../components/Nav/Nav';
import '../Login/Login.css';

export default function StartTraining() {
  const deckRef = useRef<HTMLSelectElement>(null);
  const methodRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userState = useSelector((state: RootStore) => state.user);
  const deckState = useSelector((state: RootStore) => state.deck);

  useEffect(() => {
    const user = userState.user?.id;
    user && dispatch(GetDeckByUserId(user));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    deckRef.current &&
      methodRef.current &&
      history.push({
        pathname: '/training',
        state: {
          deck: deckRef.current.value,
          method: methodRef.current.value,
        },
      });
  }

  return (
    <div className="login__container">
      <Nav />
      <div className="login__card">
        <div className="login__heading">Start Session</div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="login__form__label">
              <label>Select Deck</label>
            </div>
            <div className="login__form__input__container">
              <select className="login__form__input" ref={deckRef}>
                {deckState.decks
                  ? deckState.decks.map((deck) => (
                      <option key={Math.random()} value={deck.id}>
                        {deck.deckName}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </div>
          <div>
            <div className="login__form__label">
              <label>Learning Method</label>
            </div>
            <div className="login__form__input__container">
              <select className="login__form__input" ref={methodRef}>
                <option value={1}>Flash card only</option>
                <option value={2}>Type answers</option>
                {/* <option value={3}>Speak answers</option> */}
              </select>
            </div>
          </div>
          <div className="login__form__button__container">
            <button type="submit" className="login__form__button">
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
