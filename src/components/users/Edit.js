import React from 'react';
import axios from 'axios';

// Components
import Button from '../common/Button';
import FormField from '../common/FormField';
import Reveal from 'react-reveal/Reveal';
import CountryDropdown from '../common/CountryDropdown';
import { Redirect } from 'react-router-dom';

//Lib
import Auth from '../../lib/Auth';

class UsersEdit extends React.Component {
  state = {}

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/users/${Auth.currentUserId()}`, this.state , Auth.bearerHeader())
      .then((res) => {
        this.setState(res.data);
        console.log('state is now', this.state);
        this.props.history.push(this.props.match.params[0]);
      });


  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  }


  componentDidMount() {
    axios.get(`/api/users/${Auth.currentUserId()}`, Auth.bearerHeader())
      .then(res => this.setState(res.data));
  }


  render() {
    console.log(this.state);
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        {this.state.username &&

          <Reveal effect="fadeIn">
            <div className="modal1 course-new-modal">
              <h2 className="course-new-title">Edit profile</h2>
              <form onSubmit={this.handleSubmit}>

                {/* Username */}
                <FormField
                  name="username"
                  value={this.state}
                  label="Username"
                  handleChange={this.handleChange}
                  labelStyle="course-new-label"
                  fieldStyle="course-new-field"
                />

                {/* Email Address */}
                <FormField
                  name="email"
                  value={this.state}
                  label="Email address"
                  handleChange={this.handleChange}
                  labelStyle="course-new-label"
                  fieldStyle="course-new-field"
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

                <hr/>



                <div className="course-new-buttons">
                  <a onClick={this.handleCancel} className="button">Cancel</a>
                  <Button buttonText="Save" buttonClass="" />
                </div>

              </form>




            </div>
          </Reveal>
        }
      </section>
    );
  }
}

export default UsersEdit;
