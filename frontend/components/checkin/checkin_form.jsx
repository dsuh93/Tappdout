import React from 'react';

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      description: "",
      beer_id: this.props.beerId,
      user_id: this.props.userId,
      photoFile: null
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('checkin[rating]', this.state.rating);
    formData.append('checkin[description]', this.state.description);
    formData.append('checkin[beer_id]', this.state.beer_id);
    formData.append('checkin[user_id]', this.state.user_id);
    formData.append('checkin[photo]', this.state.photoFile);
    this.props.createCheckin(formData);
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({ photo: e.currentTarget.files[0]})
  }

  render() {
    return (
      <div className="checkin-form-container">
        <div className="checkin-form-head">
          <h3>Check-In</h3>
          <button onClick={() => this.props.closeModal()}><img src={window.modalClose}/></button>
        </div>
        <form className="checkin-form" onSubmit={this.handleSubmit}>
          <textarea placeholder="What did you think?" className="checkin-form-textarea" cols="50" rows="5"></textarea>
          <label htmlFor="file-upload" className="custom-file-upload"><img src={window.addPhoto}/></label>
          <input id="file-upload" onChange={this.handleFile} type="file" className="add-photo-input"/>
          {/* <img src={window.addPhoto} alt="add-photo-icon"/> */}
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