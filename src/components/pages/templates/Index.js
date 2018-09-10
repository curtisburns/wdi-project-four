import React from 'react';



function TemplatesIndex({ templates, handleClick }) {
  return(
    <section className="templates-index">
      <div className="has-text-centered template-title">
        <h2>Templates</h2>
      </div>
      <div className="columns is-multiline">
        {templates.map(template =>
          <div className="column is-4" key={template.urlName}>
            <img
              onClick={handleClick}
              src={template.src}
              alt={template.urlName}
              id={template.templateNumber}/>
          </div>
        )}
      </div>
    </section>
  );
}

export default TemplatesIndex;
