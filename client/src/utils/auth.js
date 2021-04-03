/** @format */

import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
// import Axios from "axios";
import firebase from "firebase";
const authContext = createContext();

function useProvideAuth() {
  const history = useHistory();
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [claim, setClaim] = useState(null);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
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

  return {
    signOut,
    user,
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
