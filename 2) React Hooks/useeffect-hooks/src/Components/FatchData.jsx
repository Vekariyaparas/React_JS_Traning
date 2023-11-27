import React, { useEffect, useState } from 'react'
// import { render } from 'react-dom'

const FatchData = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const newData = await  response.json();
            setData(newData);
        }

        fetchData();
    }, [])

  return (
    <>
      <h1 className='text-center my-5'>User Deatails</h1>
      <table className='w-100 border'>
        <tr className='border'>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Base</th>
        </tr>
      { data && data.map((item) =>{
          return(
            <tr className='border'>
            <td key={item.id}>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
            <td>{item.company.bs}</td>
            
      </tr>
        )
      })}
      </table>
    </>
  )
}

export default FatchData
