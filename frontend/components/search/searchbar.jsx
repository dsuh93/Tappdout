import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchbarIndexContainer from './searchbar-index-container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.update = this.update.bind(this)
    this.resetState = this.resetState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const searchBar = document.getElementById("search-bar");
    const searchIndex = document.getElementById("search-index-container");
    document.addEventListener("click", e => {
      if (e.target != searchBar) {
        searchIndex.classList.add("hide");
      } else if (e.target == searchBar) {
        searchIndex.classList.remove("hide");
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/search',
      search: `?q=${this.state.keyword}`,
      state: {
        list: "beers",
        keyword: this.state.keyword
      }
    })
    this.props.fetchSearchList({
      list: "beers",
      keyword: this.state.keyword
    })
    this.resetState();
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
          <form onSubmit={this.handleSubmit}>
            <input
              id="search-bar"
              className="search-bar-input"
              placeholder="Find a beer or brewery..."
              type="text"
              value={this.state.keyword}
              onChange={this.update}
            />
          <img id="search-icon" src={window.searchIcon}/>
          </form>
        </div>
        <div id="search-index-container" className={`searchbar-index-container ${showSearchIndex}`}>
          <SearchbarIndexContainer
            resetState={this.resetState}
            keyword={this.state.keyword}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);

// probably will need to add another component to handle the dropdown
// from the search bar as you type