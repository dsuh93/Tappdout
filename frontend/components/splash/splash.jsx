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
            <div className="splash-logo-img-div">
              <img className="splash-background-img" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="beer"/>
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
          <h1>div 2</h1>
        </div>
        <div className="splash-row div-3">
          <h1>div 3</h1>
        </div>
        <div className="splash-row">
          <h1>div 4</h1>
        </div>
        <div className="splash-row">
          <h1>div 5</h1>
        </div>
      </div>
    )
  }
}

export default Splash;