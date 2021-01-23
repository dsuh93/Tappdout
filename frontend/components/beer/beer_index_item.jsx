import React from 'react';

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const beer = this.props.beer;
    return (
      <div className="beer-item">
        <div className="beer-item-top">
          <div className="beer-item-img">image</div>
          <div className="beer-item-details">
            <h3>{beer.beer_name}</h3>
            <p>{beer.brewery_id}</p>
            <p>{beer.style}</p>
            <p>{beer.description}</p>
          </div>
          <button>checkin-button</button>
        </div>
        <div className="beer-item-bottom">
          <div>{beer.abv}% ABV</div>
          <div>{beer.ibu ? beer.ibu : 'N/A'} IBU</div>
          <div>rating bar</div>
          <div>total Ratings</div>
          <div>Added {beer.created_at}</div>
        </div>
      </div>
    )
  }
}

export default BeerIndexItem;