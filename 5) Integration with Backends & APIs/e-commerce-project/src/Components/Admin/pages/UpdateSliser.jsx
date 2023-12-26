import React, { useEffect, useState, useRef } from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BASE_URL } from '../../../api/constant'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function UpdateSliser() {

      // ADD DATA IN API
      const [addslider, setaddslider] = useState("");

      useEffect(() => {
          axios.get(BASE_URL+"slider")
              .then((res) => {
                  setaddslider(res.data);
              })
      }, [])
  
      // UPDATA DATA IN API
      const slidertitle = useRef("");
      const sliderimg = useRef("");
      const Navigate = useNavigate("");
      const { id } = useParams();
  
      useEffect(() => {
          axios.get(BASE_URL+`slider"/${id}`)
              .then((res) => {
                  // fetch all data fro update
                  slidertitle.current.value = res.data.slidertitle;
                  sliderimg.current.value = res.data.sliderimg;
              })
      }, [])
  
      const UpdateData = () => {

          const update = {
              slidertitle: slidertitle.current.value,
              sliderimg: sliderimg.current.value
          }
  
          axios.put(BASE_URL+`slider/${id}`, update)
              .then(() => {
                  Swal.fire({
                      icon: 'success',
                      title: 'Slider',
                      text: 'Update Successfully',
                  })
              });
          Navigate("/admin-dashboard/manage-slider")
      }

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='addslider m-0 p-0'>
        <div className='container m-0 p-5'>
          <h1>Update Slider Here</h1>
          <form className='w-75 form-control mt-3'>
            <label>Slider Name</label><br />
            <input type='text' ref={slidertitle} name='slidertitle' placeholder='Enter your slider name ***' className='form-control mt-2' /><br />

            <label>Slider Imager URl</label><br />
            <input type='url' ref={sliderimg} name='sliderimg' placeholder='Enter your slider name ***' className='form-control mt-2' />

            <button type='button' onClick={UpdateData} className='btn btn-sm btn-primary mt-4'>Update Slider</button>
          </form>
        </div>
      </div>
      <AdminFooter />
    </>
  )
}
