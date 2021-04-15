/** @format */

import React from "react";
import noStartup from "../../assets/images/noStartup.svg";
const MentorError = () => {
  return (
    <div className='d-flex justify-content-center align-items-center fullWindow '>
      <div className='col-4 text-center'>
        <img src={noStartup} className='img_100 ' alt='error' />
        <h3 className='text-center mt-50' style={{ color: "red" }}>
          {" "}
          Your not Registered As Mentor
        </h3>
        <a href='/startup/login'>login as startup</a>
      </div>
    </div>
  );
};

export default MentorError;
