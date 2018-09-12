import React from 'react';
import axios from 'axios';
import _ from 'lodash';

// Lib
import Auth from '../../lib/Auth';

export default class InfoPanel extends React.Component {
  state = {}

  componentDidMount() {
    let quotes;
    let courses;
    axios.get('/api/quotes')
      .then(res => {
        quotes = res.data;
        axios.get('/api/courses')
          .then(res => {
            courses = res.data;
            axios.get(`/api/users/${Auth.currentUserId()}`)
              .then(res => this.setState(
                {
                  quotes: quotes,
                  courses: courses,
                  user: res.data
                }
              ));
          });
      });
  }

  sortCourseByStarRating = () => {
    const result  = _.sortBy(this.state.courses, ['starRating']);
    return result;
  }

  top5StarRating = () => {
    const oneToFive = Math.Floor(Math.Random() * 5);
    this.sortCourseByStarRating()[oneToFive];
  }

  

  possibleSuggestions = [

  ]

  chooseRandom = (arr) => Math.floor(Math.random() *  arr.length);

  render() {
    console.log(this.state);
    const randomQuote = this.state.quotes && this.state.quotes[this.chooseRandom(this.state.quotes)];
    return (
      <aside className='info-panel'>
        {this.state.quotes &&
          <div>
            <h2>Did you know</h2>
            <hr />
            <h2>Featured course</h2>

            <hr />
            <div>
            <h2>Food for thought</h2>
            <hr />
              <p>{randomQuote.content}</p>
              <p>{randomQuote.by}</p>
          </div>

          </div>



        }








      </aside>
    );

  }
}
