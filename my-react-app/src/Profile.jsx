/* eslint-disable react/prop-types */

function Profile({ picture, name }) {
  return (
    <div className="profile">
        <p className="profile-name">{name}</p>
      <img src={picture} alt={name} className="profile-picture" />  
    </div>
  );
}

export default Profile;