// TODO: Create templates then render them as necessary

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';
import PagesEdit from './Edit';

class PageOverview extends React.Component {
  state = {
    elements: [{}]
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}/pages/${this.props.match.params.pageId}`)
      .then(res => this.setState(res.data));
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({ [name]: value });
    console.log('the state is', this.state);
  }

  handleContentChange = ({ target }) => {
    const newState = this.state;
    const contentType =  target.getAttribute('data-type');
    const updateContent = {
      contentType: target.getAttribute('data-type'),
      content: target.value
    };

    // Delete old version of element
    newState.elements = newState.elements.filter(element => element.contentType !== contentType);

    // Push new version of element - this works even if array is empty
    newState.elements.push(updateContent);

    this.setState(newState);
  }

  handleEditSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/courses/${this.props.match.params.courseId}/pages/${this.props.match.params.pageId}`, this.state)
      .then(() => console.log('the page has been saved'));
    this.props.history.push(`/coursecreation/${this.props.match.params.courseId}/pages/`);
  }

  handleEditCancel = () => {
    this.props.history.push(`/coursecreation/${this.props.match.params.courseId}/pages/`);
  }


  render() {
    return(
      <div>

        <div className="columns">
          <div className="column is-9">
            {this.state.templateNumber &&
              <PagesShow page={this.state}/>}
          </div>
          <div className="column is-3">
            {this.state.templateNumber &&
              <PagesEdit
                page={this.state}
                handleChange={this.handleChange}
                handleContentChange={this.handleContentChange}
                handleEditSubmit={this.handleEditSubmit}
                handleEditCancel={this.handleEditCancel}
              />}

          </div>
        </div>

      </div>
    );
  }
}

export default PageOverview;
