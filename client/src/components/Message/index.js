/** @format */

import React from "react";
import "./chatMessage.css";

const Message = ({ message }) => {
  return (
    <>
      <div
        className={`chatbot_message ${message.id === "bot" ? "botReply" : ""}`}>
        <span>{message.message}</span>{" "}
      </div>

      <div>
        {message.data.length > 0
          ? message.data.map((item) => (
              <div className='data-profile'>
                <p className='no-margin'>
                  name :{" "}
                  <strong>
                    {item.fname} {item.lname}
                  </strong>
                </p>
                <p className='no-margin'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-award'
                    viewBox='0 0 16 16'>
                    <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                    <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
                  </svg>
                  {"  "}
                  <span>{item.profession}</span>
                </p>
                <p className='no-margin'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-envelope'
                    viewBox='0 0 16 16'>
                    <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z' />
                  </svg>
                  {"  "}
                  <span>{item.mail}</span>
                </p>
                <p className='no-margin'>
                  <a
                    href={`/mentor/profile/${item.handle}`}
                    target='_blank'
                    rel='noreferrer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-arrow-up-right'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z'
                      />
                    </svg>
                    {"  "}
                    <span>profile</span>
                  </a>
                </p>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Message;
