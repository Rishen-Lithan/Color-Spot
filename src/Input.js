import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name : </label>
      <input 
        autoFocus
        required
        type='text'
        placeholder='Add Color Name : '
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  )
}

export default Input
