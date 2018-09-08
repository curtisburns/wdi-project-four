// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';

export default function Template1Edit({page, handleChange, handleContentChange, handleEditSubmit, handleEditCancel}) {
  return(
    <section>
      <div className="template-form-container">

        <div className="template-form-title">
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
            fieldStyle=""
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
            fieldStyle=""
          />

          {/* Text */}
          <div className="field">
            <label className="label" htmlFor="text">Body</label>
            <textarea
              value={page.elements.filter(element =>
                element.contentType === 'text')[0] ? page.elements.filter(element =>
                  element.contentType === 'text')[0].content : ''}
              name='text'
              data-type="text"
              onChange={handleContentChange}/>
          </div>

          <Button buttonClass="" buttonText="Save" />
          <a onClick={handleEditCancel} className="button">Leave and cancel changes</a>

        </form>



      </div>
    </section>
  );
}
