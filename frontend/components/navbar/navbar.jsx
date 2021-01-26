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
        {/* <p>Hello, {this.props.currentUser.username}</p> */}
        <button className="navbar-logout-btn" onClick={() => this.props.logout()}>Log Out</button>
      </div>
    ) : ("")



    return (
      <div className={`navbar ${visibility}`}>
        <div className="navbar-contents">
          <div className="navbar-lft">
            <div className="navbar-title-container">
              <h1 className="navbar-title">TAPPDOUT</h1>
              <p className="navbar-title-p">DRINK SOCIALLY</p>
            </div>
            <div className="navbar-links">
              <Link className="navbar-link" to='/home'>The Pub</Link>
              <Link className="navbar-link" to='/beers'>Top Rated</Link>
              <a href="https://www.linkedin.com/in/david-i-suh" className="navbar-link" to='/home'>LinkedIn</a> {/*Deadlinks for now, just take back to home page*/}
              <a href="https://github.com/dsuh93" className="navbar-link" to='/home'>Github</a> {/*Deadlinks for now, just take back to home page*/}
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
      </div>
    )
  }
}

export default NavBar;