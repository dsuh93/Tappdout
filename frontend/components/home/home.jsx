import React from 'react';
import CheckinIndex from '../checkin/checkin_index';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {checkins, userId, deleteCheckin, fetchCheckins, fetchCheckin} = this.props;
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
              {/* {profile img with user fn and ln and username} */}
            </div>
            <div className="user-info-row-2">
              <div className="total-checkins"><p>num TOTAL</p></div>
              <div className="unique-checkins"><p>num UNIQUE</p></div>
            </div>
          </div>
          <div className="top-rated-beers-container">
            <h3>Top Beers</h3>
            <div className="top-rated-beers-index">
              {/* {add only 5 beers here with their name and brewery, sorted by rating} */}
            </div>
            <a href="#">
              See All Beers
              {/* {this link should take you to the user's beers index sorted by rating} */}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
