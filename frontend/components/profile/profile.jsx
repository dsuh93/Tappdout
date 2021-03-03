import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-info">
          <img src={window.defAvatar} alt=""/>
          <div>
            <p>user full name</p>
            <p>username</p>
            <div>
              <p>total beers</p>
              <p>total unique beers</p>
            </div>
          </div>
        </div>
        <div className="checkin-images">
          <div>map out checkin images here</div>
        </div>
        <div className="profile-checkins-container">
          <h3>Your Recent Activity</h3>
          <div>checkins go here</div>
        </div>
    </div>
    )
  }
}

export default Profile;