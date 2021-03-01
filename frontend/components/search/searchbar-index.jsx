import React from 'react';

class SearchbarIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return (
      <div className="searchbar-index-container">
        <ul className="searchbar-beer-list">
          <SearchbarIndexItem list="beer"/>
        </ul>
        <ul className="searchbar-brewery-list">
          <SearchbarIndexItem list="brewery"/>
        </ul>
      </div>
    )
  }
}

export default SearchbarIndex;