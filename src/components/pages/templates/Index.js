// TODO: Need to discuss with Rob how much freedom we have with the URLs on front end
//make this a function and add the funcitonality to the container.
import React from 'react';
import { Link } from 'react-router-dom';

function TemplatesIndex({ templates, courseId, pageId, handleClick }) {
  return(
    <section style={{backgroundColor: 'black'}}>
      <div className="columns is-multiline">
        {templates.map(template =>
          <div className="column is-6" key={template.urlName}>
              <img
                onClick={handleClick}
                src={template.src}
                alt={template.urlName}
                id={template.templateNumber}/>
              <p>{template.urlName}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TemplatesIndex;
