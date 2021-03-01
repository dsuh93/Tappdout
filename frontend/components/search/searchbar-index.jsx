import React from 'react';
import SearchbarIndexItem from './searchbar-index-item';

class SearchbarIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const searchBeers = Object.values(this.props.searchBeers).map( beer => {
      return(
        <SearchbarIndexItem beer={beer} />
      )
    })
    const searchBreweries = Object.values(this.props.searchBreweries).map( brewery => {
      return(
        <SearchbarIndexItem brewery={brewery} />
      )
    })
    return (
      <div className="searchbar-index-container">
        <ul className="searchbar-beer-list">
          {searchBeers}
        </ul>
        <ul className="searchbar-brewery-list">
          {searchBreweries}
        </ul>
      </div>
    )
  }
}

export default SearchbarIndex;