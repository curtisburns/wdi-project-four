import React from 'react';
import axios from 'axios';

// Components
import Button from '../common/Button';
import FormField from '../common/FormField';
import Reveal from 'react-reveal/Reveal';


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
        axios.get(`/api/users/${Auth.currentUserId()}`)
          .then(res => Auth.setUserInfo(res.data));
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
          <Reveal effect="fadeIn">
        <div className="modal1 course-new-modal">
          <h2 className="course-new-title">Course Creation - Setup</h2>
          <form onSubmit={this.handleSubmit}>

              {/* Course Title */}
              <FormField
                name="title"
                value={this.state}
                placeholder="E.g. An introduction to..."
                label="Give your course a title"
                label2="Be sure to make this as representative as possible to what your course teaches as to not confuse students"
                handleChange={this.handleChange}
                labelStyle="course-new-label"
                label2Style="course-new-label2"
                fieldStyle="course-new-field"
              />

              {/* Course Thumbnail */}
              <div className="columns">
                <div className="column is-5">
                  <FormField
                    name="imageUrl"
                    value={this.state}
                    placeholder="E.g. http://..."
                    label="Add a thumbnail (square)"
                    handleChange={this.handleChange}
                    labelStyle="course-new-label"
                    fieldStyle="course-new-field"
                  />

                </div>
                <div className="column is-7 course-new-thumbnail has-text-centered">
                  <p className="course-new-thumbnail">Preview</p>
                  {this.state.imageUrl ? <img className="course-new-thumbnail"src={this.state.imageUrl} /> : <div className="course-new-thumbnail" style={{height: 150, width: 150, margin: 'auto', background: 'lightgrey'}} />}
                </div>
              </div>

            {/* Course Subject */}
            <FormField
              name="subject"
              value={this.state}
              placeholder="E.g. Mathematics, Life Skills, Science"
              label="What is the subject? (Only one)"
              handleChange={this.handleChange}
              labelStyle="course-new-label"
              fieldStyle="course-new-field"
            />

            {/* Course Description */}
            <div className="field">
              <label className="course-new-label" htmlFor="description">Add a description of your course</label>
              <p className="course-new-label2 ">This will help students know what they are signing up for!</p>
              <textarea
                value={this.state.description}
                className="course-description-field"
                rows="8" cols="67"
                name='description'
                onChange={this.handleChange}/>
            </div>

            <hr/>



            <div className="course-new-buttons">
              <a onClick={this.handleCancel} className="button">Cancel</a>
              <Button buttonText="Start adding content" buttonClass="" />
            </div>

          </form>




        </div>
      </Reveal>
      </section>
    );
  }
}

export default CoursesNew;
