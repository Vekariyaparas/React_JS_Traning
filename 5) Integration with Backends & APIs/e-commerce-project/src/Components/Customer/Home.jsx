import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../api/constant'

export default function Home() {


  const AddToCart = (atz) => {
    axios.post(BASE_URL + "cart", atz)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Add To Cart',
          text: 'Product Added Successfully'
        })
      });
  }

  // dectructure of data 
  const [trendy, settrendy] = useState([]);
  const [arrived, setarrived] = useState([]);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + "trendyproduct")
      .then((res) => { settrendy(res.data) })
  }, []);

  useEffect(() => {
    axios.get(BASE_URL + "justarrivedproduct")
      .then((res) => { setarrived(res.data) })
  }, []);

  useEffect(() => {
    axios.get(BASE_URL + "category")
      .then((res) => { setcategory(res.data) })
  }, [])
  return (
    <>
      <div className='homepage overflow-hidden'>
        <div className="container p-0 m-0 mx-auto">
          {/* slider start here   */}
          <div className='slider m-0 p-0'>
            <HomeSlider />
          </div>
          <div className='showproduct mt-2'>
            <div className='mainsection'>
              <div className='product m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
                <select className="form-select w-100 fw-bold" aria-label="Default select example">
                  <option >Categories</option>
                  {category && category.map((row) => {
                    return (

                      <option value="1" key={row.id}>{row.categoryname}</option>
                    )
                  })}
                  
                </select>
              </div>
              <div className='product m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
                <div className="card">
                  <div className="cardimg">
                  <img src="https://themewagon.github.io/eshopper/img/cat-1.jpg" className="card-img-top img-fluid" alt="mens" />
                  </div>
                  <hr className='m-1 p-0' />
                  <div className="card-body">
                    <p className="card-text fw-bold">Men's Product</p>
                  </div>
                </div>
              </div>
              <div className='product m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
                <div className="card">
                <div className="cardimg">
                  <img src="https://themewagon.github.io/eshopper/img/cat-2.jpg" className="card-img-top img-fluid" alt="..." />
                  </div>
                  <hr className='m-1 p-0' />
                  <div className="card-body">
                    <p className="card-text fw-bold">Women's Product</p>
                  </div>
                </div>
              </div>
              <div className='product m-0 p-0' data-aos="fade-up" data-aos-duration="2000">
                <div className="card">
                <div className="cardimg">
                  <img src="https://themewagon.github.io/eshopper/img/cat-3.jpg" className="card-img-top" alt="..." />
                  </div>
                  <hr className='m-1 p-0' />
                  <div className="card-body">
                    <p className="card-text fw-bold">Baby's Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="trendyproduct">
            <h2 className='fw-bold text-center'>--- Trendy Products ---</h2>
            <div className="mainsection">
              <Row>
                {trendy && trendy.map((row) => {
                  return (
                    <div className="product mt-3" data-aos="fade-up" data-aos-duration="2000">
                      <div className="card">
                        <div className='cardimg'>
                          <img src={row.productimg} className="card-img-top" alt="..." />
                        </div>
                        <hr className='m-1 p-0' />
                        <div className="card-body m-0 p-1">
                          <h5 className="card-title">{row.productname}</h5>
                          <p className="card-text"><i className='bi bi-currency-rupee text-success'></i><b className='text-success'>{row.offerprice}</b><del className='ms-3'><i className='bi bi-currency-rupee'></i><b>{row.productprice}</b></del></p>
                        </div>
                        <hr className='m-1 p-0' />
                        <div className="card-body">
                          <button type='button' className="border-0 bg-transparent" style={{ color: "#d19c97" }}><i className='bi bi-eye-fill'></i> Detail</button>
                          <button type='button' onClick={() => AddToCart(row)} className="border-0 bg-transparent ms-4 p-0" style={{ color: "#d19c97" }}><i className='bi bi-cart-fill'></i> Add To Cart</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Row>
            </div>
          </div>
          <hr />
          <div className="trendyproduct">
            <h2 className='fw-bold text-center'>--- Just Arrived ---</h2>
            <div className="mainsection">
              <div className="mainsection">
                <Row>
                  {arrived && arrived.map((item) => {
                    return (
                      <div className="product mt-3" style={{ width: "22%" }} data-aos="fade-up" data-aos-duration="2000">
                        <div className="card">
                        <div className="cardimg">
                          <img src={item.productimg} className="card-img-top" alt="..." />
                          </div>
                          <hr className='m-1 p-0' />
                          <div className="card-body m-0 p-1">
                            <h5 className="card-title">{item.productname}</h5>
                            <p className="card-text"><i className='bi bi-currency-rupee text-success'></i><b className='text-success'>{item.offerprice}</b><del className='ms-3'><i className='bi bi-currency-rupee'></i><b>{item.offerprice}</b></del></p>
                          </div>
                          <hr className='m-1 p-0' />
                          <div className="card-body">
                            <button type='button' className="border-0 bg-transparent" style={{ color: "#d19c97" }}><i className='bi bi-eye-fill'></i> Detail</button>
                            <button type='button' onClick={() => AddToCart(item)} className="border-0 bg-transparent ms-4 p-0" style={{ color: "#d19c97" }}><i className='bi bi-cart-fill'></i> Add To Cart</button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </Row>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}
