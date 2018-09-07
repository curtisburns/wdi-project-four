// TODO: Make this dynamic
import React from 'react';
// Components
import Template1Edit from './templates/Template1Edit';
import Template2Edit from './templates/Template2Edit';
import Template3Edit from './templates/Template3Edit';
import Template4Edit from './templates/Template4Edit';
import Template5Edit from './templates/Template5Edit';


const TemplatesEdit = {
  Template1Edit: Template1Edit,
  Template2Edit: Template2Edit,
  Template3Edit: Template3Edit,
  Template4Edit: Template4Edit,
  Template5Edit: Template5Edit
};

class PagesEdit extends React.Component {
  state = {
    componentString: `Template${this.props.page.templateNumber}Edit`
  }

  renderTemplateForm() {
    const TemplatesEditComponent = TemplatesEdit[this.state.componentString];
    return <TemplatesEditComponent page={this.props.page}/>;
  }

  render() {
    return(
      <section>
        {this.renderTemplateForm()}
        this is the form
      </section>
    );
  }
}

export default PagesEdit;
