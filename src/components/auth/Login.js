import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Components
import FormField from '../common/FormField';

//Lib
import Auth from '../../lib/Auth';


class AuthLogin extends React.Component {
  state = {
    passwordHidden: true
  }

  toggleShowPassword = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        const token = res.data.token;
        const user = res.data.user;
        Auth.setToken(token); // Essentially logged in - have token!
        Auth.setUserInfo(user); // Allows us to keep track of user's progress
        this.props.history.push('/browsecourses');
      });
  }



  render(){
    return(
      <section className="login-modal">
        <div className="login-div">

          <h6 className="login-title">Log in</h6>
          <form onSubmit={this.handleSubmit}>

            {/* Email address or Username*/}
            <FormField
              handleChange={this.handleChange}
              name="login"
              label="Please enter your username or email address"
              placeholder="Example@email.com"
              labelStyle="login-label"
              fieldStyle="login-field"
              value={this.state}/>

            <a className="button login-show-hide" onClick={this.toggleShowPassword}>
              {this.state.passwordHidden ? 'Show password' : 'Hide password'}
            </a>

            {/* Password */}
            <FormField
              handleChange={this.handleChange}
              name="password"
              label="Choose a password"
              label2=""
              placeholder=""
              type={this.state.passwordHidden ? 'password' : 'text'}
              value={this.state}
              labelStyle="login-label"
              fieldStyle="login-field"/>

            <button className="login-submit">Log in</button>

          </form>
          <div className="login-bottom-text">
            <p> Not a member? <Link to="/auth/register">Register (for free!)</Link></p>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthLogin;
