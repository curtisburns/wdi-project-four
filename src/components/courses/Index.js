// TODO: Search bar

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('/api/courses')
      .then(res => this.setState({ courses: res.data }));
  }

  render() {
    return(
      <section>

        <div className="columns">
          <div className="column is-3">
            <p>Filter section</p>
          </div>
          <div className="column is-6">

            {this.state.courses && this.state.courses.map(course =>

              <Link key={course._id} to={`/browsecourses/startnewcourse/${course._id}`}>
                <div className="card columns">
                  {/* Thumbnail */}
                  <div className="column is-2">
                    <img src={course.imageUrl} />
                  </div>

                  {/* Course Title and creator */}
                  <div className="column is-9 columns is-multiline">
                    <div className="column is-12">
                      <h3 className="subtitle is-6">{course.title}</h3>
                    </div>
                    <div className="column is-12">
                      <h3 className="subtitle is-7">Created by {course.createdBy.username}</h3>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="column is-1 columns is is-multiline">
                    <div className="column is-12">
                      <p>Star image</p>
                    </div>
                    <div className="column is-12">
                      <p className="subtitle is-7">{course.starRating || 0}</p>
                    </div>
                  </div>

                </div>
              </Link>

            )}

          </div>
          <div className="column is-3">
            <p>Info panel</p>
          </div>
        </div>

      </section>
    );
  }
}
