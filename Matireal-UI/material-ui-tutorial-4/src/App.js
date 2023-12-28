import React from 'react'
import Buttons from './components/Button'
import Button_Group from './components/Button_Group'
import Toggle_Button from './components/Toggle_Button'

const App = () => {
  return (
    <div>
      <Buttons />
      <hr />
      <Button_Group />
      <hr />
      <Toggle_Button />
    </div>
  )
}

export default App
