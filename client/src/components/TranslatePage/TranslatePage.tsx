import React, { ChangeEvent, useState, MouseEvent } from 'react';
import './TranslatePage.css';
import googleTranslate from '@google-cloud/translate';
import Nav from '../Nav/Nav';

export default function TranslatePage() {
  const [language, setLanguage] = useState('en');
  const [word, setWord] = useState('');
  const [wordOriginal, setWordOriginal] = useState<string[]>([]);
  const [translated, setWordTranslated] = useState<string[]>([]);

  const translate = new googleTranslate.v2.Translate({
    projectId: 'decks-308609',
    credentials: {
      client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
    },
  });

  function handleChangeWord(event: ChangeEvent<HTMLInputElement>) {
    const newWord = event.target.value;
    setWord(newWord);
  }

  function handleChangeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  }

  function handleClickTranslation(event: MouseEvent<HTMLButtonElement>) {
    if (translated.length < 3) {
      translate.translate(word, language).then((res) => {
        const prevTranslate = translated.concat([res[0]]);
        setWordTranslated(prevTranslate);
        setWordOriginal(wordOriginal.concat(word));
      });
    } else {
      setWordTranslated([]);
      setWordOriginal([]);
      translate.translate(word, language).then((res) => {
        setWordTranslated([res[0]]);
        setWordOriginal([word]);
      });
    }
  }

  return (<div>
    <Nav />
    <div className="translation__container">
      <div className="translation__navbar">
        <select
          className="translation__select"
          name="languages"
          id="lng-select"
          value={language}
          onChange={handleChangeLanguage}
        >
          <option value="">--Please choose an option--</option>
          <option value="it">Italian</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        <input
          value={word}
          className="translation__input"
          onChange={handleChangeWord}
        />
        <button
          className="translation__button"
          onClick={handleClickTranslation}
        >
          {' '}
          Translate
        </button>
      </div>

      <div className="translation__outsider__container__cards">
        <div className="translation__container__all__cards">
          <div className="translation__container__cards">
            <div className="translation__cards">
              <div className="translation__imgBx">
                <div>
                  <img
                    className="translation__img"
                    src="/assets/languagesLogo.svg"
                    alt="design"
                  />
                  <h2> {translated[0]} </h2>
                </div>
              </div>
              <div className="translation__overlay"></div>
              <div className="translation__content">
                {' '}
                <h2>{wordOriginal[0]}</h2>{' '}
              </div>
            </div>

            <div className="translation__cards">
              <div className="translation__imgBx">
                <div>
                  <img
                    className="translation__img"
                    src="/assets/languagesLogo.svg"
                    alt="design"
                  />
                  <h2> {translated[1]}</h2>
                </div>
              </div>
              <div className="translation__overlay"></div>
              <div className="translation__content">
                {' '}
                <h2>{wordOriginal[1]}</h2>{' '}
              </div>
            </div>

            <div className="translation__cards">
              <div className="translation__imgBx">
                <div>
                  <img
                    className="translation__img"
                    src="/assets/languagesLogo.svg"
                    alt="design"
                  />
                  <h2> {translated[2]} </h2>
                </div>
              </div>
              <div className="translation__overlay"></div>
              <div className="translation__content">
                <h2>{wordOriginal[2]}</h2>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
