import React from 'react';
import SearchbarIndexItem from './searchbar-index-item';

class SearchbarIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const searchBeers = Object.values(this.props.searchBeers).map( beer => {
      return(
        <SearchbarIndexItem list="beer" beer={beer} />
      )
    })
    const searchBreweries = Object.values(this.props.searchBreweries).map( brewery => {
      return(
        <SearchbarIndexItem list="brewery" brewery={brewery} />
      )
    })
    return (
      <div className="searchbar-index">
        <ul className="searchbar-beer-list">
          <p>Beers</p>
          {searchBeers}
        </ul>
        <ul className="searchbar-brewery-list">
          <p>Breweries</p>
          {searchBreweries}
        </ul>
      </div>
    )
  }
}

export default SearchbarIndex;