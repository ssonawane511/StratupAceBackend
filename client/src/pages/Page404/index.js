/** @format */

import React from "react";
import SVG404 from "../../assets/images/404.svg";
const Page404 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center fullWindow '>
      <div className='col-4 text-center'>
        <img src={SVG404} className='img_100 ' alt='error' />
        <h3 className='text-center mt-50' style={{ color: "red" }}>
          {" "}
          Opps not page found !!
        </h3>
        <a href='/'>Go to Homepage</a>
      </div>
    </div>
  );
};

export default Page404;
