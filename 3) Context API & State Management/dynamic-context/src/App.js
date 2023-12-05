import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeToggler from './components/ThemeToggler'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <Content />
    </ThemeProvider>
  )
}

export default App
