import React from 'react';
import './style/App.css';
import { russianLayout } from './keyboardLayouts/Russian';
import Typing from './components/Typing/Typing';
import { TEXT1 } from './texts/texts';

const TypingMemo = React.memo(Typing);
const lengthLimit = 30;

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='typingWrapper'>
          <TypingMemo keyboardLayout={russianLayout} lengthLimit={lengthLimit} text={TEXT1}/>
        </div>
      </div>
    </div>
  );
}

export default App;