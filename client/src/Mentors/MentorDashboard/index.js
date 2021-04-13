/** @format */

import React, { useEffect, useState } from "react";
import { useAuth } from "../../utils/auth";
import mentorwellcome from "../../assets/images/mentorwellcome.svg";
import MentorRequest from "../MentorRequest";
import Loader from "../../components/Loader";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const MentorDashboard = () => {
  const { user, loading } = useAuth();
  const [request, setrequest] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (!loading)
      if (user) {
      } else {
        history.push("/");
      }
  }, [loading]);

  useEffect(() => {
    if (user) {
      Axios({
        method: "get",
        url: `/api/mentors/get_requests/${user.uid}`,
      }).then((res) => {
        if (res.data.success) {
          setrequest(res.data.data);
        }
      });
    }
  }, [user]);

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

        <div className='row mt-20'>
          <div className='col'>
            <p>All Requets</p>
            <div className='row'>
              {request.length > 0
                ? request.map((req) => <MentorRequest request={req} />)
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MentorDashboard;
