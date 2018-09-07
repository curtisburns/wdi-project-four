import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../common/Button';
import FormField from '../common/FormField';

class CoursesNew extends React.Component {
  state = {}

  handleCancel = () => {
    // console.log('Cancel', this.props);
    this.props.history.push(this.props.match.params[0]);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Im submitting');

  }

  handleChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section>
        <div className="background-overlay">
        </div>
        <div className="modal1">
          <h2 className="title is-3">Course Creation</h2>
          <form onSubmit={this.handleSubmit}>


            {/* { handleChange,
              label,
              label2,
              placeholder,
              name,
              value,
              type
            })


            title: { type: String, required: String },
            subject: { type: String, required: String },
            imageUrl: { type: String, required: String },
            description: */}

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
