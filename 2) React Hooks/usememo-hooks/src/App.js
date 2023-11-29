import React, { useMemo, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState([])

  const calculation = useMemo(() => expenciveCalculation(count, [count]))

  const addCount = () => {
    setCount((c) => c + 1);
  }

  const addToDo = () => {
    setTodo((t) => [...t, 'New ToDo'])
  }

  return (
    <>
      <div>
        <h2>My Todods</h2>
        {todo.map((todo) =>{
          return <p key={todo}>{todo}</p>
        })}
        <button onClick={addToDo}>
          Add ToDo
        </button>
      </div>
      <hr />
      <div>
        count: {count}
        <br />
        <button onClick={addCount}>+</button>
        <h2>Expencive Calculation</h2>
        {calculation}
      </div>
    </>
  )
}

const expenciveCalculation = (num) => {
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
}

export default App
