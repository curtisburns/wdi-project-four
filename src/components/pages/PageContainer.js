// TODO: Need to refactor for if a user wants to resume course/not page zero

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';
import SkipModal from './SkipModal';

class PageContainer extends React.Component {
  state = {
    pageNumber: 0,
    canProgress: false,
    skipped: false,
    showSkipModal: false
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
    this.setState({ pageNumber: previousPage, canProgress: false });
    this.props.history.push(`/course/${this.props.match.params.courseId}/page/${this.state.pages[previousPage]._id}`);
  }

  handleShowSkipModal = () => {
    this.setState({ showSkipModal: true });
  }

  handleSkipCancel = () => {
    this.setState({ showSkipModal: false });
  }

  handleSkip = () => {
    this.setState({ skipped: true, showSkipModal: false });
    this.handleNext();
  }

  handleFinishWithSkip = () => {
    console.log('Finished but skipped!');
    this.props.history.push(`/course/${this.props.match.params.courseId}/_completed`);
  }
  handleFinish = () => {
    console.log('Finish!');
    this.props.history.push(`/course/${this.props.match.params.courseId}/completed`);
  }


  render() {
    const pageNumber = this.state.pageNumber;
    const isFirstPage = this.state.pageNumber === 0;
    const isLastPage = this.state.pages && pageNumber === (this.state.pages.length-1);
    return(
      <div>
        {this.state.showSkipModal &&
          <SkipModal
            handleSkipCancel={this.handleSkipCancel}
            handleSkip={this.handleSkip}
          />}

        {this.state.pages &&
              <PagesShow
                templateNumber={this.state.pages[pageNumber].templateNumber}
                courseId={this.props.match.params.courseId}
                pageId={this.props.match.params.pageId}
                handleShowSkipModal={this.handleShowSkipModal}
                handleNext={this.handleNext}
                handlePrevious={this.handlePrevious}
                handleFinish={this.handleFinish}
                handleFinishWithSkip={this.handleFinishWithSkip}
                handleGotIt={this.handleGotIt}
                canProgress={this.state.canProgress}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
                skipped={this.state.skipped}
              />
        }
      </div>
    );
  }
}

export default PageContainer;
