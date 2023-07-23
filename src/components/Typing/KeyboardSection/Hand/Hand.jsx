import React from 'react';
import keyboardHandStyles from './keyboardHand.module.css';

const Hand = ({whichHand, whichFinger}) => {
  return (
    <div className={[
          keyboardHandStyles.keyboardHand, 
          keyboardHandStyles[whichHand],
          keyboardHandStyles[whichFinger]
        ].join(' ')} />
  )
}

export default Hand;
