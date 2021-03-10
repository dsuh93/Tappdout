import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { Link } from 'react-router-dom';
// import TopRatedBeers from './top_rated_beers';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.checkinCounter = this.checkinCounter.bind(this);
    this.uniqueBeerCounter = this.uniqueBeerCounter.bind(this);
  }

  checkinCounter() {
    let count = 0;
    Object.values(this.props.checkins).map( checkin => {
      if (checkin.user.id === this.props.sessionId) {
        count += 1
      }
    })
    return count;
  }

  uniqueBeerCounter() {
    const sessionId = this.props.sessionId;
    const uniqueBeers = {};
    Object.values(this.props.checkins).map( checkin => {
      if(checkin.user_id === sessionId) {
        if (!uniqueBeers[checkin.beer_id]) uniqueBeers[checkin.beer_id] = 0;
        uniqueBeers[checkin.beer_id]++;
      }
    })
    return Object.keys(uniqueBeers).length;
  }

  render() {
    const {checkins, user, sessionId, deleteCheckin, fetchCheckins, fetchCheckin} = this.props;
    return (
      <div className="home-main-div">
        <CheckinIndex
          checkins={checkins}
          fetchCheckins={fetchCheckins}
          fetchCheckin={fetchCheckin}
          sessionId={sessionId}
          deleteCheckin={deleteCheckin}
        />
        <div className="home-rt-side">
          <div className="user-container">
            <div className="user-info-row-1">
              <Link to={`/profiles/${sessionId}`}><img src={window.defAvatar}/></Link>
              <div id="user-fullname-icon">
                <h3>{user.first_name} {user.last_name}</h3>
                <img src={window.proIcon}/>
                <p>{user.username}</p>
              </div>
            </div>
            <div className="user-info-row-2">
              <div className="total-checkins"><p id="num">{this.checkinCounter()}</p><p>TOTAL</p></div>
              <div className="unique-checkins"><p id="num">{this.uniqueBeerCounter()}</p><p>UNIQUE</p></div>
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
