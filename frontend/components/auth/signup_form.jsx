import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      repeat: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if(this.state.password === this.state.repeat){
      const user = Object.assign({}, this.state);
      delete user["repeat"]
      this.props.signup(user)
        .then(() => this.props.history.push('/home'));
    } else {
      this.props.receiveErrors(["Passwords don't match, please try again."]);
      this.setState({password: "", repeat: ""});
    }
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
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
      <div className="signup-page">
        <div className="auth-page-img-div">
          <img className="auth-page-bg-img" src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="beer-background"/>
        </div>
        <div className="signup-form-div">
          <div className="auth-title">
            <h1 className="auth-h1">TAPPDOUT</h1>
            <p className="auth-p">DRINK SOCIALLY</p>
          </div>
          <ul className={errorsClassname}>
          {errors}
          </ul>
          <form className="signup-form" onSubmit={this.handleSubmit}>
              <div className="signup-form-aside">
                <p className="aside-p">Welcome to Tappdout! A project clone of the website Untappd, which you can visit <a href="https://untappd.com/">here</a>!</p>
              </div>
              <p className="signup-p">All fields below are required unless specified.</p>
              <div className="signup-input-container">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </div>
            <br/>
              <div className="signup-input-container">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </div>
            <br/>
              <p className="signup-p">Avoid using common words and include a mix of letters and numbers.</p>
            <br/>
              <div className="signup-input-container">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="First Name"
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                />
              </div>
            <br/>
              <div className="signup-input-container">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="Last Name"
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                />
              </div>
            <br/>
              <div className="signup-input-container pw-input">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </div>
            <br/>
              <div className="signup-input-container pw-input">
                <img className="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/beer-mug_1f37a.png"/>
                <hr/>
                <input className="signup-form-input"
                  placeholder="Repeat Password"
                  type="password"
                  value={this.state.repeat}
                  onChange={this.update("repeat")}
                />
              </div>
            <br/>
              <div className="signup-tos">
                <p className="signup-tos-p">You don't have to be of legal drinking age to join Tappdout. However, you must be of legal drinking age to drink.</p>
              </div>
            <br/>
            <button className="btn">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;