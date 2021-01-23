import React from 'react';

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
    return (
      <div className="search-bar">
        <input
          className="search-bar-input"
          defaultValue="search for beers and breweries"
          type="text"
          ref={this.state.keyword}
          onChange={this.update("keyword")}
        />
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type