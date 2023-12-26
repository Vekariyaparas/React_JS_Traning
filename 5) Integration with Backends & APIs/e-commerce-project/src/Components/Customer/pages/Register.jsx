import React, {useRef} from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import swal from 'sweetalert';

export default function Register() {

  const FristName = useRef(" ")
  const LastName = useRef(" ")
  const Email = useRef(" ")
  const Number = useRef(" ")
  const Password = useRef(" ")
  const Navigate = useNavigate(" ")

  const adddata = () => {

    var insert = {
      FristName: FristName.current.value,
      LastName: LastName.current.value,
      id: Email.current.value,
      Number: Number.current.value,
      Password: Password.current.value,
    }

    axios.post(BASE_URL+"Register", insert)
    .then(()=>{
      swal({
        title: "Login Successfuly",
        text: "You clicked the button!",
        icon: "success",
        button: "Ok"
      });
      Navigate("/")
    });
  }

  return (
    <>
      <Header />
      <div className='register p-3'>
        <div className='container m-0 p-0 m-auto'>
          <form className='form-control w-50 border mx-auto p-5 bg-light'>
            <h1 className='text-center'>Register Here</h1>
            <input type='text' ref={FristName} placeholder='Frist Name' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <input type='text' ref={LastName} placeholder='Last Name' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <input type='email' ref={Email} placeholder='Email' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <input type='number' ref={Number} placeholder='Phone Number' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <input type='Password' ref={Password} placeholder='Password' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <input type='Password' placeholder='Confirm password' className='form-control border-0 border-bottom rounded-0 mt-3' />
            <button class="btn btn-outline-info mt-4" type="submit" onClick={adddata}>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}
