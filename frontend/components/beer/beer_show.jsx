import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import CheckinIndex from '../checkin/checkin_index';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.beerId)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBeer(this.props.beerId)
      .then( () => this.props.history.push('/beers'))
  }

  render() {
    if(!this.props.beer) {
      return (
        <div>
          Fetching Beer...
        </div>
      )
    } else {
      const beer = this.props.beer;
      const beerId = this.props.beerId;
      const total = beer.checkins ? Object.keys(beer.checkins).length : 0;
      const userCount = {};
      const photos = {};
      let monthlyCount = 0;
      let currentUserCount = 0;
      let totalRatings = 0;
      let ratingsCount = 0;
      if (beer.checkins) {
        const countUsers = Object.values(beer.checkins).forEach(checkin => {
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
      return (
        <div className="beer-show-container">
          <div className="beer-show">
            <div className="beer-info">
              <div className="beer-info-row-1">
                <img id="br-row-1-img"src={beer.beerPhotoURL}/>
                <div id="br-row-1-details">
                  <h3 id="br-name">{beer.beer_name}</h3>
                  <Link to={`/breweries/${beer.brewery.id}`} id="br-bw-name">{beer.brewery.brewery_name}</Link>
                  <p id="br-type">{beer.style}</p>
                </div>
                <div id="br-row-1-stats">
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
              <div className="beer-info-row-2">
                <div className="abv"><p id="abv">{beer.abv}% ABV</p></div>
                <div className="ibu"><p id="ibu">{beer.ibu ? `${beer.ibu} IBU` : `No IBU`}</p></div>
                <div className="ratings-bar"><Rating rating={avgRating}/><p id="ratings-bar">({avgRating})</p></div>
                <div className="total-ratings"><p id="total-ratings">{ratingsCount} Ratings</p></div>
              </div>
              <div className="beer-info-row-3">
                <p className="description">{beer.description}</p>
                <button onClick={() => this.props.openModal({ modal: 'checkin', beerId: beerId})} className="beer-item-checkin-btn">
                  <div id="checkin-tag" className="checkin-tag hidden">
                    <div id="checkin-tag-tri"></div>
                    <div id="checkin-tag-txt">Check-in this Beer</div>
                  </div>
                </button>
                <div className="checkmark">
                  <div className="checkmark-stem"></div>
                  <div className="checkmark-kick"></div>
                </div>
              </div>
            </div>
            <div className="beer-show-imgs">
              {displayPhotos}
            </div>
            <CheckinIndex
              checkins={beer.checkins ? beer.checkins : {}}
              fetchCheckins={this.props.fetchCheckins}
              fetchCheckin={this.props.fetchCheckin}
              sessionId={this.props.currentUser}
              deleteCheckin={this.props.deleteCheckin}
              root="beer-show"
            />
          </div>
          <div className="edit-beer-btn-container">
            <Link id="edit-beer-btn" to={`/beers/${beerId}/edit`}>Edit this beer!</Link>
            <br/>
            <Link id="delete-beer-btn" onClick={this.handleClick} to={`/beers`}>Delete this beer!</Link>
          </div>
        </div>
      )
    }
  }
}

export default BeerShow;