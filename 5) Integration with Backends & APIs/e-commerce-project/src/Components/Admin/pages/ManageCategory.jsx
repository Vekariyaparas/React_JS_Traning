import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
  import Swal from 'sweetalert2';

export default function ManageCategory() {

    // destructure of data 
    const [managecategory, setmanagecategory] = useState([]);

    // ADD DATA FROM API 

    function AddData () {
        axios.get(BASE_URL+"category")
        .then((res)=>{setmanagecategory(res.data)});
    }

    useEffect(()=>{
        AddData();
    }, [])

    // DELETE DATA FROM API 
    const Deletdata = (id) => {
        axios.delete(BASE_URL+`Category/${id}`)
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
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="addcategory p-5">
                <div className="container m-0 p-0 mx-auto">
                    <h1 className='text-center'>Manage Category</h1>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {managecategory && managecategory.map((row)=>{
                                return(

                            <tr>
                                <th scope="row" key={row.id}>{row.id}</th>
                                <td>{row.categoryname}</td>
                                <td>{row.adddate}</td>
                                <td><button type="button" onClick={() => Deletdata(row.id)} className="btn btn-danger">Delete</button></td>
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
