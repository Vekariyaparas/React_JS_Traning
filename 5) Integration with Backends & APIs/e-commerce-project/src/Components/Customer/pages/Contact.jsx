import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { BASE_URL } from '../../../api/constant'
import Swal from 'sweetalert2'

export default function Contact() {

  const form = useRef("");
  const Name = useRef("");
  const Email = useRef("");
  const Subject = useRef("");
  const Message = useRef("");
  const Navigate = useNavigate("");

  const Addcontacts= (e) =>{

    e.preventDefault();
    var insert = {
    Name: Name.current.value,
    Email: Email.current.value,
    Subject: Subject.current.value,
    Message: Message.current.value
  }

  emailjs.sendForm('service_rd7cpwh', 'template_kgbgr4m', form.current, 'aUGOU2o12aoKqBgz4')
    axios.post(BASE_URL+"contatc", insert)
    .then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Send',
        text: 'Send Data successfully'
    })
      Navigate("/")
    });
  }
  return (
    <>
      <Header />
      {/* for heading path  */}
      <div className='contactheading text-center' data-aos="fade-up" data-aos-duration="2000">
        <h1>CONTACT US</h1>
        <p>
          <span>Home</span>
          <span> - Contact</span>
        </p>
      </div>

      {/* for contact form */}
      <div className='contactform m-0 mx-auto p-0'>
        <div className='container m-0 p-0'>
          <div className='heading text-center' data-aos="fade-up" data-aos-duration="2000">
            <h1>--- Contact For Any Queries ---</h1>
          </div>
          <div className='formdetails'>
            <div className='form' data-aos="fade-up" data-aos-duration="2000">
              <form ref={form} onSubmit={Addcontacts}>
                <input type='text' placeholder='Your Name' name='Name' ref={Name} className='form-control' required />
                <input type='email' placeholder='Your Email' name='Email' ref={Email} className='form-control mt-3' required/>
                <input type='text' placeholder='Subject' name='Subject' ref={Subject}className='form-control mt-3' required />
                <textarea type='text' placeholder='Message' name='Message' ref={Message}className='form-control mt-3'required/>
                <input type='submit' value="Send Message" className='mt-3' />
              </form>
            </div>
            <div className='details' data-aos="fade-up" data-aos-duration="2000">

              <h5>Get In Touch</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint itaque temporibus, ipsum ipsam asperiores possimus deserunt at aspernatur culpa dignissimos iusto qui quis.</p>

              <h5>Store 1</h5>
              <p><i className='bi bi-geo-alt-fill'></i> 123 Street, Ahemdabad, India</p>
              <p><i className='bi bi-envelope-fill'></i> paras1@gmail.com</p>
              <p><i className='bi bi-telephone-fill'></i> +91 7600761497</p>

              <h5>Store 2</h5>
              <p><i className='bi bi-geo-alt-fill'></i> 103 Street, Rajkot, India</p>
              <p><i className='bi bi-envelope-fill'></i> paras2@gmail.com</p>
              <p><i className='bi bi-telephone-fill'></i> +91 7600761497</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
