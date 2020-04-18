import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Register from '../auth/Register';
// import Login from '../auth/Login';
// import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/404';
import Movies from '../../pages/Movies';

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> */}
        <Route exact path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
