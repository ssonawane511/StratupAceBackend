/** @format */

import React from "react";
import "./startupservices.css";

import webDevelopmentGif from "../../assets/images/webDevelopment.gif";
import graphicsDevelopment from "../../assets/images/graphicsDevelopment.gif";
import logoDesiging from "../../assets/images/logoDesiging.gif";
const StartupServices = () => {
  return (
    <div className='container mt-50 StartupServices'>
      <div className='row align-items-center'>
        <div className='col-6'>
          <img className='img_100' src={webDevelopmentGif} alt='serviceImg' />
        </div>
        <div className='col-6'>
          <h5>Web Development</h5>
          <p>
            Build user experiences that customers love and rave about.Static
            one-page website or a dynamic app we develop it all.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'
            rel='noreferrer'>
            Register
          </a>
        </div>
      </div>
      <div className='row align-items-center'>
        <div className='col-6 text-right'>
          <h5>Graphics Development</h5>
          <p>
            Graphic design is a craft where professionals create visual content
            to communicate messages. displaying elements in interactive designs,
            to optimize the user experience.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'
            rel='noreferrer'>
            Register
          </a>
        </div>
        <div className='col-6'>
          <img className='img_100' src={graphicsDevelopment} alt='serviceImg' />
        </div>
      </div>
      <div className='row align-items-center'>
        <div className='col-6'>
          <img className='img_100' src={logoDesiging} alt='serviceImg' />
        </div>
        <div className='col-6'>
          <h5>Logo Desgining</h5>
          <p>
            A well-designed logo is more than just a creative mark. It
            facilitates brand recognition. As an ISO 9001:2015 certified logo
            design company in India, our experienced logo designers know how to
            deliver a memorable logo that noticeably stands out, ultimately
            building a unique identity.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'
            rel='noreferrer'>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartupServices;
