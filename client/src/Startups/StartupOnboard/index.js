/** @format */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./startupOnboard.css";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
import { useAuth } from "../../utils/auth";
import Loader from "../../components/Loader";
const StartupOnboard = () => {
  const { user, loading } = useAuth();

  const notyf = new Notyf();
  const history = useHistory();
  const [f_name, setf_name] = useState("");
  const [m_name, setm_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const [r_address, setr_address] = useState("");
  const [c_address, setc_address] = useState("");
  const [Profession, setProfession] = useState("");
  const [Qualifications, setQualifications] = useState("");
  const [wlink, setwlink] = useState("");
  const [details, setdetails] = useState("");
  const [product, setproduct] = useState("");
  const [industryType, setindustryType] = useState("");
  const [service, setservice] = useState("");
  const [Colleaugues, setColleaugues] = useState(0);
  const [error, seterror] = useState(null);
  const [domain, setdomain] = useState("");
  const [handle, sethandle] = useState("");
  const [handleError, sethandleError] = useState(null);
  const [id, setid] = useState(null);
  useEffect(() => {
    if (!loading) {
      const email = user.email;
      setemail(email);

      setid(user.uid);
      Axios({
        method: "post",
        url: "/api/startups/email",
        data: {
          email: email,
        },
      }).then((res) => {
        if (res.data.success) {
          setf_name(res.data.data.fname);
          setm_name(res.data.data.mname);
          setl_name(res.data.data.lname);
          setemail(res.data.data.mail);
          setphone(res.data.data.phone);
          setdate(res.data.data.dob);
          setr_address(res.data.data.residential_Address);
          setc_address(res.data.data.company_Address);
          setProfession(res.data.data.profession);
          setQualifications(res.data.data.qualification);
          // setwlink(res.data.data.);
          setdetails(res.data.data.description);
          setindustryType(res.data.data.startupDetails.industryType);
          setColleaugues(res.data.data.startupDetails.numberOfColleaugues);
          setdomain(res.data.data.startupDetails.domain);
          sethandle(res.data.data.handle);
        }
      });
    }
  }, [loading]);

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
    c_address: {
      value: c_address,
      setState: setc_address,
    },
    Profession: {
      value: Profession,
      setState: setProfession,
    },
    Qualifications: {
      value: Qualifications,
      setState: setQualifications,
    },
    wlink: {
      value: wlink,
      setState: setwlink,
    },
    details: {
      value: details,
      setState: setdetails,
    },
    product: {
      value: product,
      setState: setproduct,
    },
    service: {
      value: service,
      setState: setservice,
    },
    Colleaugues: {
      value: Colleaugues,
      setState: setColleaugues,
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
  };

  const formSubmit = (e) => {
    e.preventDefault();
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
      c_address === null ||
      c_address === " " ||
      c_address === "" ||
      Profession === null ||
      Profession === " " ||
      Profession === "" ||
      Qualifications === null ||
      Qualifications === " " ||
      Qualifications === "" ||
      wlink === null ||
      wlink === " " ||
      wlink === "" ||
      details === null ||
      details === " " ||
      details === " " ||
      Colleaugues === null ||
      Colleaugues === " " ||
      Colleaugues === "" ||
      industryType === null ||
      industryType === " " ||
      industryType === "" ||
      domain === null ||
      domain === " " ||
      domain === ""
    ) {
      seterror("please fill all the deatils");
      return;
    } else {
      Axios({
        method: "post",
        url: "/api/startups/",
        data: {
          uid: user.uid,
          handle: handle,
          fname: f_name,
          mname: m_name,
          lname: l_name,
          mail: email,
          phone: phone,
          dob: date,
          residential_Address: r_address,
          company_Address: c_address,
          profession: Profession,
          qualification: Qualifications,
          perious_startup: wlink,
          description: details,
          startupDetails: {
            domain: domain,
            industryType: industryType,
            numberOfColleaugues: Colleaugues,
          },
        },
      }).then((res) => {
        if (res.data.success) {
          notyf.success(res.data.message);
          history.push("/startup/registrationSuccess");
        } else {
          notyf.error(res.data.message);
        }
      });
    }
  };

  const checkhandle = (handle) => {
    sethandle(handle);
    Axios({
      url: `/api/startups/handle/${handle}`,
      method: "get",
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

  if (loading) {
    return (
      <div className='row fullWindow justify-content-center align-items-center'>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className='container mt-100 mb-100 '>
        <div className='row form_area'>
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
                    value={email}
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
                  <label>company Registartion date</label>
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
              Address Details
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
                  <label>Company Address</label>
                  <textarea
                    className='form-control'
                    name='c_address'
                    id='c_address'
                    value={c_address}
                    onChange={handleEntry}
                    rows='3'
                    placeholder='Please Give Your Company Address'
                    required></textarea>
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
                <label>Qualification</label>
                <select
                  className='browser-default custom-select'
                  name='Qualifications'
                  id='Qualifications'
                  value={Qualifications}
                  onChange={handleEntry}
                  required>
                  <option value='' selected disabled>
                    Qualifications *
                  </option>
                  <option value='Post Graduate'>Post Graduate</option>
                  <option value='Under Graduate'>Under Graduate</option>
                  <option value='Diploma'>Diploma</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            </div>
            <hr className='section2' />
            <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
              Previous Experiences
            </h5>
            <div className='row mt-20'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Previous Start up Website Link</label>
                  <textarea
                    className='form-control'
                    name='wlink'
                    id='wlink'
                    value={wlink}
                    onChange={handleEntry}
                    rows='3'
                    required
                    placeholder='Any previous startups?. If yes, then please provide website links'></textarea>
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
              What is your Startup domain?
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

            <hr className='section2' />
            <h5 className='sectionTitle' style={{ marginBottom: "30px" }}>
              Any Partners ?
            </h5>

            <div className='row mt-20'>
              <div className='col-md-12'>
                <label for='aoe'>Number of Colleaugues</label>

                <div className='product_checkboxes'>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      name='coll[]'
                      type='radio'
                      id='Colleaugues'
                      onChange={handleEntry}
                      required
                      value='0-5'
                    />
                    <label className='form-check-label' for='inlineCheckbox1'>
                      0-5
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      name='coll[]'
                      type='radio'
                      id='Colleaugues'
                      onChange={handleEntry}
                      value='5-10'
                    />
                    <label className='form-check-label' for='inlineCheckbox2'>
                      5-10
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      name='coll[]'
                      type='radio'
                      id='Colleaugues'
                      onChange={handleEntry}
                      value='10-15'
                    />
                    <label className='form-check-label' for='inlineCheckbox3'>
                      10-15
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      name='coll[]'
                      type='radio'
                      id='Colleaugues'
                      onChange={handleEntry}
                      value='15+'
                    />
                    <label className='form-check-label' for='inlineCheckbox4'>
                      15+
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <center>
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
  }
};

export default StartupOnboard;
