import React from 'react';
import { Link } from 'react-router-dom';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.beerId)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBeer(this.props.beerId)
      .then( () => this.props.history.push('/beers'))
  }

  render() {
    const beer = this.props.beer;
    const beerId = this.props.beerId;
    if(!this.props.beer) {
      return (
        <div>
          Fetching Beer...
        </div>
      )
    } else {
      return (
        <div className="brewery-show-container">
          <div className="brewery-show">
            <div className="brewery-info">
              <div className="brew-info-row-1">
                <img id="bw-row-1-img"src={window.beerPic}/>
                <div id="bw-row-1-details">
                  <h3 id="bw-name">{beer.beer_name}</h3>
                  <p id="bw-location">{beer.brewery_name}</p>
                  <p id="bw-type">{beer.style}</p>
                </div>
                <div id="bw-row-1-stats">
                  <div id="total"><p>TOTAL</p><p>#</p></div>
                  <div id="unique"><p>UNIQUE</p><p>#</p></div>
                  <div id="monthly"><p>MONTHLY</p><p>#</p></div>
                  <div id="you"><p>YOU</p>#</div>
                </div>
              </div>
              <div className="brew-info-row-2">
                <div id="bw-row-2-ratings-bar">{beer.abv}% ABV</div>
                <div><p id="bw-row-2-total-ratings">{beer.ibu ? `${beer.ibu} IBU` : `No IBU`}</p></div>
                <div><a id="bw-row-2-total-beers">Ratings Bar</a></div>
                <div><p>num Ratings</p></div>
              </div>
              <div className="brew-info-row-3">
                <p className="bw-info-description">{beer.description}</p>
                <div className="bw-ext-links">
                  checkin-button goes here
                </div>
              </div>
            </div>
            <div className="brew-show-imgs">images go here</div>
            <div className="brewery-checkins">
              show checkins here
            </div>
          </div>
          <div className="add-beer-btn-container">
            <Link id="add-beer-btn" to={`/beers/${beerId}/edit`}>Edit this beer!</Link>
            <br/>
            <Link id="add-beer-btn" onClick={this.handleClick} to={`/beers`}>Delete this beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BeerShow;