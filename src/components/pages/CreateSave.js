import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../common/Button';

// Lib
import Auth from '../../lib/Auth';

export default class CourseCreateSave extends React.Component {
  state = {}

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  render() {
    const editMode = this.props.match.path.includes('save');
    console.log(editMode);
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        {editMode ?
          <div className="modal1 course-save-modal">
            <h2 className="course-new-title">Course Edit - Finish</h2>
            <p className="course-new-label">{
              'Have you finished with your changes?'}
            </p>

            <div className="course-save-buttons">

              <Button handleClick={this.handleCancel} buttonText="No" buttonClass="" />

              <Link to={`/users/${Auth.currentUserId()}`}>
                <Button buttonText="Yes" buttonClass="" />
              </Link>
            </div>
          </div>
          :
          <div className="modal1 course-save-modal">
            <h2 className="course-new-title">Course Creation - Finish</h2>
            <p className="course-new-label">{
              'Brilliant! You\'re all done. The course looks great! And soon other people with be able to learn from it! Let\'s get it deployed.'}
            </p>

            <div className="course-save-buttons">

              <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />

              <Link to='/browsecourses'>
                <Button buttonText="Finish" buttonClass="" />
              </Link>
            </div>
          </div>



        }

      </section>
    );
  }
}
