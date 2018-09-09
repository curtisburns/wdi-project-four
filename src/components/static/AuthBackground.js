import React from 'react';

// Components

export default function AuthBackground () {
  return(
    <section className="auth-background">
      <div className="columns is-mobile">
        <div className="column is-half has-text-centered">
          <h2 className="auth-title">Courses for the people, by the people</h2>
          <img className="auth-image" src='/assets/images/e-learning.png' />
        </div>
        <div className="column is-half">
        {/* Form is here */}
        </div>
      </div>
    </section>
  );
}
