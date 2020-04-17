import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Register from '../auth/Register';
// import Login from '../auth/Login';
// import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
