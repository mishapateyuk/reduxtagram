import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  const st = state;
  return {
    posts: state.posts,
    comments: state.comments,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;