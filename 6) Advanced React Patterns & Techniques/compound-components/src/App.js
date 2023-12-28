import React from 'react'
import Tabs from './Components/Tabs'
import Tab from './Components/Tab'

const App = () => {
  return (
    <>
     <Tabs>
     <Tab label="Tab 1">Content for Tab 1</Tab>
      <Tab label="Tab 2">Content for Tab 2</Tab>
      <Tab label="Tab 3">Content for Tab 3</Tab>  
    </Tabs> 
    </>
  )
}

export default App
