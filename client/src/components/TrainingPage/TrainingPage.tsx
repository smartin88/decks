import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CardActions from '../../actions/CardActions';
import { Card, TrainingPageProps } from '../../Interfaces';
import { RootStore } from '../../Store';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './TrainingPage.css';
import TrainingCard from '../TrainingCard/TrainingCard';

export default function TrainingPage(props: TrainingPageProps) {
  const [success] = useState(new Audio('/assets/trainingsuccess.mp3'));
  const cardState = useSelector((state: RootStore) => state.card);
  const dispatch = useDispatch();
  const listInnerRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    dispatch(CardActions.GetCardByDeckId(props.history.location.state!.deck));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listInnerRef.current;
      if (clientWidth - scrollWidth === -scrollLeft) {
        success.play();
        setTimeout(() => {
          history.push('/');
        }, 2000);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const redirect = () => {
    setTimeout(() => {
      history.push('/starttraining');
    }, 1000);
  };

  return (
    <div className="wrapper__training__page">
      {console.log(props.history.location.state!.method)}
      <Nav />
      <div
        className="training__container"
        id="scroll__container"
        onScroll={() => onScroll()}
        ref={listInnerRef}
      >
        <div className="training__card__container">
          {cardState.cards.length > 0
            ? cardState.cards.map((card: Card, idx: number) => {
                return (
                  <TrainingCard
                    key={card.id}
                    method={props.history.location.state!.method}
                    id={card.id}
                    front={card.front}
                    back={card.back}
                    languageFront={card.languageFront}
                    languageBack={card.languageBack}
                    progress={idx + 1}
                    max={cardState.cards.length + 1}
                  />
                );
              })
            : null}
          {cardState.cards.length ? (
            <TrainingCard
              id={9999}
              method={props.history.location.state!.method}
              front="Well done!"
              back="Well done!"
              languageFront="done"
              languageBack="done"
              progress={cardState.cards.length + 1}
              max={cardState.cards.length + 1}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
