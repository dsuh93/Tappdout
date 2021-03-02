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
      const toasts = checkin.toasts ? Object.values(checkin.toasts).length : 0;
      const toastAvatars = checkin.toasts ? Object.values(checkin.toasts).map(toast => {
        return(
          <img src={window.defAvatar}/>
        )
      }) : ""

      const date = new Date(`${checkin.created_at}`).toDateString().split(" ");
      const time = new Date(`${checkin.created_at}`).toLocaleTimeString().split(" ");
      const dateTime = [
        time[0].slice(0, time[0].lastIndexOf(":")),
        time[1],
        date[2],
        date[1],
        date[3].slice(0, 2)
      ].join(" ");


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
                <p>{dateTime}</p>
              </div>
            </div>
            <div className="checkin-show-toasts">
              <button className="show-toast-btn">
                <div className="show-toast-icon">Toast</div>
              </button>
              <div className="show-toast-count">{toasts}</div>
              <div className="show-toast-avatars">{toastAvatars}</div>
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