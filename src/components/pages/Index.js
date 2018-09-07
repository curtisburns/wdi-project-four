import React from 'react';
import axios from 'axios';

class PageIndex extends React.Component {
  state = {}
  
  componentDidMount() {
    axios.get(`/api/courses/${this.props.courseId}/pages`)
      .then(res => {
        this.setState({ pages: res.data });
      });
  }

  render() {
    return(
      <section className="page-index">
        This is the page index. Need to make the axios request and render all pages to do with this particular course.
        <div className="columns is-multiline">
          {this.state.pages && this.state.pages.map(page =>
            <div className="column is-12" key={page._id}>
              <p> {page.templateNumber} this is a page, need to decide on what information to display here.</p>
            </div>
          )}
        </div>

      </section>
    );
  }
}

export default PageIndex;
