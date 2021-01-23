import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import BeerIndexContainer from './beer/beer_index_container';
import BreweryIndexContainer from './brewery/brewery_index_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <ProtectedRoute path='/home' component={HomeContainer}/>
      <AuthRoute exact path='/' component={Splash}/>
      <ProtectedRoute path='/beers' component={BeerIndexContainer}/>
      <ProtectedRoute path='/breweries' component={BreweryIndexContainer}/>
    </Switch>
  </div>
);

export default App;