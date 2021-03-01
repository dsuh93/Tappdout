import React from 'react';
import SearchbarIndexContainer from './searchbar-index-container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  update(keyword) {
    return (e) => {
      this.setState({[keyword]: e.target.value })
      this.props.fetchSearchBeers(this.state.search);
      this.props.fetchSearchBreweries(this.state.search);
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
          value={this.state.keyword}
          onChange={this.update("search")}
        />
        <div className={`search-bar-index ${showSearchIndex}`}>
          <SearchbarIndexContainer />
        </div>
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type