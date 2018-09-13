// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

import React from 'react';
import Reveal from 'react-reveal/Reveal';


export default function Template3({page, handleNext, handlePrevious, handleFinish, handleFinishWithSkip, canProgress, handleGotIt, isFirstPage, isLastPage, skipped, creationMode}) {
  const transparent = creationMode ? 'creation-mode' : '';
  return(
    <section className="t3-section" style={{height: '100%'}}>
      <div style={{height: '95%'}}>

        {/* Main Video */}
        <div className="t3-video-container">
          <Reveal effect="fadeIn" duration={500}>
            <div className="iframe-container">
              {page.videoUrl ?
                <iframe
                  src={page.videoUrl.replace('watch?v=', 'embed/')}>
                </iframe> :
                <div className="t3-video t3-video-placeholder" />
              }
            </div>
          </Reveal>
        </div>

        {/* Buttons */}
        <Reveal effect="fadeIn" duration={500}>
          <div className={`${transparent} template-buttons columns` }>
            <div className="column is-3 columns">

              <div className="column is-half">
                {/* Previous */}
                {!isFirstPage && <a onClick={handlePrevious} className="button prev" > Previous </a>}
              </div>

            </div>


            <div className="column is-1 is-offset-8">
              {/* Got it */}
              {!canProgress && <a onClick={handleGotIt} className="button"> Got it! </a>}

              {/* Next */}
              {!isLastPage && canProgress && <a onClick={handleNext} className="button"> Next </a>}
              {/* Finish */}
              {isLastPage && canProgress && !skipped && <a onClick={handleFinish} className="button"> Finish </a>}
              {isLastPage && canProgress && skipped && <a onClick={handleFinishWithSkip} className="button"> Finish </a>}
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
