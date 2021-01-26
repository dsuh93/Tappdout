import React from 'react';
import { Link } from 'react-router-dom';

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const beer = this.props.beer;
    // const dateFormat = new Intl.DateTimeFormat("en-US", {
    //   year: "2-digit",
    //   month: "2-digit",
    //   day: "2-digit"
    // }).format(beer.created_at)
    const dateFormat = beer.created_at.split("T")[0].split("-");
    const yearDigits = dateFormat[0].split('');
    const yearFormat = [yearDigits[2], yearDigits[3]].join('');
    const newDateFormat = [dateFormat[1], dateFormat[2], yearFormat].join('/');
    if (!this.props.beer) {
      return (
        <img className="loading" src={window.loader}/>
      )
    } else {
      return (      
        <div className="beer-item">
          <div className="beer-item-top">
            <img className="beer-item-img" src={window.beerPic} alt=""/>
            <div className="beer-item-details">
              <Link id="beer-item-name" to={`/beers/${this.props.beer.id}`}>{beer.beer_name}</Link>
              <Link id="beer-item-brewery" to={`/breweries/${beer.brewery.id}`}>{beer.brewery.brewery_name}</Link>
              <p id="beer-item-style">{beer.style}</p>
              <p id="beer-item-description">{beer.description}</p>
            </div>
            <button className="beer-item-btn">checkin-button</button>
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
    }
  }
}

export default BeerIndexItem;