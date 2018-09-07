import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Components
import Button from '../common/Button';

//Lib
import Auth from '../../lib/Auth';

class PageIndex extends React.Component {
  state = {
    selectedPageId: null,
    pages: []
  }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.courseId}/pages`)
      .then(res => {
        this.setState({ pages: res.data });
      });
  }

  assignCardClick = (pageId) => {
    return () => {
      this.setState({ selectedPageId: pageId});
    };
  }

  handleDelete = () => {
    axios.delete(`/api/courses/${this.props.courseId}/pages/${this.state.selectedPageId}`, Auth.bearerHeader())
      .then(() => axios.get(`/api/courses/${this.props.courseId}/pages`))
      .then(res => this.setState({ pages: res.data, selectedPageId: null }));
  }

  render() {
    console.log('state iiiiiiis',this.state.pages);
    console.log(this.props);
    return(
      <section>
        <div className="page-index-title">
          <h2 className="subtitle is-4">Pages</h2>
        </div>
        <div className="columns is-mobile is-multiline page-index">
          {this.state.pages && this.state.pages.map(page =>
            <div onClick={this.assignCardClick(page._id)} key={page._id} className="column is-12 page-index-card card" id={page._id}>
              <p> {page.templateNumber} this is a page, need to decide on what information to display here.</p>
            </div>
          )}
        </div>
        <div className="" style={{position: 'fixed',bottom: 0, marginLeft: '-24px', background: 'black', height: 100, width: '100%'}}>

          {this.state.selectedPageId && <Link className="button" to={`/coursecreation/${this.props.courseId}/editpage/${this.state.selectedPageId}`}> Edit </Link>}

          {this.state.selectedPageId && <Button handleClick={this.handleDelete} buttonClass="" buttonText="Delete" />}

          {this.state.pages.length !== 0 && <Link to={`/coursecreation/${this.props.courseId}/pages/finish`}>Complete</Link>}




        </div>
      </section>
    );
  }
}

export default PageIndex;
