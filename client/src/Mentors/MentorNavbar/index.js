/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
const MentorNavbar = () => {
  const { myDetails } = useAuth();
  return (
    <div className='container-fluid background-white'>
      <hr />
      <nav className='navbar navbar-expand-lg'>
        <div className='navbar-collapse collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav m-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to={`/mentor/check`}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/mentor/chat/new`}>
                Messgaes
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/mentor/request`}>
                Requets <sup>new</sup>
              </Link>
            </li>
            <li className='nav-item'>
              {myDetails ? (
                <a
                  className='nav-link'
                  href={`/mentor/profile/${myDetails.handle}`}
                  target='_blank'>
                  Public-Profile
                </a>
              ) : (
                ""
              )}
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to={`/mentor/profile`}>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/mentor/settings`}>
                {" "}
                settings
              </Link>
            </li> */}
          </ul>
          <form className='form-inline my-2 my-lg-0'></form>
        </div>
      </nav>
    </div>
  );
};

export default MentorNavbar;
