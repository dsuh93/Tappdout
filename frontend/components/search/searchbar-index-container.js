import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchbarIndex from './searchbar-index';

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({

})

export default withRouter(connect(msp, mdp)(SearchbarIndex));