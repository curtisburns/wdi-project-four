// TODO: Change image url to upload on click upload
// TODO: Need to style textbox


import React from 'react';

// Components
import FormField from '../../common/FormField';
import Button from '../../common/Button';
import Reveal from 'react-reveal/Reveal';


export default function Template4Edit({page, handleContentChange, handleEditSubmit, handleEditCancel}) {
  return(
    <section>
      <div className="template-form">

        <div className="pages-index-title">
          <h2 className="subtitle is-4">Page Edit</h2>
        </div>

        <form style={{paddingBottom: '30px'}} onSubmit={handleEditSubmit}>

          <Reveal effect="fadeIn">

            {/* Title */}
            <FormField
              handleChange={handleContentChange}
              label="Title"
              label2=""
              dataType="title"
              name="content"
              value={page.elements.filter(element =>
                element.contentType === 'title')[0]}
              labelStyle="template-label"
              fieldStyle="template-field"
            />

            {/* Text */}
            <div className="field">
              <label className="label template-label" htmlFor="text">Text</label>
              <textarea className="text-body-field2"
                value={page.elements.filter(element =>
                  element.contentType === 'text')[0] ? page.elements.filter(element =>
                    element.contentType === 'text')[0].content : ''}
                name='text'
                data-type="text"
                onChange={handleContentChange}/>
            </div>

            {/* Question */}
            <div className="field">
              <label className="label template-label" htmlFor="question">Question</label>
              <textarea className="text-body-field2"
                value={page.elements.filter(element =>
                  element.contentType === 'question')[0] ? page.elements.filter(element =>
                    element.contentType === 'question')[0].content : ''}
                name='question'
                data-type="question"
                onChange={handleContentChange}/>
            </div>

            <p>These will be shuffled for students</p>

            {/* Correct Answer */}
            <FormField
              handleChange={handleContentChange}
              label="Correct Answer"
              dataType="answer1"
              name="content"
              value={page.elements.filter(element =>
                element.contentType === 'answer1')[0]}
              labelStyle="template-label"
              fieldStyle="template-field"
            />

            {/* Option 2 */}
            <FormField
              handleChange={handleContentChange}
              label="Option 2"
              label2=""
              dataType="answer2"
              name="content"
              value={page.elements.filter(element =>
                element.contentType === 'answer2')[0]}
              labelStyle="template-label"
              fieldStyle="template-field"
            />

            {/* Option 3 */}
            <FormField
              handleChange={handleContentChange}
              label="Option 3"
              label2=""
              dataType="answer3"
              name="content"
              value={page.elements.filter(element =>
                element.contentType === 'answer3')[0]}
              labelStyle="template-label"
              fieldStyle="template-field"
            />

            {/* Option 4 */}
            <FormField
              handleChange={handleContentChange}
              label="Option 4"
              label2=""
              dataType="answer4"
              name="content"
              value={page.elements.filter(element =>
                element.contentType === 'answer4')[0]}
              labelStyle="template-label"
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
