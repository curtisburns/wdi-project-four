import React from 'react';
import Auth from '../../lib/Auth';
import { Route, Redirect } from 'react-router-dom';

const SecureRoute = (props) => {
  if(!Auth.isAuthenticated()) {
    return(
      <Redirect to="/auth/login" />
    );
  }
  return (
    <Route {...props} />
  );
};

export default SecureRoute;
