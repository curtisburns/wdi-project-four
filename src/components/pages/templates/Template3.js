// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

import React from 'react';



export default function Template3({page}) {
  return(
    <section className="t3-section">
      <div>

        {/* Main Video */}
        <div className="t3-video-container">
          <div className="iframe-container">
            {page.videoUrl ?
              <iframe
                src={page.videoUrl.replace('watch?v=', 'embed/')}>
              </iframe> :
              <div className="t3-video t3-video-placeholder" />
            }
          </div>
        </div>

      </div>
    </section>
  );
}
