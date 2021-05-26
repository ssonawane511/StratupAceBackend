/** @format */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import avatar from "../../assets/images/avatar.png";
const MentorOnboard = () => {
  const { user, loading } = useAuth();
  const history = useHistory();
  const notyf = new Notyf();
  const [handle, sethandle] = useState("");
  const [handleError, sethandleError] = useState(null);

  // personal details
  const [f_name, setf_name] = useState("");
  const [m_name, setm_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");

  // more deatils
  const [r_address, setr_address] = useState("");
  const [details, setdetails] = useState("");

  // profession
  const [Profession, setProfession] = useState("");

  // experiences
  const [previousExperience, setpreviousExperience] = useState("");
  const [websiteLink, setwebsiteLink] = useState("");
  const [patent, setpatent] = useState("");

  // domain expertise
  const [industryType, setindustryType] = useState("");
  const [domain, setdomain] = useState("");
  const [expertise, setexpertise] = useState([]);

  //error
  const [error, seterror] = useState(null);
  const [fileSizeLimit, setfileSizeLimit] = useState(false);

  // uid
  const [id, setid] = useState(null);
  useEffect(() => {
    if (!loading) {
      const email = user.email;
      setemail(email);

      setid(user.uid);
      Axios({
        method: "post",
        url: "/api/mentors/email",
        data: {
          email: email,
        },
      }).then((res) => {
        if (res.data.success) {
          const { data } = res.data;
          setf_name(data.fname);
          setm_name(data.mname);
          setl_name(data.lname);
          setemail(data.mail);
          setphone(data.phone);
          setdate(data.dob);
          setr_address(data.residential_Address);
          setdetails(data.description);
          setProfession(data.profession);
          setpreviousExperience(data.previousExperience);
          setwebsiteLink(data.websiteLink);
          setpatent(data.MentorDetails.patent);
          setdomain(data.MentorDetails.domain);
          setexpertise(data.expertise);
          setindustryType(data.MentorDetails.industryType);
          // setColleaugues(res.data.data.startupDetails.numberOfColleaugues);
          sethandle(data.handle);
        }
      });
    }
  }, [loading]);

  const handleFileChange = (e) => {
    setfileSizeLimit(false);

    const file = e.target.files[0];
    const maxAllowedSize = 2 * 1024 * 1024;
    if (file.size > maxAllowedSize) {
      // Here you can ask your users to load correct file
      setfileSizeLimit(true);
      return;
    }
    const formData = new FormData();
    formData.append("resume", file, file.name);
  };

  const checkhandle = (handle) => {
    sethandle(handle);
    Axios({
      url: `/api/mentors/handle/${handle}`,
      method: "post",
    })
      .then((res) => {
        if (res.data.success) {
          sethandleError(false);
        } else {
          sethandleError(true);
        }
      })
      .catch((err) => {});
  };

  const entries = {
    handle: {
      value: handle,
      setState: sethandle,
    },
    f_name: {
      value: f_name,
      setState: setf_name,
    },
    m_name: {
      value: m_name,
      setState: setm_name,
    },
    l_name: {
      value: l_name,
      setState: setl_name,
    },
    email: {
      value: email,
      setState: setemail,
    },
    phone: {
      value: phone,
      setState: setphone,
    },
    date: {
      value: date,
      setState: setdate,
    },
    r_address: {
      value: r_address,
      setState: setr_address,
    },
    details: {
      value: details,
      setState: setdetails,
    },
    Profession: {
      value: Profession,
      setState: setProfession,
    },
    previousExperience: {
      value: previousExperience,
      setState: setpreviousExperience,
    },
    websiteLink: {
      value: websiteLink,
      setState: setwebsiteLink,
    },
    patent: {
      value: patent,
      setState: setpatent,
    },
    industryType: {
      value: industryType,
      setState: setindustryType,
    },
    domain: {
      value: domain,
      setState: setdomain,
    },
  };

  const handleEntry = (e) => {
    const feildId = e.target.id;
    const setFunction = entries[feildId].setState;
    setFunction(e.target.value);
    //   const setFunction = entries[feildId].setState;
    //   setFunction(e.target.value);
  };

  const handleExpertise = (value) => {
    const index = expertise.indexOf(value);
    if (index >= 0) {
      setexpertise((prevState) => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1),
      ]);
    } else {
      setexpertise([...expertise, value]);
    }
  };

  const avatarUpload = (e) => {
    console.log(e.target.files[0]);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    seterror(null);
    if (
      handle === null ||
      handle === "" ||
      handle === " " ||
      f_name === null ||
      f_name === " " ||
      f_name === "" ||
      m_name === null ||
      m_name === " " ||
      m_name === "" ||
      l_name === null ||
      l_name === "" ||
      l_name === " " ||
      email === null ||
      email === "" ||
      email === " " ||
      phone === null ||
      phone === " " ||
      phone === "" ||
      date === null ||
      date === "" ||
      date === " " ||
      r_address === null ||
      r_address === " " ||
      r_address === "" ||
      details === null ||
      details === " " ||
      details === "" ||
      Profession === null ||
      Profession === " " ||
      Profession === "" ||
      previousExperience === null ||
      previousExperience === " " ||
      previousExperience === "" ||
      websiteLink === null ||
      websiteLink === " " ||
      websiteLink === "" ||
      patent === null ||
      patent === " " ||
      patent === "" ||
      industryType === null ||
      industryType === " " ||
      industryType === "" ||
      domain === null ||
      domain === " " ||
      domain === "" ||
      expertise === null ||
      expertise === " " ||
      expertise === ""
    ) {
      seterror("please fill all the deatils");
      return;
    } else {
      Axios({
        method: "post",
        url: "/api/mentors/",
        data: {
          uid: user.uid,
          handle,
          fname: f_name,
          mname: m_name,
          lname: l_name,
          mail: email,
          phone,
          dob: date,
          residential_Address: r_address,
          description: details,
          profession: Profession,
          previousExperience,
          websiteLink,
          patent,
          MentorDetails: { domain, industryType, patent },
          expertise,
        },
      }).then((res) => {
        if (res.data.success) {
          notyf.success(res.data.message);
          history.push("/mentor/registrationSuccess");
        } else {
          notyf.error(res.data.message);
        }
      });
    }
  };
  return (
    <div className='container mt-100 mb-100 '>
      <div className='row'>
        <div className='col text-center'>
          <h3>Welcome Mentor !</h3>
          <p>please complete the profile</p>
        </div>
      </div>
      <div className='row mt-50 form_area'>
        <div className='col-3'>
          <img src={avatar} className='rounded-circle img_100' alt='logo' />
          <span>
            <label for='avtarUploadBtn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='changeAvatar bi bi-camera'
                fill='currentColor'
                viewBox='0 0 16 16'>
                <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z' />
                <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z' />
              </svg>
            </label>

            <input
              type='file'
              id='avtarUploadBtn'
              name='avatar'
              accept='image/png, image/gif, image/jpeg'
              onChange={(e) => {
                avatarUpload(e);
              }}
              className='hide'
            />
          </span>
        </div>
        <div className='col-9'>
          <input
            type='text'
            name='handle'
            id='handle'
            className='handleFeild'
            placeholder='Handle'
            value={handle}
            onChange={(e) => checkhandle(e.target.value)}
            required
          />
          {handleError ? (
            <p style={{ color: "red" }}> Handle Alredy Exist</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr className='section2' />

      <form className='signup-form' onSubmit={formSubmit}>
        {/*  */}
        <div className='container form_area'>
          {error ? (
            <p className='text-center' style={{ color: "red" }}>
              {error}
            </p>
          ) : (
            ""
          )}

          <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
            Personal Details
          </h5>
          <div className='row'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>First Name</label>
                <input
                  type='text'
                  name='f_username'
                  id='f_name'
                  className='focus'
                  placeholder='First Name'
                  onChange={handleEntry}
                  value={f_name}
                  required
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Middle Name</label>
                <input
                  type='text'
                  name='m_username'
                  id='m_name'
                  onChange={handleEntry}
                  className='focus'
                  placeholder='Middle Name'
                  value={m_name}
                  required
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Last Name</label>
                <input
                  type='text'
                  name='l_username'
                  id='l_name'
                  value={l_name}
                  onChange={handleEntry}
                  placeholder='Last Name'
                  className='focus'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='email'
                  name='emailAdress'
                  id='email'
                  value={email}
                  onChange={handleEntry}
                  className='focus'
                  placeholder='email'
                  disabled='true'
                  required
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Phone</label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  value={phone}
                  onChange={handleEntry}
                  placeholder='Phone Number'
                  className='focus'
                  required
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>DOB</label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  value={date}
                  onChange={handleEntry}
                  className='focus'
                  required
                />
              </div>
            </div>
          </div>

          <hr className='section2' />
          <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
            More Details
          </h5>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Redential Address</label>
                <textarea
                  className='form-control'
                  name='r_address'
                  id='r_address'
                  onChange={handleEntry}
                  value={r_address}
                  rows='3'
                  placeholder='Please Give Your Residential Address'
                  required></textarea>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Your description</label>
                <textarea
                  className='form-control'
                  name='details'
                  id='details'
                  value={details}
                  onChange={handleEntry}
                  rows='3'
                  required
                  placeholder='Tell us something about yourself'></textarea>
              </div>
            </div>
          </div>
          <hr className='section2' />
          <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
            Profession Details
          </h5>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <label>Profession</label>
              <select
                className='browser-default custom-select'
                name='Profession'
                id='Profession'
                onChange={handleEntry}
                value={Profession}
                required>
                <option value='' selected disabled>
                  Select Your Profession *
                </option>
                <option value='Businessman'>Businessman</option>
                <option value='Employee'>Employee</option>
                <option value='Other'>Other</option>
              </select>
            </div>

            <div className='col-md-6'>
              <label>Resume</label>
              <br />
              <input
                type='file'
                name='file'
                id='resume'
                className='item'
                accept='.pdf'
                onChange={handleFileChange}
                required=''></input>
              {fileSizeLimit ? (
                <p style={{ color: "red" }}>file size up to 2mb allowed </p>
              ) : null}
            </div>
          </div>
          <hr className='section2' />
          <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
            Previous Experiences
          </h5>
          <div className='row mt-20'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Years of Experience</label>
                <textarea
                  className='form-control'
                  name='experience'
                  id='previousExperience'
                  value={previousExperience}
                  onChange={handleEntry}
                  rows='3'
                  required
                  placeholder='Describe your Previous Experiences '></textarea>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Website Link</label>
                <textarea
                  className='form-control'
                  name='wlink'
                  id='websiteLink'
                  value={websiteLink}
                  onChange={handleEntry}
                  rows='3'
                  required
                  placeholder='profolio website link'></textarea>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Number of Patents</label>
                <textarea
                  className='form-control'
                  name='wlink'
                  id='patent'
                  value={patent}
                  onChange={handleEntry}
                  rows='3'
                  required
                  placeholder='Describe patents you have, if any'></textarea>
              </div>
            </div>
          </div>

          <hr className='section2' />

          <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
            Which domain experties you have ?
          </h5>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <select
                name='product'
                className='browser-default custom-select'
                id='industryType'
                required
                value={industryType}
                onChange={handleEntry}>
                <option value='' selected disabled>
                  Company type*
                </option>
                <option value='Product Based'>Product Based</option>
                <option value='Service Based'>Service Based</option>
              </select>
            </div>
            <div className='col-md-6'>
              <select
                name='service'
                className='browser-default custom-select'
                id='domain'
                required
                value={domain}
                onChange={handleEntry}>
                <option value='' selected disabled>
                  Company Domain *
                </option>
                <option value='Educational Sector'>Educational Sector</option>
                <option value='IT'>IT</option>
                <option value='Medical Sector'>Medical Sector</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>
          <h5 className='sectionTitle mt-50' style={{ marginBottom: "30px" }}>
            Select Area of Experties ?
          </h5>
          <div className='row mt-4'>
            <div className='col'>
              {expertise.length > 0
                ? expertise.map((e) => <span className='chip'>{e}</span>)
                : ""}
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-12'>
              <div className='product_checkboxes'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='Marketing'
                    onChange={(e) => handleExpertise(e.target.value)}
                  />
                  <label className='form-check-label' for='inlineCheckbox1'>
                    Marketing
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox2'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Personnel'
                  />
                  <label className='form-check-label' for='inlineCheckbox2'>
                    Personnel
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox3'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='General Management'
                  />
                  <label className='form-check-label' for='inlineCheckbox3'>
                    General Management
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox4'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Technical'
                  />
                  <label className='form-check-label' for='inlineCheckbox4'>
                    Technical
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox5'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Administration'
                  />
                  <label className='form-check-label' for='inlineCheckbox5'>
                    Administration
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox6'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Other'
                  />
                  <label className='form-check-label' for='inlineCheckbox6'>
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>

          <center className='mt-50'>
            <input
              className='btn btn-primary mt-20'
              type='submit'
              value='submit'
              name='submit'
            />
          </center>
        </div>
      </form>
    </div>
  );
};

export default MentorOnboard;
