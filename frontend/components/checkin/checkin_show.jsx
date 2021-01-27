import React from 'react';
import { Link } from 'react-router-dom';

class CheckinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchCheckin(this.props.checkinId)
  }

  render() {
    if (!this.props.checkin) {
      debugger
      return (
        <div>
          <img src={window.loader} alt=""/>
        </div>
      )
    } else {
      debugger
      const checkin = this.props.checkin
      return (
        <div className="checkin-show-container">
          <div className="checkin-show">
            <div className="checkin-show-details">
              <div className="chk-show-det-1">
                <img src="" alt="user-profile-pic"/>
                <div>
                  <p>{checkin.user.first_name} {checkin.user.last_name}</p>
                  <p>{checkin.username}</p>
                </div>
              </div>
              <div className="chk-show-det-2">
                <div id="chk-show-2-top">
                  <img src={window.defBeer}/>
                  <div>
                    <Link to={`/beers/${checkin.beer.id}`}>{checkin.beer.beer_name}</Link>
                    <Link to={`/breweries/${checkin.beer.brewery_id}`}>{checkin.brewery}</Link>
                  </div>
                </div>
                <div id="chk-show-2-bottom">
                  <p>{checkin.description}</p>
                  <div>
                    <p>{checkin.rating}</p>
                    <p>{checkin.beer.style}</p>
                  </div>
                </div>
              </div>
              <div className="chk-show-det-3">
                <p>{checkin.created_at}</p>
              </div>
            </div>
            <div className="checkin-show-toasts">
              <p>TOASTS GO HERE</p>
            </div>
            <div className="checkin-show-comment">
              <p>COMMENT INPUT GOES HERE</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CheckinShow;