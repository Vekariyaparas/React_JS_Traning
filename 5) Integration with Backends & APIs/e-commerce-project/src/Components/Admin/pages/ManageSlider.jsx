import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function ManageSlider() {

  // destructure of manage slider 
  const [manageslider, setmanageslider] = useState([]);
  const Navigate = useNavigate("");

  // GET STUDENT DATA FROM API 
  function AddData() {
    axios.get(BASE_URL+"slider")
      .then((res) => { setmanageslider(res.data) })
  }
  useEffect(() => {
    AddData();
  }, [])

  // DELETE DATA FROM API 
  const DeleteSlider = (id) => {
    axios.delete(BASE_URL+`slider/${id}`)
      .then((res) => {
        console.warn(res)
        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: 'Delet Successfully'
        })
        AddData();
      })
  }


  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='manageslider m-0 p-0'>
        <div className='container m-0 p-0'>
          <h1 className='mt-5 text-center'>Manage Slider Here</h1>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Slider Title</th>
                <th scope="col">Image URL</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {manageslider && manageslider.map((item) => {
                return (

                  <tr>
                    <th scope="row" key={item.id}>{item.id}</th>
                    <td>{item.slidertitle}</td>
                    <td>{item.sliderimg}</td>
                    <td>
                      <button type='button' className='btn btn-outline-secondary p-1'><i className='bi bi-pencil' onClick={() => Navigate(`/updateslider/${item.id}`)}></i></button> 
                      <button type='button' className='btn btn-outline-secondary p-1 ms-1'><i className='bi bi-trash' onClick={() => DeleteSlider(item.id)}></i></button>
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
