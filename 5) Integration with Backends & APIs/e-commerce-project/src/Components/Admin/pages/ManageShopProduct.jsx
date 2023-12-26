import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function ManageShopProduct() {
  // destructure of data 
  const [manageproduct, setmanageproduct] = useState([]);
  const Navigate = useNavigate('');

  function Adddata() {
    axios.get(BASE_URL+"shop")
    .then((res)=>{setmanageproduct(res.data)})
  }

  useEffect(()=>{
      Adddata();
  }, [])

  // DELETE DATA FROM API 
  const Deletdata = (id) => {
    axios.delete(BASE_URL+`shop/${id}`)
        .then((res) => {
            console.warn(res)
            Swal.fire({
                icon: 'success',
                title: 'Deleted',
                text: 'Delet Successfully',
            })
            Adddata();
        })
}

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="arrivedproduct p-5">
        <div className="container">
            <h1 className='text-center'>Manage Shop Products Here</h1>
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
                                          <button type="button" onClick={() => Navigate(`/admin-dashboard/updateshopproduct/${row.id}`)} className="btn btn-outline-secondary p-1"><i className='bi bi-pencil'></i></button>
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
