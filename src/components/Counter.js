import React from 'react';

const Counter = ({counter, onIncrement, onDecrement, onDelete}) => {
  return(
    <div>
      <span className='value'>{counter.value}</span>
      <div
        onClick={() => onIncrement(counter)}
        className='btn sym'
      >
        +
      </div>
      <div
        onClick={() => onDecrement(counter)}
        disabled={counter.value === 0 ? 'disabled' : ''}
        className='btn sym'
      >
        -
      </div>
      <button
        onClick={() => onDelete(counter)}
        className='btnDelete text'
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;