import React, { useContext } from 'react'
import { ThemeContext, UseContext } from '../App'

const Context = () => {
    const {user} = useContext(UseContext);
    const {theme} = useContext(ThemeContext)
  return (
    <>
      {user.name} - {theme}
    </>
  )
}

export default Context
