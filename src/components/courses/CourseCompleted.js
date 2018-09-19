import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import Footer from '../common/Footer';
import Reveal from 'react-reveal/Reveal';
import Button from '../common/Button';

// Lib
import Auth from '../../lib/Auth';

export default class CourseCompleted extends React.Component {
  state = {
    congratsResponse: [
      'Well done!',
      'Great work!',
      'Congratulations!',
      'Wow, you made it look easy!',
      'Fantastic, keep up the good work!'
    ],
    toggleCommentForm: false,
    newComment: {
      postedBy: Auth.currentUserId(),
      content: ''},
    starGiven: false,
    feedBackSubmitted: false
  }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.match.params.courseId}`, Auth.bearerHeader())
      .then(res => this.setState(res.data));
  }

  toggleCommentForm = () => {
    const toggle = !this.state.toggleCommentForm;
    this.setState({ toggleCommentForm: toggle });
  }

  handleStarClick = () => {
    this.setState({ starGiven: !this.state.starGiven });
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    const newState = this.state;
    if (this.state.starGiven) {
      newState.starRating ? newState.starRating += 1 : newState.starRating = 1;
    }
    newState.comments.push(this.state.newComment);
    axios.put(`/api/courses/${this.props.match.params.courseId}`, newState, Auth.bearerHeader())
      .then(res => console.log(res.data));
    this.setState({ feedBackSubmitted: true, toggleCommentForm: false });
  }

  handleChange = ( {target: { value }} ) => {
    const newState = this.state;
    newState.newComment.content = value;
    this.setState(newState);
  }

  render() {
    const commentForm =  this.state.toggleCommentForm? 'comment-and-rate' : '';
    return(
      <div>
        <section className="course-completed-section has-text-centered">


          <div>
            {this.state.toggleCommentForm &&

              <div>
                <Reveal effect="fadeIn" duration={800}>
                  <div style={{zIndex: 6}} className="background-overlay" onClick={this.toggleCommentForm} />

                  <form className="comment-form" onSubmit={this.handleSubmit}>
                    <h2>Share your thoughts</h2>
                    {/* New Comment */}
                    <div className="field">
                      <label className="label comment-label" htmlFor="comment">Tell others what you thought of the course</label>
                      <textarea className="text-body-field2"
                        value={this.state.newComment.content}
                        name='comment'
                        onChange={this.handleChange}
                      />
                    </div>

                    <p>And if you enjoyed this course, why not give it a star?</p>

                    {this.state.starGiven ?
                      <div>
                        <a onClick={this.handleStarClick} className="button star-given">Woohoo!</a>
                        <img className="star-given" src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png"/>
                        <img style={{width: 50, height: 50, top: 420, left: 180, zIndex: 9}} src="/assets/images/sparkles.gif" />
                        <img style={{width: 50, height: 50, top: 410, left: 220, zIndex: 9}} src="/assets/images/sparkles.gif" />
                      </div>
                      :
                      <div>
                        <a onClick={this.handleStarClick} className="button">Click me!</a>
                        <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png"/>
                      </div>
                    }




                    <Button buttonText="Submit feedback" buttonClass="" />



                  </form>
                </Reveal>
              </div>



            }

            {!this.state.toggleCommentForm &&
              <div>
                <Reveal effect="fadeIn" duration={5000}>
                  { this.state.feedBackSubmitted ?
                    <h3>Thanks for sharing!</h3> : <h3>Tell us what you think!</h3>
                  }
                </Reveal>
              </div>
            }
            <img style={{position: 'absolute'}} onClick={!this.state.feedBackSubmitted ? this.toggleCommentForm : null } className={`front-of-footer ${commentForm}`}  src="/assets/images/28.png" />
          </div>

          {!this.state.toggleCommentForm &&
              <Reveal effect="fadeIn">
                <p className="congratulations"> {this.state.congratsResponse[Math.floor(Math.random() * this.state.congratsResponse.length)]} You have now completed this course!</p>
              </Reveal>
          }
          <Reveal effect="fadeIn">

            <div className="columns">
              <div className="column is-half">
                <div className="column is-full finish-screen-text">
                  <p> You can view your profile to check your progess.</p>
                  <Link to={`/users/${Auth.currentUserId()}`} className="button front-of-footer">Go to your profile</Link>
                </div>
                <div className="column is-full finish-screen-text">
                  <p> Hungry for more? We have a load of courses for you to try out.</p>
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
