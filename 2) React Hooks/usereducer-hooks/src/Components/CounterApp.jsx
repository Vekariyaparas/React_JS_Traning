import React, { useReducer } from "react";
import { reducer } from "./reducer.jsx";

const CounterApp = () => {

    let initialValue = 0;

    const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="border text-center p-5 w-25 mx-auto mt-5 shadow">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button className="btn btn-secondary p-1" onClick={ () => dispatch({type : 'INC'})}>Increment</button>
        <button className="ms-1 btn btn-secondary p-1" onClick={ () => dispatch({type : 'RES'})}>Reset</button>
        <button className="ms-1 btn btn-secondary p-1" onClick={ () => dispatch({type : 'DEC'})}>Decrement</button>
      </div>
    </>
  );
};

export default CounterApp;
