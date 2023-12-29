import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const FocusableInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose the input ref to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <input
      type="text"
      ref={inputRef}
      {...props}
    />
  );
});

export default FocusableInput;