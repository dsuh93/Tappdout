import React from 'react';

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
    return (
      <div className="beer-item">
        <div className="beer-item-top">
          <div className="beer-item-img">image</div>
          <div className="beer-item-details">
            <h3>{beer.beer_name}</h3>
            <p>{beer.brewery_name}</p>
            <p>{beer.style}</p>
            <p>{beer.description}</p>
          </div>
          <button>checkin-button</button>
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

export default BeerIndexItem;