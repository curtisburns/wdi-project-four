import React from 'react';
import axios from 'axios';

// Components
import Footer from '../common/Footer';
import CoursesCompleted from './CoursesCompleted';
import CoursesCreated from './CoursesCreated';

// Lib
import Auth from '../../lib/Auth';

export default class UsersShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/users/${Auth.currentUserId()}`)
      .then(res => this.setState(res.data));
  }

  render() {
    return(
      <div>

        {this.state.username &&
        <section className="users-show">

          <div className="users-show-username">
            <p>{this.state.username}</p>
            <span/>
          </div>


          <div className="users-show-card columns is-multiline">

            <div className="column is-full">
              <p className="users-show-titles">Current course</p>
              <div className="current-course-panel">
                <div className="current-course-card">
                  <p>{this.state.currentCourse && this.state.currentCourse.title}</p>
                  <p>Created by {this.state.currentCourse && this.state.currentCourse.createdBy.username}</p>
                  <p>Currently enrolled: {this.state.currentCourse && this.state.currentCourse.enrolled.length}</p>
                  <p>Stars: {this.state.currentCourse && this.state.currentCourse.starRating || 0}</p>
                  <p> Time posted: {this.state.currentCourse && this.state.currentCourse.createdAt || 0}</p>

                </div>
              </div>
            </div>

            <div className="column is-half">
              <p className="users-show-titles">Courses Completed ({this.state.coursesCompleted.length})</p>
              <CoursesCompleted coursesCompleted={this.state.coursesCompleted}/>
            </div>


            <div className="column is-half">
              <p className="users-show-titles">Courses Created ({this.state.coursesCreated.length})</p>
              <CoursesCreated coursesCreated={this.state.coursesCreated}/>
            </div>


          </div>

        </section>
        }

        <Footer />
      </div>

    );
  }
}
