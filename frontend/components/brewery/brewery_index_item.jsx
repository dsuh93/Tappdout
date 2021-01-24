import React from 'react';
import { Link } from 'react-router-dom';

class BreweryIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const brewery = this.props.brewery;
    return (
      <div className="brewery-item">
        <div className="brewery-item-left">
          <img className="brewery-item-img" src={window.breweryPic}/>
          <div className="brewery-item-details">
            <Link id="brewery-item-name" to={`/breweries/${brewery.id}`}>{brewery.brewery_name}</Link>
            <p id="brewery-item-location">{brewery.location}</p>
            <p id="brewery-item-type">{brewery.brewery_type}</p>
          </div>
        </div>
        <div className="brewery-item-right">
          <div className="brewery-item-right-top">
            <div id="brewery-total-beers">{brewery.beers.length} Beers</div>
            <div id="brewery-total-ratings">number Ratings</div>
          </div>
          <div id="brewery-rating-bar">rating bar (avg)</div>
        </div>
      </div>
    )
  }
}

export default BreweryIndexItem;