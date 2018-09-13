import React from 'react';
import axios from 'axios';

// Components
import PagesIndex from './Index.js';
import TemplatesIndex from './templates/Index.js';

// Lib
import Auth from '../../lib/Auth';


class CourseOverview extends React.Component {
  state = {
    templates: [
      {src: '/assets/templateImages/TemplateImg1.png', urlName: 'page-template-1', templateNumber: 1},
      {src: '/assets/templateImages/TemplateImg2.png', urlName: 'page-template-2', templateNumber: 2},
      {src: '/assets/templateImages/TemplateImg3.png', urlName: 'page-template-3', templateNumber: 3},
      {src: '/assets/templateImages/TemplateImg4.png', urlName: 'page-template-4', templateNumber: 4},
      {src: '/assets/templateImages/TemplateImg5.png', urlName: 'page-template-5', templateNumber: 5}
    ]
  }

  // Sets up new page with template number
  handleClick = ({ target: { id } }) => {
    const newPage = { templateNumber: id };
    console.log('the event is', id);
    axios.post(`/api/courses/${this.props.match.params.courseId}/pages`, newPage, Auth.bearerHeader())
      .then(res => {
        console.log(`A new page has been created with template ${res.data.templateNumber}`);
        this.setState({ pageId: res.data._id});
        this.props.match.url.includes('edit') ?
          this.props.history.push(`/coursecreation/${this.props.match.params.courseId}/editpage/${this.state.pageId}`):
          this.props.history.push(`/coursecreation/${this.props.match.params.courseId}/page/${this.state.pageId}`);
      });
  }

  render() {
    console.log('hey',this.props.match.url);
    const editMode = this.props.match.url.includes('edit');
    return(
      <section>
        <div className="columns">
          <div className="column is-9">
            <TemplatesIndex
              templates={this.state.templates}
              handleClick={this.handleClick}/>
          </div>
          <div className="column is-3 pages-index-column">
            <PagesIndex editMode={editMode} courseId={this.props.match.params.courseId}/>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseOverview;
