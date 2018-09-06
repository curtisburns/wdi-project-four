import React from 'react';

export default function FormField(
  { handleChange,
    label,
    label2,
    placeholder,
    name,
    value,
    type 
  }) {
  return(
    <div className='field'>
      <label className='label' htmlFor={name}>{label}</label>
      {label2 && <p className='label'>{label2}</p>}
      <input
        className='input'
        name={name}
        placeholder={placeholder}
        value={value[name] || ''}
        type={type || 'text'}
        onChange={handleChange}/>
    </div>
  );
}
