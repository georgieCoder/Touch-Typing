import React from 'react';
import keyboardHandStyles from './keyboardHand.module.css';
import { whichFinger, whichHand } from '../../../../models/IKeyboardKey';

interface HandProps {
  whichHand: whichHand
  whichFinger: whichFinger
}

const Hand: React.FC<HandProps> = ({whichHand, whichFinger}) => {
  return (
    <div className={[
          keyboardHandStyles.keyboardHand, 
          keyboardHandStyles[whichHand],
          keyboardHandStyles[whichFinger]
        ].join(' ')} />
  )
}

export default Hand;
