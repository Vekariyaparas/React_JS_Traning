import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Admin/AdminHeader'
import AdminSidebar from '../../Admin/AdminSidebar'
import AdminFooter from '../../Admin/AdminFooter'
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function ManageRegister() {

    const [register, setregister] = useState([]);

    // ADD DATA FROM API 
    function AddData () {
        axios.get(BASE_URL+"Register")
        .then((res) => { setregister(res.data) })
    }

    useEffect(() => {
        AddData();
    }, [])

    // DELETE DATA FROM API 
    const Deletdata = (id) => {
        axios.delete(BASE_URL+`Register/${id}`)
            .then((res) => {
                console.warn(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: 'Delet Successfully',
                })
                AddData();
            })
    }

    return (

        <>
            <AdminHeader />
            <AdminSidebar />
            <div className='manageregister p-5'>
                <div className='container m-0 p-0 mx-auto'>
                    <h1 className='text-center'>Manage Register</h1>
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {register && register.map((item) => {
                                return (

                                    <tr>
                                        <th scope="row" key={item.id}>{item.id}</th>
                                        <td>{item.FristName}</td>
                                        <td>{item.LastName}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Number}</td>
                                        <td>{item.Password}</td>
                                        <td><button type='button' onClick={() => Deletdata(item.id)} className='btn bg-danger text-white p-1'>Delete</button></td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <AdminFooter />
        </>
    )
}
