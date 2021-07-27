/** @format */

import React from "react";
import "./mentorRequest.css";
const MentorRequest = ({ request }) => {
  return (
    <div className='mentorRequest'>
      <div className='row '>
        <div className='col-5 text-center'>
          <img
            src={request.startup.profilePhoto}
            alt=''
            width='100px'
            className='rounded-circle'
          />
        </div>
        <div className='col-7  '>
          <p>
            <strong>{request.startup.name} </strong>
            <br />
            <span style={{ color: "#ccc" }}>{request.startup.handle}</span>
          </p>
          <div className='text-ellipsis'>
            <span className=''> {request.startup.description}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col'>
          <span style={{ color: "#ccc" }}>Request Note</span>
          <br />
          <p>{request.note}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <a
            href={`/startup/profile/${request.startup.handle}`}
            className='float-right'
            target='_blank'
            rel='noreferrer'>
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorRequest;
