import React from 'react';
import SearchbarIndexContainer from './searchbar-index-container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({keyword: e.target.value })
  }

  render() {
    const showSearchIndex = this.state.keyword.length > 0 ? "" : "hidden";
    const searchBar = document.getElementById("search-bar");
    const searchIndex = document.getElementById("search-index-container");
    document.addEventListener("click", e => {
      if (e.target != searchBar) {
        searchIndex.classList.add("hidden");
      } else {
        searchIndex.classList.remove("hidden");
      }
    })

    return (
      <div className="search-bar">
        <input
          id="search-bar"
          className="search-bar-input"
          placeholder="Find a brewery or bar..."
          type="text"
          value={this.state.keyword}
          onChange={this.update}
        />
        <div id="search-index-container" className={`searchbar-index-container ${showSearchIndex}`}>
          <SearchbarIndexContainer keyword={this.state.keyword}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type