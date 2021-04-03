/** @format */

import React, { useEffect, useState } from "react";
import MentorCard from "../../components/MentorCard";
import Axios from "axios";
import "./startupDashboard.css";
import Loader from "../../components/Loader";
import wellcomeStartupSvg from "../../assets/images/wellcomeStartup.svg";
import { useAuth } from "../../utils/auth";
import { useHistory } from "react-router-dom";

const StartupDashboard = () => {
  const [mentors, setMentors] = useState(null);
  const [searchedMentors, setsearchedMentors] = useState(null);
  const { user, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
    } else {
      history.push("/");
    }
  }, [loading]);

  useEffect(() => {
    Axios({
      method: "get",
      url: "http://localhost:7000/api/Mentors/mentors",
    }).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        setMentors(res.data.data);
      }
    });
  }, []);

  const handleSearch = (query) => {
    if (query !== " ") {
      Axios({
        method: "post",
        url: "http://localhost:7000/api/Mentors/find_mentor",
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
      <div className='container  mt-50'>
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
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Sed tincidunt ipsum eu purus ultricies,
              <br />
              et pulvinar lacus rhoncus. Nulla nec.
            </p>
          </div>
        </div>
        <div className='row mt-50'>
          <div className='col'>
            <input
              className='searchFeild'
              type='text'
              placeholder='search for mentor'
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
        <div className='row'>
          {mentors && mentors.map((mentor) => <MentorCard data={mentor} />)}
        </div>
      </div>
    );
  }
};

export default StartupDashboard;
