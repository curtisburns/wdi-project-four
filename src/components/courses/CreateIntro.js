import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../common/Button';

export default class CourseCreateIntro extends React.Component {
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
            This is the course creation modal, insert intro/appreciation for considering to build a course. Brief overview of how to build a course in 3 steps, three little pictures etc.
          </p>

          <Link to={`${this.props.match.params[0]}/newcoursesetup`}>
            <Button buttonText="Lets get started!" buttonClass="" />
          </Link>

          <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />

        </div>
      </section>
    );
  }
}
