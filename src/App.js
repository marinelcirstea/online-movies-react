import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
// import Landing from './components/layout/Landing';
import Home from './pages/Home';
import Routes from './components/routing/Routes';

// Redux
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
