import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={HomePage}/>
        {/* <Route path='/post/:postid' component={}/> */}
        {/* <Route path='/new' componet={}/> */}
    </Switch>
)