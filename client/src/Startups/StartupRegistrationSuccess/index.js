/** @format */

import React from "react";
import "./StartupRegistrationSuccess.css";
import successGif from "../../assets/images/success.gif";

const StartupRegistrationSuccess = () => {
  return (
    <div>
      <div className='container '>
        <div className='row successcontainer'>
          <div className='col'>
            <div className='successWindow'>
              <div className='text-center'>
                <img className='img_100' src={successGif} alt='success' />
              </div>
              <div className='text-center'>
                <h3>Your registration is SuccessFull</h3>
                <a href='/startup/check'>Dashboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupRegistrationSuccess;
