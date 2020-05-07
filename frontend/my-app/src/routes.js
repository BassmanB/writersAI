import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Writers from './components/Writers';
import WritersList from './containers/WritersListView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
<div>
    <Route exact path='/' component={WritersList}/> 
    <Route exact path='/login/' component={Login}/> 
    <Route exact path='/signup/' component={Signup}/> 

</div>

);

export default BaseRouter;