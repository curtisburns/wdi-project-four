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

  handleNext = () => {
    const nextPage = this.state.pageNumber+1;
    this.setState({ pageNumber: nextPage, canProgress: false });
    this.props.history.push(`/course/${this.props.match.params.courseId}/page/${this.state.pages[nextPage]._id}`);
  }

  handlePrevious = () => {
    const previousPage = this.state.pageNumber-1;
    this.setState({ pageNumber: previousPage, canProgess: false });
    this.props.history.push(`/course/${this.props.match.params.courseId}/page/${this.state.pages[previousPage]._id}`);
  }


  render() {
    console.log('Can progress', this.state.canProgress);
    console.log('PageNumber', this.state.pageNumber);

    const pageNumber = this.state.pageNumber;
    const isFirstPage = this.state.pageNumber === 0;
    const isLastPage = this.state.pages && pageNumber === (this.state.pages.length-1);
    console.log('isLastPage', isLastPage);
    return(
      <div>
        {this.state.pages &&
              <PagesShow
                templateNumber={this.state.pages[pageNumber].templateNumber}
                courseId={this.props.match.params.courseId}
                pageId={this.props.match.params.pageId}
                handleSkip={this.handleSkip}
                handleNext={this.handleNext}
                handlePrevious={this.handlePrevious}
                handleFinish={this.handleFinish}
                handleGotIt={this.handleGotIt}
                canProgress={this.state.canProgress}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
              />
        }
      </div>
    );
  }
}

export default PageContainer;
