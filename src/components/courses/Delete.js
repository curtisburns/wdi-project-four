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
            this.props.match.path.includes('delete') ?
              this.props.history.push(`/users/${Auth.currentUserId()}`):
              this.props.history.push('/browsecourses') ;

          });
      });
  }

  render() {
    console.log('yoo',this.props.match.path.includes('delete'));
    const editMode = this.props.match.path.includes('delete');
    return(
      <section>
        { editMode ?
          <div>
            <div className="background-overlay" onClick={this.handleCancel}>
            </div>
            <div className="modal1 course-delete-modal">
              <h2 className="course-new-title">Delete Course</h2>
              <p className="course-new-label">
              This will also remove completion of this course from everyone elses records. Are you sure you want to delete?
              </p>

              <div className="course-delete-buttons">
                <Button handleClick={this.handleCancel} buttonText="No" buttonClass="" />

                <Button handleClick={this.handleQuit} buttonText="Yes" buttonClass="" />
              </div>
            </div>
            </div>
            :
            <div>
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
          </div>

        }

      </section>
    );
  }
}
