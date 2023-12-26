import React, { useEffect, useRef, useState } from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function AddShopProduct() {

  // destructure for category data 
  const [addcategory, setaddcategory] = useState([]);

  useEffect(()=>{
      axios.get(BASE_URL+"category")
      .then((res)=>{setaddcategory(res.data)})
  }, [])
  // destructure od data 
  const category = useRef("");
  const productname = useRef("");
  const productimg = useRef("");
  const offerprice = useRef("");
  const productprice = useRef("");
  const productqut = useRef("");
  const productdes = useRef("");
  const date = useRef("");
  const Navigate = useNavigate("");

  const addproduct = () =>{

      var insert = {
          category: category.current.value,
          productname: productname.current.value,
          productimg: productimg.current.value,
          productqut: productqut.current.value,
          offerprice: offerprice.current.value,
          productprice: productprice.current.value,
          productqut: productqut.current.value,
          productdes: productdes.current.value,
          date: date.current.value,
      }

          axios.post(BASE_URL+"shop", insert)
          .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Product Added',
                text: 'Product Add successfully'
            })
              Navigate("/admin-dashboard/manage-shop-products")
          })
  }
  return (
    <>
      <AdminHeader />
            <AdminSidebar />
            <div className="trendyproducts p-5">
                <div className="container m-0 p-0">
                    <h1 className='text-center'>Add Shop Products Here</h1>
                    <form action="" className='w-75 mx-auto mt-5'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Select Category</label>
                            <select className="form-select" aria-label="Default select example" ref={category}>
                                <option selected>Open this select menu</option>
                                {addcategory && addcategory.map((row)=>{
                                    return(
                                <option value={row.categoryname} >{row.categoryname}</option>
                                )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                            <input type="text" ref={productname} className="form-control" id="exampleFormControlInput1" placeholder="Enter product name **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Image</label>
                            <input type="url" ref={productimg} className="form-control" id="exampleFormControlInput1" placeholder="Enter products url **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Offer Proice</label>
                            <input type="number" ref={offerprice} className="form-control" id="exampleFormControlInput1" placeholder="Enter offer price for product **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Price</label>
                            <input type="number" ref={productprice} class="form-control" id="exampleFormControlInput1" placeholder="Enter product price **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Quantity</label>
                            <input type="number" ref={productqut} className="form-control" id="exampleFormControlInput1" placeholder="Product quantity **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Description</label>
                            <input type="text" ref={productdes} class="form-control" id="exampleFormControlInput1" placeholder="Product description **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="date" ref={date} className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <button type="button" className="btn btn-outline-success" onClick={addproduct}>Add Product</button>
                    </form>
                </div>
            </div>
            <AdminFooter />
    </>
  )
}
