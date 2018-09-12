// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';
import Reveal from 'react-reveal/Reveal';


export default function Template2Edit({page, handleChange, handleContentChange, handleEditSubmit, handleEditCancel}) {
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
              label="Image Url"
              label2=""
              placeholder="E.g. http://..."
              name="imageUrl"
              value={page}
              labelStyle="template-label"
              fieldStyle="template-field"
            />

            {/* Text1 */}
            <div className="field">
              <label className="label template-label" htmlFor="text1">Paragraph 1</label>
              <textarea className="text-body-field2"
                value={page.elements.filter(element =>
                  element.contentType === 'text1')[0] ? page.elements.filter(element =>
                    element.contentType === 'text1')[0].content : ''}
                name='text1'
                data-type="text1"
                onChange={handleContentChange}/>
            </div>

            {/* Text2 */}
            <div className="field">
              <label className="label template-label" htmlFor="text2">Paragraph 2</label>
              <textarea className="text-body-field2"
                value={page.elements.filter(element =>
                  element.contentType === 'text2')[0] ? page.elements.filter(element =>
                    element.contentType === 'text2')[0].content : ''}
                name='text2'
                data-type="text2"
                onChange={handleContentChange}/>
            </div>

            {/* Text3 */}
            <div className="field">
              <label className="label template-label" htmlFor="text3">Paragraph 3</label>
              <textarea className="text-body-field2"
                value={page.elements.filter(element =>
                  element.contentType === 'text3')[0] ? page.elements.filter(element =>
                    element.contentType === 'text3')[0].content : ''}
                name='text3'
                data-type="text3"
                onChange={handleContentChange}/>
            </div>

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
