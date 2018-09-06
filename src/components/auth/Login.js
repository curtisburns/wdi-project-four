import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//Components
import FormField from '../common/FormField';

//Lib
import Auth from '../../lib/Auth';


class AuthLogin extends React.Component {
  state = {
    login: 'testUser',
    password: 'pass',
    passwordHidden: true
  }

  toggleShowPassword = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
  }

  handleChange = ({ target: name, value }) => {
    this.stateState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token); // Essentially logged in - have token!
        console.log('Im done! Check out insomnia and local storage');
        console.log('props is', this);
        this.props.history.push('/browsecourses');
      });
  }



  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>

          {/* Email address or Username*/}
          <FormField
            handleChange={this.handleChange}
            name="login"
            label="Please enter your username or email address"
            label2="Testing label 2"
            placeholder="Example@email.com"
            value={this.state}/>

          {/* Password */}
          <FormField
            handleChange={this.handleChange}
            name="password"
            label="Choose a password"
            label2=""
            placeholder=""
            type={this.state.passwordHidden ? 'password' : 'text'}
            value={this.state}/>

          <a className="button" onClick={this.toggleShowPassword}>
            {this.state.passwordHidden ? 'Show password' : 'Hide password'}
          </a>

          <button>Log in</button>

        </form>
        <p> Not a member? <a onClick={this.props.handleClick}>Register (for free!)</a></p>
      </section>
    );
  }
}

export default withRouter(AuthLogin);
