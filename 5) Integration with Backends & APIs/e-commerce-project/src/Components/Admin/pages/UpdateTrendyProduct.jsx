import React, { useEffect, useRef, useState } from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../api/constant'
import axios from 'axios';
import Swal from 'sweetalert2';


export default function UpdateTrendyProduct() {

  // ADD DATA IN API
  const [addcategory, setaddcategory] = useState([]);
  const [adddata, setadddata] = useState([]);

  useEffect(()=>{
      axios.get(BASE_URL+"category")
      .then((res)=>{setaddcategory(res.data)})
  }, [])

  useEffect(()=>{
    axios.get(BASE_URL+"trendyproduct")
    .then((res)=>{setadddata(res.data)})
  }, [])


  // UPDATE DATA API 
  const category = useRef("");
  const productname = useRef("");
  const productimg = useRef("");
  const offerprice = useRef("");
  const productprice = useRef("");
  const productqut = useRef("");
  const productdes = useRef("");
  const date = useRef("");
  const Navigate = useNavigate("");
  const { id } = useParams();

  useEffect(()=> {
    axios.get(BASE_URL+`trendyproduct/${id}`)
    .then((res) => {
      category.current.value = res.data.category;
      productname.current.value = res.data.productname;
      productimg.current.value = res.data.productimg;
      productqut.current.value = res.data.productqut;
      offerprice.current.value = res.data.offerprice;
      productprice.current.value = res.data.productprice;
      productqut.current.value = res.data.productqut;
      productdes.current.value = res.data.productdes;
      date.current.value = res.data.date;
    })
  }, [])

  const UpdateData = () =>{

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

          axios.put(BASE_URL+`trendyproduct/${id}`, insert)
          .then(()=>{
              Swal.fire({
                icon: 'success',
                title: 'Updated',
                text: 'Updated successfully'
              })
              Navigate("/admin-dashboard/manage-trendy-products")
          })
  }


  return (
    <>
      <AdminHeader />
            <AdminSidebar />
            <div className="trendyproducts p-5">
                <div className="container m-0 p-0">
                    <h1 className='text-center'>Update Trendy Products Here</h1>
                    <form action="" className='w-75 mx-auto mt-5'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Select Category</label>
                            <select className="form-select" aria-label="Default select example" ref={category} name='category'>
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
                            <input type="text" ref={productname} name='productname' className="form-control" id="exampleFormControlInput1" placeholder="Enter product name **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Image</label>
                            <input type="url" ref={productimg} name='productimg' className="form-control" id="exampleFormControlInput1" placeholder="Enter products url **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Offer Price</label>
                            <input type="number" ref={offerprice} name='offerprice' className="form-control" id="exampleFormControlInput1" placeholder="Enter offer price for product **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Price</label>
                            <input type="number" ref={productprice} name='productprice' className="form-control" id="exampleFormControlInput1" placeholder="Enter product price **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Quantity</label>
                            <input type="number" ref={productqut} name='productqut' className="form-control" id="exampleFormControlInput1" placeholder="Product quantity **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Description</label>
                            <input type="text" ref={productdes} name='productdes' className="form-control" id="exampleFormControlInput1" placeholder="Product description **" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="date" ref={date} name='date' className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <button type="button" onClick={UpdateData} className="btn btn-outline-success">Add Product</button>
                    </form>
                </div>
            </div>
            <AdminFooter />
    </>
  )
}
