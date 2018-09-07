import React from 'react';

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
    componentString: `Template${this.props.page.templateNumber}`
  }


  renderTemplate() {
    const TemplateComponent = Templates[this.state.componentString];
    return <TemplateComponent page={this.props.page}/>;
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
