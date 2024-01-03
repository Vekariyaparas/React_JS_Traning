import React from 'react'
import Switchs from './components/Switch'
import Ratings from './components/Rating'
import Autocompletes from './components/Autocomplete'
import Boxs from './components/Box'

const App = () => {
  return (
    <>
      <Switchs />
      <hr />
      <Ratings />
      <hr />
      <Autocompletes />
      <hr />
      <Boxs />
    </>
  )
}

export default App
