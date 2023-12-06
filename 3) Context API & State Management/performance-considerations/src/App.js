import React, { createContext, useState } from 'react'

export const UseContext = createContext();
export const ThemeContext = createContext();

const App = ({children}) => {
  const [user, setUser] = useState('')
  const [theme, setTheme] = useState('')
  return (
    <UseContext.Provider value={{user, setUser}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    </UseContext.Provider>
  )
}

export default App
