import './NotFound.css';
import Lottie from 'lottie-react';
import animationData from './404.json';
import Nav from '../Nav/Nav';

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="container__404">
        <div>
          <Lottie
            animationData={animationData}
            style={{ width: 1067, height: 800 }}
          />
        </div>
      </div>
    </>
  );
}
