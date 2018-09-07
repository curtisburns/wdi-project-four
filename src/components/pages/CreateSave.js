import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../common/Button';

export default class CourseCreateSave extends React.Component {
  state = {}

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  render() {
    return(
      <section>
        <div className="background-overlay">
        </div>
        <div className="modal1">
          <h2 className="title is-3">Course Creation</h2>
          <p>
            The course looks great! And soon other people with be able to learn from it!
          </p>

          <Link to='/browsecourses'>
            <Button buttonText="Finish" buttonClass="" />
          </Link>

          <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />

        </div>
      </section>
    );
  }
}
