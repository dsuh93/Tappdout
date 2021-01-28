import React from 'react';
import BeerCheckins from './beer_checkins';
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
        <div className="beer-show-container">
          <div className="beer-show">
            <div className="beer-info">
              <div className="beer-info-row-1">
                <img id="br-row-1-img"src={window.beerPic}/>
                <div id="br-row-1-details">
                  <h3 id="br-name">{beer.beer_name}</h3>
                  <Link to={`/breweries/${beer.brewery.id}`} id="br-bw-name">{beer.brewery.brewery_name}</Link>
                  <p id="br-type">{beer.style}</p>
                </div>
                <div id="br-row-1-stats">
                  <div id="total"><p>TOTAL</p><p>#</p></div>
                  <div id="unique"><p>UNIQUE</p><p>#</p></div>
                  <div id="monthly"><p>MONTHLY</p><p>#</p></div>
                  <div id="you"><p>YOU</p>#</div>
                </div>
              </div>
              <div className="beer-info-row-2">
                <div id="br-row-2-ratings-bar">{beer.abv}% ABV</div>
                <div><p id="br-row-2-total-ratings">{beer.ibu ? `${beer.ibu} IBU` : `No IBU`}</p></div>
                <div><p id="br-row-2-total-beers">Ratings Bar</p></div>
                <div id="br-row-2-num-ratings"><p>num Ratings</p></div>
              </div>
              <div className="beer-info-row-3">
                <p className="br-info-description">{beer.description}</p>
                <button onClick={() => this.props.openModal('checkin')} className="beer-item-checkin-btn">
                  <div id="checkin-tag" className="checkin-tag hidden">
                    <div id="checkin-tag-tri"></div>
                    <div id="checkin-tag-txt">Check-in this Beer</div>
                  </div>
                </button>
                <div className="checkmark">
                  <div className="checkmark-stem"></div>
                  <div className="checkmark-kick"></div>
                </div>
              </div>
            </div>
            <div className="beer-show-imgs">images go here</div>
            <BeerCheckins/>
          </div>
          <div className="edit-beer-btn-container">
            <Link id="edit-beer-btn" to={`/beers/${beerId}/edit`}>Edit this beer!</Link>
            <br/>
            <Link id="delete-beer-btn" onClick={this.handleClick} to={`/beers`}>Delete this beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BeerShow;