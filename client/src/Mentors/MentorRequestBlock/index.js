/** @format */

import React, { useState } from "react";
import "./MentorRequestBlock.css";
import Axios from "axios";

const MentorRequestBlock = ({ request }) => {
  const [showNoteToggle, setshowNoteToggle] = useState(false);
  const [requestAccpted, setrequestAccpted] = useState(request.accepted);
  console.log(request.id);
  const handleRequestAccept = () => {
    if (request.id) {
      Axios({
        url: `/api/mentors/accept_req/${request.id}`,
        method: "post",
      }).then((res) => {
        if (res.data.success) {
          setrequestAccpted(true);
        }
      });
    }
  };

  return (
    <div className='MentorRequestBlock'>
      <div className='row'>
        <div className='col-3 '>
          <div className='row '>
            <div className='col-5 text-center'>
              <img
                src='https://via.placeholder.com/150'
                alt=''
                width='100px'
                className='rounded-circle'
              />
            </div>
            <div className='col-7'>
              <p>
                <strong>{request.startup.name} </strong>
                <br />
                <span style={{ color: "#ccc" }}>{request.startup.handle}</span>
              </p>
            </div>
          </div>
          <div className='description'>
            <span>{request.startup.description}</span>
          </div>
        </div>

        <div className='col-9 border-l'>
          <span style={{ color: "#ccc" }}>Request Note</span>
          <br />
          <p className={showNoteToggle ? "" : "hideRequest"}>{request.note}</p>
          {showNoteToggle ? (
            <span
              type='button'
              onClick={() => {
                setshowNoteToggle(false);
              }}>
              show less
            </span>
          ) : (
            <span
              type='button'
              onClick={() => {
                setshowNoteToggle(true);
              }}>
              Read more
            </span>
          )}
        </div>
      </div>
      <div className='row'>
        <div className='col'></div>
        <div className='col float-right text-right'>
          {requestAccpted ? (
            <span className=' reqAccepted '>Accepted</span>
          ) : (
            <span
              type='button'
              className='acceptRequest__btn '
              onClick={handleRequestAccept}>
              Accept Request
            </span>
          )}
          <a
            href={`/startup/profile/${request.startup.handle}`}
            target='_blank'>
            Visit profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default MentorRequestBlock;
