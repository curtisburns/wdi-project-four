// TODO: Create templates then render them as necessary

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';

class PageOverview extends React.Component {
  state = {}

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}/pages/${this.props.match.params.pageId}`)
      .then(res => this.setState(res.data));
  }

  render() {
    return(
      <div>
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        {this.state.templateNumber &&
          <PagesShow page={this.state}/>}
      </div>
    );
  }
}

export default PageOverview;
