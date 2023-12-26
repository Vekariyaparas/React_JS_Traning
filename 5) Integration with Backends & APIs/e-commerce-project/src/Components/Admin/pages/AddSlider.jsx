import React, { useRef } from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function AddSlider() {

    // destructure of add slider 
    const slidertitle = useRef("");
    const sliderimg = useRef("");
    const Navigate = useNavigate("");

    const addslider= () =>{

        var insert ={
            slidertitle: slidertitle.current.value,
            sliderimg: sliderimg.current.value
        }

        axios.post(BASE_URL+"slider", insert)
        .then(()=>{
          Swal.fire({
            icon: 'success',
            title: 'Slider Added',
            text: 'Slider Add successfully'
        })

            Navigate("/admin-dashboard/manage-slider")
        }, [])
    }
  return (
    <>
    <AdminHeader />
    <AdminSidebar />
      <div className='addslider m-0 p-0'>
        <div className='container m-0 p-5'>
            <h1>Add Slider Here</h1>
            <form className='w-75 form-control mt-3'>
                <label>Slider Name</label><br/>
                <input type='text' ref={slidertitle} placeholder='Enter your slider name ***' className='form-control mt-2' /><br/>

                <label>Slider Imager URl</label><br/>
                <input type='url' ref={sliderimg} placeholder='Enter your slider name ***' className='form-control mt-2' />

                <button type='button' onClick={addslider} className='btn btn-sm btn-primary mt-4'>Add Slider</button>
            </form>
        </div>
      </div>
    <AdminFooter />
    </>
  )
}
