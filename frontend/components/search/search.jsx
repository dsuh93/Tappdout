import React from 'react';
import SearchIndex from './search_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      list: this.props.list ? this.props.list : ""
    }
  }

  componentDidMount() {
    if (this.props.list && this.props.keyword) {
      this.props.fetchSearchList({
        list: this.props.list,
        keyword: this.props.keyword
      })
    }
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchList({

    })
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
        <div className="search-tabs">
          <div className="tab"><p>Beer</p></div>
          <div className="tab"><p>Brewery</p></div>
        </div>
        <SearchIndex
          searchIndex={this.props.searchIndex}
        />
      </div>
    )
  }
}

export default Search