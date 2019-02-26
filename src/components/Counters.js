import React from 'react';
import Counter from './Counter';

const Counters = ({onIncrement, onDecrement, counters, onDelete}) => {
    return(
      <div>
        {counters.map((counter, i) => (
          <Counter
            key={i}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
}

export default Counters;