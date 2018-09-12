import React from 'react';
import { Link } from 'react-router-dom';

export default function FilterSelect ({ courses, searchTerm }) {



  return(
    <div style={{ position: 'relative'}}>
      <div className="search-bar-results">
        <h2>Top results</h2>
        <span/>
        {courses.length === 0 ?
          <h2>{`Cannot find anything for '${searchTerm}'`}</h2>
          :
          <div className="columns is-multiline">
            {courses.map(course =>
              <Link key={course._id} className="column is-12 columns" to={`/browsecourses/startnewcourse/${course && course._id}`}>
                <div className="column is-1">
                  <img style={{ height: 60, width: 60, marginLeft: 10 }} src={course.imageUrl} />
                </div>
                <div className="column is-7 search-bar-course-title">
                  {course && course.title.length > 70 ? <h2 >{`${course.title.substring(0, 70)}...`}</h2> :
                    <h2>{course.title}</h2>
                  }
                </div>
                <div className="column is-2 createdBy">
                  <h2>Created by {course.createdBy && course.createdBy.username}</h2>
                </div>
                <div className="column is-1 columns is is-multiline course-index-rating is-mobile">
                  <div className="column is-12-desktop is-6-mobile has-text-centered">
                    <img src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                  </div>
                  <div className="column is-12-desktop is-6-mobile has-text-centered">
                    <p className="subtitle is-7">{course.starRating || 0}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        }
      </div>
    </div>
  );
};
