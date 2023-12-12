import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();

  // Fetch user data based on the username from your data source or API
  // ...

  return (
    <div className='p-10'>
      <h1 className='text-3xl'>User Profile: {username}</h1>
    </div>
  );
};

export default Profile;