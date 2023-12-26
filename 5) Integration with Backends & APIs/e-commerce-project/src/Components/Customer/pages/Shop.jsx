import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Header from '../Header'
import Footer from '../Footer'
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2';

export default function Shop() {

  const AddToCart = (atz)=>{
    axios.post(BASE_URL+"cart", atz)
    .then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Add To Cart',
        text: 'Product Added Successfully'
      })
    });
}

  // ADD DATA FROM API 
  const [shop, setshop] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL+"shop")
      .then((res) => { setshop(res.data) })
  }, [])
  return (
    <>
      <Header />
      <div className='shopheading text-center' data-aos="fade-up" data-aos-duration="2000">
        <h1>OUR SHOP</h1>
        <p>
          <span>Home</span>
          <span> - Shop</span>
        </p>
      </div>
      <div className="shopshopping m-0 p-0 mt-5 mb-5 mx-auto">
        <div className="container m-0 p-0">
          <div className="mainsection m-0 p-0">
            <div className="filtration m-0 p-3" data-aos="fade-up" data-aos-duration="2000">
              <h5 className='fw-bold'>Filter by price</h5>
              <div className='d-flex justify-content-between'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    All Price
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="1000" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    <i className='bi bi-currency-rupee'></i>499 - 
                    <i className='bi bi-currency-rupee'></i>599
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="150" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  <i className='bi bi-currency-rupee'></i>599 - 
                    <i className='bi bi-currency-rupee'></i>699
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="295" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  <i className='bi bi-currency-rupee'></i>699 - 
                    <i className='bi bi-currency-rupee'></i>799
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="246" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  <i className='bi bi-currency-rupee'></i>799 - 
                    <i className='bi bi-currency-rupee'></i>899
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="145" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  <i className='bi bi-currency-rupee'></i>899 - 
                    <i className='bi bi-currency-rupee'></i>1499
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="168" id="flexCheckChecked" readOnly />
                </div>
              </div>
              <hr />
              <h5 className='fw-bold'>Filter by color</h5>
              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  All color
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="1000" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  Green
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="168" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  Black
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="150" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  White
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="295" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  Red
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="246" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  Blue
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="145" id="flexCheckChecked" readOnly />
                </div>
              </div>
              <hr />
              <h5 className='fw-bold'>Filter by size</h5>
              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  All size
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="1000" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  XS
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="145" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  S
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="295" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  M
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="246" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  L
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="150" id="flexCheckChecked" readOnly />
                </div>
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <div className="form-check">
                  <input className="form-check-input text-light" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                  XL
                  </label>
                </div>
                <div className="form-check">
                  <input className="p-0 m-0 border-light-subtle bg-transparent" type="button" value="168" id="flexCheckChecked" readOnly />
                </div>
              </div>
            </div>
            <Row className='w-75'>
                {shop && shop.map((row) => {
                  return (
                    <div className="product mt-3" data-aos="fade-up" data-aos-duration="2000">
                      <div className="card text-center">
                      <div className="cardimg">
                        <img src={row.productimg} className="card-img-top" alt="..." />
                        </div>
                        <hr className='m-1 p-0' />
                        <div className="card-body m-0 p-1">
                          <h5 className="card-title">{row.productname}</h5>
                          <p className="card-text"><i className='bi bi-currency-rupee text-success'></i><b className='text-success'>{row.offerprice}</b><del className='ms-3'><i className='bi bi-currency-rupee'></i><b>{row.offerprice}</b></del></p>
                        </div>
                        <hr className='m-1 p-0' />
                        <div className="card-body">
                        <button type='button' className="border-0 bg-transparent" style={{ color: "#d19c97" }}><i className='bi bi-eye-fill'></i> Detail</button>
                            <button type='button' onClick={()=>AddToCart(row)} className="border-0 bg-transparent ms-4 p-0" style={{ color: "#d19c97" }}><i className='bi bi-cart-fill'></i> Add To Cart</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
