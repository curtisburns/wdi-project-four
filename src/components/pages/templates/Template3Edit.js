// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';

export default function Template3Edit({page, handleChange, handleEditSubmit, handleEditCancel}) {
  return(
    <section>
      <div className="template-form-container">

        <div className="template-form-title">
          <h2 className="subtitle is-4">Page Edit</h2>
        </div>

        <form onSubmit={handleEditSubmit}>

          {/* Video Url */}
          <FormField
            handleChange={handleChange}
            label="Video Url"
            label2=""
            placeholder="E.g. https://www.youtube.com/embed/tgbN...."
            name="videoUrl"
            value={page}
            fieldStyle=""
          />

          <Button buttonClass="" buttonText="Save" />
          <a onClick={handleEditCancel} className="button">Leave and cancel changes</a>

        </form>



      </div>
    </section>
  );
}
