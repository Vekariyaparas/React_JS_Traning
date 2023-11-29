import React, { useCallback, useMemo, useState } from 'react'

const App = () => {

  const [numberList, setNumberList] = useState([])
  const [sumOfSqure, setSumOfSqure] = useState(0)

  const handleNumChange = useCallback((e) => {
    const value = e.target.value
    const numbers = value.split(',').map((num) => Number(num.trim()))
    setNumberList(numbers)
  }, [])

  const calculateSumOfSqure = useMemo(() => {
    return numberList.reduce((sum, num) => sum + num ** 2, 0)
  }, [numberList])

  const CalculateClick = useCallback(() => {
    setSumOfSqure(calculateSumOfSqure)
  }, [calculateSumOfSqure])

  return (
    <>
      <div className='w-25 shadow p-3 text-center mx-auto mt-5'>
        <h3>Find Number Of Squre</h3>
        <input
          type='text'
          placeholder='Enter Nummber (comma-separated)'
          className='form-control mt-4'
          onChange={handleNumChange}
        />
        <br />
        <button
         onClick={CalculateClick}
         className='border-0 btn btn-primary mb-3'
         >Calculate Sum Of Squre</button>
        <br />
        <div>
          Sum Of Squre : {sumOfSqure}
        </div>
      </div>
    </>
  )
}

export default App
