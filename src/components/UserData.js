import React from 'react';
import { useLocation } from 'react-router-dom';

const UserData = () => {
  const location = useLocation();
  const userData = location.state;

  return (
    <div>
      <h1>User Data</h1>
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
        </div>
    </div>
  );
};

export default UserData;
