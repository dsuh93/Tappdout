import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import CommentContainer from '../comment/comment_container';
import CommentFormContainer from '../comment/comment_form_container';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class CheckinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toasted: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchCheckins();
    // this.props.fetchCheckin(this.props.checkinId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checkin) {
      if (this.props.checkin.toasts) {
        if (prevProps.checkin.toasts != this.props.checkin.toasts) {
          if (Object.keys(this.props.checkin.toasts).includes(`${this.props.currentUser}`)) {
            this.setState({toasted: true})
          } else {
            this.setState({toasted: false})
          }
        }
      }
    }
  } 

  handleClick(e) {
    e.preventDefault();
    const { checkin, checkinId, currentUser } = this.props;
    const toastBtn = document.getElementById("show-toast-btn");
    const toastIcon = document.getElementById("show-toast-icon");
    toastBtn.classList.toggle("toasted");
    toastIcon.classList.toggle("toasted");
    if (checkin.toasts) {
      const toasts = checkin.toasts;
      if (Object.keys(toasts).includes(`${this.props.currentUser}`)) {
        this.setState({toasted: false})
        this.props.deleteToast(toasts[currentUser].id)
      } else {
        this.setState({toasted: true})
        this.props.createToast({toaster_id: currentUser, checkin_id: checkinId})
      }
    } else {
      this.setState({toasted: true})
      this.props.createToast({toaster_id: currentUser, checkin_id: checkinId})
    }
    // this.props.fetchCheckin(this.props.checkinId)
    this.props.fetchCheckins();

  }

  render() {
    if (!this.props.checkin) {
      return (
        <div className="loading-container">
          <img className="loading-gif" src={window.loader} alt=""/>
        </div>
      )
    } else {
      const checkin = this.props.checkin;
      const toasts = checkin.toasts ? Object.values(checkin.toasts).length : 0;
      const toastAvatars = checkin.toasts ? Object.values(checkin.toasts).map((toast, i) => {
        return(
          <img key={`${toast}-${i}`} src={window.defAvatar}/>
        )
      }) : ""
      const toasted = checkin.toasts ? (Object.keys(checkin.toasts).includes(`${this.props.currentUser}`)) ? "toasted" : "" : ""

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
                  <img id="chk-show-beer" src={checkin.beer.beerPhotoURL ? checkin.beer.beerPhotoURL : window.defBeer}/>
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
              <button id="show-toast-btn" onClick={this.handleClick} className={`show-toast-btn ${toasted}`}>
                <div id="show-toast-icon" className={`show-toast-icon ${toasted}`}>Toast</div>
              </button>
              <div className="show-toast-count">{toasts}</div>
              <div className="show-toast-avatars">{toastAvatars}</div>
            </div>
            <div className="checkin-show-comment">
              <CommentContainer comments={checkin.comments ? checkin.comments : {}}/>
              <CommentFormContainer checkinId={checkin.id}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CheckinShow;