import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// Lib
import Auth from '../../lib/Auth';

export default class InfoPanel extends React.Component {
  state = {}

  componentDidMount() {
    if (!Auth.isAuthenticated()) {
      this.setState({message: 'Like what you see? Thousands of users have contributed in providing these courses. Sign up and get started!' });
      return;
    }
    let quotes;
    let courses;
    axios.get('/api/quotes')
      .then(res => {
        quotes = res.data;
        axios.get('/api/courses')
          .then(res => {
            courses = res.data;
            axios.get(`/api/users/${Auth.currentUserId()}`)
              .then(res => {
                const randomQuote = this.chooseRandom(quotes);
                this.setState(
                  {
                    quotes: quotes,
                    courses: courses,
                    user: res.data,
                    randomQuote
                  });
                this.setUpState();
              });
          });
      });
  }

  sortCourseByStarRating = (arr) => {
    const result  = _.sortBy(arr, ['starRating']);
    return result;
  }

  randomTop5StarRating = (arr) => {
    const oneToFive = Math.floor(Math.random() * 5);
    return this.sortCourseByStarRating(arr)[oneToFive];
  }

  // Returns random course

  randomAll = () => this.state.courses[Math.floor(Math.random() * this.state.courses.length )];

  // Returns one of five top rated any subject

  randomTop5All = () => this.randomTop5StarRating(this.state.courses);

  // Returns one of five top rated favourite subjects

  randomTop5FavouriteSubject = () => {
    if (this.state.user.coursesCompleted.length === 0) {
      return this.randomTop5All();
    } else {
      return this.randomTop5StarRating(this.userTailoredCourses());
    }
  }

  // Works out the users most taken subject

  mostFrequentSubject = () => {
    const numOfCoursesCompleted = this.state.user.coursesCompleted && this.state.user.coursesCompleted.length || 0;
    const coursesCompleted = this.state.user.coursesCompleted;
    let maxCount = 0;
    let highestOccurring = null;
    let count = 0;
    // console.log(coursesCompleted[0].subject);
    for (let i = 0; i < numOfCoursesCompleted; ++i) {
      const subject = coursesCompleted[i].subject.toLowerCase();
      count = coursesCompleted.filter(course =>
        course.subject.toLowerCase() === subject).length;
      if (count >= maxCount) {
        maxCount = count;
        highestOccurring = subject;
      }
    }
    return highestOccurring;
  }

  //Filters courses to what the user most frequently takes

  userTailoredCourses = () => {
    return this.state.courses.filter(course => course.subject.toLowerCase() === this.mostFrequentSubject());
  }

  setUpState = () => {
    const suggestedCourses = [
      { message: 'Why not try this course?',
        suggestion: this.state.courses && this.randomAll()
      }, {
        message: `Because you enjoy ${this.state.user && this.mostFrequentSubject()}`,
        suggestion: this.state.user && this.randomTop5FavouriteSubject()
      }, {
        message: 'Highest rated',
        suggestion: this.state.courses && this.randomTop5All()
      }
    ];
    const suggestedCourse = this.chooseRandom(suggestedCourses);
    this.setState({suggestedCourse});
    console.log(suggestedCourse);
  };


  chooseRandom = (arr) => arr[Math.floor(Math.random() *  arr.length)];


  render() {
    const randomQuote = this.state.randomQuote && this.state.randomQuote;
    console.log(this.state);
    return (
      <aside className='info-panel'>
        {!Auth.isAuthenticated() &&
          <div className="log-in-message has-text-centered">
            <p className="">{this.state.message}</p>
            <Link className="button" to="/auth/register"> Sign up </Link>
          </div>
        }
        {this.state.quotes &&
          <div>
            <h2>Did you know</h2>
            <hr />
            <h2>Featured course - {this.state.suggestedCourse && this.state.suggestedCourse.message}</h2>
            <hr />
            <div>
            <h2>Food for thought</h2>
            <hr />
              <div>
                <p>{randomQuote.content}</p>
                <p>{randomQuote.by}</p>
              </div>
          </div>

          </div>



        }








      </aside>
    );

  }
}
