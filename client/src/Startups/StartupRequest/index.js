/** @format */

import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useAuth } from "../../utils/auth";
import Loader from "../../components/Loader";
import StartupMentorCard from "../StartupMentorCard";
import noNewRequest from "../../assets/images/noNewRequest.gif";
const StartupRequest = () => {
  const { user, loading } = useAuth();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user) {
      Axios({
        method: "get",
        url: `/api/startups/get_requests/${user.uid}`,
      }).then((res) => {
        if (res.data.success) {
          setRequests(res.data.data);
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
      <div className='container'>
        <div className='row'>
          <div className='col d-flex flex-wrap '>
            {requests.length > 0
              ? requests.map((request) => (
                  <StartupMentorCard request={request} />
                ))
              : ""}
          </div>
        </div>
        <div className='col  '>
          {requests.length > 0 ? (
            ""
          ) : (
            //  requests.map((request) => <StartupMentorCard request={request} />)
            <div className='text-center'>
              <img src={noNewRequest} className='' width='400px' />
              <p>No Requests</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default StartupRequest;
