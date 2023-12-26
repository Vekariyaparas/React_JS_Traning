import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter';
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ManageTrendyProducts() {

    // destructure of data 
    const [manageproduct, setmanageproduct] = useState([]);
    const Navigate = useNavigate("")

    function AddProduct () {
        axios.get(BASE_URL+"trendyproduct")
            .then((res) => { setmanageproduct(res.data) })
    }

    useEffect(() => {
        AddProduct ();
    }, [])

    // DELETE DATA FROM API 
    const Deletdata = (id) => {
        axios.delete(BASE_URL+`trendyproduct/${id}`)
            .then((res) => {
                console.warn(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: 'Delet Successfully',
                })
                AddProduct();
            })
    }

    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <div className="trendyproducts p-5">
                <div className="container">
                    <h1 className='text-center'>Manage Trendy Products Here</h1>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">Name</th>
                                <th scope="col">URL</th>
                                <th scope="col">Quntity</th>
                                <th scope="col">OfferPrice</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageproduct && manageproduct.map((row) => {
                                return (

                                    <tr key={row.id}>
                                        <th scope="row">{row.id}</th>
                                        <td>{row.category}</td>
                                        <td>{row.productname}</td>
                                        <td>{row.productimg}</td>
                                        <td>{row.productqut}</td>
                                        <td>{row.offerprice}</td>
                                        <td>{row.productprice}</td>
                                        <td>{row.productdes}</td>
                                        <td>{row.date}</td>
                                        <td>
                                            <button type="button" onClick={() => Navigate(`/admin-dashboard/updatetrendyproduct/${row.id}`)} className="btn btn-outline-secondary p-1"><i className='bi bi-pencil'></i></button>
                                            <button type="button" onClick={() => Deletdata(row.id)} className="btn btn-outline-secondary p-1 ms-1"><i className='bi bi-trash'></i></button>
                                        </td>
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
