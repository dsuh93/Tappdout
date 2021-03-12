import React from 'react';
import Rating from '../rating/rating';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const item = this.props.item ? this.props.item : "";
    const list = this.props.list;
    const checkins = item.checkins ? item.checkins : {};
    let totalRatingValue = 0;
    let ratingsCount = 0;
    const checkRatings = Object.values(checkins).map(checkin => {
      if(checkin.rating) {
        totalRatingValue += checkin.rating;
        ratingsCount++;
      }
    })
    const avgRating = (totalRatingValue / ratingsCount).toFixed(2);
    if (list === "beers") {
      return (
        <div className="search-index-item beers">
          <div className="left">
            <img src={item.beerPhotoURL}/>
          </div>
          <div className="middle">
            <p className="name">{item.beer_name}</p>
            <p className="brewery">{item.brewery ? item.brewery.brewery_name : item.brewery_name}</p>
            <p className="style">{item.style}</p>
          </div>
          <div className="right">
            <div className="top">
              <div className="abv">{item.abv}% ABV</div>
              <div className="ibu">{item.ibu ? item.ibu : "N/A"} IBU</div>
            </div>
            <div className="bottom">
              <Rating rating={avgRating}/> ({`${avgRating === avgRating ? avgRating : 0}`})
            </div>
          </div>
        </div>
      )
    } else if (list === "breweries") {
      const beerCount = item.beers ? Object.keys(item.beers).length : 0;
      return (
        <div className="search-index-item brewery">
          <div className="left">
            <img src={item.breweryPhotoURL}/>
          </div>
          <div className="middle">
            <p className="name">{item.brewery_name}</p>
            <p className="location">{item.location}</p>
            <p className="type">{item.brewery_type}</p>
          </div>
          <div className="right">
            <div className="top">
              <div className="num-beers">{beerCount} Beers</div>
              <div className="ratings-count">{ratingsCount} Ratings</div>
            </div>
            <div className="bottom">
              <Rating rating={avgRating}/> ({`${!avgRating === avgRating ? avgRating : 0}`})
            </div>
          </div>
        </div>
      )
    }
  }
}

export default SearchIndexItem;