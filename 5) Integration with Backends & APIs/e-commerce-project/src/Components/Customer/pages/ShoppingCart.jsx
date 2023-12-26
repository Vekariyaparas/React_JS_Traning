import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import { Button, Form, InputGroup,  } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { BASE_URL } from '../../../api/constant'
import { Link, useNavigate } from 'react-router-dom';

export default function ShoppingCart() {

  const [cart, setcart] = useState([0])
  const Navigate = useNavigate("");

  // GET DATA FOR API 
  function displaydata() {
    axios.get(BASE_URL+"cart")
      .then((res) => { setcart(res.data) })
  }

  useEffect(() => {
    displaydata();
  }, [])

  // DELETE DATA FOR API 
  const Deletdata = (id) => {
    axios.delete(BASE_URL+`cart/${id}`)
      .then((res) => {
        console.warn(res)
        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: 'Delet Successfully',
        })
        Navigate('/cart')
        displaydata();
      })
  }

  return (
    <>
      <Header />
      <div className='shopheading text-center' data-aos="fade-up" data-aos-duration="2000">
        <h1>SHOPPING CART</h1>
        <p>
          <span>Home</span>
          <span> - Shopping Cart</span>
        </p>
      </div>
      <div className="shoppingcart mt-5 mb-5">
        <div className="container m-0 p-0">
          <div className="maisection">
            <div className="tablecantain" data-aos="fade-up" data-aos-duration="2000">
              <table className="table table-striped">
                <thead>
                  <tr className=''>
                    <th className='size' scope="col">Product</th>
                    <th className='size' scope="col">Price</th>
                    <th scope="col" className='w-25'>Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.map((term, cartindex) => {
                    return (

                      <tr className=''>
                        <td scope="row" className='d-flex'><img src={term.productimg} style={{ width: "40px" }} /> <p className='ms-2'>{term.productname}</p></td>
                        <td><i className='bi bi-currency-rupee'></i><i>{term.offerprice}</i></td>
                        <td>
                        <InputGroup className='quantity d-flex'>
                            <Button variant='primary' className="btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center"  style={{ width: "30px" }}onClick={() => {
                              const Incqty = cart.map((term, index) => {
                                return cartindex === index ? {...term, productqut : parseInt(term.productqut) - 1} : term
                              })
                              setcart(Incqty)
                            }}>
                              <i className="bi bi-dash"></i>
                            </Button>
                            <Form.Control
                              value={term.productqut}
                              className='rounded-0 ms-0 text-center qty'
                              readOnly
                              minLength="0" style={{ width: "40px !important" }}
                            />
                            <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center"style={{ width: "30px" }} onClick={() => {
                              const Incqty = cart.map((term, index) => {
                                return cartindex === index ? {...term, productqut : parseInt(term.productqut) + 1} : term
                              })
                              setcart(Incqty)
                            }}>
                              <i className="bi bi-plus-lg"></i>
                            </button>
                          </InputGroup>
                        </td>
                        <td>{term.offerprice * term.productqut}</td>
                        <td><button type='button' onClick={() => Deletdata(term.id)} className='border-0 bg-danger p-1 ps-3 pe-3 rounded text-light text-center'><i className='bi bi-trash'></i></button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="layout">
              <div className="input-group mb-3" data-aos="fade-up" data-aos-duration="2000">
                <input type="text" className="form-control rounded-0" placeholder="coupon code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2">Apply coupon</button>
              </div>
              <div className="card rounded-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="card-header carthead">
                  <h4>Cart Summary</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className='d-flex justify-content-between'>
                      <p>Subtotal</p>
                      <p><i className='bi bi-currency-rupee'></i><b>{cart.map(term => term.offerprice * term.productqut).reduce((total, value) => (parseInt(total) + parseInt(value)), 0)}</b></p>
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
                    <div className='cartbtn text-center'>
                      <Link to="/checkout" className='btn rounded-0'>Process To Checkout</Link>
                    </div>
                  </li>
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
