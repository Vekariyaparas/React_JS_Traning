import React, { useMemo } from 'react'

const Component = ({props1, props2}) => {
    const memoizedResult = useMemo(() => {
        return props1 + props2
    }, [props1, props2])
  return (
    <>
      {memoizedResult}
    </>
  )
}

export default Component
