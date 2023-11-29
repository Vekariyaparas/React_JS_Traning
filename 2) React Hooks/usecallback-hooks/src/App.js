import React, { useCallback, useState } from 'react'
import Todos from './Components/Todos'

const App = () => {

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New ToDO"])
  }, [todos])

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
