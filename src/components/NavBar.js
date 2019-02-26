import React from 'react';

const NavBar = ({onReset, onAddCounter}) => {
  return(
    <div>
      <button
        onClick={onReset}
        className='btnNavBar text'
      >
        Reset
      </button>
      <button
        onClick={onAddCounter}
        className='btnNavBar text'
      >
        Add
      </button>
    </div>
  );
} 

export default NavBar;