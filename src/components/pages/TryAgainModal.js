import React from 'react';

// Components
import Button from '../common/Button';

export default function TryAgainModal({ handleTryAgain }) {
  return(
    <section>
      <div className="background-overlay" onClick={handleTryAgain}>
      </div>
      <div className="modal1">
        <h2 className="title is-3">Try again</h2>
        <p>
          Go on, you can do it! Keep going until you get it right.
        </p>
        <Button handleClick={handleTryAgain} buttonText="Try again" buttonClass="" />

      </div>
    </section>
  );
}
