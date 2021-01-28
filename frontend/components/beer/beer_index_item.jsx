import React from 'react';
import { Link } from 'react-router-dom';

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const beer = this.props.beer;
    if (!beer) { return console.log('beer is undefined')}
    const dateFormat = beer.created_at.split("T")[0].split("-");
    const yearDigits = dateFormat[0].split('');
    const yearFormat = [yearDigits[2], yearDigits[3]].join('');
    const newDateFormat = [dateFormat[1], dateFormat[2], yearFormat].join('/');
    return (
      <div className="beer-item">
        <div className="beer-item-top">
          <img className="beer-item-img" src={window.beerPic} alt=""/>
          <div className="beer-item-details">
            <Link id="beer-item-name" to={`/beers/${this.props.beerId}`}>{beer.beer_name}</Link>
            <Link id="beer-item-brewery" to={`/breweries/${beer.brewery.id}`}>{beer.brewery.brewery_name}</Link>
            <p id="beer-item-style">{beer.style}</p>
            <p id="beer-item-description">{beer.description}</p>
          </div>
          <button onClick={() => this.props.openModal({ modal: 'checkin', beerId: this.props.beerId})} className="beer-item-checkin-btn">
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
        <div className="beer-item-bottom">
          <div id="abv">{beer.abv}% ABV</div>
          <div id="ibu">{beer.ibu ? beer.ibu : 'N/A'} IBU</div>
          <div id="beer-rating-bar">rating bar</div>
          <div id="beer-total-ratings">total Ratings</div>
          <div id="beer-created-at">Added {newDateFormat}</div>
        </div>
      </div>
    )
    // if (!this.props.beer) {
    //   return (
    //     <img className="loading" src={window.loader}/>
    //   )
    // } else {
    // }
  }
}

export default BeerIndexItem;

// const dateFormat = new Intl.DateTimeFormat("en-US", {
    //   year: "2-digit",
    //   month: "2-digit",
    //   day: "2-digit"
    // }).format(beer.created_at)