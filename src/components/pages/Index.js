import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Components
import Button from '../common/Button';
import Reveal from 'react-reveal/Reveal';

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
    return(
      <section className="pages-index">

        {/* Title */}
        <div className="pages-index-title">
          <h2 className="subtitle is-4">Pages</h2>
        </div>

        {/* Created pages */}
        <div className="columns is-mobile is-multiline pages-index-container">
          {this.state.pages && this.state.pages.map(page =>
            <Reveal effect="fadeIn" key={page._id}>
              <div onClick={this.assignCardClick(page._id)}  className="column is-12 pages-index-card" id={page._id}>
                <p> {page.templateNumber} this is a page, need to decide on what information to display here.</p>
              </div>
            </Reveal>
          )}
        </div>

        {/* Pages Index Buttons */}
        <div className="pages-index-buttons columns is-mobile">
            <Reveal effect="fadeIn">
          <div className="column is-2">
            {this.state.selectedPageId && <Link className="button" to={`/coursecreation/${this.props.courseId}/editpage/${this.state.selectedPageId}`}><i className="far fa-edit"></i></Link>}

          </div>

          <div className="column is-2">
            {this.state.selectedPageId && <button onClick={this.handleDelete} className="button">
              <i className="far fa-trash-alt"></i>
            </button>}
          </div>

          <div className="column is-2">
          </div>

          <div className="column is-3">
            {this.state.pages.length !== 0 && <Link className="button" to={`/coursecreation/${this.props.courseId}/pages/finish`}>Finish</Link>}
          </div>

          <div className="column is-3">
            <Link to={`/coursecreation/${this.props.courseId}/pages/quitcreation`} className="button">Quit</Link>
          </div>
        </Reveal>

        </div>
      </section>
    );
  }
}

export default PageIndex;
