import React from 'react';

// Components
import Button from '../common/Button';
import Reveal from 'react-reveal/Reveal';

export default function SkipModal({ handleSkipCancel, handleSkip }) {
  return(
    <section>
      <div className="background-overlay" onClick={handleSkipCancel}>
      </div>

      <Reveal effect="fadeIn">
        <div className="modal1 course-delete-modal"  style={{height: '280px'}}>
          <h2 className="course-new-title">Are you sure you want to skip?</h2>
          <p className="course-new-label">
          Skipping now will mean that while you may reach the end of the course, you will not have finished it. In order to fully complete the course, you will have to re-enrol and start from the beginning. (Going back to the page you skipped will not change this).
          </p>

          <div className="course-delete-buttons" style={{marginTop: '20px'}}>
            <Button handleClick={handleSkipCancel} buttonText="Cancel" buttonClass="" />

            <Button handleClick={handleSkip} buttonText="Go ahead and Skip" buttonClass="" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
