import './NewDeck.css';
import React, { SyntheticEvent, useRef, useState, useEffect } from 'react';
import { createDeckWithCards } from '../../ApiService';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { useAuth } from '../../contexts/AuthContext';
import { GetUserByUUId } from '../../actions/UserActions';
import Nav from '../Nav/Nav';
import { Word } from '../../Interfaces';

export default function NewDeck() {
  const [words, setWords] = useState<Word[]>([]);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const lang1Ref = useRef<HTMLSelectElement>(null);
  const lang2Ref = useRef<HTMLSelectElement>(null);
  const lang1 = useRef<HTMLInputElement>(null);
  const lang2 = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const { currentUser } = useAuth();
  const userState = useSelector((state: RootStore) => state.user);

  useEffect(() => {
    currentUser && dispatch(GetUserByUUId(currentUser.uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleAddWord(e: SyntheticEvent) {
    e.preventDefault();
    setError('');
    if (
      lang1.current &&
      lang2.current &&
      (lang1.current.value === '' || lang2.current.value === '')
    ) {
      return setError(
        'You must enter a word on both sides. Please check and try again.'
      );
    }
    lang1.current &&
      lang2.current &&
      setWords([
        ...words,
        { lang1: lang1.current.value, lang2: lang2.current.value },
      ]);
    (lang1 as React.MutableRefObject<HTMLInputElement>).current.value = '';
    (lang2 as React.MutableRefObject<HTMLInputElement>).current.value = '';
  }

  function handleSaveDeck(e: SyntheticEvent) {
    e.preventDefault();
    setError('');
    if (
      lang1Ref.current &&
      lang2Ref.current &&
      lang1Ref.current.value === lang2Ref.current.value
    ) {
      return setError(
        'You have selected the same language on both sides. Please check and try again.'
      );
    } else if (words.length === 0) {
      return setError(
        `You haven't added any words. Please check and try again.`
      );
    }
    nameRef.current &&
      lang1Ref.current &&
      lang2Ref.current &&
      createDeckWithCards(
        userState.user!.id,
        nameRef.current.value,
        lang1Ref.current.value,
        lang2Ref.current.value,
        words
      );
    history.push('/success');
  }

  function deleteWord(word: { lang1: string; lang2: string }) {
    let newWords: Word[] = [...words];
    const index = newWords.indexOf(word);
    newWords.splice(index, 1);
    setWords(newWords);
  }

  return (
    <div className="new__deck__container">
      <Nav />
      <div className="new__deck__card">
        <div className="new__deck__heading">Create New Deck</div>
        {error && <div className="login__alert__warning">{error}</div>}
        <form onSubmit={handleAddWord}>
          <div className="new__deck__name__input">
            <div className="new__deck__form__label">
              <label>Name</label>
            </div>
            <div className="new__deck__form__input__container">
              <input
                type="text"
                className="new__deck__form__input"
                ref={nameRef}
                tabIndex={1}
                required
              />
            </div>
          </div>

          <div className="new__deck__language__inputs">
            <div className="new__deck__language__input__left">
              <div className="new__deck__form__label">
                <label>First Language</label>
              </div>
              <div className="new__deck__form__input__container">
                <select
                  className="new__deck__form__input"
                  ref={lang1Ref}
                  tabIndex={2}
                  required
                >
                  <option value="" disabled selected>
                    Select a language
                  </option>
                  <option value="English">English</option>
                  <option value="German">German</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>
            </div>
            <div className="new__deck__language__input__right">
              <div className="new__deck__form__label">
                <label>Second Language</label>
              </div>
              <div className="new__deck__form__input__container">
                <select
                  className="new__deck__form__input"
                  ref={lang2Ref}
                  tabIndex={3}
                  required
                >
                  <option value="" disabled selected>
                    Select a language
                  </option>
                  <option value="English">English</option>
                  <option value="German">German</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>
            </div>
          </div>

          <div className="new__deck__language__inputs">
            <div className="new__deck__language__input__left">
              <div className="new__deck__form__label">
                <label>Words</label>
              </div>
              <div className="new__deck__words">
                {words.map((word) => {
                  return (
                    <div
                      className="new__deck__word"
                      key={Math.random() * 10000}
                    >
                      <span>
                        {word.lang1}
                        {'  '}
                        <button
                          type="button"
                          onClick={() => deleteWord(word)}
                          className="delete__button"
                          tabIndex={-1}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="new__deck__language__input__right">
              <div className="new__deck__form__label">
                <label>Words</label>
              </div>
              <div className="new__deck__words">
                {words.map((word) => {
                  return (
                    <div
                      className="new__deck__word"
                      key={Math.random() * 10000}
                    >
                      <span>
                        {word.lang2}
                        {'  '}
                        <button
                          type="button"
                          onClick={() => deleteWord(word)}
                          className="delete__button"
                          tabIndex={-1}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="new__deck__language__inputs">
            <div className="new__deck__language__input__left">
              <div className="new__deck__form__input__container">
                <input
                  type="text"
                  className="new__deck__form__input"
                  ref={lang1}
                  onSubmit={handleAddWord}
                  tabIndex={4}
                />
              </div>
            </div>

            <div className="new__deck__language__input__right">
              <div className="new__deck__form__input__container">
                <input
                  type="text"
                  className="new__deck__form__input"
                  ref={lang2}
                  onSubmit={handleAddWord}
                  tabIndex={5}
                />
              </div>
            </div>
          </div>

          <div className="new__deck__button__container">
            <button type="submit" className="add__word__button" tabIndex={6}>
              Add Word
            </button>
            <button
              onClick={handleSaveDeck}
              className="save__deck__button"
              tabIndex={7}
            >
              Save Deck
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
