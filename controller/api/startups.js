/** @format */
const express = require("express");
const router = express.Router();
const data = require("../../data/startups.json");
const Startup = require("../../models/Startups");
const admin = require("firebase-admin");
// @route   GET api/startups/statupace
// @desc    get the startup details by handle
// @access  Public
router.get("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  Startup.findOne({ handle })
    .then((startups) => {
      if (startups) {
        res
          .status(200)
          .json({ success: false, message: "Handle already exists" });
      } else {
        res
          .status(200)
          .json({ success: true, message: "Handle Does not exists" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

router.get("/get_details/:handle", (req, res) => {
  const { handle } = req.params;
  Startup.findOne({ handle })
    .then((startup) => {
      if (startup) {
        res.status(200).json({ success: true, data: startup });
      } else {
        res.status(200).json({ success: false, message: "No data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

// @route   GET api/startups/email
// @desc    get the startup details by handle
// @access  Public
router.post("/email", (req, res) => {
  const { email } = req.body;
  console.log(email);
  Startup.findOne({ mail: email })
    .then((startup) => {
      if (startup) {
        res.status(200).json({ success: true, data: startup });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Startup Does not Exist" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

router.post("/is_profile_exist", (req, res) => {
  const { email } = req.body;
  console.log(email);
  Startup.findOne({ mail: email })
    .then((startup) => {
      if (startup) {
        res.status(200).json({ success: true });
      } else {
        res.status(200).json({ success: false });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

router.get("/test", (req, res) => {
  res.json({
    test: "startup api running",
  });
});

// @route   POST api/startups/
// @desc    register startup
// @access  Public
router.post("/", (req, res) => {
  const {
    handle,
    fname,
    mname,
    lname,
    mail,
    phone,
    dob,
    residential_Address,
    company_Address,
    profession,
    qualification,
    perious_startup,
    description,
    startupDetails: { domain, industryType, numberOfColleaugues },
  } = req.body;

  // this to check existing startup
  Startup.findOne({
    $or: [
      {
        mail: mail,
      },
      {
        handle: handle,
      },
    ],
  }).then((startup) => {
    if (startup) {
      console.log(startup);
      return res
        .status(200)
        .json({ success: false, message: "Company already registered" });
    } else {
      // if not exists then save
      const newStartup = new Startup({
        handle,
        fname,
        mname,
        lname,
        mail,
        phone,
        dob,
        residential_Address,
        company_Address,
        profession,
        qualification,
        perious_startup,
        description,
        startupDetails: { domain, industryType, numberOfColleaugues },
      });
      newStartup.save();
      console.log("new startup", newStartup);
      return res
        .status(200)
        .json({ success: true, message: "Registered SuccessFull" });
    }
  });
});

router.post("/claim_startup", (req, res) => {
  admin
    .auth()
    .setCustomUserClaims(req.body.uid, { startup: true })
    .then(() => {
      res.json({
        success: true,
      });
    });
});

module.exports = router;
