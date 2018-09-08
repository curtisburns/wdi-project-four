import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import Button from '../common/Button';

export default class CoursesShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/courses/${this.props.match.params.courseId}`)
      .then(res => this.setState(res.data));
  }

  handleCancel = () => {
    this.props.history.push(this.props.match.params[0]);
  }

  render() {
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        <div className="modal1 course-show-modal">
          {this.state.title &&
            <div>

              <div>
                <img src={this.state.imageUrl} />
              </div>

              <h2 className="title is-3">{this.state.title}</h2>
              <h4 className="subtitle is-5">Created by {this.state.createdBy.username}</h4>
              <p>{this.state.description}</p>

              <Link to={`/course/${this.props.match.params.courseId}/page/${this.state.pages[0]._id}`} >
                <Button buttonText="Enroll and start!" buttonClass="" />
              </Link>

              <Button handleClick={this.handleCancel} buttonText="Cancel" buttonClass="" />
            </div>
          }

        </div>
      </section>
    );
  }
}
