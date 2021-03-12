import React from 'react';
import SearchIndex from './search_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword.length > 0 ? this.props.keyword : "",
      list: this.props.list ? this.props.list : "beers",
      error: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTab = this.handleTab.bind(this)
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

  componentDidUpdate(prevProps) {
    if (prevProps.searchbarKeyword !== this.props.searchbarKeyword) {
      this.setState({
        keyword: this.props.searchbarKeyword
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.keyword.length > 0) {
      this.props.fetchSearchList({
        list: this.state.list,
        keyword: this.state.keyword
      })
      if (this.state.error.length > 0) {
        this.setState({error: ""})
      }
    } else {
      this.props.resetSearchIndex();
      this.setState({error: "Search is empty. Please type something before submitting."})
    }
  }

  handleTab(tab) {
    return e => {
      e.preventDefault();
      if (tab === "beers") {
        this.props.fetchSearchList({
          list: "beers",
          keyword: this.state.keyword
        })
        this.setState({list: "beers"})
      } else if (tab === "breweries") {
        this.props.fetchSearchList({
          list: "breweries",
          keyword: this.state.keyword
        })
        this.setState({list: "breweries"})
      }
    }
  }

  update(e) {
    this.setState({keyword: e.target.value})
  }

  render() {
    const revealSearch = Object.values(this.props.searchIndex).length < 1 ? "hidden" : ""
    const revealNoSearch = revealSearch === "hidden" ? "" : "hidden";
    const beersTab = this.state.list === "beers" ? "selected" : "";
    const breweriesTab = this.state.list === "breweries" ? "selected" : "";
    return (
      <div className="search-container">
        <div className="search-top">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="search-input-container">
              <img src={window.searchLargeIcon} alt=""/>
              <input
                className="search-input"
                type="text"
                onChange={this.update}
                value={this.state.keyword}
              />
            </div>
            <button className="search-button">Search</button>
          </form>
        </div>
        <div className={`search-bottom index ${revealSearch}`}>
          <div className="search-tabs">
            <div onClick={this.handleTab("beers")} className={`tab beer ${beersTab}`}><p>Beer</p></div>
            <div onClick={this.handleTab("breweries")} className={`tab brewery ${breweriesTab}`}><p>Brewery</p></div>
          </div>
          <SearchIndex
            searchIndex={this.props.searchIndex}
            list={this.state.list}
          />
        </div>
        <div className={`search-bottom no-index ${revealNoSearch}`}>
          <p className="empty-search">Use the Search Box above to search for a Beer</p>
          {/* <p>{this.state.error}</p> */}
        </div>
      </div>
    )
  }
}

export default Search