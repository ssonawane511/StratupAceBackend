/** @format */

import React from "react";
import successGif from "../../assets/images/success.gif";

const MentorRegistrationSuccess = () => {
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
                <a href='/mentor/check'>Dashboard</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorRegistrationSuccess;
