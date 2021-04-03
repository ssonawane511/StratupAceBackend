/** @format */

import React from "react";
import noStartup from "../../assets/images/noStartup.svg";

const StartupError = () => {
  return (
    <div className='d-flex justify-content-center align-items-center fullWindow '>
      <div className='col-4 text-center'>
        <img src={noStartup} className='img_100 ' alt='error' />
        <h3 className='text-center mt-50' style={{ color: "red" }}>
          {" "}
          Your not Registered As startup
        </h3>
        <a href='/mentor/login'>login as mentor</a>
      </div>
    </div>
  );
};

export default StartupError;
