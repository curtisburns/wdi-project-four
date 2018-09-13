import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import Button from '../common/Button';
import Reveal from 'react-reveal/Reveal';

// Lib
import Auth from '../../lib/Auth';

export default class CoursesShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/courses/${this.props.match.params.courseId}`)
      .then(res => this.setState(res.data));
  }

  handleCancel = () => {
    this.props.history.push(this.props.match.params[0]);
  }

  handleEdit = () => {
    console.log(this.state, this.props);
    this.props.history.push(`/coursecreation/${this.state._id}/editpages`);
  }

  render() {
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        <Reveal effect="fadeIn">
          <div className="modal1 course-show-modal">
            {this.state.title &&
            <div>

              {/* Course image and Title */}
              <div className="columns">
                <div className="column is-half">
                  <div className="course-show-img">
                    <img src={this.state.imageUrl} />
                  </div>

                </div>
                <div className="column is-half course-show-text-container">
                  <div className="course-show-top-text">
                    <h2 className="course-show-title">{this.state.title}</h2>
                    <h4 className="course-show-created-by">Created by {this.state.createdBy.username}</h4>
                  </div>
                </div>

              </div>

              <hr />

              {/* Description */}
              <div className="course-show-description">
                <p>{this.state.description}</p>


                <div className="columns course-show-rating">
                  <div className="column is-1">
                    <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                  </div>
                  <div className="column is-11">
                    {this.state.completedCourse.length === 0 ? <p className="course-show-info1">Be the first to complete this course!</p> : <p className="course-show-info1" >This course has received {this.state.starRating|| 0} stars from the {this.state.completedCourse} students who have completed this course.</p>
                    }
                  </div>
                </div>



                <p className="course-show-info2"> There are {this.state.enrolled && this.state.enrolled.length || 0} people currently enrolled on this course.</p>

              </div>


              <hr />

              <div className="course-show-buttons">

                {this.props.location.pathname.includes('coursecreateddetails') && Auth.currentUserId() === this.state.createdBy._id ?
                  <Button handleClick={this.handleCancel} buttonText="Close" buttonClass="" />
                  :
                <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />
                }


                {this.props.location.pathname.includes('coursecreateddetails') && Auth.currentUserId() === this.state.createdBy._id ?
                  <Button buttonText="Edit" buttonClass="" handleClick={this.handleEdit} />
                  :
                  <Link to={`/course/${this.props.match.params.courseId}/page/${this.state.pages[0]._id}`} >
                    <Button buttonText="Enrol and start!" buttonClass="" />

                  </Link>
                }


              </div>


            </div>
          }

        </div>
      </Reveal>
      </section>
    );
  }
}
