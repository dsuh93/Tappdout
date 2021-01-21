import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="login-form-div">
        <ul className={errorsClassname}>
          {errors}
        </ul>
        <h1>Login</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label className="login-form-label">Username:
            <input className="login-form-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br/>
          <label className="login-form-label">Password:
            <input className="login-form-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button>Login</button>
        </form>
        <br/>
        <button onClick={this.loginDemoUser}>Demo User</button>
        <hr/>
        <p className="login-form-signup-p">New around here?
          <Link className="login-form-signup-link" to='/signup'>Sign up!</Link>
        </p>
      </div>
    )
  }
}

export default LoginForm;