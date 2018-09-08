// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

// TODO: page.elements && page.elements.filter(element => element.contentType === 'title')[0] && ... These checks are necessary for both the creation and study modes to work.

import React from 'react';



export default function Template1({page}) {
  return(
    <section className="t1-section">
      <div>

        {/* Main image */}
        <div className="t1-img-container has-text-centered">
          {page.imageUrl ?
            <img  className="t1-img" src={page.imageUrl} /> :
            <div className="t1-img t1-img-placeholder" />
          }
        </div>

        <div className="t1-text-container">

          {/* Title */}
          <div>
            {page.elements && page.elements.filter(element => element.contentType === 'title')[0] &&
            page.elements.filter(element => element.contentType === 'title')[0].content ?
              <h2 className="title is-3">
                {page.elements.filter(element => element.contentType === 'title')[0].content}
              </h2> :
              <div className="t1-title-placeholder"/>
            }
          </div>

          {/* Content */}
          <div>
            {page.elements && page.elements.filter(element => element.contentType === 'text')[0] &&
            page.elements.filter(element => element.contentType === 'text')[0].content ?
              <p>
                {page.elements.filter(element => element.contentType === 'text')[0].content}
              </p> :
              <div>
                <div className="t1-text-placeholder"/>
                <div className="t1-text-placeholder"/>
                <div className="t1-text-placeholder"/>
              </div>
            }
          </div>

        </div>


      </div>
    </section>
  );
}
