// TODO: Hide/Show password
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import FormField from '../common/FormField';
import CountryDropdownOptions from '../common/CountryDropdownOptions';

//Lib
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {
  state = {
    email: 'test@test.com',
    username: 'testUser',
    countryOfResidence: 'United Kingdom',
    password: 'pass',
    passwordHidden: true,
    defaultValue: 'United Kingdom',
    errors: {}
  }

  toggleShowPassword = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
  }

  handleChange = ({target: {name, value}}) => {
    const errors = this.state.errors;
    delete errors[name]; // Remove the error for this field
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password !== this.state.confirmPassword) {
      const errors = this.state.errors;
      errors.passwordConfirmation = 'Passwords do not match!';
      return this.setState({ errors });
    }
    axios.post('/api/register', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token);
        console.log('Im done! Check out insomnia and local storage');
        this.props.history.push('/browsecourses');
      })
      .catch(err => {
        console.log('errors are', err);
        const oldErrors = this.state.errors;
        const newErrors = err.response.data.response;
        const errors = { ...oldErrors, ...newErrors };
        console.log(err.response.data.response);
        this.setState({ errors });
      });
  }



  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>

          {/* Email address */}
          <FormField
            handleChange={this.handleChange}
            name="email"
            label="Please enter your email address"
            label2="Testing label 2"
            placeholder="Example@email.com"
            value={this.state}/>

          {/* Username */}
          <FormField
            handleChange={this.handleChange}
            name="username"
            label="Choose a username"
            label2=""
            placeholder=""
            value={this.state}/>

          {/* Country of residence */}
          <div className="field">
            <label className="label">Country of residence</label>
            <CountryDropdownOptions
              handleChange={this.handleChange}
              defaultValue={this.state.defaultValue}/>
          </div>

          {/* Password */}
          <FormField
            handleChange={this.handleChange}
            name="password"
            label="Choose a password"
            label2=""
            placeholder=""
            type={this.state.passwordHidden ? 'password' : 'text'}
            value={this.state}/>

          {/* Password Confirm */}
          <FormField
            handleChange={this.handleChange}
            name="confirmPassword"
            label="Please confirm your password"
            label2=""
            type={this.state.passwordHidden ? 'password' : 'text'}
            placeholder=""
            value={this.state}/>

          <a className="button" onClick={this.toggleShowPassword}>
            {this.state.passwordHidden ? 'Show password' : 'Hide password'}
          </a>

          <button>Sign up</button>

        </form>

        <p> Already a member? <Link to="/auth/login">Log in</Link></p>
      </section>
    );
  }
}

export default AuthRegister;
