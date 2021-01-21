import { connect } from 'react-redux';
import Home from './home';

const msp = (state, ownProps) => ({
  state: state,
  ownProps: ownProps
})

// const msp = dispatch => ({

// })

export default connect(msp, null)(Home);