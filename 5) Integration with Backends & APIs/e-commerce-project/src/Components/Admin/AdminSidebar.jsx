import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <>
      <div className='adminsidebar bg-light m-0 p-0 pt-5 ps-5'>
        <div className='container m-0 p-0'>
          <ul className="nav flex-column">
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Slider
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/admin-dashboard/add-slider" className="dropdown-item">Add Slider</Link></li>
                  <li><Link to="/admin-dashboard/manage-slider" class="dropdown-item">Manage Slider</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/admin-dashboard/add-trendy-products" className="dropdown-item">Add Trendy Products</Link></li>
                  <li><Link to="/admin-dashboard/manage-trendy-products" className="dropdown-item">Manage Trendy Products</Link></li>
                  <li><Link to="/admin-dashboard/add-arrived-products" className="dropdown-item">Add Arrived Products</Link></li>
                  <li><Link to="/admin-dashboard/manage-arrived-products" className="dropdown-item">Manage Arrived Products</Link></li>
                  <li><Link to="/admin-dashboard/add-shop-products" className="dropdown-item">Add Shop Products</Link></li>
                  <li><Link to="/admin-dashboard/manage-shop-products" className="dropdown-item">Manage Shop Products</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/admin-dashboard/manage-register" class="dropdown-item">Register</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/admin-dashboard/add-category" className="dropdown-item">Add Category</Link></li>
                  <li><Link to="/admin-dashboard/manage-category" className="dropdown-item">Manage Category</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/admin-dashboard/manage-contact" className="nav-link text-dark">Manage Contacts</Link>
            </li>
          </ul >
        </div >
      </div >
    </>
  )
}
