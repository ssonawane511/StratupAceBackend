/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import heroSvg from "../../assets/images/hero.svg";
import startupImg from "../../assets/images/startup.jpg";
import mentorImg from "../../assets/images/mentor.png";
const Home = () => {
  const history = useHistory();
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img
            className='img_100'
            style={{ padding: "30px" }}
            src={heroSvg}
            alt='hero'
          />
        </div>
        <div className='col-md-6'>
          <h1 className='heroTitle'>
            We're In The Business Of Helping
            <br /> You Start Your <strong> Business</strong>
          </h1>
        </div>
      </div>
      <div className='row mt-100'>
        <div className='col-6'>
          <div
            className=' card'
            onClick={(e) => {
              history.push("/startup/login");
            }}
            style={{
              backgroundImage: `url("${startupImg}")`,
            }}>
            <h1>login as founder</h1>
          </div>
        </div>
        <div className='col-6'>
          <div
            className=' card'
            style={{
              backgroundImage: `url("${mentorImg}")`,
            }}>
            <h1>login as Mentor</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
