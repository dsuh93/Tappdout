import React from 'react';
import { Link } from 'react-router-dom';
import CheckinIndex from '../checkin/checkin_index';
import Rating from '../rating/rating';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "less"
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.description === "less") {
      this.setState({description: "more"})
    } else {
      this.setState({description: "less"})
    }
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.breweryId)
  }

  render() {
    //need to add a conditional to render one component over another, checkins vs beers
    //in order to render beers list, use brewery.beers
    if (!this.props.brewery) {
      return (
        <div className="loading">
          <h1>Fetching Brewery...</h1>
        </div>
      )
    } else {
      const brewery = this.props.brewery;
      const numBeers = Object.keys(this.props.brewery.beers).length;
      const breweryId = this.props.breweryId;
      const total = brewery.checkins ? Object.keys(brewery.checkins).length : 0;
      const userCount = {};
      const photos = {};
      let monthlyCount = 0;
      let currentUserCount = 0;
      let totalRatings = 0;
      let ratingsCount = 0;
      if (brewery.checkins) {
        const countUsers = Object.values(brewery.checkins).forEach(checkin => {
          if(!userCount[checkin.user_id]) userCount[checkin.user_id] = 0;
          userCount[checkin.user_id]++;
          if(Math.floor((new Date() - new Date(checkin.created_at)) / 86400000) < 30) monthlyCount++;
          if(checkin.user_id == this.props.currentUser) currentUserCount++;
          if(checkin.rating) {
            totalRatings += checkin.rating;
            ratingsCount++;
          }
          if (checkin.photoURL) {
            if (!photos[checkin.id]) {
              photos[checkin.id] = checkin.photoURL;
            }
          }
        })
      }
      const unique = Object.keys(userCount).length;
      const avgRating = totalRatings > 0 ? (totalRatings / total).toFixed(2) : 0;
      const displayPhotos = Object.values(photos).slice(0, 5).map(photoURL => {
        return (
          <img key={photoURL} className="profile-photoURL" src={photoURL}/>
        )
      })
      let descriptionLength;
      if(this.state.description === "less") {
        descriptionLength = (
          <p className="description">{brewery.description.slice(0, 80) + "..."} <button type="button" id="show" onClick={this.handleClick}>Show More</button></p>
        )
      } else {
        descriptionLength = (
          <p className="description">{brewery.description} <button type="button" id="show" onClick={this.handleClick}>Show Less</button></p>
        )
      }
      return (
        <div className="brewery-show-container">
          <div className="brewery-show">
            <div className="brewery-info">
              <div className="brew-info-row-1">
                <img id="bw-row-1-img"src={window.breweryPic}/>
                <div id="bw-row-1-details">
                  <h3 id="bw-name">{brewery.brewery_name}</h3>
                  <p id="bw-location">{brewery.location}</p>
                  <p id="bw-type">{brewery.brewery_type}</p>
                </div>
                <div id="bw-row-1-stats">
                  <div className="top-row-stats">
                    <div id="total"><p id="t">TOTAL</p><p className="total">{total}</p></div>
                    <div id="unique"><p id="u">UNIQUE</p><p className="unique">{unique}</p></div>
                  </div>
                  <div className="bottom-row-stats">
                    <div id="monthly"><p id="m">MONTHLY</p><p className="monthly">{monthlyCount}</p></div>
                    <div id="you"><p id="y">YOU</p><p className="you">{currentUserCount}</p></div>
                  </div>
                </div>
              </div>
              <div className="brew-info-row-2">
                <div className="ratings-bar"><Rating rating={avgRating}/><p id="ratings-bar">({avgRating})</p></div>
                <div className="total-ratings"><p id="total-ratings">{ratingsCount} Ratings</p></div>
                <div className="total-beers"><a id="total-beers">{numBeers} Beers</a></div>
                <div className="star"><img id="star" src={window.star}/></div>
              </div>
              <div className="brew-info-row-3">
                {descriptionLength}
                <div className="bw-ext-links">
                  <a href={brewery.fb_url}><img id="fb" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg" alt=""/></a>
                  <a href={brewery.insta_url}><img id="insta" src="https://i.pinimg.com/originals/31/54/fb/3154fbcd6f2f69a232fe6b8631153a8e.jpg" alt=""/></a>
                  <a href={brewery.web_url}><img id="website" src={window.link} alt=""/></a>
                </div>
              </div>
            </div>
            <div className="brew-show-imgs">
              {displayPhotos}
            </div>
            <CheckinIndex
              checkins={brewery.checkins ? brewery.checkins : {}}
              fetchCheckins={this.props.fetchCheckins}
              fetchCheckin={this.props.fetchCheckin}
              sessionId={this.props.currentUser}
              deleteCheckin={this.props.deleteCheckin}
              root="brewery-show"
            />
          </div>
          <div className="add-beer-btn-container">
            <Link id="add-beer-btn" to={`/breweries/${brewery.id}/new_beer`}>Add a New Beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BreweryShow;