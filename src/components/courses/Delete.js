// This is deletion during creation

import React from 'react';
import axios from 'axios';

// Components
import Button from '../common/Button';

// Lib

import Auth from '../../lib/Auth';

export default class CoursesDelete extends React.Component {

  handleCancel = () => {
    this.props.history.push(this.props.match.params[0]);
  }

  handleQuit = () => {
    axios.delete(`/api/courses/${this.props.match.url.split('/')[2]}`, Auth.bearerHeader())
      .then(() => {
        axios.get(`/api/users/${Auth.currentUserId()}`)
          .then(res => {
            Auth.setUserInfo(res.data);
            this.props.history.push('/browsecourses');
          });
      });
  }

  render() {
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        <div className="modal1 course-delete-modal">
          <h2 className="course-new-title">Quit Course Creation</h2>
          <p className="course-new-label">
            Are you sure you want to quit? If you leave now, any progress on the course will not be saved.
          </p>

          <div className="course-delete-buttons">
            <Button handleClick={this.handleCancel} buttonText="Go back" buttonClass="" />

            <Button handleClick={this.handleQuit} buttonText="Quit" buttonClass="" />
          </div>
        </div>
      </section>
    );
  }
}
