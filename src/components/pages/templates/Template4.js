// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

// TODO: page.elements && page.elements.filter(element => element.contentType === 'title')[0] && ... These checks are necessary for both the creation and study modes to work.

import React from 'react';
import Reveal from 'react-reveal/Reveal';

function shuffleAnswers() {
  const ansArray = [1, 2, 3, 4];
  for ( let i = 3; i > 0; --i ) {
    const randomIndex = Math.floor(Math.random() * i);
    const temp = ansArray[i];
    ansArray[i] = ansArray[randomIndex];
    ansArray[randomIndex] = temp;
    console.log(ansArray);
    return ansArray;
  }
}

const shuffledAnswers = shuffleAnswers();


export default function Template4({page, handleShowSkipModal, handleNext, handlePrevious, handleFinish, handleFinishWithSkip, canProgress, handleGotIt, isFirstPage, isLastPage, skipped, handleMultipleChoice, creationMode}) {

  const transparent = creationMode ? 'creation-mode' : '';
  return(

    <section className="t1-section" style={{height: '100%'}}>
      <div style={{height: '88%'}}>



        <div className="t4-container">
          <div className="t4-text-container">

            {/* Title */}
            <div className="t4-title-container has-text-centered">
              <Reveal effect="fadeIn" duration={500}>
                {page.elements && page.elements.filter(element => element.contentType === 'title')[0] &&
                page.elements.filter(element => element.contentType === 'title')[0].content ?
                  <h2 className="title is-3">
                    {page.elements.filter(element => element.contentType === 'title')[0].content}
                  </h2> :
                  <div className="t4-title-placeholder"/>
                }
              </Reveal>
            </div>

            {/* Content */}
            <div style={{height: '100px'}}>
              <Reveal effect="fadeIn" duration={500}>
                {page.elements && page.elements.filter(element => element.contentType === 'text')[0] &&
                page.elements.filter(element => element.contentType === 'text')[0].content ?
                  <p>
                    {page.elements.filter(element => element.contentType === 'text')[0].content}
                  </p>
                  :
                  <div>
                    <div className="t4-text-placeholder"/>
                    <div className="t4-text-placeholder"/>
                    <div className="t4-text-placeholder" style={{ marginLeft: 0, width: '50%'}}/>
                  </div>
                }
              </Reveal>
            </div>

            {/* Question */}
            <div style={{marginTop: '40px'}}>
              <Reveal effect="fadeIn" duration={500}>
                {page.elements && page.elements.filter(element => element.contentType === 'question')[0] &&
                page.elements.filter(element => element.contentType === 'question')[0].content ?
                  <p style={{ marginTop: '-10px'}}>
                    {page.elements.filter(element => element.contentType === 'question')[0].content}
                  </p> :
                  <div>
                    <div className="t4-text-placeholder"/>
                    <div className="t4-text-placeholder" style={{ marginLeft: 0, width: '50%'}}/>
                  </div>
                }
              </Reveal>
            </div>
          </div>

          {/* Answers */}
          <div className="columns is-multiline answers-container">

            {/* Answer 1 */}
            <div className="column is-half">
              <div className="t4-answer-box has-text-centered" onClick={handleMultipleChoice} data-ans={`answer${shuffledAnswers[0]}`}>

                {page.elements && page.elements.filter(element => element.contentType === `answer${shuffledAnswers[0]}`)[0] &&
                  page.elements.filter(element => element.contentType === `answer${shuffledAnswers[0]}`)[0].content ?

                  <div data-ans={`answer${shuffledAnswers[0]}`} className="t4-answer">
                    <p data-ans={`answer${shuffledAnswers[0]}`} className={`answer${shuffledAnswers[0]}`} >
                      {page.elements.filter(element => element.contentType === `answer${shuffledAnswers[0]}`)[0].content}
                    </p>
                    {canProgress && `answer${shuffledAnswers[0]}` === 'answer1' && <img src="https://gifimage.net/wp-content/uploads/2018/06/tick-gif.gif"/>}

                  </div>
                  :
                  <div>
                    <div className="t4-answer-placeholder"/>
                  </div>
                }

              </div>
            </div>

            {/* Answer 2 */}
            <div className="column is-half">
              <div className="t4-answer-box has-text-centered" onClick={handleMultipleChoice} data-ans={`answer${shuffledAnswers[1]}`}>

                {page.elements && page.elements.filter(element => element.contentType === `answer${shuffledAnswers[1]}`)[0] &&
                  page.elements.filter(element => element.contentType === `answer${shuffledAnswers[1]}`)[0].content ?

                  <div data-ans={`answer${shuffledAnswers[1]}`} className="t4-answer">
                    <p data-ans={`answer${shuffledAnswers[1]}`}>
                      {page.elements.filter(element => element.contentType === `answer${shuffledAnswers[1]}`)[0].content}
                    </p>
                    {canProgress && `answer${shuffledAnswers[1]}` === 'answer1' && <img src="https://gifimage.net/wp-content/uploads/2018/06/tick-gif.gif"/>}
                  </div>
                  :
                  <div>
                    <div className="t4-answer-placeholder"/>
                  </div>
                }

              </div>
            </div>

            {/* Answer 3 */}
            <div className="column is-half">
              <div className="t4-answer-box has-text-centered" onClick={handleMultipleChoice} data-ans={`answer${shuffledAnswers[2]}`}>

                {page.elements && page.elements.filter(element => element.contentType === `answer${shuffledAnswers[2]}`)[0] &&
                  page.elements.filter(element => element.contentType === `answer${shuffledAnswers[2]}`)[0].content ?

                  <div data-ans={`answer${shuffledAnswers[2]}`} className="t4-answer">
                    <p data-ans={`answer${shuffledAnswers[2]}`}>
                      {page.elements.filter(element => element.contentType === `answer${shuffledAnswers[2]}`)[0].content}
                    </p>
                    {canProgress && `answer${shuffledAnswers[2]}` === 'answer1' && <img src="https://gifimage.net/wp-content/uploads/2018/06/tick-gif.gif"/>}
                  </div>
                  :
                  <div>
                    <div className="t4-answer-placeholder"/>
                  </div>
                }

              </div>
            </div>

            {/* Answer 4 */}
            <div className="column is-half">
              <div className="t4-answer-box has-text-centered" onClick={handleMultipleChoice} data-ans={`answer${shuffledAnswers[3]}`}>

                {page.elements && page.elements.filter(element => element.contentType === `answer${shuffledAnswers[3]}`)[0] &&
                  page.elements.filter(element => element.contentType === `answer${shuffledAnswers[3]}`)[0].content ?

                  <div data-ans={`answer${shuffledAnswers[3]}`} className="t4-answer">
                    <p data-ans={`answer${shuffledAnswers[3]}`}>
                      {page.elements.filter(element => element.contentType === `answer${shuffledAnswers[3]}`)[0].content}
                    </p>
                    {canProgress && `answer${shuffledAnswers[3]}` === 'answer1' && <img src="https://gifimage.net/wp-content/uploads/2018/06/tick-gif.gif"/>}
                  </div>
                  :
                  <div>
                    <div className="t4-answer-placeholder"/>
                  </div>
                }

              </div>
            </div>



          </div>



        </div>

        {/* Buttons */}
        <Reveal effect="fadeIn" duration={500}>
          <div className={`${transparent} template-buttons columns` }>
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
