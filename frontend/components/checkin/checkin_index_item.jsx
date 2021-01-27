import React from 'react';
import { Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const checkin = this.props.checkin;
    const checkinId = this.props.checkinId;
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">
          <img src={window.defAvatar} alt="user-profile-img"/>
          <p>
            {checkin.user.first_name} {checkin.user.last_name} is drinking a <Link to={`/beers/${checkin.beer.id}`}>{checkin.beer.beer_name}</Link> by <Link to={`/breweries/${checkin.beer.brewery_id}`}>{checkin.brewery}</Link>
          </p>
          <img src={window.beerPic} alt="beer-pic"/>
        </div>
        <div className="checkin-item-row-2">
          <div className="checkin-item-tri"></div>
          <div className="checkin-body">
            <p>{checkin.description}</p>
            <p>{checkin.rating}</p>
            <p>{checkin.beer.style}</p>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <button>Comment</button>
          <button>Toast</button>
          <p>{checkin.created_at}</p>
          <Link to={`/checkins/${checkin.id}`}>View Detailed Checkin</Link>
        </div>
        <div className="checkin-item-row-4">
          <p>number of toasts go here</p>
          <p>users profile images go here</p>
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;