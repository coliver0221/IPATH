import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Profile from './Profile';
import Shop from './Shop';
import Event from './Event';
import NormalizeStyles from './theme/NormalizeStyles';
import GlobalStyles from './theme/GlobalStyles';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/shop' component={Shop} />
          <Route path='/event' component={Event} />
        </Switch>
      </div>
      <GlobalStyles />
      <NormalizeStyles />
    </Router>
  );
}

export default App;
