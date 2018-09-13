// TODO: Hide/Show password
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import FormField from '../common/FormField';
import CountryDropdown from '../common/CountryDropdown';

//Lib
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {
  state = {
    passwordHidden: true,
    countryOfResidence: 'United Kingdom',
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
    console.log('Creating user', this.state);
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
      <section className="register-modal">
        <div className="register-container">

          <h6 className="register-title">Register</h6>
          <form onSubmit={this.handleSubmit}>

            {/* Email address */}
            <FormField
              handleChange={this.handleChange}
              name="email"
              label="Please enter your email address"
              label2=""
              placeholder="Example@email.com"
              value={this.state}
              labelStyle="register-label"
              fieldStyle="register-field"
            />

            {/* Username */}
            <FormField
              handleChange={this.handleChange}
              name="username"
              label="Choose a username"
              label2=""
              placeholder=""
              value={this.state}
              labelStyle="register-label"
              fieldStyle="register-field"
            />

            {/* Country of residence */}
            <div className="field">
              <label className="label register-label">Country of residence</label>
              <CountryDropdown
                handleChange={this.handleChange}
                defaultValue={this.state.countryOfResidence}
                fieldStyle="register-dropbox"
              />
            </div>

            {/* Password */}
            <FormField
              handleChange={this.handleChange}
              name="password"
              label="Choose a password"
              label2=""
              placeholder=""
              type={this.state.passwordHidden ? 'password' : 'text'}
              value={this.state}
              labelStyle="register-label"
              fieldStyle="register-field"
            />
            <a className="button register-show-hide" onClick={this.toggleShowPassword}>
              {this.state.passwordHidden ? 'Show password' : 'Hide password'}
            </a>

            {/* Password Confirm */}
            <FormField
              handleChange={this.handleChange}
              name="confirmPassword"
              label="Please confirm your password"
              label2=""
              type={this.state.passwordHidden ? 'password' : 'text'}
              placeholder=""
              value={this.state}
              labelStyle="register-label"
              fieldStyle="register-field"
            />


            <button className="button register-submit">Sign up</button>

          </form>
          <div className="register-bottom-text">
            <p> Already a member? <Link to="/auth/login">Log in</Link></p>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthRegister;
