// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';
import Reveal from 'react-reveal/Reveal';


export default function Template1Edit({page, handleChange, handleContentChange, handleEditSubmit, handleEditCancel}) {
  return(
    <section>
      <div className="template-form">

        <div className="pages-index-title">
          <h2 className="subtitle is-4">Page Edit</h2>
        </div>

        <form onSubmit={handleEditSubmit}>

          {/* Image Url */}
          <FormField
            handleChange={handleChange}
            label="Image Url"
            label2=""
            placeholder="E.g. http://..."
            name="imageUrl"
            value={page}
            labelStyle="register-label"
            fieldStyle="register-field"
          />

          {/* Title */}
          <FormField
            handleChange={handleContentChange}
            label="Title"
            label2=""
            dataType="title"
            name="content"
            value={page.elements.filter(element =>
              element.contentType === 'title')[0]}
            labelStyle="register-label"
            fieldStyle="register-field"
          />

          {/* Text */}
          <div className="field">
            <label className="label register-label" htmlFor="text">Body</label>
            <textarea className="text-body-field"
              value={page.elements.filter(element =>
                element.contentType === 'text')[0] ? page.elements.filter(element =>
                  element.contentType === 'text')[0].content : ''}
              name='text'
              data-type="text"
              onChange={handleContentChange}/>
          </div>

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
