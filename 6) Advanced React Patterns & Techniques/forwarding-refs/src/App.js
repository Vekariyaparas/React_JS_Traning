import React, { useRef } from 'react';
import FocusableInput from './components/FocusableInput';

const App = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button onClick={focusInput}>Focus Input</button>
      <FocusableInput ref={inputRef} />
    </div>
  );
};

export default App;