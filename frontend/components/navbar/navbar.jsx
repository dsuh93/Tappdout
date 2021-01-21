import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    const visibility = this.props.currentUser ? ("not-hidden") : ("navbar-hidden")
    const display = this.props.currentUser ? (
      <div className="navbar-logout">
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={() => this.props.logout()}>Log Out</button>
      </div>
    ) : ("")



    return (
      <div className={`navbar ${visibility}`}>
        <div className="navbar-lft">
          <div className="navbar-title">
            <h1>TappdOut</h1>
          </div>
          <div className="navbar-links">
            <Link className="navbar-link" to='/home'>The Pub</Link>
            <Link className="navbar-link" to='/beers'>Top Rated</Link>
            <Link className="navbar-link" to='/home'>Supporter</Link> {/*Deadlinks for now, just take back to home page*/}
            <Link className="navbar-link" to='/home'>Help</Link> {/*Deadlinks for now, just take back to home page*/}
          </div>
        </div>
        <div className="navbar-rt">
          <div className="navbar-profile-img">
            {display}
          </div>
          <div className="navbar-search-bar">
            <SearchBar />
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;