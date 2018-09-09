import React from 'react';

// Components
import Button from '../common/Button';

export default function SkipModal({ handleSkipCancel, handleSkip }) {
  return(
    <section>
      <div className="background-overlay" onClick={handleSkipCancel}>
      </div>
      <div className="modal1">
        <h2 className="title is-3">Are you sure you want to skip?</h2>
        <p>
          Skipping now will mean that while you may reach the end of the course, you will not have finished it. In order to fully complete the course, you will have to re-enrol and start from the beginning. (Going back to the page you skipped will not change this).
        </p>

        <Button handleClick={handleSkipCancel} buttonText="Cancel" buttonClass="" />

        <Button handleClick={handleSkip} buttonText="Go ahead and Skip" buttonClass="" />

      </div>
    </section>
  );
}
