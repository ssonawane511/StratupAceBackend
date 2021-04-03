/** @format */

import React, { useState, useEffect } from "react";
import "../../assets/style/profile.css";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/Loader";
import nouser from "../../assets/images/nouser.svg";
import { useAuth } from "../../utils/auth";
import Success from "../../components/Success";

const MentorProfile = () => {
  const { user } = useAuth();
  let { handle } = useParams();
  const [details, setdetails] = useState(null);
  const [loading, setloading] = useState(true);
  const [connentModalShow, setconnentModalShow] = useState(false);
  const [requestNote, setRequestNote] = useState("");
  const [requestSendSuccess, setrequestSendSuccess] = useState(false);
  useEffect(() => {
    if (handle) {
      Axios({
        method: "get",
        url: `http://localhost:7000/api/mentors/get_details/${handle}`,
      }).then((res) => {
        if (res.data.success) {
          setdetails(res.data.data);
          setloading(false);
        } else {
          setloading(false);
        }
      });
    }
  }, []);

  const handleConnect = () => {
    setconnentModalShow(!connentModalShow);
  };

  const handleConnectionSubmit = (e) => {
    e.preventDefault();
    console.log(requestNote);
    console.log(handle);
    console.log(user.uid);
    setrequestSendSuccess(true);
  };

  if (loading) {
    return (
      <div className='container'>
        <div className='row fullWindow justify-content-center align-items-center'>
          <Loader />
        </div>
      </div>
    );
  } else {
    if (details) {
      return (
        <div className='container mt-50'>
          <div className='row'>
            <div className='col text-center'>
              <img
                className='rounded-circle'
                width='150px'
                height='150px'
                src='https://via.placeholder.com/150'
                alt='profileimage'
              />
              <div className=''>
                <h5 className='mt-20'>
                  {details.fname} {details.mname} {details.lname}
                </h5>
                <span>mentor</span>
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='contact-section'>
              <div className='profile-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  class='bi bi-phone'
                  viewBox='0 0 16 16'>
                  <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z' />
                  <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                </svg>
                <span>Phone</span>
              </div>
              <div className='profile-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-envelope'
                  viewBox='0 0 16 16'>
                  <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z' />
                </svg>
                <span>Email</span>
              </div>
              {connentModalShow ? (
                <div className='profile-icon connect' onClick={handleConnect}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-shield'
                    viewBox='0 0 16 16'>
                    <path d='M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z' />
                  </svg>
                  <span>profile</span>
                </div>
              ) : (
                <div className='profile-icon connect' onClick={handleConnect}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    class='bi bi-plus-circle-fill'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                  </svg>
                  <span>Connect Now</span>
                </div>
              )}
              <div className='profile-icon connect'>
                <a href={details.websiteLink} traget='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-globe2'
                    viewBox='0 0 16 16'>
                    <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z' />
                  </svg>
                  <span>website</span>
                </a>
              </div>
            </div>
            {connentModalShow ? (
              <div className='flex-grow-1 p-10'>
                <div className='row mt-50'>
                  <div className='col'>
                    <h6>Expertise in</h6>
                    {details.expertise.length > 0
                      ? details.expertise.map((expertise) => (
                          <div className='chip'>{expertise}</div>
                        ))
                      : ""}
                  </div>
                </div>
                <div className='row mt-50'>
                  {requestSendSuccess ? (
                    <div className='col text-center'>
                      <Success />
                    </div>
                  ) : (
                    <div className='col'>
                      <span>Please add a note for Requets</span>
                      <form onSubmit={handleConnectionSubmit}>
                        <textarea
                          class='form-control requetNote'
                          rows='4'
                          onChange={(e) =>
                            setRequestNote(e.target.value)
                          }></textarea>
                        <button className='btn btn-primary mt-20 ml-auto d-block'>
                          send
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='flex-grow-1 p-10'>
                <div className='row mt-50'>
                  <div className='col'>
                    <h6>Expertise in</h6>
                    {details.expertise.length > 0
                      ? details.expertise.map((expertise) => (
                          <div className='chip'>{expertise}</div>
                        ))
                      : ""}
                  </div>
                </div>
                {/* aboout  and profession  */}
                <div className='row mt-20'>
                  <div className='col-8 '>
                    <div className='profile-block '>
                      <span>About me</span>
                      <h5 className='mt-20'>
                        hello i am {details.fname} {details.mname}{" "}
                        {details.lname}
                      </h5>
                      <p className='text-justify mt-20'>
                        {details.description}
                      </p>
                    </div>
                  </div>
                  <div className='col-4 '>
                    <div className='profile-block primay-block'>
                      <span>My startup</span>
                      <div className='icon-text mt-20'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          class='bi bi-speedometer2'
                          viewBox='0 0 16 16'>
                          <path d='M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z' />
                          <path
                            fill-rule='evenodd'
                            d='M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z'
                          />
                        </svg>
                        <p>
                          <strong>{details.MentorDetails.domain}</strong>
                        </p>
                      </div>
                      <div className='icon-text '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          class='bi bi-list-stars'
                          viewBox='0 0 16 16'>
                          <path
                            fill-rule='evenodd'
                            d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z'
                          />
                          <path d='M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z' />
                        </svg>
                        <p>
                          <strong>{details.MentorDetails.industryType}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* profession and previous experience */}
                <div className='row mt-50'>
                  <div className='col-4 '>
                    <div className='profile-block primay-block'>
                      <span>Profession</span>
                      <div className='icon-text mt-20'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          class='bi bi-award'
                          viewBox='0 0 16 16'>
                          <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                          <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
                        </svg>
                        <p>
                          <strong>{details.profession}</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-8 '>
                    <div className='profile-block '>
                      <span>Perious Experience</span>

                      <p className='text-justify mt-20'>
                        {details.previousExperience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* patent and  */}
                <div className='row mt-20 mb-100'>
                  <div className='col'>
                    <div className='profile-block '>
                      <span>patents</span>
                      <p className='text-justify mt-20'>
                        {details.MentorDetails.patent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='row fullWindow justify-content-center align-items-center'>
            <div className='col-4 text-center'>
              <img src={nouser} className='img_100' alt='no result' />
              <h6 className='mt-5'>No Result</h6>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default MentorProfile;
