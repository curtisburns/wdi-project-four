import React from 'react';

export default function FilterSidebar({ options, handleChange, toggleSidebar, sidebarActive }) {

  const allTrue = options.every(option => option.active === true);
  const active = sidebarActive ? 'filter-side-bar-active' : '';

  return(
    <aside className={`filter-sidebar ${active}`}>
      <div className="side-bar-tab" onClick={toggleSidebar}>
        <img src="/assets/images/icon_right_rounded-512.png" />
      </div>
      <div className="wrapper">



        <div className='field'>
          <h2>Subjects</h2>
          <hr />
          <input
            onChange={ handleChange }
            type='checkbox'
            name='all'
            checked={allTrue}
          />
          <label
            className="checkbox"
            htmlFor='all' >All</label>
        </div>
        {options && options.map((option, i) =>
          <div key={i} className='field'>

            <input
              onChange={ handleChange }
              type='checkbox'
              checked={option.active}
              name={option.value}/>
            <label
              className="checkbox"
              htmlFor={ option.value }>{option.label}</label>
          </div>
        )}
      </div>
    </aside>
  );
}
