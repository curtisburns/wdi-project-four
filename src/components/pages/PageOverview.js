// TODO: Create templates then render them as necessary

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';
import PagesEdit from './Edit';

class PageOverview extends React.Component {
  state = {}

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}/pages/${this.props.match.params.pageId}`)
      .then(res => this.setState(res.data));
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
              <PagesEdit page={this.state}/>}
          </div>
        </div>
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
        This is thepages overview
      </div>
    );
  }
}

export default PageOverview;
