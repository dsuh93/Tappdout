import React from 'react';

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
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
    if (this.state.photoFile) {
      formData.append('checkin[photo]', this.state.photoFile);
    }
    this.props.createCheckin(formData);
    this.props.closeModal();
    this.props.history.push('/home');
  }

  handleFile(e) {
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
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      document.getElementById('upload').src=(e.target.result);
    }
    fileReader.readAsDataURL(file);
  }

  render() {
    const charsLeft = 255 - this.state.description.length;
    const noRating = () => {
      return (
        <div className="no-rating">
          <p id="p1">NO</p>
          <p id="p2">RATING</p>
        </div>
      )
    }
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
            maxLength="255"
            value={this.state.description}
            onChange={this.update('description')}
          >
          </textarea>
          <div className="checkin-char-count">{`${charsLeft}`}</div>
          <label htmlFor="file-upload" className="photo-upload"><img id="upload" src={window.addPhoto}/></label>
          <input id="file-upload" onChange={this.handleFile} type="file"/>
          <div className="checkin-form-bottom">
            <div className="ratings-bar-container">
              <input onChange={this.update('rating')} id="rating" type="range" step="0.25" min="0" max="5" value={this.state.rating}/>
              <div className="ratings-value">
                {this.state.rating === 0 ? noRating() : this.state.rating}
              </div>
            </div>
            <button className="checkin-submit-btn">Confirm</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CheckinForm;