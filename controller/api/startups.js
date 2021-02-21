/** @format */
const express = require("express");
const router = express.Router();
const data = require("../../data/startups.json");
const Startup = require("../../models/Startups");

// @route   GET api/startups/statupace
// @desc    get the startup details by handle
// @access  Public
router.get("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  console.log(handle);
  Startup.findOne({ handle })
    .then((startups) => {
      if (startups) {
        res.status(200).json(startups);
      } else {
        res.status(400).json({ message: "Startup Does not exists" });
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

// @route   POST api/startups/statupace
// @desc    check handle exits or not
// @access  Public
router.post("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  Startup.findOne({ handle }).then((startup) => {
    if (startup) {
      res.status(400).json({ message: "handel already exists" });
    } else {
      res.status(200).json({ message: "avaliable" });
    }
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
      return res.status(400).json({ message: "startup already exists" });
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
      return res.status(200).json({ message: "created" });
    }
  });
});

module.exports = router;
