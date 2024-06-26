/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
const StartupNavbar = () => {
  const { myDetails } = useAuth();
  return (
    <div className='container-fluid'>
      <hr />
      <nav className='navbar navbar-expand-lg'>
        <div className='navbar-collapse collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav m-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to={`/startup/check`}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/startup/chat/new`}>
                Messgaes
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/startup/request`}>
                Requets <sup>new</sup>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`/startup/services`}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              {myDetails ? (
                <a
                  className='nav-link'
                  href={`/startup/profile/${myDetails.handle}`}
                  target='_blank'
                  rel='noreferrer'>
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

export default StartupNavbar;
