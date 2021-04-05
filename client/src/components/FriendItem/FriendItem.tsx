import './FriendItem.css';
import React from 'react';
import { User } from '../../Interfaces';

interface Props {
  friend: User;
  onClick: () => void;
  onDelete: () => void;
}

export default function FriendItem({ friend, onClick, onDelete }: Props) {
  return (
    <div className="container__friend" onClick={onClick}>
      <div
        style={{
          backgroundImage: `url(${friend.userImage})`,
          backgroundSize: 'cover',
        }}
        className="friend__picture"
      ></div>

      <div className="friend__name">
        <div> {`${friend.firstName}`}</div>
        <div> {`${friend.lastName}`}</div>
      </div>
      <img
        src="/assets/binLogo.svg"
        className="remove__friend__button"
        alt="delete button"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      />
    </div>
  );
}
