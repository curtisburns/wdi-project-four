// TODO: Hook up the search bar and filter functions

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//Lib
import Auth from '../../lib/Auth';

class Header extends React.Component {

  handleLogout = () => {
    Auth.removeToken();
    this.props.history.push('/auth/login');
  }
  render() {
    return(
      <header className="navbar is-fixed-top">
        <Link className="navbar-item" to="/browsecourses">
          <label htmlFor="searchTerm" className="label">Browse courses</label>
        </Link>
        <input style={{width: 200}}className="input" name="searchTerm"/>
        <div className="navbar-end">

          {!Auth.isAuthenticated() &&  <Link className="navbar-item" to="/auth/register">Register</Link>}
          {!Auth.isAuthenticated() &&  <Link className="navbar-item" to="/auth/login">Log in</Link>}
          {Auth.isAuthenticated() &&  <Link className="navbar-item" to="#">Build a course</Link>}
          {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Log out</a> }
          {Auth.isAuthenticated() &&  <Link className="navbar-item"  to="#">{Auth.currentUsername()}</Link> }
        </div>

      </header>
    );
  }
}

export default withRouter(Header);
