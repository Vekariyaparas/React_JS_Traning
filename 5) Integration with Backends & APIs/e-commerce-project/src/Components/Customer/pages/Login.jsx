import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import swal from 'sweetalert';

export default function Login() {

  const [userName, setUserName]=useState('');
  const [password, setPassword]=useState('');
  const Navigate = useNavigate(" ")

  useEffect(() => {
    sessionStorage.clear();
  }, [])

  const adddata = (e) =>{
    e.preventDefault();
    if(validate()){
      fetch(BASE_URL + "Register/" + userName)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        if(Object.keys(resp).length === 0) {
          alert('please enter valid username')
        }
        else{
          if(resp.Password === password){
            sessionStorage.setItem('userName', userName);
            Navigate('/admin-dashboard');
          }
          else{
            alert('please enter valid password')
          }
        }
      }).catch((err) => {
        alert('Login Faild due to..' + err.massage)
      })
    }
    
  }

  const validate = () =>{
    let result = true;
    if(userName==='' || userName===null){
      result=false;
      alert('Please Enter username');
    }
    if(password==='' || password===null){
      result=false;
      alert('Please Enter password');
    }
    return result;
  }

  return (
    <>
      <Header />
      <div className='customerlogin bg-light p-5'>
        <div className='container m-0 p-0 mx-auto'>
          <form className='w-50 m-auto rounded-3 p-5 bg-light-subtle' onSubmit={adddata}>
            <div className='text-center'>
              <h1 className='fw-medium'>LOGIN</h1>
              <i className='bi bi-people fs-1 text-primary'></i>
            </div>
            <div class="input-group mb-3 mt-3">
              <span class="input-group-text" id="basic-addon1"><i className='bi bi-person-fill' style={{ color: "#d19c97" }}></i></span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div className="input-group mt-5 mb-3">
              <span className="input-group-text" id="basic-addon1"><i className='bi bi-lock-fill' style={{ color: "#d19c97" }}></i></span>
              <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="col-12 mt-5 text-center">
              <button className="btn btn-outline-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}
