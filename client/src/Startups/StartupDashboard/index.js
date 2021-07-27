/** @format */

import React, { useEffect, useState, useRef } from "react";
import MentorCard from "../../components/MentorCard";
import Axios from "axios";
import "./startupDashboard.css";
import Loader from "../../components/Loader";
import wellcomeStartupSvg from "../../assets/images/wellcomeStartup.svg";
import { useAuth } from "../../utils/auth";
import { useHistory } from "react-router-dom";
import InfoBox from "../../components/InfoBox";
import startupClickGif from "../../assets/images/startupClick.gif";
const StartupDashboard = () => {
  const [mentors, setMentors] = useState(null);
  const [searchedMentors, setsearchedMentors] = useState(null);
  const { user, loading } = useAuth();
  const history = useHistory();
  const sarchFeild = useRef();
  useEffect(() => {
    if (user) {
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  useEffect(() => {
    Axios({
      method: "get",
      url: "/api/Mentors/mentors",
    }).then((res) => {
      if (res.data.success) {
        setMentors(res.data.data);
      }
    });
  }, []);

  const handleScroolToSearch = () => {
    sarchFeild.current.scrollIntoView({ behavior: "smooth", block: "center" });
    //sarchFeild.current.focus();
  };
  const handleSearch = (query) => {
    if (query !== " ") {
      Axios({
        method: "post",
        url: "/api/Mentors/find_mentor",
        data: { query },
      }).then((res) => {
        if (res.data.success) {
          setsearchedMentors(res.data.data);
        } else {
          setsearchedMentors(null);
        }
      });
    } else {
      setsearchedMentors(null);
    }
  };

  if (loading) {
    return (
      <div className='container'>
        <div className='row fullWindow justify-content-center align-items-center'>
          <Loader />
        </div>
      </div>
    );
  } else {
    return (
      <div className='container  mt-50 mb-100'>
        <div className='row wellcomeContainer align-items-center'>
          <div className='col-6'>
            <img
              className='img_100 '
              style={{ padding: "50px" }}
              src={wellcomeStartupSvg}
              alt='wellcome'
            />
          </div>
          <div className='col-6'>
            <h4>
              Wellcome <strong style={{ color: "blue" }}> {user.email}</strong>
            </h4>
            <p>
              We the team of Startup Ace brings you the best possible <br />{" "}
              services to create a foundation for your startup. <br />
            </p>
            <InfoBox
              title={"new feature"}
              note={
                "Logo Designing service, We provide best and class logos to the startups "
              }
            />
          </div>
        </div>
        <div className='row mt-50'>
          <div className='col'>
            <input
              ref={sarchFeild}
              id='search'
              className='searchFeild'
              type='text'
              placeholder='search for mentor by name   |    by industry    |     domain'
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='row mt-50'>
          {searchedMentors &&
            searchedMentors.map((mentor) => <MentorCard data={mentor} />)}
        </div>

        <div className='mt-50'>
          <h5>Mentors Recommendation</h5>
        </div>
        <div className='row d-flex justify-content-around'>
          {mentors && mentors.map((mentor) => <MentorCard data={mentor} />)}
        </div>
        <div className='row'>
          <div className='col'>
            <span
              className=' float-right '
              role='button'
              onClick={handleScroolToSearch}>
              Show more
            </span>
          </div>{" "}
        </div>
        <div className='row justify-content-center text-center mt-100'>
          <div>
            <img src={startupClickGif} width='300px' alt='noimage' />

            <p style={{ fontSize: "20px", color: "rgba(0,0,0,0.7)" }}>
              {" "}
              <br />
              Mentor make dealing problems easy &#128522;
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default StartupDashboard;
