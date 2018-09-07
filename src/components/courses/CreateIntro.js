import React from 'react';
import Button from '../common/Button';

export default class CourseCreateIntro extends React.Component {
  state = {}

  handleCancel = () => {
    console.log('Cancel!!', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  handleStart = () => {
    console.log('Lets get started!');
  }

  render() {
    return(
      <section>
        <div className="background-overlay">
        </div>
        <div className="modal1">
          <p>
            This is the course creation modal, insert intro/appreciation for considering to build a course. Brief overview of how to build a course in 3 steps, three little pictures etc.
          </p>

            <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />

          <Button handleClick={this.handleStart} buttonText="Lets get started!" buttonClass="" />
        </div>
      </section>
    );
  }
}
