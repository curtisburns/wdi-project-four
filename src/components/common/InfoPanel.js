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
            axios.get(`/api/users/${Auth.currentUserId()}`, Auth.bearerHeader())
              .then(res => {
                const randomQuote = this.chooseRandom(quotes);
                const infoSwitch = Math.floor(Math.random() * 2);
                this.setState(
                  {
                    quotes: quotes,
                    courses: courses,
                    user: res.data,
                    randomQuote,
                    infoSwitch
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
    const suggestedCourse = this.state.suggestedCourse && this.state.suggestedCourse;
    const infoSwitch = this.state.infoSwitch && this.state.infoSwitch;
    console.log(this.state);
    console.log('quote', randomQuote);
    console.log('course', suggestedCourse);
    return (
      <aside className='info-panel'>
        {!Auth.isAuthenticated() &&
          <div className="log-in-message has-text-centered">
            <p className="">{this.state.message}</p>
            <Link className="button" to="/auth/register"> Sign up </Link>
          </div>
        }

        {Auth.isAuthenticated() &&
          <div>





            {randomQuote && suggestedCourse && infoSwitch ?

              <div>
                {suggestedCourse &&
              <div className="suggestedCourse has-text-centered">
                <h2>Featured course - {suggestedCourse.message}</h2>
                <hr />
                <Link to={`/browsecourses/startnewcourse/${suggestedCourse.suggestion && suggestedCourse.suggestion._id}`}>
                  <img src={suggestedCourse.suggestion.imageUrl} />
                  <h3>{suggestedCourse.suggestion.title}</h3>
                  <img style={{height: 30, width: 30, marginTop: 20}} src="/assets/images/purepng.com-silver-starsilverchemical-elementshinywhitetomic-number-47metalservice-silver-star-1701528983711947cf.png" />
                  <p>{suggestedCourse.suggestion.starRating || 0}</p>
                </Link>
              </div>
                }
              </div>
              :
              <div className="suggestedCourse has-text-centered">
                <h2>Food for thought</h2>
                <hr />
                <div>
                  <p style={{marginTop: '50px'}}>{randomQuote && `"${randomQuote.content}"`}</p>
                  <p style={{marginTop: '20px', fontSize: '.8em', fontWeight: '600'}}>{randomQuote && randomQuote.by}</p>
                </div>
              </div>




            }


          </div>
        }




      </aside>
    );

  }
}
