import React from 'react';
import SearchbarIndexContainer from './searchbar-index-container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  update(keyword) {
    return (e) => {
      this.setState({[keyword]: e.target.ref })
    }
  }

  render() {
    const showSearchIndex = this.state.keyword.length > 0 ? "" : "hidden";

    return (
      <div className="search-bar">
        <input
          id="search-bar"
          className="search-bar-input"
          placeholder="Find a brewery or bar..."
          type="text"
          ref={this.state.keyword}
          onChange={this.update("keyword")}
        />
        <div className={showSearchIndex}>
          <SearchbarIndexContainer />
        </div>
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type