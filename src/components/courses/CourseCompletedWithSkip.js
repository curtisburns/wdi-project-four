import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../common/Footer';
import Reveal from 'react-reveal/Reveal';

// Lib

export default class CourseCompleted extends React.Component {
  state = {
    congratsResponse: [
      'Well done!',
      'Great work!',
      'Congratulations!',
      'Wow, you made it look easy!',
      'Fantastic, keep up the good work!'
    ]}
  render() {
    return(
      <div>
        <section className="course-completed-section has-text-centered">

          <Reveal effect="slideFromLeft">
            <img style={{position: 'absolute'}} className="front-of-footer" src="/assets/images/28.png" />
          </Reveal>
          <Reveal effect="fadeIn">
            <p className="congratulations"> {this.state.congratsResponse[Math.floor(Math.random() * this.state.congratsResponse.length)]} You have reach the end of this course!</p>

            <div className="columns">
              <div className="column is-half">
                <div className="column is-full finish-screen-text">
                  <p className="">However, it looks like you skipped a page.</p>
                  <p> Would you like to try again? This is a great opportunity to reinforce your knowledge.</p>
                  <Link to={`/course/5b982921a15e7e2be6c5b30c/_completed/startnewcourse/${this.props.match.params.courseId}`} className="button front-of-footer">Start the course from the beginning</Link>
                </div>
                <div className="column is-full finish-screen-text">
                  <p> Not for you? Try another course!</p>
                  <Link to="/browsecourses" className="button front-of-footer">Keep learning!</Link>
                </div>
              </div>
              <div className="column is-half">
              </div>
            </div>
          </Reveal>

        </section>
        <Footer />
      </div>

    );
  }
}
