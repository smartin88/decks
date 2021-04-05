import './HomePage.css';
import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

function HomePage() {
  const [styleCard, setStyleCard] = useState<{ transform: string }>();
  const [styleLogo, setStyleLogo] = useState<{ transform: string }>();
  const [styleHeadline, setStyleHeadline] = useState<{ transform: string }>();
  const [styleMenu, setStyleMenu] = useState<{ transform: string }>();

  function mouseMovesOnCard(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    setStyleCard({
      transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
    });
    setStyleLogo({
      transform: 'translateZ(50px) rotateZ(-15deg)',
    });
    setStyleHeadline({
      transform: 'translateZ(60px)',
    });
    setStyleMenu({
      transform: 'translateZ(30px)',
    });
  }

  function mouseLeavesContainer() {
    setStyleCard({
      transform: 'rotateY(0deg) rotateX(0deg)',
    });
    setStyleLogo({
      transform: 'translateZ(0px) rotateZ(0deg)',
    });
    setStyleHeadline({
      transform: 'translateZ(0px)',
    });
    setStyleMenu({ transform: 'translateZ(0px)' });
  }

  return (
    <div className="home__page__container">
      <Nav />
      <div
        className="home__page__card__container"
        onMouseLeave={() => mouseLeavesContainer()}
      >
        <div
          className="home__page__card"
          style={styleCard}
          onMouseMove={(e) => mouseMovesOnCard(e)}
        >
          <div className="home__page__card__header">
            <div className="home__page__card__logo">
              <div className="home__page__card__circle">
                <img
                  src="/assets/sauron.svg"
                  alt="sauron can see everything"
                  style={styleLogo}
                />
              </div>
            </div>
            <div className="home__page__card__headline" style={styleHeadline}>
              <h1 style={styleHeadline}>Decks</h1>
              <h2>create your own flash cards</h2>
            </div>
          </div>
          <div className="home__page__card__info">
            <h3>
              FUTURE-READY FLASH CARD TRAINER - CREATE YOUR OWN DECKS AND CARDS
              - GET PRE-BUILT DECKS - CONNECT WITH YOUR FRIENDS AND START
              SHARING DECKS
            </h3>
            <div className="home__page__card__sizes">
              <Link to="/friends">
                <button style={styleMenu}>friends</button>
              </Link>
              <Link to="/deckmanagement">
                <button style={styleMenu}>decks</button>
              </Link>
              <Link to="/translate">
                <button style={styleMenu}>translate</button>
              </Link>
              <Link to="/starttraining">
                <button style={styleMenu}>start session</button>
              </Link>
            </div>
            <div className="home__page__card__blobs__container">
              <Tooltip title="ADD NEW CARD TO DECK" placement="right">
                <Link to="/newdeck">
                  <img
                    src="/assets/add.svg"
                    alt="add new card logo"
                    className="home__page__card__blob"
                  ></img>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
