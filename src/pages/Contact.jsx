import React from 'react'
import './Pages.css';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import InputBoxContact from '../components/InputBoxContact';



const Contact = () => {
  const handleSubmit=() =>{
    
  }
  const handleInputChange=() =>{

  }

  return (
    <><div><TopNav></TopNav></div>
    <div /*class="contactbody" */ >
      <section className="contact-section">
      <div className="container" >
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div>
                           <InputBoxContact type='text' name='Name'/>

                        </div>
                        <div>
                           <InputBoxContact type='email' name='Email'/>
                        </div>
                        <div>
                           <InputBoxContact type='text' name='Subject'/>
                        </div>
          
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}

                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      
                      <div className="text pl-3">
                   <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                    </p>
                    <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">+1235 2355 98</a>
                      </p>
                      <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                        <p>
                          <span>Facebook :</span>
                          <a href="facebook.com">site.facebook</a>
                        </p>

                        </div>
                        </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <div><Footer></Footer></div>
    </>
  )
}

export default Contact