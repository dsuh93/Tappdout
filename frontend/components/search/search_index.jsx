import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // map through props searchitems and render search index items
    const list = this.props.list;
    const searchIndexItems = Object.values(this.props.searchIndex).map(item => {
      return (
        <SearchIndexItem key={`${item.id}-${item.id}`} list={list} item={item} />
      )
    })
    return (
      <div className="search-index">
        {searchIndexItems}
      </div>
    )
  }
}

export default SearchIndex;