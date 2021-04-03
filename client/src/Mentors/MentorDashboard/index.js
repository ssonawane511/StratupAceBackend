/** @format */

import React from "react";
import { useAuth } from "../../utils/auth";
import mentorwellcome from "../../assets/images/mentorwellcome.svg";
import Loader from "../../components/Loader";
const MentorDashboard = () => {
  const { user, loading } = useAuth();

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
              src={mentorwellcome}
              alt='wellcome'
            />
          </div>
          <div className='col-6'>
            <h4>
              Wellcome Mentor{" "}
              <strong style={{ color: "blue" }}> {user.email}</strong>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Sed tincidunt ipsum eu purus ultricies,
              <br />
              et pulvinar lacus rhoncus. Nulla nec.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default MentorDashboard;
