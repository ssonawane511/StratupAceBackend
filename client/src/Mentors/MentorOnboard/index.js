/** @format */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
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
      console.log(user.email);
      setid(user.uid);
      Axios({
        method: "post",
        url: "http://localhost:7000/api/mentors/email",
        data: {
          email: email,
        },
      }).then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          //   setf_name(res.data.data.fname);
          //   setm_name(res.data.data.mname);
          //   setl_name(res.data.data.lname);
          //   setemail(res.data.data.mail);
          //   setphone(res.data.data.phone);
          //   setdate(res.data.data.dob);
          //   setr_address(res.data.data.residential_Address);
          //   setc_address(res.data.data.company_Address);
          //   setProfession(res.data.data.profession);
          //   setQualifications(res.data.data.qualification);
          //   // setwlink(res.data.data.);
          //   setdetails(res.data.data.description);
          //   setindustryType(res.data.data.startupDetails.industryType);
          //   setColleaugues(res.data.data.startupDetails.numberOfColleaugues);
          //   setdomain(res.data.data.startupDetails.domain);
          //   sethandle(res.data.data.handle);
        }
      });
    }
  }, [loading]);

  const handleFileChange = (e) => {
    setfileSizeLimit(false);
    console.log(e.target.files[0]);
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
      url: `http://localhost:7000/api/mentors/handle/${handle}`,
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
      console.log(handle);
      console.log(f_name);
      console.log(m_name);
      console.log(l_name);
      console.log(email);
      console.log(phone);
      console.log(date);
      console.log(r_address);
      console.log(details);
      console.log(Profession);
      console.log(previousExperience);
      console.log(websiteLink);
      console.log(patent);
      console.log(industryType);
      console.log(domain);
      seterror("please fill all the deatils");
      return;
    } else {
      Axios({
        method: "post",
        url: "http://localhost:7000/api/mentors/",
        data: {
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
          <img
            src='https://via.placeholder.com/150'
            className='rounded-circle'
            alt='logo'
          />
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
                class='item'
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
              <div class='product_checkboxes'>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='Marketing'
                    onChange={(e) => handleExpertise(e.target.value)}
                  />
                  <label class='form-check-label' for='inlineCheckbox1'>
                    Marketing
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox2'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Personnel'
                  />
                  <label class='form-check-label' for='inlineCheckbox2'>
                    Personnel
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox3'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='General Management'
                  />
                  <label class='form-check-label' for='inlineCheckbox3'>
                    General Management
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox4'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Technical'
                  />
                  <label class='form-check-label' for='inlineCheckbox4'>
                    Technical
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox5'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Administration'
                  />
                  <label class='form-check-label' for='inlineCheckbox5'>
                    Administration
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    name='exp[]'
                    type='checkbox'
                    id='inlineCheckbox6'
                    onChange={(e) => handleExpertise(e.target.value)}
                    value='Other'
                  />
                  <label class='form-check-label' for='inlineCheckbox6'>
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