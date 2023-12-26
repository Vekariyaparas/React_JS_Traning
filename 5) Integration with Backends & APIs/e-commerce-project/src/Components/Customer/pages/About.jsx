import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function About() {
  return (
    <>
      <Header />
      <div className='aboutheading text-center' data-aos="fade-up" data-aos-duration="2000">
        <h1>ABOUT US</h1>
        <p>
          <span>Home</span>
          <span> - About</span>
        </p>
      </div>
      <div className='abtshopping'>
        <div className='container m-0 p-0 mx-auto'>
          <div className='services m-0 p-0'>
            <div className='design' data-aos="fade-up" data-aos-duration="2000">
              <i class="bi bi-basket" style={{ color: "#d19c97" }}></i>
              <h5>Free Shopping</h5>
              <p>Save money online with free shipping - Browse through our free coupons, coupon codes, and cashback offers from popular brands and leading stores in India.</p>
            </div>
            <div className='design' data-aos="fade-up" data-aos-duration="2000">
              <i class="bi bi-person-gear" style={{ color: "#d19c97" }}></i>
              <h5>Support Customer</h5>
              <p>These systems enable customer service and support teams to contact technicians and send them to service a product when needed.</p>
            </div>
            <div className='design' data-aos="fade-up" data-aos-duration="2000">
              <i class="bi bi-credit-card-2-front" style={{ color: "#d19c97" }}></i>
              <h5>Secure Payments</h5>
              <p>Try to pay by credit card or via a secure payment method, and talk to the owner over the phone.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='abtvideo'>
        <div className='abtvideocontain'>
          <div className='container m-0 p-0'>
            <div className='services'>
              <div className='video border' data-aos="fade-up" data-aos-duration="2000">
              </div>
              <div className='write' data-aos="fade-up" data-aos-duration="2000">
                <h2>Stablished Sinced 2023</h2>
                <p>Company A was established in1992. Company A was established in the year 2023. Company A was established on March 4th, 2023. Company A has been in the textile business since 2023.</p>

                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='customer mx-auto mt-5 mb-5'>
        <div className='container m-0 p-0'>
          <div className='services m-0 p-0'>
            <div className='img' data-aos="fade-up" data-aos-duration="2000">
              <div className='bg-light p-3'>
                <i className='bi bi-check fs-2' style={{ color: "#d19c97" }}></i>
                <i className='fs-2 ms-3'>Quality Product</i>
              </div>
              <div className='bg-light p-3 mt-4'>
                <i className='bi bi-truck fs-2' style={{ color: "#d19c97" }}></i>
                <i className='fs-2 ms-3'>Free Shipping</i>
              </div>
              <div className='bg-light p-3 mt-4'>
                <i className='bi bi-arrow-left-right fs-2' style={{ color: "#d19c97" }}></i>
                <i className='fs-2 ms-3'>14-Day Return</i>
              </div>
              <div className='bg-light p-3 mt-4'>
                <i className='bi bi-telephone-inbound-fill fs-2' style={{ color: "#d19c97" }}></i>
                <i className='fs-2 ms-3'>24/7 Support</i>
              </div>
            </div>
            <div className='slide' data-aos="fade-up" data-aos-duration="2000">
              <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" className='bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" className='bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&w=400" className="d-block w-100 opacity-50" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className='text-dark'>Garreth smith</h5>
                      <p style={{ color: "#d19c97" }}>WEB DEVELOPER</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=400" className="d-block w-100 opacity-50" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className='text-dark'>Alon Marker</h5>
                      <p style={{ color: "#d19c97" }}>FROENT-END DEVELOPER</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400" className="d-block w-100 opacity-50" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className='text-dark'>Denial Stoke</h5>
                      <p style={{ color: "#d19c97" }}>WEB DESIGNER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
