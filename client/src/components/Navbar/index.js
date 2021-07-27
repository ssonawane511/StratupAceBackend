/** @format */

import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className='container-fluid background-white'>
      <div className='container'>
        <div className='header'>
          <nav className='navbar navbar-expand-lg'>
            <a className='navbar-brand' href='/'>
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
            </a>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-toggle='collapse'
              data-target='#navbarTogglerDemo02'
              aria-controls='navbarTogglerDemo02'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-chevron-double-down'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'></path>
                <path
                  fill-rule='evenodd'
                  d='M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'></path>
              </svg>
            </button>

            <div className='navbar-collapse collapse' id='navbarTogglerDemo02'>
              <ul className='navbar-nav m-auto mt-2 mt-lg-0'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#home'>
                    Home{" "}
                  </a>
                </li>
              </ul>
              <form className='form-inline my-2 my-lg-0'>
                <button
                  className='btn signup-btn'
                  onClick={(e) => {
                    history.push("/mentor/login");
                  }}>
                  Mentor Login
                </button>
                <button
                  className='btn signup-btn'
                  onClick={(e) => {
                    history.push("/startup/login");
                  }}>
                  Startup Login
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
