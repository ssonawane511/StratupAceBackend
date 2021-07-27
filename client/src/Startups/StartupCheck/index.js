/** @format */

import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import Axios from "axios";
import { useAuth } from "../../utils/auth";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
const StartupCheck = () => {
  const history = useHistory();
  const { user, loading, claim } = useAuth();
  useEffect(() => {
    if (!loading)
      if (claim === "startup") {
        if (user) {
          Axios({
            method: "post",
            url: "/api/startups/is_profile_exist",
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
      } else {
        firebase.auth().signOut();
        history.push("/startup/error");
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return (
    <div className='container'>
      <div className='row fullWindow justify-content-center align-items-center'>
        <Loader />
      </div>
    </div>
  );
};

export default StartupCheck;
