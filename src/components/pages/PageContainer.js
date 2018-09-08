// TODO: Need to refactor for if a user wants to resume course/not page zero

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';

class PageContainer extends React.Component {
  state = {
    pageNumber: 0
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}`)
      .then(res => this.setState(res.data));
  }


  render() {
    const pageNumber = this.state.pageNumber;
    // console.log(pageNumber);
    // console.log('pages are',this.state.pages);
    return(
      <div>
        {this.state.pages &&
              <PagesShow templateNumber={this.state.pages[pageNumber].templateNumber} courseId={this.props.match.params.courseId} pageId={this.props.match.params.pageId} />}
      </div>
    );
  }
}

export default PageContainer;
