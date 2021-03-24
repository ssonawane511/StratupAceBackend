/** @format */
const express = require("express");
const router = express.Router();
//const data = require("../../data/Mentors.json");
const Mentor = require("../../models/Mentors");

// @route   GET api/Mentors/statupace
// @desc    get the Mentor details by handle
// @access  Public

router.get("/mentors", (req, res) => {
  Mentor.find({})
  .then((Mentors) => {
    if (Mentors) {
      console.log(mentors);
      return res.status(200).json({success: true, data: Mentors});
    }
    else{
      return res.status(500).json({message: "No records found!"});
    }
  })
  .catch((err) => {
    res.error(500).json({error: "Error occured!"});
  })
});

router.get("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  console.log(handle);
  Mentor.findOne({ handle })
    .then((Mentors) => {
      if (Mentors) {
        res.status(200).json(Mentors);
      } else {
        res.status(400).json({ message: "Mentor Does not exists" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

router.get("/test", (req, res) => {
  res.json({
    test: "Mentor api running",
  });
});

// @route   POST api/Mentors/statupace
// @desc    check handle exits or not
// @access  Public
router.post("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  Mentor.findOne({ handle }).then((Mentor) => {
    if (Mentor) {
      res.status(400).json({ message: "handel already exists" });
    } else {
      res.status(200).json({ message: "avaliable" });
    }
  });
});

// @route   POST api/Mentors/
// @desc    register Mentor
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
    description,
    MentorDetails: { domain, industryType, numberOfColleaugues },
  } = req.body;

  // this to check existing Mentor
  Mentor.findOne({
    $or: [
      {
        mail: mail,
      },
      {
        handle: handle,
      },
    ],
  }).then((mentor) => {
    if (mentor) {
      return res.status(400).json({ message: "Mentor already exists" });
    } else {
      // if not exists then save
      try {
        //console.log("mentore creating");
        const newMentor = new Mentor({
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
          description,
          MentorDetails: { domain, industryType, numberOfColleaugues },
        });
        newMentor.save();
        // console.log("new Mentor", newMentor);
        return res.status(200).json({ message: "registerd successfull" });
      } catch (err) {
        if (err) res.status(500).json({ message: "server donw" });
      }
    }
  });
});

// @route   POST api/Mentors/
// @desc    register Mentor
// @access  Public
router.get("/search", async (req, res) => {
  const { handle, domain, industry } = req.query;
  const response = [];
  if (handle) {
    await Mentor.find({ handle: { $regex: new RegExp(handle) } })
      .then((mentors) => {
        mentors.map((mentor) => {
          response.push(mentor);
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          message: "server error",
        });
      });
  }

  if (domain) {
    console.log("domain searching");
    await Mentor.find({
      "MentorDetails.domain": { $regex: new RegExp(domain) },
    })
      .then((mentors) => {
        mentors.map((mentor) => {
          response.push(mentor);
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          message: "server error",
        });
      });
  }
  if (industry) {
    console.log("domain searching");
    await Mentor.find({
      "MentorDetails.industryType": { $regex: new RegExp(industry) },
    })
      .then((mentors) => {
        mentors.map((mentor) => {
          response.push(mentor);
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          message: "server error",
        });
      });
  }

  if ((await response.length) !== 0) {
    res.send({ response, results: response.length });
  } else {
    res.send({
      message: "no results",
    });
  }
});

module.exports = router;
