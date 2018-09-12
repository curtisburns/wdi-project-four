import React from 'react';
import Auth from '../../lib/Auth';
import { Route, Redirect } from 'react-router-dom';

// Components
import CoursesIndex from '../courses/Index';

const RedirectFromHome = () => {
  if(!Auth.isAuthenticated()) {
    return(
      <Redirect to="/auth/register" />
    );
  } else {
    return (
      <Redirect to="/browsecourses" component={CoursesIndex} />
    );
  }
};

export default RedirectFromHome;
