// TODO: Need to refactor for if a user wants to resume course/not page zero

import React from 'react';
import axios from 'axios';

// Components
import PagesShow from './Show';
import SkipModal from './SkipModal';
import TryAgainModal from './TryAgainModal';

// Lib
import Auth from '../../lib/Auth';

class PageContainer extends React.Component {
  state = {
    pageNumber: 0,
    canProgress: false,
    skipped: false,
    showSkipModal: false,
    showTryAgain: false
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.courseId}`, Auth.bearerHeader())
      .then(res => this.setState(res.data));
  }

  // Choice sometimes comes back as null??? Why?

  handleMultipleChoice = ({ target }) => {
    const choice = target.getAttribute('data-ans');
    if(choice === null) {
      return;
    } else if (choice === 'answer1') {
      this.setState({canProgress: true});
    } else {
      this.setState({ showTryAgain: true });
    }
  }

  handleTryAgain = () => {
    this.setState({ showTryAgain: false });
  }


  handleGotIt = () => {
    this.setState({ canProgress: true });
  }

  handleNext = () => {
    const user = Auth.getUserInfo();
    const nextPage = this.state.pageNumber+1;
    user.currentPage = this.state.pages[nextPage]._id;
    console.log('user is', user);
    axios.put(`/api/users/${Auth.currentUserId()}`, user, Auth.bearerHeader())
      .then(res => Auth.setUserInfo(res.data));
    this.setState({ pageNumber: nextPage, canProgress: false });
    this.props.history.push(`/course/${this.props.match.params.courseId}/page/${this.state.pages[nextPage]._id}`);
  }

  handlePrevious = () => {
    const user = Auth.getUserInfo();
    const previousPage = this.state.pageNumber-1;
    user.currentPage = this.state.pages[previousPage]._id;
    axios.put(`/api/users/${Auth.currentUserId()}`, user, Auth.bearerHeader())
      .then(res => Auth.setUserInfo(res.data));

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
    const user = Auth.getUserInfo();
    const courseId = this.props.match.params.courseId;
    user.currentCourse = null;
    user.currentPage = null;
    axios.put(`/api/users/${Auth.currentUserId()}`, user, Auth.bearerHeader())
      .then(res => console.log(res.data));
    this.props.history.push(`/course/${courseId}/_completed`);
  }

  handleFinish = () => {
    const user = Auth.getUserInfo();
    const courseId = this.props.match.params.courseId;

    // Avoid/remove duplicates
    user.coursesCompleted = user.coursesCompleted.filter(completedCourse => completedCourse.toString() !== courseId);

    // Set to local storage and update user via api
    user.coursesCompleted.push(courseId);
    user.currentCourse = null;
    user.currentPage = null;
    Auth.setUserInfo(user);

    axios.put(`/api/users/${Auth.currentUserId()}`, user, Auth.bearerHeader())
      .then(res => console.log(res.data));
    this.props.history.push(`/course/${courseId}/completed`);

    //Add user to completedCourse

    const newState = this.state;
    if(!newState.completedCourse.some(user => user.toString() === user._id)) {
      newState.completedCourse.push(user._id);
      axios.put(`/api/courses/${courseId}`, newState, Auth.bearerHeader())
        .then(res => this.setState(res.data));
      this.setState(newState);
      console.log(this.state);
    }
  }


  render() {
    console.log(this.state);
    const pageNumber = this.state.pageNumber;
    const isFirstPage = this.state.pageNumber === 0;
    const isLastPage = this.state.pages && pageNumber === (this.state.pages.length-1);
    return(
      <div style={{height: '100%'}}>
        {this.state.showSkipModal &&
          <SkipModal
            handleSkipCancel={this.handleSkipCancel}
            handleSkip={this.handleSkip}
          />}

        {this.state.showTryAgain &&
          <TryAgainModal
            handleTryAgain={this.handleTryAgain}
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
                handleMultipleChoice={this.handleMultipleChoice}
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
