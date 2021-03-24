/** @format */

import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className='container'>
      <div class='header'>
        <nav class='navbar navbar-expand-lg'>
          <a class='navbar-brand' href='#'>
            <div class='logo'>
              <img src={logo} alt='' />
            </div>
          </a>
          <button
            class='navbar-toggler collapsed'
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
              class='bi bi-chevron-double-down'
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

          <div class='navbar-collapse collapse' id='navbarTogglerDemo02'>
            <ul class='navbar-nav m-auto mt-2 mt-lg-0'>
              <li class='nav-item active'>
                <a class='nav-link' href='#home'>
                  Home{" "}
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#features'>
                  {" "}
                  Fetures
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#pricing'>
                  Pricing
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#testimonials'>
                  Testimonials
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#help'>
                  Help
                </a>
              </li>
            </ul>
            <form class='form-inline my-2 my-lg-0'>
              <button class='btn signup-btn' type='submit'>
                Sign up
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
