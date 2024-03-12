import React from "react";
import '../css/Contact.css'
import { IoIosArrowBack } from "react-icons/io";
export default function Contact() {
  return (
    <>
     <div className='container'>
        <div className="contact-container">
          <div className="contact-image">
            <img src="./imgs/ContactUs.jpg" alt="Contact" />
          </div>

          <div className="form-container">
            <div className="help-container">
              <IoIosArrowBack className='icon-ImArrowLeft'/>
              <a href='#'>Help</a>
            </div>
            <div className="us-container">
              <h1 className="contact-title">Contact Us</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name:</label><br></br>
                  <input type="text" id="fullName" className="input-field" placeholder="Joe Shmoe" />
                </div>

                <div className="form-group">
                  <label htmlFor="oubject">Object:  </label><br></br>
                  <input type="text" id="object" className="input-field" placeholder="Object" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label><br></br>
                  <textarea id="message" className="input-field" placeholder="Hello..." rows="5"></textarea>
                </div>

                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}