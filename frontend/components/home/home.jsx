import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
// import TopRatedBeers from './top_rated_beers';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {checkins, user, userId, deleteCheckin, fetchCheckins, fetchCheckin} = this.props;
    return (
      <div className="home-main-div">
        <CheckinIndex
          checkins={checkins}
          fetchCheckins={fetchCheckins}
          fetchCheckin={fetchCheckin}
          userId={userId}
          deleteCheckin={deleteCheckin}
        />
        <div className="home-rt-side">
          <div className="user-container">
            <div className="user-info-row-1">
              <img src={window.defAvatar}/>
              <div id="user-fullname-icon">
                <h3>{user.first_name} {user.last_name}</h3>
                <img src={window.proIcon}/>
                <p>{user.username}</p>
              </div>
            </div>
            <div className="user-info-row-2">
              <div className="total-checkins"><p>num TOTAL</p></div>
              <div className="unique-checkins"><p>num UNIQUE</p></div>
            </div>
          </div>
          {/* <div className="top-rated-beers-container">
            <h3>Top Beers</h3>
            <div className="top-rated-beers-index">
              <TopRatedBeers checkins={checkins} />
            </div>
            <a href="#">
              See All Beers
            </a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Home;
