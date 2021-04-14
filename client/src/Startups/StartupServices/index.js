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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae nulla et urna pretium tempor. Aenean tempor, dui ac lobortis
            suscipit, dui nibh hendrerit urna.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'>
            Register
          </a>
        </div>
      </div>
      <div className='row align-items-center'>
        <div className='col-6 text-right'>
          <h5>Graphics Development</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae nulla et urna pretium tempor. Aenean tempor, dui ac lobortis
            suscipit, dui nibh hendrerit urna.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae nulla et urna pretium tempor. Aenean tempor, dui ac lobortis
            suscipit, dui nibh hendrerit urna.
          </p>
          <a
            href='https://forms.gle/u35abBbK9n51htnw8'
            target='_blank'
            className='serviceRegister__btn'>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartupServices;
