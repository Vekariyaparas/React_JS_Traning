import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/Slice/CounterSlice'

const CounterApp = () => {
  const dispatch = useDispatch()
  const count  = useSelector(state => state.counter.value)
  return (
    <div className='w-96 mx-auto bg-slate-200 text-center my-44 p-4 rounded-md'>
      <h1 className='text-2xl'>Counter App</h1>
      <p className='my-3'>Count:- {count}</p>
      <button onClick={() => dispatch(increment())} className='bg-slate-500 p-1 rounded-lg px-2 text-white'>Increment</button>
      <button onClick={() => dispatch(reset())} className='bg-slate-500 p-1 rounded-lg px-2 text-white ms-2'>Reset</button>
      <button onClick={() => dispatch(decrement())} className='bg-slate-500 p-1 rounded-lg px-2 text-white ms-2'>Decrement</button>
    </div>
  )
}

export default CounterApp
