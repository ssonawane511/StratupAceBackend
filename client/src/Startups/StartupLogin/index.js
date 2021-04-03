/** @format */

import React, { useState } from "react";
import loginSVG from "../../assets/images/login.svg";
import "./startuplogin.css";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
const StartupLogin = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [succesLogin, setSuccesLogin] = useState(null);

  const errorcodes = {
    "auth/user-not-found": " User does not found",
    "auth/wrong-password": " wrong password",
    "auth/invalid-email": "Invalid Email",
  };

  const loginWithGmailAndPassword = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setErrorCode(null);
        setSuccesLogin(true);
        history.push("/startup/check");
      })
      .catch((error) => {
        setErrorCode(error.code);
      });
  };

  return (
    <div className='container'>
      <div className='row align-items-center justify-content-center fullWindow'>
        <div className='col-md-4'>
          <div className='loginWindow'>
            <div className='text-center'>
              <img className='img_100' src={loginSVG} alt='loginImg' />
              <h4>Startup Login</h4>
            </div>
            {errorCode ? (
              <p className='mt-20' style={{ color: "red" }}>
                {errorcodes[`${errorCode}`]}
              </p>
            ) : (
              " "
            )}
            {succesLogin ? (
              <p className='mt-20' style={{ color: "green" }}>
                login successfull
              </p>
            ) : (
              " "
            )}
            <form onSubmit={loginWithGmailAndPassword}>
              <div className='input-group flex-nowrap mt-20'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='addon-wrapping'>
                    @
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='email'
                  aria-label='email'
                  aria-describedby='addon-wrapping'
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className='input-group flex-nowrap mt-20'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='addon-wrapping'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-shield-lock'
                      viewBox='0 0 16 16'>
                      <path d='M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z' />
                      <path d='M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z' />
                    </svg>
                  </span>
                </div>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  aria-label='password'
                  aria-describedby='addon-wrapping'
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className='mt-20 text-center'>
                <button className='btn btn-primary' type='submit'>
                  loign
                </button>
              </div>
              <div className='mt-20 text-center'>
                <p style={{ color: "#ccc" }}>
                  Don't have an account?{" "}
                  <a href='/startup/signup' style={{ color: "blue" }}>
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupLogin;
