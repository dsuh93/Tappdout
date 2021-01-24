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
          placeholder="Find a brewery or bar..."
          type="text"
          ref={this.state.keyword}
          onChange={this.update("keyword")}
        />
        {/* {probably will need to put a searchIndexContainer here to check against the state} */}
      </div>
    )
  }
}

export default SearchBar;

// probably will need to add another component to handle the dropdown
// from the search bar as you type