import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/constant'
import { Link } from 'react-router-dom'

export default function Header() {

  const [itemcount, setitemcount] = useState(0)

  useEffect(()=>{
    axios.get(BASE_URL+"cart")
    .then((res)=>{setitemcount(res.data)})
  }, [])

  return (
    <>
      {/* topbar start here  */}
      <div className='topbarspace'>
        <div className='container topbar m-0 p-0 mx-auto'>
          <div className='d-flex justify-content-between'>
          <h5 className='pt-2'>+91 7600761497</h5>
          <h5 className='pt-2'>
                <a href=''><span className='bi bi-facebook ms-2 text-dark'></span>
                  <span className='bi bi-whatsapp ms-2 text-dark'></span>
                  <span className='bi bi-instagram ms-2 text-dark'></span>
                </a>
              </h5>
          </div>
        </div>
      </div>
      {/* topbar over here  */}

      {/* navbar start here  */}
      <nav className='navbar navbar-expand-md bg-white mx-auto'>
        <div className='container mx-auto m-0 p-0'>
          <a className='navbar-brand' href='#'>
            <span className='p-1'>E</span>
            <span>Shopper</span>
          </a>
          <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#collapseiderbar">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='collapseiderbar'>
            <ul className='navbar-nav'>
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop' className="nav-link" >Shop</Link>
              </li>
              <li className="nav-item dropdown m-0 p-0">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to='/about' className="dropdown-item" >About Me</Link>
                  </li>
                  <li>
                    <Link to='/cart' className="dropdown-item" >Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to='/checkout' className="dropdown-item" >Checkout</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to='/login' className="dropdown-item" >Login</Link>
                  </li>
                  <li>
                    <Link to='/register' className="dropdown-item" >Register</Link>
                  </li>
                </ul>
              </li>
              <li className='navbar-item'>
                <Link to='/cart' className='navbar-link'>
                  <button type="button" className="btn border">
                    <i className='bi bi-cart-fill'></i> <span className="badge bg-light text-dark">{itemcount.length}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
