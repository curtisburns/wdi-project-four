// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

import React from 'react';



export default function Template3({page, handleShowSkipModal, handleNext, handlePrevious, handleFinish, handleFinishWithSkip, canProgress, handleGotIt, isFirstPage, isLastPage, skipped, creationMode}) {
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

        {/* Buttons */}
        <div>
          <div>
            {/* Previous */}
            {!isFirstPage && <a onClick={handlePrevious}> Previous </a>}
          </div>

          <div>
            {/* Skip */}
            {!isLastPage && !canProgress && <a onClick={handleShowSkipModal}> Skip </a>}
          </div>

          <div>
            {/* Got it */}
            {!canProgress && <a onClick={handleGotIt}> Got it! </a>}

            {/* Next */}
            {!isLastPage && canProgress && <a onClick={handleNext}> Next </a>}
            {/* Finish */}
            {isLastPage && canProgress && !skipped && <a onClick={handleFinish}> Finish </a>}
            {isLastPage && canProgress && skipped && <a onClick={handleFinishWithSkip}> Finish </a>}
          </div>
        </div>

      </div>
    </section>
  );
}
