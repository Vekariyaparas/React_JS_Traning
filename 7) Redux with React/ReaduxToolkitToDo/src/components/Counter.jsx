import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/Slice/CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <div>
        <p>Total Count:- {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
