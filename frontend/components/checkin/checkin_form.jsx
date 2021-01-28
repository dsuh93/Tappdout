import React from 'react';

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      description: "",
      beer_id: "",
      user_id: ""
    };
  }

  render() {
    return (
      <div className="checkin-form-container">
        <div className="checkin-form-head">
          <h3>Check-In</h3>
          <button>x</button>
        </div>
        <form className="checkin-form" onSubmit={this.handleSubmit}>
          <textarea placeholder="What did you think?" className="checkin-form-textarea" cols="50" rows="5"></textarea>
          <button className="add-photo-btn"><img src={window.addPhoto} alt="add-photo-icon"/></button>
          <div className="checkin-form-bottom">
            <div className="ratings-bar-container">
              <div className="ratings-bar">Rating Bar</div>
              <div className="ratings-value">NO RATING</div>
            </div>
            <button className="checkin-submit-btn">Confirm</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CheckinForm;