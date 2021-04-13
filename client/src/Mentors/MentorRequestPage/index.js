/** @format */

import React, { useEffect, useState } from "react";
import MentorRequestBlock from "../MentorRequestBlock";
import { useAuth } from "../../utils/auth";
import Axios from "axios";
const MentorRequestPage = () => {
  const { user, loading } = useAuth();
  const [request, setrequest] = useState([]);

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

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {request.length > 0
            ? request.map((req) => <MentorRequestBlock request={req} />)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default MentorRequestPage;
