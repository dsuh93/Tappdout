import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.profileId);
  }

  render() {
    if (Object.keys(this.props.profile).length < 1) {
      return (
        <div>
          <img src={window.loader}/>
        </div>
      )
    } else {
      debugger
      const { checkins, first_name, id, last_name, username } = this.props.profile;
      const { sessionId, profileId, fetchUser, fetchCheckins, fetchCheckin, deleteCheckin } = this.props;
      const total = checkins ? Object.keys(checkins).length : 0;
      const uniqueHash = {};
      const photos = {};
      const topRatedBeers = {};
      const uniqueCount = checkins ? Object.values(checkins).forEach(checkin => {
        if (!uniqueHash[checkin.beer_id]) uniqueHash[checkin.beer_id] = 0;
        uniqueHash[checkin.beer_id]++;
        if (checkin.photoURL) {
          if (!photos[checkin.id]) {
            photos[checkin.id] = checkin.photoURL;
          }
        }
        if(!topRatedBeers[checkin.rating]) topRatedBeers[checkin.rating] = {
          beer: checkin.beer.beer_name,
          beerId: checkin.beer_id,
          brewery: checkin.brewery
        }
      }) : "";
      const unique = Object.keys(uniqueHash).length;
      const displayPhotos = Object.values(photos).map(photoURL => {
        return (
          <img key={photoURL} className="profile-photoURL" src={photoURL}/>
        )
      })
      const topBeers = Object.keys(topRatedBeers).sort().reverse().slice(0, 4).map(rating => {
        const beerName = topRatedBeers[rating].beer;
        const shorterBeerName = beerName.length > 20 ? (beerName.slice(0, 20) + "...") : beerName;
        return (
          <div className="top-beers-item">
            <img src={window.defBeer} alt=""/>
            <div className="top-beers-names">
              <p><Link to={`/beers/${topRatedBeers[rating].beerId}`}>{shorterBeerName}</Link></p>
              <p className="top-beer-brewery">{topRatedBeers[rating].brewery}</p>
            </div>
          </div>
        )
      })
      
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
                {displayPhotos.slice(0, 5)}
              </div>
              <div className="profile-checkins-container">
                <CheckinIndex
                  checkins={checkins ? checkins : {}}
                  fetchUser={fetchUser}
                  profileId={profileId}
                  fetchCheckins={fetchCheckins}
                  fetchCheckin={fetchCheckin}
                  sessionId={sessionId}
                  deleteCheckin={deleteCheckin}
                  root="profile"
                />
              </div>
            </div>
            <div className="profile-right">
              <h3>Top Beers</h3>
              <ul className="top-beers-index">
                {topBeers}
              </ul>
              <div className="top-beer-all">
                <Link className="top-beer-all-link" to="/beers">See All Beers</Link>
              </div>
            </div>
          </div>
      </div>
      )
    }
  }
}

export default Profile;