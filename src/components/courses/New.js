import React from 'react';
import axios from 'axios';

// Components
import Button from '../common/Button';
import FormField from '../common/FormField';

//Lib
import Auth from '../../lib/Auth';

class CoursesNew extends React.Component {
  state = {
    title: 'An introduction to testing',
    imageUrl: 'http://static.wixstatic.com/media/88e4c2_dde3ecf82909493f94bb32a60fe1a8c6~mv2.jpg',
    subject: 'Computing',
    description: 'This is a test course'
  }

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Im submitting');
    axios.post('/api/courses', this.state , Auth.bearerHeader())
      .then((res) => {
        this.setState(res.data);
        console.log('state is now', this.state);
        this.props.history.push(`/coursecreation/${this.state._id}/pages`);
      });

  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section>
        <div className="background-overlay" onClick={this.handleCancel}>
        </div>
        <div className="modal1">
          <h2 className="title is-3">Course Creation</h2>
          <form onSubmit={this.handleSubmit}>

            {/* Course Title */}
            <FormField
              name="title"
              value={this.state}
              placeholder="E.g. An introduction to..."
              label="Give your course a title"
              label2="Be sure to make this as representative as possible to what your course teaches as to not confuse students"
              handleChange={this.handleChange}
              fieldStyle="course-title-field"
            />

            {/* Course Thumbnail */}
            <FormField
              name="imageUrl"
              value={this.state}
              placeholder="E.g. http://..."
              label="Add a thumbnail"
              handleChange={this.handleChange}
              fieldStyle="course-thumbnail-field"
            />

            {/* Course Subject */}
            <FormField
              name="subject"
              value={this.state}
              placeholder="E.g. Mathematics, Life Skills, Science"
              label="What is the subject? (Only one)"
              label2="Be sure to make this as representative as possible to what your course teaches as to not confuse students"
              handleChange={this.handleChange}
              fieldStyle="course-subject-field"
            />

            {/* Course Description */}
            <div className="field">
              <label className="label" htmlFor="description">Add a description of your course</label>
              <p className="label2">This will help students know what they are signing up for!</p>
              <textarea
                value={this.state.description}
                className="course-description-field"
                rows="8" cols="67"
                name='description'
                onChange={this.handleChange}/>
            </div>




            <Button buttonText="Start adding content" buttonClass="" />
            <a onClick={this.handleCancel} className="button">Cancel</a>

          </form>




        </div>
      </section>
    );
  }
}

export default CoursesNew;
