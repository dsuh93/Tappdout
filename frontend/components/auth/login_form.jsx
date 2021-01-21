import React from 'react';

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

  render() {
    return (
      <div className="login-form-div">
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
      </div>
    )
  }
}

export default LoginForm;