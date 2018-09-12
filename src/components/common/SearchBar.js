import React from 'react';
function SearchBar({ handleChange, searchTerm }) {
  return(
    <section>
      <div className="field">
        <input name="searchTerm"
          className="input"
          onChange={handleChange}
          value={searchTerm || ''}
          placeholder="What would you like to learn today?"
        ></input>
      </div>
    </section>
  );
}

export default SearchBar;
