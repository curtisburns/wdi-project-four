import React from 'react';

export default function FormField(
  { handleChange,
    label,
    label2,
    placeholder,
    name,
    value,
    type,
    fieldStyle,
    dataType
  }) {
  return(
    <div className='field'>
      <label className="label" htmlFor={name}>{label}</label>
      {label2 && <p className="label2">{label2}</p>}
      <input
        className={`input ${fieldStyle}`}
        data-type={dataType}
        name={name}
        placeholder={placeholder}
        value={value ? value[name] : ''}
        type={type || 'text'}
        onChange={handleChange}/>
    </div>
  );
}

{/* <FormField
  handleChange=""
  label=""
  [label2]=""
  [placeholder]=""
  [data-type]=""
  name=""
  value="input state"
  [type]="text(default)"
  [fieldStyle]="extra styling"
/> */}
