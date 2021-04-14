/** @format */

import React from "react";
import "./StartupMentorCard.css";
const StartupMentorCard = ({ request }) => {
  console.log(request);
  return (
    <div className='startupMentorRequest'>
      <div className='row align-items-center'>
        <div className='col-4'>
          <img
            src='https://via.placeholder.com/150'
            alt='profile'
            className='img_100 rounded-circle'
          />
        </div>
        <div className='col mentorDetails'>
          <div className='mentorDetails'>
            <p>
              <strong> {request.mentor.name}</strong>{" "}
            </p>
            <span>{request.mentor.handle}</span>
          </div>
        </div>
      </div>
      <hr />

      <div className='mentorExpertises'>
        {request.mentor.expertise.map((expertise) => (
          <div className='chip'>{expertise}</div>
        ))}
      </div>
      <span>
        {" "}
        <strong>note</strong>
      </span>
      <div className='note'>{request.note}</div>
      <div className='requestStatus'>
        <strong>status :</strong>
        {request.accepted ? (
          <span style={{ color: "green" }}>Accepted</span>
        ) : (
          <span style={{ color: "red" }}>Pending</span>
        )}
      </div>
    </div>
  );
};

export default StartupMentorCard;
