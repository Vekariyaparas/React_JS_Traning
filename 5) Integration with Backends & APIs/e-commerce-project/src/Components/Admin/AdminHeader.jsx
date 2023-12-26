import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminHeader() {

  const Navigate = useNavigate();

  const logout = () =>{
    Navigate('/login')
  }
  useEffect(()=>{
    let userName = sessionStorage.getItem('userName');
    if(userName==='' || userName===null){
      Navigate('/login')
    }
  }, [])

  return (
    <>
      <div className='Adminheader'>
        <div className='container p-0'>
          <div className='row m-0 p-0'>
            <div className='col-3 m-0 p-0 pt-2'>
              <Link to="/admin-dashboard" className='text-decoration-none text-dark'>Welcome to Deshboard</Link>
            </div>
            <div className='col-5 m-0 p-1'>
              <form className='w-75 mx-auto'>
                <input type='search' placeholder='Search anything here ?' className='form-control' />
              </form>
            </div>
            <div className='col-4 m-0 p-0 pt-2 justify-content-end'>
              <span><i className='bi bi-facebook ms-5 ps-4'></i>
              <i className='bi bi-twitter ms-3'></i>
              <i className='bi bi-whatsapp ms-3'></i>
              <i className='bi bi-instagram ms-3'></i>
              </span>
              <div className="dropdown d-inline-block">
                <button className="btn dropdown-toggle border-0 m-0 ms-4 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Welcome : Admin
                </button>
                <ul class="dropdown-menu">
                  <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
