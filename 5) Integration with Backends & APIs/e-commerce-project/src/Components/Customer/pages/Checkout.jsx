import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { BASE_URL } from '../../../api/constant'
import axios from 'axios';

export default function Checkout() {

  const [cart, setcart] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL+"cart")
      .then((res) => { setcart(res.data) });
  }, []);


  return (
    <>
      <Header />
      <div className='shopheading text-center' data-aos="fade-up" data-aos-duration="2000">
        <h1>CHECKOUT</h1>
        <p>
          <span>Home</span>
          <span> - Checkout</span>
        </p>
      </div>
      <div className="checkout mt-5 mb-5">
        <div className="container m-0 p-0">
          <div className="mainsection">
            <div className="form" data-aos="fade-up" data-aos-duration="2000">
              <h3>Billing Address</h3>
              <form action="">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="paras c vekariya" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Mobile No</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="0123456789" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Address</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Country</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="india" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">State</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Gujrat" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">City</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rajkot" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Pin Code</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="360070" />
                </div>
              </form>
            </div>
            <div className="layout">
              <div className="card rounded-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="card-header carthead">
                  <h4 className='fw-bold'>Order Total</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h5>Products</h5>
                    {cart && cart.map((term) => {
                      return (

                        <div className='d-flex justify-content-between'>
                          <p>{term.productname}</p>
                          <p><i className='bi bi-currency-rupee'></i><b>{term.offerprice}</b></p>
                        </div>
                      )
                    })}

                  </li>
                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <p>Subtotal</p>
                      <p><i className='bi bi-currency-rupee'></i><b>
                        {cart.map(term => term.offerprice * term.productqut).reduce((total, value) => (parseInt(total) + parseInt(value)), 0)}
                      </b></p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p>Shipping</p>
                      <p><i className='bi bi-currency-rupee'></i><b>00</b></p>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <p className='fw-bold fs-4'>Total</p>
                      <p className='fw-bold fs-4'><i className='bib bi-currency-rupee'></i><b>{cart.map(term => term.offerprice * term.productqut).reduce((total, value) => (parseInt(total) + parseInt(value)), 0)}</b></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card rounded-0 mt-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="card-header carthead">
                  <h4 className='fw-bold'>Payment</h4>
                </div>
                <ul className="list-group list-group-flush p-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Paypal
                    </label>
                  </div>
                  <div className="form-check mt-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Direct Check
                    </label>
                  </div>
                  <div className="form-check mt-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Bank Transfer
                    </label>
                  </div>
                  <hr />
                  <div className='cartbtn text-center'>
                    <button type="button" className="btn rounded-0">Place To Order</button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
