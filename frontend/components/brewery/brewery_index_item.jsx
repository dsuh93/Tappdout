import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating'; 

class BreweryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.averageRating = this.averageRating.bind(this);
    this.totalRatings = this.totalRatings.bind(this);
  }

  averageRating() {
    let avgRatings;
    if (this.props.brewery.checkins) {
      let allRatings = [];
      Object.values(this.props.brewery.checkins).forEach( checkin => allRatings.push(checkin.rating));
      const ratingsSum = allRatings.reduce((a, b) => a + b);
      avgRatings = (ratingsSum / allRatings.length).toFixed(2);
    } else {
      avgRatings = 0;
    }
    return avgRatings;
  }

  totalRatings() {
    let allRatings;
    if (this.props.brewery.checkins) {
      let ratings = [];
      Object.values(this.props.brewery.checkins).forEach( checkin => ratings.push(checkin.rating));
      allRatings = ratings.length;
    } else {
      allRatings = 0;
    }
    return allRatings;
  }

  render() {
    debugger
    const brewery = this.props.brewery;
    const beers = Object.values(brewery.beers);
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
            <div id="brewery-total-beers">{beers.length} Beers</div>
            <div id="brewery-total-ratings">{this.totalRatings()} <p>Ratings</p></div>
          </div>
          <div id="brewery-rating-bar">
            <Rating rating={this.averageRating()}/>
            <p>{this.averageRating()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BreweryIndexItem;