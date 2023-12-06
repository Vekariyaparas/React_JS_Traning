import React from 'react'

const Memoized = React.memo(({props1, props2}) => {
  return (
    <div>
      {props1} - {props2}
    </div>
  )
})

export default Memoized
