import React from 'react';
import SearchbarIndexContainer from './searchbar-index-container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.update = this.update.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  componentDidMount() {
    const searchBar = document.getElementById("search-bar");
    const searchIndex = document.getElementById("search-index-container");
    document.addEventListener("click", e => {
      if (e.target != searchBar) {
        searchIndex.classList.add("hide");
      } else if (e.target == searchBar && this.state.length > 0) {
        searchIndex.classList.remove("hide");
      }
    })
  }

  resetState() {
    this.setState({keyword: ""})
  }

  update(e) {
    this.setState({keyword: e.target.value })
  }

  render() {
    const showSearchIndex = this.state.keyword.length > 0 ? "" : "hide";

    return (
      <div className="search-bar">
        <div id="search-bar-container">
          <input
            id="search-bar"
            className="search-bar-input"
            placeholder="Find a beer or brewery..."
            type="text"
            value={this.state.keyword}
            onChange={this.update}
          />
          <img id="search-icon" src={window.searchIcon}/>
        </div>
        <div id="search-index-container" className={`searchbar-index-container ${showSearchIndex}`}>
          <SearchbarIndexContainer resetState={this.resetState} keyword={this.state.keyword}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type