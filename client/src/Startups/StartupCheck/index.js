/** @format */

import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import Axios from "axios";
import { useAuth } from "../../utils/auth";
import { useHistory } from "react-router-dom";
const StartupCheck = () => {
  const history = useHistory();
  const { user, lodding } = useAuth();
  useEffect(() => {
    if (user) {
      Axios({
        method: "post",
        url: "http://localhost:7000/api/startups/is_profile_exist",
        data: {
          email: user.email,
        },
      }).then((res) => {
        if (res.data.success) {
          history.push("/startup/dashboard");
        } else {
          history.push("/startup/onboard");
        }
      });
    }
  }, [lodding]);
  return (
    <div className='container'>
      <div className='row fullWindow justify-content-center align-items-center'>
        <Loader />
      </div>
    </div>
  );
};

export default StartupCheck;
