import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import HomeContainer from './home/home_container';


const App = () => (
  <div>
    <header>
      {/* { state.session.id ? <NavBarContainer/> : <Redirect to='/' />} */}
      <NavBarContainer/>
    </header>
    <Switch>
      <Route path='/login' component={LoginFormContainer}/>
      <Route path='/signup' component={SignupFormContainer}/>
      <Route path='/home' component={HomeContainer}/>
      <Route exact path='/' component={Splash}/>
    </Switch>
  </div>
);

export default App;