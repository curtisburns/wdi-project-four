import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../common/Button';
import Reveal from 'react-reveal/Reveal';

export default class CourseCreateIntro extends React.Component {
  state = {}

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  render() {
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        <Reveal effect="fadeIn">
          <div className="modal1 course-create-intro-modal">

            {/* Course Creation Title */}
            <h2 className="create-intro-title">Course Creation</h2>
            <div className="create-intro-top-text">
              <p>
                Great, you want to build a course! You, like many others will be able to experience the joy of teaching! We believe that if you have a passion for something, share it with others, and we provide you with the tools to do so.
              </p>
            </div>

            <hr />

            <div className="create-intro-instructions">
              <p className="i">
                Building a course is easy...
              </p>
              <div style={{width: 200, height: 150, background: 'grey', margin: 'auto'}}/>
              <p className="i1">
                1. Complete the initial setup.
              </p>
              <div style={{width: 200, height: 150, background: 'grey', margin: 'auto'}}/>

              <p className="i2">
                2. Add content via templates, picking
              </p>
              <p className="i2">
                a combination that suits the way you teach.
              </p>
              <div style={{width: 200, height: 150, background: 'grey', margin: 'auto'}}/>

              <p className="i3">
                3. Save and deploy!
              </p>

              <hr />

            </div>
            <div className="course-show-buttons">
              <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />

              <Link to={`${this.props.match.params[0]}/newcoursesetup`}>
                <Button buttonText="Let's get started!" buttonClass="" />
              </Link>
            </div>

          </div>
        </Reveal>
      </section>
    );
  }
}
