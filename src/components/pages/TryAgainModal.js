import React from 'react';

// Components
import Button from '../common/Button';
import Reveal from 'react-reveal/Reveal';

export default function TryAgainModal({ handleTryAgain }) {
  return(
    <section>
      <div className="background-overlay" onClick={handleTryAgain}>
      </div>
      <Reveal effect="fadeIn">
        <div className="modal1 course-delete-modal"  style={{height: '200px'}}>
          <h2 className="course-new-title">Try again</h2>
          <p className="course-new-label">
            Go on, you can do it! Keep going until you get it right.
          </p>

          <div className="course-delete-buttons" style={{marginTop: '20px'}}>
            <Button handleClick={handleTryAgain} buttonText="Try again" buttonClass="" />

          </div>
        </div>
      </Reveal>
    </section>
  );
}
