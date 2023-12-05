import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ThemeProvider } from './compnents/ThemeContext'
import NavBar from './compnents/NavBar'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
      </div>
    </ThemeProvider>
  )
}

export default App
