import React from 'react'
import { useTheme } from './ThemeProvider'
import { themes } from './Theme';

const ThemeToggler = () => {
    const {currentTheme, toggleTheme} = useTheme();
    const theme = themes[currentTheme]
  return (
    <div style={{background: theme.background, color: theme.text, height: '45vh'}}>
      <lable>Select Theme:</lable>
      <select value={currentTheme} onChange={(e) => toggleTheme(e.target.value)} className='my-5 px-3 border-0 rounded-1 mx-2'>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <h1>Themed Content</h1> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, totam assumenda. Reprehenderit nesciunt dolorum accusamus inventore, laborum officiis nisi totam omnis neque tempora, libero odit, obcaecati minima cumque. Animi, numquam.</p> 
    </div>
  )
}

export default ThemeToggler
