import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

function Join() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hif2l0w', 'template_laelqg8', form.current, '32Hu8AFrcBZh33R5y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id='join-us'>



                {/* The Left of the Join Section */}
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>




                {/* The right of the Join Section */}
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user-email' placeholder='Enter your Email Adress'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;