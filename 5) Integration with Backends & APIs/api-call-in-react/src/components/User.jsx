import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data)
        })
    }, [])
  return (
    <>
    <table className='border'>
        <tr className='border'>
            <th>PostID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comments</th>
        </tr>
      {data.map((item) => {
          return(
              <tr key={item.id} className='border text-center'>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
            </tr>
        )
    })}
    </table>
    </>
  )
}

export default Users
