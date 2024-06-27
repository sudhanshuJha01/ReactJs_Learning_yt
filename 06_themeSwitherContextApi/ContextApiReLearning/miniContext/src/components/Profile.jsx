import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  
  return (
    <div>
      {user ? <div>Hello {user.userName}</div> : <div>Please Enter Your User Name</div>}
    </div>
  );
}

export default Profile;
