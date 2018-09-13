import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import Footer from '../common/Footer';
import CoursesCompleted from './CoursesCompleted';
import CoursesCreated from './CoursesCreated';

// Lib
import Auth from '../../lib/Auth';

export default class UsersShow extends React.Component {
  state = {}

  componentDidMount() {
    console.log(this.props.match);
    axios.get(`/api/users/${Auth.currentUserId()}`, Auth.bearerHeader())
      .then(res => this.setState(res.data));
  }

  render() {
    const currentCourse = this.state.currentCourse;
    return(
      <div>

        {this.state.username &&
          <section className="users-show">

            <div className="users-show-username">
              <p>{this.state.username}</p>
              <Link to={`/users/${Auth.currentUserId()}/edit`}>
                <i className="fas fa-cogs settings"></i>
              </Link>
              <span/>
            </div>


            <div className="users-show-card columns is-multiline">

              <div className="column is-full">
                <p className="users-show-titles">Current course</p>
                <div className="current-course-panel front-of-footer">
                  <div className="current-course-card">
                    {currentCourse && currentCourse ?
                      <div>
                        <div className="columns is-multiline">
                          <div style={{height: 80}} className="columns is-multiline column is-6">
                            <div className="column is-2">
                              <img style={{ height: 50, width: 50, margin: 'auto' }} src={currentCourse.imageUrl} />
                            </div>
                            <div className="column is-10 search-bar-course-title">
                              {currentCourse .length > 70 ? <h2 >{`${currentCourse .title.substring(0, 70)}...`}</h2> :
                                <h2>{currentCourse .title}</h2>
                              }
                            </div>

                            <div className="column is-12 createdBy has-text-centered">
                              <h2> Created: {this.state.currentCourse && this.state.currentCourse.createdAt.split('T')[0]}</h2>
                            </div>

                            <div className="column is-12 createdBy has-text-centered">
                              <h2>By: {currentCourse.createdBy && currentCourse.createdBy.username}</h2>
                            </div>

                          </div>
                          <div style={{height: 80}} className="columns is-multiline column is-6">
                            <div className="column is-12 createdBy has-text-centered">
                              <h2>Currently enrolled: {this.state.currentCourse && this.state.currentCourse.enrolled.length}</h2>
                            </div>

                            <div className="column is-2 is-offset-5 createdBy has-text-centered">
                              <div className="column is-12-desktop is-6-mobile has-text-centered">
                                <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                              </div>
                              <div className="column is-12-desktop is-6-mobile has-text-centered">
                                <p className="subtitle is-7">{currentCourse.starRating || 0}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      : <p> You are not currently enrolled on any course </p>
                    }

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
