import React from 'react';
import BreweryCheckins from './brewery_checkins';
import { Link } from 'react-router-dom';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    this.props.fetchBrewery(this.props.breweryId)
  }

  render() {
    const brewery = this.props.brewery;
    
    if (!this.props.brewery) {
      
      return (
        <div className="loading">
          <h1>Fetching Brewery...</h1>
        </div>
      )
    } else {
      return (
        <div className="brewery-show-container">
          <div className="brewery-show">
            <div className="brewery-info">
              <div className="brew-info-row-1">
                <img id="bw-row-1-img"src={window.breweryPic}/>
                <div id="bw-row-1-details">
                  <h3>{brewery.brewery_name}</h3>
                  <p>{brewery.location ? brewery.location : ""}</p>
                  <p>{brewery.brewery_type ? brewery.brewery_type : ""}</p>
                </div>
                <div id="bw-row-1-stats">
                  <div><p>Total</p><p>number</p></div>
                  <div><p>Unique</p><p>number</p></div>
                  <div><p>Monthly</p><p>number</p></div>
                  <div><p>You</p>pnumber</div>
                </div>
              </div>
              <div className="brew-info-row-2">
                <div id="bw-row-2-ratings-bar"></div>
                <p id="bw-row-2-total-ratings"></p>
                <p id="bw-row-2-total-beers"></p>
                <img id="star" src={window.star}/>
              </div>
              <div className="brew-info-row-3">
                <p className="bw-info-description">Brewery Description</p>
                <div className="bw-ext-links">
                  <a href="#"><img id="fb" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg" alt=""/></a>
                  <a href="#"><img id="insta" src="https://i.pinimg.com/originals/31/54/fb/3154fbcd6f2f69a232fe6b8631153a8e.jpg" alt=""/></a>
                  <a href="#"><img id="website" src={window.link} alt=""/></a>
                </div>
              </div>
            </div>
            <div>images go here</div>
            <div className="brewery-checkins">
              <BreweryCheckins/>
            </div>
          </div>
          <div className="add-beer-btn-container">
            <Link id="add-beer-btn" to="/beer/new">Add a New Beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BreweryShow;