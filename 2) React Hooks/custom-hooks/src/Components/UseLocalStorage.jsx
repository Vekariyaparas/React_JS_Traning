import React, { useState } from "react";

const UseLocalStorage = (key, initialValue) => {
  // Get initial value from local storage
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to manage the current value
  const [value, setValue] = useState(initial);

  // Set the value to local storage and update the state
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove the value from local storage and reset the state
  const removeStoredValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
};

export default UseLocalStorage;
