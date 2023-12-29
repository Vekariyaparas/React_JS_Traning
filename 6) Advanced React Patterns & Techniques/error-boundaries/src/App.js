import React from 'react'
import { ErrorBoundary } from './Components/ErrorBoundary'
import MyComponent from './Components/MyComponent'

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  )
}

export default App
