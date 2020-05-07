import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.less';
import './App.css';
import { connect } from 'react-redux';

import CustomLayout from './containers/Layout';
//import ArticleList from './containers/ArticleListView';
import Writers from './components/Writers';
import StoryInput from './components/StoryInput';
import StoryOutput from './components/Output';
import * as actions from './store/actions/auth';

class App extends Component {

  componentDidMount() {

    this.props.onTryAutoSignup();
    console.log("dupa ",this.props);

  }
  
  render() {
    return (
      <div className="App">
        <Router>  
          <CustomLayout {...this.props }>
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    language: state.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);