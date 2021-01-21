import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(() => this.props.history.push('/home'));
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    return (
      <div className="signup-form-div">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label className="signup-form-label">Username: 
            <input className="signup-form-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br/>
          <label className="signup-form-label">Email: 
            <input className="signup-form-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <br/>
          <label className="signup-form-label">First Name: 
            <input className="signup-form-input"
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
            />
          </label>
          <br/>
          <label className="signup-form-label">Last Name: 
            <input className="signup-form-input"
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
            />
          </label>
          <br/>
          <label className="signup-form-label">Password: 
            <input className="signup-form-input"
              type="text"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br/>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;