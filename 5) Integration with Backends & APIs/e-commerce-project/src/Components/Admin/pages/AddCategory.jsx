import React, { useRef } from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminFooter from '../AdminFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../api/constant';

export default function AddCategory() {

    // destructure of data 
    const categoryname = useRef("");
    const adddate = useRef("");
    const Navigate = useNavigate("");

    const addcategory = () =>{

        var insert = {
            categoryname: categoryname.current.value,
            adddate: adddate.current.value,
        }

        axios.post(BASE_URL+"category", insert)
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Category Added',
                text: 'Category Add successfully'
            })
            Navigate("/admin-dashboard/manage-category")
        }, [])
    }
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="addcategory p-5">
                <div className="container m-0 p-0 mx-auto">
                    <h1 className='text-center'>Add Category</h1>
                    <form action="" className='w-50 form-control mx-auto mt-4'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Categoty Name</label>
                            <input type="text" ref={categoryname} className="form-control" id="exampleFormControlInput1" placeholder="Category name enter here **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="date" ref={adddate} className="form-control" id="exampleFormControlInput1" placeholder="Select date **" />
                        </div>
                        <button type="button" className="btn btn-outline-secondary" onClick={addcategory}>Add Category</button>
                    </form>
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}
