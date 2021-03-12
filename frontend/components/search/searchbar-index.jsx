import React from 'react';
import SearchbarIndexItem from './searchbar-index-item';
import { Link } from 'react-router-dom';

class SearchbarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick({beerId, breweryId}) {
    return e => {
      e.preventDefault();
      // const searchInput = document.getElementById('search-bar');
      // searchInput.value = "";
      if(beerId) {
        this.props.history.push(`/beers/${beerId}`)
        this.props.fetchBeer(beerId)
      } else if (breweryId) {
        this.props.history.push(`/breweries/${breweryId}`)
        this.props.fetchBrewery(breweryId)
      }
      this.props.resetState();
    }
  }

  handleRedirect(list) {
    return e => {
      e.preventDefault();
      this.props.history.push({
        pathname: '/search',
        state: {
          keyword: this.props.keyword,
          list: list
        }
      })
      this.props.resetState();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      if (this.props.keyword.length >= 1) {
        this.props.fetchSearchBeers(this.props.keyword)
        this.props.fetchSearchBreweries(this.props.keyword)
      } else {
        this.props.resetSearchIndex();
      }
    }
  }

  componentWillUnmount() {
    this.props.resetSearchIndex();
  }
  

  render() {
    const searchBeers = Object.values(this.props.searchBeers).slice(0,3).map( beer => {
      return(
        <Link key={`${beer.beer_name}-${beer.id}`} onClick={this.handleClick({beerId: beer.id})} to={`/beers/${beer.id}`}>
          <SearchbarIndexItem key={`${beer.beer_name}-${beer.id}`} list="beer" beer={beer} />
        </Link>
      )
    })
    const searchBreweries = Object.values(this.props.searchBreweries).slice(0,3).map( brewery => {
      return(
        <Link key={`${brewery.brewery_name}-${brewery.id}`} onClick={this.handleClick({breweryId: brewery.id})} to={`/breweries/${brewery.id}`}>
          <SearchbarIndexItem key={`${brewery.brewery_name}-${brewery.id}`} list="brewery" brewery={brewery} />
        </Link>
      )
    })
    
    const displayBeers = Object.values(this.props.searchBeers).length > 0 ? "" : "hide";
    const displayBreweries = Object.values(this.props.searchBreweries).length > 0 ? "" : "hide";
    return (
      <div className="searchbar-index">
        <ul className={`searchbar-beer-list ${displayBeers}`}>
          <p className="li-header">BEERS</p>
          {searchBeers}
          <div className="see-more-div">
            <a
              onClick={this.handleRedirect("beers")}
              className="see-more"
              // to={{
              //   pathname:"/search",
              //   state: {
              //     keyword: this.props.keyword,
              //     list: "beers",
              //   }
              // }}
            >See More Beers</a>
          </div>
        </ul>
        <ul className={`searchbar-brewery-list ${displayBreweries}`}>
          <p className="li-header">BREWERIES</p>
          {searchBreweries}
          <div className="see-more-div">
            <a
              onClick={this.handleRedirect("breweries")}
              className="see-more"
              // to={{
              //   pathname:"/search",
              //   state: {
              //     keyword: this.props.keyword,
              //     list: "breweries",
              //   }
              // }}
            >See More Breweries</a>
          </div>
        </ul>
      </div>
    )
  }
}

export default SearchbarIndex;