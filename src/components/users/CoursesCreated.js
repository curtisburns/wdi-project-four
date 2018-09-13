import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Reveal from 'react-reveal/Reveal';

// Lib
import Auth from '../../lib/Auth';

export default function CoursesCreated ({coursesCreated}) {
  return(
    <section className="courses-completed-panel front-of-footer">

      {coursesCreated.length === 0 ?
        <p>{'You haven\'t created any courses yet.'}</p> :
        coursesCreated.map(course =>

          <Reveal key={course._id} effect="fadeIn" >
            <Link to={`/users/${Auth.currentUserId()}/coursecreateddetails/${course._id}`} key={course._id} >
            <div style={{marginTop: '20px'}} className="columns courses-completed-card">

              {/* Thumbnail */}
              <div className="column is-2 has-text-centered courses-completed-index-thumbnail">
                <img src={course.imageUrl} />
              </div>

              {/* Course Title and creator */}
              <div className="column is-9 columns is-multiline courses-completed-index-middle">
                <div className="column is-12">
                  <h3 className="subtitle is-6">{course.title}</h3>
                </div>
                <div className="column is-12">
                  <h4 className="subtitle is-7">Created by {course.createdBy.username}</h4>
                </div>
              </div>

              {/* Star Rating */}
              <div className="column is-1 columns is is-multiline courses-completed-index-rating is-mobile">
                <div className="column is-12-desktop is-6-mobile has-text-centered">
                  <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                </div>
                <div className="column is-12-desktop is-6-mobile has-text-centered">
                  <p className="subtitle is-7">{course.starRating || 0}</p>
                </div>
              </div>

            </div>
          </Link>
          </Reveal>
        )}


    </section>
  );
}
