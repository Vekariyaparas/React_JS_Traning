import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/constant'

export default function AdminContain() {

  const [contacts, setcontacts] = useState(0);
  const [customer, setcustomer] = useState(0);

  useEffect(()=>{
    axios.get(BASE_URL+"contatc")
    .then((res)=>{setcontacts(res.data)});
  }, [])

  useEffect(()=>{
    axios.get(BASE_URL+"Register")
    .then((res)=>{setcustomer(res.data)});
  }, [])


  return (
    <>
      <div className='admincontent m-0 p-0 mt-5'>
        <div className='container m-0 p-0'>
          <h1 className='text-center'>Overview</h1>
          <div className='d-flex justify-content-around text-center mt-5 mb-5'>
            <div>
            <span className="badge rounded-pill bg-light text-dark fs-4">{contacts.length}</span>
            <h3>Our Contacts</h3>

            </div>
            <div>
            <span className="badge rounded-pill bg-light text-dark fs-4">{customer.length}</span>
            <h3>Our Customer</h3>
            </div>
          </div>
          <div id="columnchart_material"></div>
        </div>
      </div>
    </>
  )
}
