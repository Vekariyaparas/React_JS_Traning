import React from 'react'
import UseLocalStorage from './Components/UseLocalStorage'

const App = () => {

  const [name, setName, removeName] = UseLocalStorage('name', 'Paras')

  return (
    <>
      <div>
        <p>Name : {name}</p>
        <button onClick={() => setName('Paras Vekariya')}>Set Name</button>
        <button onClick={removeName}>Remove Name</button>
      </div>
    </>
  )
}

export default App
