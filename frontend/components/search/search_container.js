import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';
import { fetchSearchList } from '../../actions/search_actions';
import Search from './search';

const msp = (state, ownProps) => {
  const searchState = ownProps.location.state ? ownProps.location.state : {};
  const list = searchState.list ? searchState.list : "beers";
  const keyword = searchState.keyword ? searchState.keyword : "";
  return {
    searchIndex: state.entities.searches.searchIndex,
    list: list,
    keyword: keyword
  }
};


const mdp = dispatch => ({
  fetchSearchList: (listAndKey) => dispatch(fetchSearchList(listAndKey))
});

export default withRouter(connect(msp, mdp)(Search))