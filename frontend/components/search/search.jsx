import React from 'react';
import SearchIndex from './search_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.searchIndex != this.props.searchIndex) {

  //   }
  // }
  handleClick(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  update(e) {
    this.setState({keyword: e.target.value})
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-top">
          <div className="search-input">
            <img src={window.searchIcon} alt=""/>
            <input
              type="text"
              onChange={this.update}
              onSubmit={this.handleSubmit}
              value={this.state.keyword}
            />
            <button onClick={this.handleClick} type="button">Search</button>
          </div>
        </div>
        <SearchIndex
          searchBeerIndex={this.props.searchBeerIndex}
          searchBreweryIndex={this.props.searchBreweryIndex}
        />
      </div>
    )
  }
}

export default Search