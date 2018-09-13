// TODO: Hook up the search bar and filter functions

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//Lib
import Auth from '../../lib/Auth';

class Header extends React.Component {

  handleLogout = () => {
    Auth.removeToken();
    Auth.removeUserInfo();
    this.props.history.push('/auth/login');
  }
  render() {
    console.log(this.props.history);
    return(
      <header className="navbar is-fixed-top" style={{boxShadow: '0 1px 3px rgba(66,66,66,.5)'}}>
        <Link className="navbar-item" to="/browsecourses">
          <h2 htmlFor="searchTerm" className="label">Browse courses</h2>
        </Link>
        <div className="navbar-end">

          {!Auth.isAuthenticated() &&  <Link className="navbar-item" to="/auth/register">Register</Link>}
          {!Auth.isAuthenticated() &&  <Link className="navbar-item" to="/auth/login">Log in</Link>}
          {Auth.isAuthenticated() &&  <Link className="navbar-item" to={`${this.props.history.location.pathname}/newcourseintro`}>Build a course</Link>}
          {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Log out</a> }
          {Auth.isAuthenticated() &&  <Link className="navbar-item"  to={`/users/${Auth.currentUserId()}`}>{Auth.currentUsername()}</Link> }
        </div>

      </header>
    );
  }
}

export default withRouter(Header);
