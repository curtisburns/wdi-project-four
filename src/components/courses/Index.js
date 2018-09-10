// TODO: Search bar

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Reveal from 'react-reveal/Reveal';
import Footer from '../common/Footer';

export default class Index extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('/api/courses')
      .then(res => this.setState({ courses: res.data }));
  }

  render() {
    return(
      <section className="course-index">

        <div className="columns front-of-footer section-normaliser">
          <div className="column is-3">
            <p>Filter section</p>
          </div>
          <div className="column is-6">
            <div className="course-list">
              {this.state.courses && this.state.courses.map(course =>

                <Link key={course._id} to={`/browsecourses/startnewcourse/${course._id}`}>
                  <Reveal effect="fadeInUp" >
                    <div className="columns course-card">

                      {/* Thumbnail */}
                      <div className="column is-2 has-text-centered course-index-thumbnail">
                        <img src={course.imageUrl} />
                      </div>

                      {/* Course Title and creator */}
                      <div className="column is-9 columns is-multiline course-index-middle">
                        <div className="column is-12 course-index-title">
                          <h3 className="subtitle is-6">{course.title}</h3>
                        </div>
                        <div className="column is-12">
                          <h4 className="subtitle is-7">Created by {course.createdBy.username}</h4>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="column is-1 columns is is-multiline course-index-rating is-mobile">
                        <div className="column is-12-desktop is-6-mobile has-text-centered">
                          <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                        </div>
                        <div className="column is-12-desktop is-6-mobile has-text-centered">
                          <p className="subtitle is-7">{course.starRating || 0}</p>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                </Link>

              )}

            </div>

          </div>
          <div className="column is-3">
            <p>Info panel</p>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
