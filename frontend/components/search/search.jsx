import React from 'react';
import SearchIndex from './search_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword ? this.props.keyword : "",
      list: this.props.list ? this.props.list : "beers"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
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
      list: this.state.list,
      keyword: this.state.keyword
    })
  }

  handleTab(tab) {
    return e => {
      e.preventDefault();
      if (tab === "beers") {
        this.props.fetchSearchList({
          list: "beers",
          keyword: this.props.keyword
        })
      }
    }
  }

  update(e) {
    this.setState({keyword: e.target.value})
  }

  render() {
    const revealSearch = Object.values(this.props.searchIndex).length < 1 ? "hidden" : ""

    return (
      <div className="search-container">
        <div className="search-top">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <img src={window.searchIcon} alt=""/>
            <input
              type="text"
              onChange={this.update}
              value={this.state.keyword}
            />
            <button>Search</button>
          </form>
        </div>
        <div className={`search-bottom ${revealSearch}`}>
          <div className="search-tabs">
            <div onClick={this.handleTab("beers")} className="tab"><p>Beer</p></div>
            <div onClick={this.handleTab("breweries")} className="tab"><p>Brewery</p></div>
          </div>
          <SearchIndex
            searchIndex={this.props.searchIndex}
          />
        </div>
      </div>
    )
  }
}

export default Search