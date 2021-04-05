import '../NotFound/NotFound.css';
import Lottie from 'lottie-react';
import animationData from './tick.json';
import Nav from '../Nav/Nav';
import { useHistory } from 'react-router-dom';

export default function Success() {
  const history = useHistory();
  setTimeout(() => history.push('/'), 3000);
  return (
    <>
      <Nav />
      <div className="container__404">
        <div>
          <Lottie
            animationData={animationData}
            style={{ width: 1067, height: 800 }}
            loop={false}
          />
        </div>
      </div>
    </>
  );
}
