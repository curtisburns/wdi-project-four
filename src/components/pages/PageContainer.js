// TODO: Need to refactor for if a user wants to resume course/not page zero

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';

class PageContainer extends React.Component {
  state = {
    pageNumber: 0,
    canProgress: false
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}`)
      .then(res => this.setState(res.data));
  }

  handleGotIt = () => {
    this.setState({ canProgress: true });
  }


  render() {
    console.log('hey', this.state.canProgress);

    const pageNumber = this.state.pageNumber;
    const lastPage = this.state.pages && pageNumber === (this.state.pages.length-1);
    return(
      <div>
        {this.state.pages &&
              <PagesShow
                templateNumber={this.state.pages[pageNumber].templateNumber}
                courseId={this.props.match.params.courseId}
                pageId={this.props.match.params.pageId}
                handleSkip={!lastPage && this.handleSkip}
                handleNext={!lastPage && this.handleNext}
                handlePrevious={pageNumber && this.handlePrevious}
                handleFinish={lastPage ? this.handleFinish : null }
                handleGotIt={this.handleGotIt}
                canProgress={this.state.canProgress}
              />
        }
      </div>
    );
  }
}

export default PageContainer;
