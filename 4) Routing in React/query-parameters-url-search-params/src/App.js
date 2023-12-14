import React from 'react'
import Search from './components/Search'
import Stories from './components/Stories'

const App = () => {
  return (
    <div className='p-5 bg-slate-200'>
      <h2 className='text-center text-3xl font-semibold'>Tech News On The Go</h2>
      <Search />
      <Stories />
    </div>
  )
}

export default App
