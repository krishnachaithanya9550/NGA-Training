import React from 'react';
import { useSelector } from 'react-redux';
// import './profile.css';

const Profile = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h2>Your Profile</h2>
      {user ? <p>Name: {user.name}</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Profile;


// function Profile() {
//   return (
//     <div>
//       <h2>Profile Page</h2>
//       <p>Welcome to your profile page!</p>
//     </div>
//   );
// }
// export default Profile;
