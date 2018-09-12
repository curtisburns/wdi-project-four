// TODO: Search bar

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Reveal from 'react-reveal/Reveal';
import Footer from '../common/Footer';
import SearchBar from '../common/SearchBar';
import FilterSelect from '../common/FilterSelect';
import FilterSidebar from '../common/FilterSidebar';
import InfoPanel from '../common/InfoPanel';

export default class Index extends React.Component {
  state = {
    sidebarActive: false
  }

  filterCourses = (courses) => {
    const { searchTerm } = this.state;
    const term = new RegExp(searchTerm, 'i');
    return courses.filter(course =>
      [course.subject, course.title, (course.createdBy && course.createdBy.username) ].some(field =>
        term.test(field)));
  }

  handleFilterOptionChange = (event) => {
    const filterOptions = this.state.filterOptions.slice();
    filterOptions.forEach(option => {
      if(option.value === event.target.name || event.target.name === 'all'){
        option.active = event.target.checked;
      }
    });
    this.setState({filterOptions});
  }

  filterByOptions = (courses) => {
    return courses.filter(course =>
      this.state.filterOptions.some(option =>
        option.active && course.subject.toLowerCase() === option.value
      )
    );
  }

  toggleSidebar = () => {
    console.log('hey');
    this.setState({sidebarActive: !this.state.sidebarActive});
    console.log(this.state.sidebarActive);
  }

  handleSearchChange = ({ target: { value }}) => {
    this.setState({ searchTerm: value });
  }

  componentDidMount() {
    axios.get('/api/courses')
      .then(res => {
        const allSubjects = res.data.length > 0 && res.data.map(course => {
          return course.subject.charAt(0).toUpperCase() + course.subject.slice(1);
        });

        const removedDups = allSubjects.filter((option, pos) => allSubjects.indexOf(option) === pos );

        const filterOptions = removedDups.map(option => {
          return { label: option,
            value: option.toLowerCase(),
            active: true};
        });
        this.setState({ courses: res.data , filterOptions: filterOptions});
      });
  }

  render() {
    return(
      <section className="course-index">

        <div className="columns front-of-footer section-normaliser">
          <div className="column is-3">

            <div className="filter-options-container">
              {this.state.filterOptions &&
                <FilterSidebar toggleSidebar={this.toggleSidebar}
                  sidebarActive={this.state.sidebarActive} options={this.state.filterOptions} handleChange={this.handleFilterOptionChange} />
              }
            </div>
          </div>

          <div className="column is-6">
            <div className="search-bar-container">
              <SearchBar handleChange={this.handleSearchChange}
                searchTerm={this.state.searchTerm} />

              {this.state.searchTerm &&
                <FilterSelect searchTerm={this.state.searchTerm}  courses={this.state.courses && this.filterCourses(this.filterByOptions(this.state.courses))} />
              }
            </div>

            <div className="course-list">
              {this.state.courses && this.filterByOptions(this.state.courses).map(course =>

                <Link key={course._id} to={`/browsecourses/startnewcourse/${course._id}`}>
                  <Reveal effect="fadeInUp">
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
                          <h4 className="subtitle is-7">Created by {course.createdBy && course.createdBy.username}</h4>
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
            <InfoPanel />
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
