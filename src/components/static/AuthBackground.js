import React from 'react';
import Footer from '../common/Footer';

// Components

export default function AuthBackground () {
  return(
    <div>

      <section className="auth-background">
        <div className="columns is-mobile">
          <div className="column is-half has-text-centered">
            <h2 className="auth-title">Courses for the people, by the people</h2>
            <img className="auth-image front-of-footer" src='/assets/images/e-learning.png' />
          </div>
          <div className="column is-half">
            {/* Form is here */}
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}
