import React from 'react';

export default function Button({ handleClick, buttonClass, buttonText }) {
  return(
    <button onClick={handleClick} className={`button ${buttonClass}`}>
      {buttonText}
    </button>
  );
}

{/* <Button handleClick="" buttonClass="" buttonText="" /> */}
