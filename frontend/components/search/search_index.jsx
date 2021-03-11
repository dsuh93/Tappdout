import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // map through props searchitems and render search index items
    const searchBeerIndexItems = this.props.searchBeerIndex.map(beer => {
      return (
        <SearchIndexItem beer={beer} />
      )
    })
    const searchBreweryIndexItems = this.props.searchBreweryIndex.map(brewery => {
      return (
        <SearchIndexItem brewery={brewery} />
      )
    })
    return (
      <div className="search-index">
        {searchBeerIndexItems || searchBreweryIndexItems}
      </div>
    )
  }
}

export default SearchIndex;