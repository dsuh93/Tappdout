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
    debugger
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('checkin[rating]', this.state.rating);
    formData.append('checkin[description]', this.state.description);
    formData.append('checkin[beer_id]', this.state.beer_id);
    formData.append('checkin[user_id]', this.state.user_id);
    formData.append('checkin[photo]', this.state.photoFile);
    this.props.createCheckin(formData);
    this.props.closeModal();
    this.props.history.push('/home');
  }

  handleFile(e) {
    debugger
    e.preventDefault();
    this.setState({ photoFile: e.currentTarget.files[0]})
    this.showPhoto();
  }

  update(key) {
    return (e) => {
      e.preventDefault();
      this.setState({ [key]: e.target.value })
    }
  }

  showPhoto() {
    const file = document.getElementById('file-upload').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('upload').src=(e.target.result);
    }
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="checkin-form-container">
        <div className="checkin-form-head">
          <h3>Check-In</h3>
          <button onClick={() => this.props.closeModal()}><img src={window.modalClose}/></button>
        </div>
        <form className="checkin-form" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What did you think?"
            className="checkin-form-textarea"
            cols="50"
            rows="5"
            value={this.state.description}
            onChange={this.update('description')}
          ></textarea>
          <label htmlFor="file-upload" className="photo-upload"><img id="upload" src={window.addPhoto}/></label>
          <input id="file-upload" onChange={this.handleFile} type="file"/>
          <div className="checkin-form-bottom">
            <div className="ratings-bar-container">
              <div className="ratings-bar">Rating Bar</div>
              <input onChange={this.update('rating')} type="number" step="0.25" min="0" max="5"/>
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