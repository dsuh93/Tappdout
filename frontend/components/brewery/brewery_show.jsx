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
    //need to add a conditional to render one component over another, checkins vs beers
    //in order to render beers list, use brewery.beers
    if (!this.props.brewery) {
      return (
        <div className="loading">
          <h1>Fetching Brewery...</h1>
        </div>
      )
    } else {
      const brewery = this.props.brewery;
      const numBeers = Object.keys(this.props.brewery.beers).length
      return (
        <div className="brewery-show-container">
          <div className="brewery-show">
            <div className="brewery-info">
              <div className="brew-info-row-1">
                <img id="bw-row-1-img"src={window.breweryPic}/>
                <div id="bw-row-1-details">
                  <h3 id="bw-name">{brewery.brewery_name}</h3>
                  <p id="bw-location">{brewery.location}</p>
                  <p id="bw-type">{brewery.brewery_type}</p>
                </div>
                <div id="bw-row-1-stats">
                  <div id="total"><p>TOTAL</p><p>#</p></div>
                  <div id="unique"><p>UNIQUE</p><p>#</p></div>
                  <div id="monthly"><p>MONTHLY</p><p>#</p></div>
                  <div id="you"><p>YOU</p>#</div>
                </div>
              </div>
              <div className="brew-info-row-2">
                <div id="bw-row-2-ratings-bar">ratings bar</div>
                <div><p id="bw-row-2-total-ratings">Number Ratings</p></div>
                <div><a id="bw-row-2-total-beers">{numBeers} Beers</a></div>
                <div><img id="star" src={window.star}/></div>
              </div>
              <div className="brew-info-row-3">
                <p className="bw-info-description">{brewery.description}</p>
                <div className="bw-ext-links">
                  <a href={brewery.fb_url}><img id="fb" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg" alt=""/></a>
                  <a href={brewery.insta_url}><img id="insta" src="https://i.pinimg.com/originals/31/54/fb/3154fbcd6f2f69a232fe6b8631153a8e.jpg" alt=""/></a>
                  <a href={brewery.web_url}><img id="website" src={window.link} alt=""/></a>
                </div>
              </div>
            </div>
            <div className="brew-show-imgs">images go here</div>
            <BreweryCheckins/>
          </div>
          <div className="add-beer-btn-container">
            <Link id="add-beer-btn" to={`/breweries/${brewery.id}/new_beer`}>Add a New Beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BreweryShow;