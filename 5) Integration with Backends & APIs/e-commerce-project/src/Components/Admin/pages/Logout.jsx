import React, { useRef } from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function Logout() {

    // destructure of data 
    const username = useRef("");
    const password = useRef("");
    const Navigate = useNavigate("");

    const addcategory = () =>{

        var insert = {
            username: username.current.value,
            password: password.current.value,
        }

        axios.post(BASE_URL+"Logout", insert)
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: "Logout",
                text: 'Logout successfully'
            })
            Navigate('/')
        }, [])
    }
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="addcategory p-5">
                <div className="container m-0 p-0 mx-auto">
                    <h1 className='text-center'>Logout</h1>
                    <form action="" className='w-50 form-control mx-auto mt-4'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="email" ref={username} className="form-control" id="exampleFormControlInput1" placeholder="Username enter here **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" ref={password} className="form-control" id="exampleFormControlInput1" placeholder="Password enter here **" />
                        </div>
                        <button type="button" className="btn btn-outline-secondary" onClick={addcategory}>Logout</button>
                    </form>
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}
