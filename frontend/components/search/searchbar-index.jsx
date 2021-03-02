import React from 'react';
import SearchbarIndexItem from './searchbar-index-item';
import { Link } from 'react-router-dom';

class SearchbarIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchSearchBeers(this.props.keyword)
      this.props.fetchSearchBreweries(this.props.keyword)
    }
  }
  

  render() {
    const searchBeers = Object.values(this.props.searchBeers).map( beer => {
      return(
        <Link to={`/beers/${beer.id}`}>
          <SearchbarIndexItem list="beer" beer={beer} />
        </Link>
      )
    })
    const searchBreweries = Object.values(this.props.searchBreweries).map( brewery => {
      return(
        <Link to={`/breweries/${brewery.id}`}>
          <SearchbarIndexItem list="brewery" brewery={brewery} />
        </Link>
      )
    })
    return (
      <div className="searchbar-index">
        <ul className="searchbar-beer-list">
          <p>Beers</p>
          {searchBeers}
          <Link to="/beers">See More Beers</Link>
        </ul>
        <ul className="searchbar-brewery-list">
          <p>Breweries</p>
          {searchBreweries}
          <Link to="/breweries">See More Breweries</Link>
        </ul>
      </div>
    )
  }
}

export default SearchbarIndex;