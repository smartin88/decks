import '../TrainingPage/TrainingPage.css';
import { useState, useRef } from 'react';
import { TrainingCardProps } from '../../Interfaces';

export default function TrainingCard(props: TrainingCardProps) {
  const [click] = useState(new Audio('/assets/click.mp3'));
  const [success] = useState(new Audio('/assets/trainingsuccess.mp3'));
  const [isFlipped, setIsFlipped] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    setIsFlipped(!isFlipped);
    hideFlagWhenFlipping();
  }

  function handleChange() {
    if (inputRef.current && inputRef.current.value === props.back) {
      success.play();
      scrollRight();
    }
  }

  function scrollLeft() {
    click.play();
    if (document.getElementById('scroll__container')) {
      const element: HTMLElement | null = document.getElementById(
        'scroll__container'
      );
      if (element) {
        element.scrollLeft -= window.innerWidth;
      }
    }
  }

  function scrollRight() {
    click.play();
    if (document.getElementById('scroll__container')) {
      const element: HTMLElement | null = document.getElementById(
        'scroll__container'
      );
      if (element) {
        element.scrollLeft += window.innerWidth;
      }
    }
  }

  function getFlag(language: string) {
    if (language.includes('English')) {
      return '/assets/ukflag.svg';
    } else if (language.includes('German')) {
      return '/assets/germanyflag.svg';
    } else if (language.includes('Spanish')) {
      return '/assets/argentinaflag.svg';
    } else if (language.includes('Italian')) {
      return '/assets/italyflag.svg';
    } else if (language.includes('French')) {
      return '/assets/franceflag.svg';
    }
  }

  function hideFlagWhenFlipping(): void {
    if (isFlipped) {
      const flagElements = document.querySelectorAll<HTMLElement>(
        '.flag__front'
      );
      flagElements.forEach((element: HTMLElement) => {
        element.style.visibility = 'hidden';
      });
      setTimeout(function () {
        flagElements.forEach((element: HTMLElement) => {
          element.style.visibility = 'visible';
        });
      }, 450);
    }
  }

  function textToSpeech(language: string, string: string): void {
    const speech = new SpeechSynthesisUtterance();
    speech.text = string;
    if (language.includes('English')) {
      speech.lang = 'en-GB';
    } else if (language.includes('German')) {
      speech.lang = 'de-DE';
    } else if (language.includes('Spanish')) {
      speech.lang = 'es-MX';
    } else if (language.includes('Italian')) {
      speech.lang = 'it-IT';
    } else if (language.includes('French')) {
      speech.lang = 'fr-FR';
    }
    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="training__card__outer">
      {console.log(props.method)}
      <div>
        <button className="carousel__button" onClick={scrollLeft}>
          {props.method === '1' ? (
            <img
              src="assets/arrow_down.png"
              alt="back"
              className="arrow left__arrow"
            />
          ) : (
            <img
              src="assets/arrow_down.png"
              alt="back"
              className="arrow__hide"
            />
          )}
        </button>
      </div>
      <div
        className={
          isFlipped
            ? 'training__card training__card__is__flipped'
            : 'training__card'
        }
        style={props.method === '1' ? { height: '50vh' } : { height: '60vh' }}
      >
        <div className="training__card__inner" onClick={handleClick}>
          <div className="training__card__front">
            <div className="training__card__text">{props.front}</div>
            <img
              className="flag flag__front"
              id="flag__front"
              src={getFlag(props.languageFront)}
              alt=""
            />
          </div>
          <div className="training__card__back">
            <div className="training__card__text">{props.back}</div>
            <img className="flag" src={getFlag(props.languageBack)} alt="" />
          </div>
        </div>
        <div className="progress__container">
          <div id="progress__bar">
            <progress max={props.max} value={props.progress}>
              {props.progress}
            </progress>
          </div>
          <div className="speaker__container">
            <img
              src="assets/speaker.svg"
              alt=""
              className="speaker"
              onClick={() =>
                isFlipped
                  ? textToSpeech(props.languageBack, props.back)
                  : textToSpeech(props.languageFront, props.front)
              }
            />
          </div>
        </div>
        {(props.method === '2' || props.method === '3') && props.id !== 9999 ? (
          <div className="training__card__input__outer">
            <div className="training__card__input__container">
              <input
                type="text"
                tabIndex={1}
                className="training__card__input"
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <button className="carousel__button" onClick={scrollRight}>
          {props.method === '1' ? (
            <img
              src="assets/arrow_down.png"
              alt="next"
              className="arrow right__arrow"
            />
          ) : (
            <img
              src="assets/arrow_down.png"
              alt="next"
              className="arrow__hide"
            />
          )}
        </button>
      </div>
    </div>
  );
}
