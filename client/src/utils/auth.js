/** @format */

import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import firebase from "firebase";
const authContext = createContext();

function useProvideAuth() {
  const history = useHistory();
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [claim, setClaim] = useState(null);
  const [myDetails, setMyDetails] = useState(null);
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setloading(false);
        setloading(true);
        history.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // let count = 0;
  useEffect(() => {
    setloading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.startup) {
            setClaim("startup");
          } else if (idTokenResult.claims.mentor) {
            setClaim("mentor");
          }
          setuser(user.providerData[0]);
          setloading(false);
        });
      } else {
        setClaim(null);
        setuser(null);

        // history.push("/");
      }
    });
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (claim === "startup") {
      Axios({
        method: "get",
        url: `/api/startups/me/${user.uid}`,
      }).then((res) => {
        if (res.data.success) {
          console.log(res.data.data);
          setMyDetails(res.data.data);
        }
      });
    } else if (claim === "mentor") {
      Axios({
        method: "get",
        url: `/api/mentors/me/${user.uid}`,
      }).then((res) => {
        if (res.data.success) {
          setMyDetails(res.data.data);
        }
      });
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    signOut,
    user,
    myDetails,
    claim,
    loading,
    isLogedIn: user ? true : false,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
