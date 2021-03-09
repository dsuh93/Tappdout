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
              <div className="splash-bg-img-screen"></div>
            </div>
          </div>
          
          <div className="auth-bar">
            <div>
              <Link className="auth-bar-link login" to='/login'>SIGN IN</Link>
            </div>
            <div>
              <Link className="auth-bar-link signup" to='/signup'>CREATE AN ACCOUNT</Link>
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

            {/* <div>
              <img className="splash-logo-side-img" src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png" alt=""/>
            </div> */}

          </div>


        </div>
        <div className="splash-row div-2">
          <div className="left">
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
          {/* <img className="map-bg" src={window.mapBg}/> */}
          <img className="phone-map" src="https://untappd.akamaized.net/assets/custom/homepage/images/phone-map.png"/>
          <div className="div-3-text">
            <h1 className="div-3-h1">Explore nearby popular bars, breweries, and beers.</h1>
            <div className="div-3-hr"></div>
            <h3 className="div-3-h3">Not sure where to grab a pint? Tappdout shows you popular bars and venues nearby and what's on tap.</h3>
          </div>
        </div>

        <div className="splash-row div-4">
          <div className="div-4-1">
            <h1 className="div-4-h1">Other Great Features</h1>
            <div className="div-4-hr"></div>
          </div>

          <div className="div-4-2">
            <div className="div-4-col">
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-recommendations.svg"/>
              <h3>RECOMMENDATIONS</h3>
              <p>Discover new beers locally we think you'll like.</p>
            </div>
            <div className="div-4-col">
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-menu.svg"/>
              <h3>UPDATED MENUS</h3>
              <p>Follow Verified Venues to get live tap list updates.</p>
            </div>
            <div className="div-4-col">
              <img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-events.svg"/>
              <h3>LOCAL EVENTS</h3>
              <p>Stay up-to-date with venue and brewery events alerts.</p>
            </div>
            
          </div>
        </div>
        <div className="splash-row splash-footer">
          <div className="footer-p">
            <p>"I drink to make other people more interesting."</p>
            <p id="last-p">-Ernest Hemmingway</p>
            <div className="footer-cr-div">
              <p className="footer-cr">© Tappdout, Inc. 2021</p>
            </div>
          </div>
          <div className="footer-logos">
            <a href="https://github.com/dsuh93"><img src={window.github}/></a>
            <a href="https://www.facebook.com/suhinbeom"><img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-facebook.svg"/></a>
            <a href="https://www.instagram.com/daybydaves/"><img src="https://untappd.akamaized.net/assets/custom/homepage/images/icon-instagram.svg"/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;