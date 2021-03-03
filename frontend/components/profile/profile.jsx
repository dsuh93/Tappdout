import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.profileId);
  }

  render() {
    if (Object.keys(this.props.profile).length < 1) {
      debugger
      return (
        <div>
          <img src={window.loader}/>
        </div>
      )
    } else {
      const { checkins, first_name, id, last_name, username } = this.props.profile;
      const total = Object.keys(checkins).length;
      const uniqueHash = {};
      const uniqueCount = Object.values(checkins).forEach(checkin => {
        if (!uniqueHash[checkin.beer_id]) uniqueHash[checkin.beer_id] = 0;
        uniqueHash[checkin.beer_id]++;
      })
      const unique = Object.keys(uniqueHash).length;
      return (
        <div className="profile-container">
          <div className="profile-cover">
            <img className="profile-avatar" src={window.defAvatar} alt=""/>
            <div className="profile-info">
              <p className="profile-fullname">{first_name} {last_name}</p>
              <p className="profile-username">{username}</p>
              <div className="profile-stats">
                <div className="profile-total-beers"><p id="total">{total}</p><p>TOTAL</p></div>
                <div className="profile-unique-beers"><p id="unique">{unique}</p><p>UNIQUE</p></div>
              </div>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-left">
              <div className="checkin-images">
                <div>map out checkin images here</div>
              </div>
              <div className="profile-checkins-container">
                <h3>Your Recent Activity</h3>
                <div>checkins go here</div>
              </div>
            </div>
            <div className="profile-right">
              <div>Top Beers</div>
            </div>
          </div>
      </div>
      )
    }
  }
}

export default Profile;