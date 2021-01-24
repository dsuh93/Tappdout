import React from 'react';
import BreweryCheckins from './brewery_checkins';
import { Link } from 'react-router-dom';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId);
  }

  componentWillUnmount() {
    this.props.fetchBreweries();
  }

  render() {
    const brewery = this.props.brewery;
    return (
      <div className="brewery-show-container">
        <div className="brewery-info">
          <div className="brew-info-row-1">
            <img id="bw-row-1-img"src={window.breweryPic}/>
            <div id="bw-row-1-details">
              <h3>{brewery.brewery_name ? brewery.brewery_name : ""}</h3>
              <p>{brewery.location ? brewery.location : ""}</p>
              <p>{brewery.brewery_type ? brewery.brewery_type : ""}</p>
            </div>
            <div id="bw-row-1-stats"></div>
          </div>
          <div className="brew-info-row-2">
            <div id="bw-row-2-ratings-bar"></div>
            <p id="bw-row-2-total-ratings"></p>
            <p id="bw-row-2-total-beers"></p>
            <img src={window.star} alt=""/>
          </div>
          <div className="brew-info-row-3">
            <p className="bw-info-description"></p>
            <div className="bw-ext-links">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg" alt=""/></a>
              <a href="#"><img src="https://i.pinimg.com/originals/31/54/fb/3154fbcd6f2f69a232fe6b8631153a8e.jpg" alt=""/></a>
              <a href="#"><img src={window.link} alt=""/></a>
            </div>
          </div>
        </div>
        <div>images go here</div>
        <div className="brewery-checkins">
          <BreweryCheckins/>
        </div>
      </div>
    )
  }
}

export default BreweryShow;