/** @format */

import React from "react";
import "./logednavbar.css";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../utils/auth";

const LogedNavbar = () => {
  const { signOut, user } = useAuth();
  return (
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
                <a className='nav-link' href='/' rel='noreferrer'>
                  {user && user.email}
                </a>
              </li>
              {/* <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#features'>
                  {" "}
                  Fetures
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#pricing'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#testimonials'>
                  Testimonials
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#help'>
                  Help
                </a>
              </li> */}
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              {user && (
                <button
                  className='btn logout-btn'
                  type='submit'
                  onClick={signOut}>
                  logout
                </button>
              )}
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LogedNavbar;
