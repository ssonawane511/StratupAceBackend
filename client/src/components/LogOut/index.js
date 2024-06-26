/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
const LogOut = () => {
  const { user, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  return <div></div>;
};

export default LogOut;
