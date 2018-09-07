// TODO: Need to discuss with Rob how much freedom we have with the URLs on front end
import React from 'react';
import { Link } from 'react-router-dom';

class TemplatesIndex extends React.Component {
  render() {
    const templateThumbnails = [
      {src: '', urlName: 'page-template-1'},
      {src: '', urlName: 'page-template-2'},
      {src: '', urlName: 'page-template-3'},
      {src: '', urlName: 'page-template-4'},
      {src: '', urlName: 'page-template-5'}
    ];

    return(
      <section>
        <div className="columns">

        </div>
        {templateThumbnails.map(thumbnail =>
          <Link to={`/coursecreation/pages/${thumbnail.urlName}`} key={thumbnail.urlName}>
            <img src={thumbnail.src} />
          </Link>
        )}
      </section>
    );
  }
}

export default TemplatesIndex;
