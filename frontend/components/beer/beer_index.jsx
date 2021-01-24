import React from 'react';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBeers()
  }

  render() {
    const beerIndexItem = this.props.beers.map( beer => {
      return (
        <li key={beer.beer_name} className="beer-item-container">
          <BeerIndexItem key={beer.id} beer={beer} />
        </li>
      )
    })

    return (
      <div className="beer-index-container">
        <div className="beer-index-title">Top Rated Beers</div>
        <div className="beer-index-tags">
          <div className="beers-tag tag">Beers</div>
          <div className="breweries-tag tag">Breweries</div>
        </div>
        <ul className="beer-index">
          {beerIndexItem}
        </ul>
        <footer className="beer-index-footer">
          <div className="footer">
            <p>Tappdout for Business</p>
            <p>Breweries</p>
            <p>Store</p>
            <p>Support</p>
            <p>Blog</p>
            <p>Badge Voting</p>
            <p>Careers</p>
            <p>API</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="footer">
            <p>Cookie Policy</p>
            <p>CCPA Notice</p>
            <p>Do Not Sell My Personal Information</p>
          </div>
          <div className="footer">
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-twitter.svg"/>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-facebook.svg"/>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-instagram.svg"/>
          </div>
        </footer>
      </div>
    )
  }

}

export default BeerIndex;