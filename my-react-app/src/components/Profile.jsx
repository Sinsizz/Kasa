/* eslint-disable react/prop-types */

function Profile({ picture, name }) {

  const [firstName, ...lastNameParts] = name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="profile">
      <div className="profile-name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={picture} alt={name} className="profile-picture" />
    </div>
  );
}

export default Profile;