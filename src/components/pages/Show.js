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
    creation: false
  }

  componentDidMount() {
    if (this.props.page) {
      console.log('This is creation mode');
      this.setState({ creation: true });

    } else {
      console.log(this.props);
      axios.get(`/api/courses/${this.props.courseid}/pages/${this.props.pageId}`)
        .then(res => this.setState(res.data));
      console.log('This is study mode');
    }

  }


  renderTemplate() {
    const templateNumber = this.props.page ? this.props.page.templateNumber : this.props.templateNumber;
    const templateSelector = `Template${templateNumber}`;
    const TemplateComponent = Templates[templateSelector];
    return <TemplateComponent  page={this.props.page || this.state}/>;
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
