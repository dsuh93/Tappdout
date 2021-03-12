import React from 'react';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const item = this.props.item ? this.props.item : "";
    const list = this.props.list;
    if (list === "beers") {
      return (
        <div className="search-index-item">
          Search Beer item {item.id}
        </div>
      )
    } else if (list === "breweries") {
      return (
        <div className="search-index-item">
          <p>Search Brewery item {item.id}</p>
        </div>
      )
    }
  }
}

export default SearchIndexItem;