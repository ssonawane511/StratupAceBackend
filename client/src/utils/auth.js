/** @format */

import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import firebase from "firebase";
const authContext = createContext();

function useProvideAuth() {
  const history = useHistory();
  const [user, setuser] = useState(null);
  const [lodding, setlodding] = useState(true);

  // let count = 0;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setuser(user.providerData[0]);
        setlodding(false);
      } else {
        history.push("/");
      }
    });
  }, []);

  return {
    user,
    lodding,
    isLogedIn: user ? true : false,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
