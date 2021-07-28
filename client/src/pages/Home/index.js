/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import buildingGif from "../../assets/images/build.gif";
import { useAuth } from "../../utils/auth";
import StartupNavbar from "../../Startups/StartupNavbar";
import MentorNavbar from "../../Mentors/MentorNavbar";

// navbars
import Navbar from "../../components/Navbar";
import LogedNavbar from "../../components/LogedNavbar";

const Home = () => {
  const history = useHistory();
  const { user, claim, loading, isLogedIn } = useAuth();
  console.log(user, claim, loading, isLogedIn);
  return (
    <>
      {isLogedIn ? <LogedNavbar /> : <Navbar />}

      <div className='container'>
        {isLogedIn ? (
          claim === "startup" ? (
            <StartupNavbar />
          ) : (
            <MentorNavbar />
          )
        ) : (
          " "
        )}

        <div className='row align-items-center'>
          <div className='col-md-6'>
            <img
              className='img_100'
              style={{ padding: "30px" }}
              src={buildingGif}
              alt='hero'
            />
          </div>
          <div className='col-md-6'>
            <h1 className='heroTitle'>
              We're In The Business Of Helping
              <br /> You Start Your{" "}
              <i>
                <strong style={{ color: "#00c6eb" }}> Business</strong>
              </i>
            </h1>
          </div>
        </div>
        {/* 
        {isLogedIn ? (
          " "
        ) : (
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
        )} */}
      </div>

      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col'>
            <h5>Top Mentor Categories</h5>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-3'>
            <div className='mentor_category'>
              <h2>Marketing</h2>
              <p></p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='mentor_category'>
              <h2>Finance</h2>
              <p></p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='mentor_category'>
              <h2>Technology</h2>
              <p></p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='mentor_category'>
              <h2>Strategy</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='container'
        style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div className='row stats'>
          <div className='col-md-6'>
            <h1>
              World's no. 1 destination <br />
              for Startup's to grow
            </h1>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-sm-6 text-center'>
                <h1>
                  100<sub>+</sub>
                </h1>
                <span>Startups</span>
              </div>
              <div className='col-sm-6 text-center'>
                <h1>
                  30<sub>+</sub>
                </h1>
                <span>Mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='calltoaction text-center'>
              <h2>
                Get started with StartupAce today
                <br /> or schedule a call to know more
              </h2>
              <button
                onClick={(e) => {
                  history.push("/mentor/signup");
                }}>
                Sign up as Mentor
              </button>
              <button
                onClick={(e) => {
                  history.push("/startup/signup");
                }}>
                Sign up as Startup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
