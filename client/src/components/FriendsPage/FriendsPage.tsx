import './FriendsPage.css';
import NavForFriendsPage from '../NavForFriendsPage/NavForFriendsPage';
import FriendItem from '../FriendItem/FriendItem';
import FriendDeckList from '../FriendDeckList/FriendDeckList';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { RootStore } from '../../Store';
import * as ApiService from '../../ApiService';
import { User } from '../../Interfaces';

function FriendsPage() {
  const [selectedFriendID, setSelectedFriendID] = useState<number | null>(null);
  const [friends, setFriends] = useState<User[]>([]);
  const userState = useSelector((state: RootStore) => state.user);
  const friendsIDS = userState.user?.friends;

  useEffect(() => {
    const promises = (friendsIDS || []).map((friendsID) => {
      return ApiService.getUserByUUId(friendsID);
    });
    Promise.all(promises).then((resultFriends) => setFriends(resultFriends));
  }, [friendsIDS]);

  function removeFriend(idFriend: number) {
    if (userState.user) {
      const newFriends: User[] = friends.filter(
        (friend) => friend.id !== idFriend
      );
      setFriends(newFriends);
      if (selectedFriendID === idFriend) {
        setSelectedFriendID(null);
      }
      const newFriendsIDS: string[] = newFriends.map(
        (newFriend) => newFriend.userUID
      );
      ApiService.updateUser(userState.user?.id, { friends: newFriendsIDS });
    }
  }

  async function addFriendByEmail(email: string) {
    const friend = await ApiService.getUserByEmail(email);
    const newFriends = [...friends, friend];

    const newFriendsUIDS: string[] = newFriends.map((friend) => friend.userUID);
    if (userState.user && friend) {
      setFriends(newFriends);
      ApiService.updateUser(userState.user?.id, { friends: newFriendsUIDS });
    } else {
      alert('user not found');
    }
  }

  return (
    <div className="friends__container">
      <div>
        <NavForFriendsPage onAddFriend={(email) => addFriendByEmail(email)} />
      </div>

      <div className="friends__container__columns">
        <div className="friends__column">
          {friends.map((friend) => (
            <FriendItem
              friend={friend}
              key={friend.id}
              onClick={() => setSelectedFriendID(friend.id)}
              onDelete={() => removeFriend(friend.id)}
            />
          ))}
        </div>
        <div className="friends__column">
          {selectedFriendID != null && (
            <FriendDeckList selectedFriendID={selectedFriendID} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
