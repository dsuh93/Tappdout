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
          <img src={window.beerPic}/>
          <div>
            <p id="search-beer-name">{beer.beer_name}</p>
            <p id="search-beer-brewery">{beer.brewery.brewery_name}</p>
          </div>
        </div>
      )
    } else if (this.props.list === "brewery") {
      const brewery = this.props.brewery;
      return (
        <div className="searchbar-index-item">
          <img src={window.breweryPic} alt=""/>
          <div>
            <p id="search-brewery-name">{brewery.brewery_name}</p>
            <p id="search-brewery-location">{brewery.location}</p>
          </div>
        </div>
      )
    }
  }
}

export default SearchbarIndexItem;