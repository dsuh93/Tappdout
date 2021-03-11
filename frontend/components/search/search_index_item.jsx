import React from 'react';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const beer = this.props.beer ? this.props.beer : "";
    const brewery = this.props.brewery ? this.props.brewery : "";

    return (
      <div className="search-index-item">
        <p>Search Beer item {beer.id || brewery.id}</p>
      </div>
    )
  }
}

export default SearchIndexItem;