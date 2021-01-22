import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="splash-main">
        <div className="splash-row-1">
          <div className="splash-row-1-img">
            <div className="splash-bg-img-div">
              <img className="splash-bg-img" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="beer"/>
            </div>
          </div>
          
          <div className="auth-bar">
            <div>
              <Link className="auth-bar-link" to='/login'>SIGN IN</Link>
            </div>
            <div>
              <Link className="auth-bar-link" to='/signup'>CREATE AN ACCOUNT</Link>
            </div>
          </div>

          <div className="splash-logo">

            <div className="splash-logo-title-div">
              <img className="splash-logo-beer" src={window.beerSplashLogo}/>
              {/* <img src="https://untappd.akamaized.net/assets/custom/homepage/images/ut-logo-bottles.svg" alt=""/> */}
              <h1 className="splash-logo-title">TAPPDOUT</h1>
              <p className="splash-logo-p-1">DRINK SOCIALLY</p>
              <hr/>
              <p className="splash-logo-p-2">Discover and share your favorite beer.</p>
            </div>

            <div>
              <img className="splash-logo-side-img" src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png" alt=""/>
            </div>

          </div>


        </div>
        <div className="splash-row div-2">
          <div>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/ratings.png"/>
            <h3>CHECK IN AND RATE BEER</h3>
            <p>Keep track of what you've tried and what you thought of it by checking in a beer and rating it.</p>
          </div>

          <div>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/badges.png"/>
            <h3>DRINK NEW BEERS, UNLOCK BADGES</h3>
            <p>Expand you palate by trying new {`&`} different beer styles and unlock achievements along the way.</p>
          </div>
        </div>

        <div className="splash-row div-3">
          <img src="https://untappd.akamaized.net/assets/custom/homepage/images/phone-map.png"/>
          <div>
            <h1>Explore nearby popular bars, breweries, and beers.</h1>
            <hr/>
            <p>Not sure where to grab a pint? Tappdout shows you popular bars and venues nearby and what's on tap.</p>
          </div>
        </div>

        <div className="splash-row div-4">
          <div></div>
          <div>
            <div>
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-recommendations.svg"/>
              <h3>RECOMMENDATIONS</h3>
              <p>Discover new beers locally we think you'll like.</p>
            </div>
            <div>
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-menu.svg"/>
              <h3>UPDATED MENUS</h3>
              <p>Follow Verified Venues to get live tap list updates.</p>
            </div>
            <div>
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-events.svg"/>
              <h3>LOCAL EVENTS</h3>
              <p>Stay up-to-date with venue and brewery events alerts.</p>
            </div>
            
          </div>
        </div>
        <footer>
          <div className="footer-p">
            <p>Store</p>
            <p>Breweries</p>
            <p>Blog</p>
            <p>Support</p>
            <p>Careers</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookie Policy</p>
            <p>CCPA Notice</p>
            <p>Do Not Sell My Personal Information</p>
            <p className="footer-cr">© Tappdout, Inc. 2021</p>
          </div>
          <div>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-twitter.svg"/>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-facebook.svg"/>
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-instagram.svg"/>
          </div>
        </footer>
      </div>
    )
  }
}

export default Splash;