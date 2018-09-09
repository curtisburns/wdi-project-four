import React from 'react';
import axios from 'axios';

// Lib
import Auth from '../../lib/Auth';

export default class UsersShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/users/${Auth.currentUserId()}`)
      .then(res => this.setState(res.data));
  }

  render() {
      {this.state.username && console.log(this.state);}
    return(
      <section>
        {this.state.username &&
        <div>
          <p>{this.state.username}</p>

          <p>Courses Completed</p>
          {this.state.coursesCompleted.map(course =>
            <p key={course._id}>{course.title}</p>)}


          <p>Courses Created</p>
          {this.state.coursesCreated.map(course =>
            <p key={course._id}>{course.title}</p>)}

          <p>Current course</p>
          <p>{this.state.currentCourse && this.state.currentCourse.title}</p>
        </div>

        }
      </section>
    );
  }
}
