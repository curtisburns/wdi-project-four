// TODO: add a boolean to determine whether user is learning or creating
// TODO: create form

import React from 'react';
import axios from 'axios';

// Components
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';

const Templates = {
  Template1: Template1,
  Template2: Template2,
  Template3: Template3,
  Template4: Template4,
  Template5: Template5
};


class PagesShow extends React.Component {
  state = {
    creationMode: false
  }

  componentDidMount() {
    if (this.props.page) {
      console.log('This is creation mode');
      this.setState({ creationMode: true });

    } else {
      console.log(this.props);
      axios.get(`/api/courses/${this.props.courseid}/pages/${this.props.pageId}`)
        .then(res => this.setState({ creationMode: false, ...res.data }));
      console.log('This is study mode');
    }

  }

  componentDidUpdate(prevProps){
    if (!this.state.creationMode && this.props !== prevProps) {
      axios.get(`/api/courses/${this.props.courseid}/pages/${this.props.pageId}`)
        .then(res => this.setState(res.data));
    }
  }


  renderTemplate() {
    console.log(this.state);
    const templateNumber = this.props.page ? this.props.page.templateNumber : this.props.templateNumber;
    const templateSelector = `Template${templateNumber}`;
    const TemplateComponent = Templates[templateSelector];
    return <TemplateComponent
      page={this.props.page || this.state}
      handleSkip={this.props.handleSkip}
      handleNext={this.props.handleNext}
      handlePrevious={this.props.handlePrevious}
      handleFinish={this.props.handleFinish}
      handleGotIt={this.props.handleGotIt}
      canProgress={this.props.canProgress}
      isFirstPage={this.props.isFirstPage}
      isLastPage={this.props.isLastPage}
      creationMode={this.state.creationMode}
    />;
  }

  render() {

    return(
      <section>

        {/* Template selected as specified in page data */}
        {this.renderTemplate()}

      </section>

    );
  }

}

export default PagesShow;
