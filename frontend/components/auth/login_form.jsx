import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then(() => this.props.history.push('/home'));
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = {username: "guest", password: "password"};
    this.props.login(demoUser)
      .then(() => this.props.history.push('/home'));
  }

  update(key) {
    return(e) => {
      this.setState({ [key]: e.target.value })
    };
  }

  componentWillUnmount() {
    this.props.receiveErrors([])
  }

  render() {
    const errors = this.props.errors.map( error => {
      return (
        <li key={error}>{error}</li>
      )
    })

    const errorsClassname = this.props.errors.length > 0 ? "auth-errors-reveal" : "auth-errors-hidden";

    return (
      <div className="login-page">
        <div className="login-page-img-div">
          <img className="login-page-bg-img" src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="beer-background"/>
        </div>
        <div className="login-form-div">
          <div className="login-title">
            <h1 className="login-h1">TAPPDOUT</h1>
            <p className="login-p">DRINK SOCIALLY</p>
          </div>
          <ul className={errorsClassname}>
            {errors}
          </ul>
          <button className="demo-btn" onClick={this.loginDemoUser}>Demo User</button>
          <p className="or">OR</p>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
              <hr/>
              <input className="login-form-input"
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </div>
            <br/>
            <div className="input-container">
              <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
              <hr/>
              <input className="login-form-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <br/>
            <button className="btn">Sign In</button>
          </form>
          <br/>
          <hr className="login-hr"/>
          <p className="login-form-signup-p">New around here?   
            <Link className="login-form-signup-link" to='/signup'>Sign up!</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default LoginForm;


// <div>Icons made by <a href="https://www.flaticon.com/free-icon/beer_761767?term=beer&related_id=761767" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>