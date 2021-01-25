import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import HomeContainer from './home/home_container';
import BeerIndexContainer from './beer/beer_index_container';
import BreweryIndexContainer from './brewery/brewery_index_container';
import BreweryShowContainer from './brewery/brewery_show_container';
import BeerFormContainer from './beer/beer_form_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
    <Switch>
      <AuthRoute exact path='/' component={Splash}/>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <ProtectedRoute path='/home' component={HomeContainer}/>
      <ProtectedRoute exact path='/beers' component={BeerIndexContainer}/>
      <ProtectedRoute exact path='/breweries' component={BreweryIndexContainer}/>
      <ProtectedRoute exact path='/breweries/:breweryId' component={BreweryShowContainer}/>
      <ProtectedRoute path='/breweries/:breweryId/new_beer' component={BeerFormContainer}/>
    </Switch>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App;