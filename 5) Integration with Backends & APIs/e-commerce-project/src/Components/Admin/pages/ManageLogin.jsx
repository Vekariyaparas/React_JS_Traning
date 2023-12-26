import React, { useEffect, useState } from 'react';
import AdminHeader from '../../Admin/AdminHeader'
import AdminSidebar from '../../Admin/AdminSidebar'
import AdminFooter from '../../Admin/AdminFooter'
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function ManageLogin() {

    const [login, setlogin] = useState([0]);

    // GET DATA FOR API 
    function logindata()  {
        axios.get(BASE_URL+"Login")
        .then((res) => { setlogin(res.data) })
    } 

    useEffect(() => {
        logindata();
    }, [])

    // DELETE DATA FOR API 
    const deletedata = (id) => {
        axios.delete(BASE_URL+`Login/${id}`)
        .then((response)=>{
            console.warn(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Deleted',
                text: 'Delet Successfully',
              })
            logindata();
        })
    }

    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className='login p-5'>
                <div className='container m-0 p-0 mx-auto'>
                    <h1 className='text-center'>Manage Login</h1>
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {login && login.map((item) => {
                                return (

                                    <tr>
                                        <th scope="row" key={item.id}>{item.id}</th>
                                        <td>{item.Username}</td>
                                        <td>{item.Password}</td>
                                        <td><button type='button' onClick={()=> deletedata(item.id)} className='btn p-1 bg-danger text-white border-0'>Delete</button></td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}
