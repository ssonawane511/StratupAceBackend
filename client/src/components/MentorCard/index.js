/** @format */

import React from "react";
import "./mentorcard.css";

const MentorCard = ({ data }) => {
  return (
    <div className='mentorCard'>
      <div className='float-right'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-shield-check'
          viewBox='0 0 16 16'>
          <path d='M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z' />
          <path d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
        </svg>
      </div>
      <div className='row'>
        <div className='col-4'>
          <img
            src='https://via.placeholder.com/150'
            className='rounded-circle img_100'
            width='100px'
            alt='profile'
          />
        </div>
        <div className='col-8'>
          <strong>
            <p>{data.fname + " " + data.lname} </p>
          </strong>
          <p>{data.description}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-layout-text-window-reverse'
            viewBox='0 0 16 16'>
            <path d='M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z' />
            <path d='M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z' />
          </svg>
          <span style={{ marginLeft: "15px" }}>
            domain: <strong> {data.MentorDetails.domain}</strong>
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-bar-chart-line-fill'
            viewBox='0 0 16 16'>
            <path d='M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z' />
          </svg>
          <span style={{ marginLeft: "15px" }}>
            Industry Type: <strong> {data.MentorDetails.industryType}</strong>
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-person-plus-fill'
            viewBox='0 0 16 16'>
            <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            <path
              fill-rule='evenodd'
              d='M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z'
            />
          </svg>
          <span style={{ marginLeft: "15px" }}>
            Number of Colleauges:{" "}
            <strong> {data.MentorDetails.numberOfColleaugues}</strong>
          </span>
        </div>
      </div>
      <div>
        <div className='float-right'>
          <a
            href={`/mentor/profile/${data.handle}`}
            target='_blank'
            rel='noreferrer'>
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
