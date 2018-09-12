// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';
import Reveal from 'react-reveal/Reveal';


export default function Template3Edit({page, handleChange, handleContentChange, handleEditSubmit, handleEditCancel}) {
  return(
    <section>
      <div className="template-form">

        <div className="pages-index-title">
          <h2 className="subtitle is-4">Page Edit</h2>
        </div>

        <form onSubmit={handleEditSubmit}>

          <Reveal effect="fadeIn">

            {/* Image Url */}
            <FormField
              handleChange={handleChange}
              label="Video Url"
              label2="Simply copy and paste a URL from Youtube"
              placeholder="E.g. http://..."
              name="videoUrl"
              value={page}
              labelStyle="template-label"
              label2Style="course-new-label2"
              fieldStyle="template-field"
            />

          </Reveal>

          <div className="template-edit-buttons level">

            <Reveal effect="slideFromLeft" duration={1500}>

              <div className="level-left">
                <a onClick={handleEditCancel} className="button">Leave and cancel changes</a>
              </div>
              <div className="level-right">
                <Button buttonClass="" buttonText="Save" />
              </div>

            </Reveal>




          </div>

        </form>



      </div>
    </section>
  );
}
