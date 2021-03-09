import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import ToastContainer from '../toast/toast_container';
import CommentFormContainer from '../comment/comment_form_container';
import CommentContainer from '../comment/comment_container';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteCheckin = this.deleteCheckin.bind(this);
    this.handleCommentButton = this.handleCommentButton.bind(this);
  }

  handleCommentButton(e) {
    e.preventDefault();
    const commentFormContainer = document.getElementById(`comment-form-container-${this.props.checkin.id}`);
    commentFormContainer.classList.toggle('collapsed');
  }

  deleteCheckin(e) {
    e.preventDefault();
    this.props.deleteCheckin(this.props.checkinId)
      // .then(() => this.props.history.push('/home'))
  }

  render() {
    const {checkin, sessionId} = this.props;
    const comments = checkin.comments ? checkin.comments : {}
    const showToasts = checkin.toasts ? (Object.keys(checkin.toasts).length > 0 ? "" : "hidden") : "hidden";
    const showComments = checkin.comments ? (Object.keys(checkin.comments).length > 0 ? "" : "hidden") : "hidden";
    const numToasts = checkin.toasts ? Object.keys(checkin.toasts).length : ""
    const photoURL = checkin.photoURL ? checkin.photoURL : "";
    const showImage = photoURL ? "show-image" : "hide-image";
    const showDelete = checkin.user_id === sessionId ? "show-delete" : "hide-delete"
    const userAvatars = checkin.toasts ? Object.keys(checkin.toasts).length > 0 ? Object.keys(checkin.toasts).map((toaster, i) => {
      return (
        <img key={`${toaster}-${i}`} className="toast-avatar" src={window.defAvatar}/>
      )
    }) : "" : ""
    
    const dateFormat = checkin.created_at.split("T")[0].split("-");
    const yearDigits = dateFormat[0].split('');
    const yearFormat = [yearDigits[2], yearDigits[3]].join('');
    const monthFormat = months[dateFormat[1] - 1]
    const newDateFormat = [dateFormat[2], monthFormat, yearFormat].join(' ');
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">
          <img src={window.defAvatar} alt="user-profile-img"/>
          <p>
            <Link to={`/profiles/${checkin.user_id}`}>{checkin.user.first_name} {checkin.user.last_name}</Link> is drinking a <Link to={`/beers/${checkin.beer.id}`}>{checkin.beer.beer_name}</Link> by <Link to={`/breweries/${checkin.beer.brewery_id}`}>{checkin.brewery}</Link>
          </p>
          <img id="checkin-brewery-pic" src={checkin.breweryPhotoURL} alt="beer-pic"/>
        </div>
        <div className="checkin-item-row-2">
          <div className="checkin-item-tri"></div>
          <div className="checkin-body">
            <p>{checkin.description}</p>
            <div className="checkin-body-bottom">
              <Rating rating={checkin.rating}/>
              <p>{checkin.beer.style}</p>
            </div>
          </div>
          <div className={showImage}>
            <img src={photoURL} id="checkin-img"/>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <div className="checkin-item-btn">
            <button
              id="comment-btn"
              onClick={this.handleCommentButton}
            >
              <img className="comment-btn-icon" src={window.feedCommentIcon}/>
              <p>Comment</p>
            </button>
            <ToastContainer root={this.props.root} checkinId={this.props.checkinId}/>
            {/* <button id="toast-btn">Toast</button> */}
          </div>
          <div className="checkin-item-links">
            <p>{newDateFormat}</p>
            <Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link>
            <div className={showDelete}>
              <Link to={`/checkins`} onClick={this.deleteCheckin}>Delete Check-in</Link>
            </div>
          </div>
        </div>
        <div className={`checkin-item-row-4 ${showToasts}`}>
          <p>{numToasts}<img src={window.numToastIcon}/></p>
          <div className="border"></div>
          <div className="toast-avatars-container">{userAvatars}</div>
        </div>
        <div className={`checkin-item-row-5`}>
          <CommentContainer root={this.props.root} showComments={showComments} comments={comments} />
          <CommentFormContainer root={this.props.root} checkinId={checkin.id} />
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;

// showCommentForm={this.state.showCommentForm}