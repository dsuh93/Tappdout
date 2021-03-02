import React from 'react';

class SearchbarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.list === "beer") {
      const beer = this.props.beer;
      return (
        <div className="searchbar-index-item">
          <p>{beer.beer_name}</p>
          <p>{beer.brewery.brewery_name}</p>
        </div>
      )
    } else if (this.props.list === "brewery") {
      const brewery = this.props.brewery;
      return (
        <div className="searchbar-index-item">
          <p>{brewery.brewery_name}</p>
          <p>{brewery.location}</p>
        </div>
      )
    }
  }
}

export default SearchbarIndexItem;