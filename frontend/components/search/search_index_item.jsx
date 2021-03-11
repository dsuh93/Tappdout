import React from 'react';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const item = this.props.item ? this.props.item : ""

    return (
      <div className="search-index-item">
        <p>Search Beer item {item.id}</p>
      </div>
    )
  }
}

export default SearchIndexItem;