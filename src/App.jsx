import React from 'react';
import Profile from './assets/components/Profile';
import userData from './userData.json';
import friend from './friend.json';
import FriendList from './assets/components/FriendsList';
import transactions from './transactions.json';
import TransactionHistory from './assets/components/TransactionHistory';  

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <div>
        <FriendList friends={friend} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
