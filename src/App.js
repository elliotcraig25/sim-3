import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';
import routes from './routes';
import './App.css';

import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className='parent_app'>
            <div className='navbar'>
              <Nav />
            </div>
            <div className='parent_body'>
              {/* <div> */}
                <Router>
                  {routes}
                </Router>
              {/* </div> */}
            </div>
          </div>
        </Provider>
    );
  }
}

export default App;
