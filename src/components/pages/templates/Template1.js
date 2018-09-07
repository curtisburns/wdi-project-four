// TODO: Need to add conditional formatting to disable functionality in the show
// component. Maybe trigger it based on the url..?

import React from 'react';

export default function Template1({page}) {
  return(
    <div>
      {page.imageUrl ?
        <img src={page.imageUrl} /> :
        <div style={{ height: 300, width: 300, background: 'grey'}}>
        </div>
      }

      <p>this is template {page.templateNumber}</p>
      <p>Page four</p>
    </div>
  );
}
