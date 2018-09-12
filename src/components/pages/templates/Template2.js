// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

// TODO: page.elements && page.elements.filter(element => element.contentType === 'title')[0] && ... These checks are necessary for both the creation and study modes to work.

import React from 'react';
import Reveal from 'react-reveal/Reveal';




export default function Template2({page, handleShowSkipModal, handleNext, handlePrevious, handleFinish, handleFinishWithSkip, canProgress, handleGotIt, isFirstPage, isLastPage, skipped, creationMode}) {

  return(
    <section className="t2-section" style={{height: '100%'}}>
      <div style={{height: '95%'}}>



        <div className="columns t2-container">
          <div className="column is-half">
            {/* Main image */}
            <div className="t2-img-container has-text-centered">
              <Reveal effect="fadeIn" duration={500}>
                {page.imageUrl ?
                  <img  className="t2-img" src={page.imageUrl} /> :
                  <div className="t2-img-placeholder" />
                }
              </Reveal>
            </div>

          </div>
          <div className="column is-half">

            <div className="t2-text-container columns is-multiline">
              {/* Text 1 */}

              <div className="t2-text column is-12">
                <Reveal effect="fadeIn" duration={600}>
                  {page.elements && page.elements.filter(element => element.contentType === 'text1')[0] &&
                  page.elements.filter(element => element.contentType === 'text1')[0].content ?
                    <p>
                      {page.elements.filter(element => element.contentType === 'text1')[0].content}
                    </p> :
                    <div>
                      <div className="t1-text-placeholder" style={{ marginRight: 0, width: '90%'}}/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder" style={{ marginLeft: 0, width: '50%'}}/>
                    </div>
                  }
                </Reveal>
              </div>


              {/* Text 2 */}
              <div className="t2-text column is-12">
                <Reveal effect="fadeIn" duration={1300}>
                  {page.elements && page.elements.filter(element => element.contentType === 'text2')[0] &&
                  page.elements.filter(element => element.contentType === 'text2')[0].content ?
                    <p>
                      {page.elements.filter(element => element.contentType === 'text2')[0].content}
                    </p> :
                    <div>
                      <div className="t1-text-placeholder" style={{ marginRight: 0, width: '90%'}}/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder" style={{ marginLeft: 0, width: '50%'}}/>
                    </div>
                  }
                </Reveal>
              </div>

              {/* Text 3 */}
              <div className="t2-text column is-12">
                <Reveal effect="fadeIn" duration={2000}>
                  {page.elements && page.elements.filter(element => element.contentType === 'text3')[0] &&
                  page.elements.filter(element => element.contentType === 'text3')[0].content ?
                    <p>
                      {page.elements.filter(element => element.contentType === 'text3')[0].content}
                    </p> :
                    <div>
                      <div className="t1-text-placeholder" style={{ marginRight: 0, width: '90%'}}/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder"/>
                      <div className="t1-text-placeholder" style={{ marginLeft: 0, width: '50%'}}/>
                    </div>
                  }
                </Reveal>
              </div>
            </div>



          </div>
        </div>

        {/* Buttons */}
        <Reveal effect="fadeIn" duration={500}>
          <div className="template-buttons columns">
            <div className="column is-3 columns">
              <div className="column is-half">
                {/* Previous */}
                {!isFirstPage && <a onClick={handlePrevious} className="button prev" > Previous </a>}
              </div>

              <div className="column is-half">
                {/* Skip */}
                {!isLastPage && !canProgress && <a onClick={handleShowSkipModal} className="button skip"> Skip </a>}
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
