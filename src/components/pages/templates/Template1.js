// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

import React from 'react';

export default function Template1({page}) {
  return(
    <div>
      <p>this is template {page.templateNumber}</p>
      <p>Page one</p>
    </div>  );
}
