import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className='footers'>
                <div className='container-fluid m-0 p-0'>
                    <div className='footer'>
                        <div className='row m-0 p-0'>
                            <div className='col-12 col-sm-4 col-lg-5 m-0 p-2' data-aos="fade-up" data-aos-duration="2000">
                                <a className='fs-3 m-0 p-0' href=''>
                                    <span className='p-1'>E</span>
                                    <span>Shopper</span>
                                </a>
                                <p className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam itaque, ducimus id quod incidunt adipisci quibusdam</p>
                                <span><i className='bi bi-geo-alt-fill icon'></i> Green Park, Rajkot, India</span><br />
                                <span><i className='bi bi-envelope-fill icon'></i> parasvekariya2000@gmail.com</span><br />
                                <span><i className='bi bi-telephone-fill icon'></i> +91 7600761497</span>
                            </div>
                            <div className='col-12 col-sm-4 col-lg-3 m-0 p-2' data-aos="fade-up" data-aos-duration="2000">
                                <h4>Quick Link</h4>
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/' className='fw-normal'>Home</a><br />
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/shop' className='fw-normal'>Our Shop</a><br />
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/about' className='fw-normal'>About us</a><br />
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/cart' className='fw-normal'>Shopping Cart</a><br />
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/checkout' className='fw-normal'>Checkout</a><br />
                                <i className="bi bi-chevron-right fw-bolder icon"></i><a href='/contact' className='fw-normal'>Contact us</a><br />
                            </div>
                            <div className='col-12 col-sm-4 col-lg-4 m-0 p-2' data-aos="fade-up" data-aos-duration="2000">
                                <h4>Newsletter</h4>
                                <form className="needs-validation">
                                    <input type="text" className="form-control" placeholder='Enter Your Name' id="validationCustom01" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <input type="text" className="form-control mt-3" placeholder='Enter Your Email' id="validationCustom01" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="col-12">
                                        <button className="btn form-control mt-3" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr className=''/>
                        <div className='reserves row m-0 p-0'>
                            <div className='col-10 m-0 p-0'>
                                <p>All Rights Reserved. Designed By <span className='icon'>Paras Vekariya</span></p>
                            </div>
                            <div className='col-2 m-0 p-0'>
                                <span className=''><i className="fa fa-cc-visa" style={{fontsize:"20px"}}></i></span>
                                <span className='ms-3'><i className="fa fa-cc-mastercard" style={{fontsize:"20px"}}></i></span>
                                <span className='ms-3'><i className="fa fa-cc-paypal" style={{fontsize:"20px"}}></i></span>
                                <span className='ms-3'><i className="fa fa-cc-stripe" style={{fontsize:"20px"}}></i></span>
                                <span className='ms-3'><i className="fa fa-cc-discover" style={{fontsize:"20px"}}></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
