import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class CheckinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckin(this.props.checkinId)
  }

  render() {
    if (!this.props.checkin) {
      return (
        <div>
          <img src={window.loader} alt=""/>
        </div>
      )
    } else {

      const checkin = this.props.checkin

      const dateFormat = checkin.created_at.split("T")[0].split("-");
      const yearDigits = dateFormat[0].split('');
      const timeSlice = checkin.created_at.split("T")[1].split(".");
      const hms = timeSlice[0].split(':');
      let h;
      let dayornight;
      if ( hms[0] > 12 ) {
        h = `${hms[0] % 12}`;
        dayornight = 'PM';
      } else {
        h = `${hms[0]}`;
        dayornight = 'AM';
      }
      const newTime = [h, (hms[1])].join(':') + ` ${dayornight}`;
      const yearFormat = [yearDigits[2], yearDigits[3]].join('');
      const monthFormat = months[dateFormat[1] - 1]
      const newDateFormat = [dateFormat[2], monthFormat, yearFormat].join(' ');
      const finalDate = [newTime, newDateFormat].join(' ');


      return (
        <div className="checkin-show-container">
          <div className="checkin-show">
            <div className="checkin-show-details">
              <div className="chk-show-det-1">
                <img src={window.defAvatar} alt="user-profile-pic"/>
                <div>
                  <p>{checkin.user.first_name} {checkin.user.last_name}</p>
                  <p>{checkin.username}</p>
                </div>
              </div>
              <div className="chk-show-det-2">
                <div id="chk-show-2-top">
                  <img id="chk-show-beer" src={window.defBeer}/>
                  <div>
                    <Link id="beer" to={`/beers/${checkin.beer.id}`}>{checkin.beer.beer_name}</Link>
                    <Link id="brw" to={`/breweries/${checkin.beer.brewery_id}`}>{checkin.brewery}</Link>
                  </div>
                </div>
                <div id="chk-show-2-bottom">
                  <p>{checkin.description}</p>
                  <div>
                    <Rating rating={checkin.rating}/>
                    <p>{checkin.beer.style}</p>
                  </div>
                </div>
              </div>
              <div className="chk-show-det-3">
                <p>{finalDate}</p>
              </div>
            </div>
            <div className="checkin-show-toasts">
              <p>TOASTS COMING SOON</p>
            </div>
            <div className="checkin-show-comment">
              <p>COMMENT COMING SOON</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CheckinShow;