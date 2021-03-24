/** @format */
const express = require("express");
const router = express.Router();
//const data = require("../../data/volunteers.json");
const Volunteer = require("../../models/Volunteers");

// @route   GET api/Volunteers/statupace
// @desc    get the Volunteer details by handle
// @access  Public

router.get("/Volunteers", (req, res) => {
  Volunteer.find({})
  .then((Volunteers) => {
    if (Volunteers) {
      console.log(Volunteers);
      return res.status(200).json({success: true, data: Volunteers});
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
  Volunteer.findOne({ handle })
    .then((Volunteers) => {
      if (Volunteers) {
        res.status(200).json(Volunteers);
      } else {
        res.status(400).json({ message: "Volunteer Does not exists" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

// router.get("/test", (req, res) => {
//   res.json({
//     test: "Volunteer api running",
//   });
// });

// @route   POST api/Volunteers/statupace
// @desc    check handle exits or not
// @access  Public
router.post("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  Volunteer.findOne({ handle }).then((Volunteer) => {
    if (Volunteer) {
      res.status(400).json({ message: "handel already exists" });
    } else {
      res.status(200).json({ message: "avaliable" });
    }
  });
});

// @route   POST api/Volunteers/
// @desc    register Volunteer
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
    profession,
    qualification,
    description,
    VolunteerDetails: { domain },
  } = req.body;

  // this to check existing Volunteer
  Volunteer.findOne({
    $or: [
      {
        mail: mail,
      },
      {
        handle: handle,
      },
    ],
  }).then((volunteer) => {
    if (volunteer) {
      return res.status(400).json({ message: "volunteer already exists" });
    } else {
      // if not exists then save
      try {
        //console.log("Volunteere creating");
        const newVolunteer = new Volunteer({
          handle,
          fname,
          mname,
          lname,
          mail,
          phone,
          dob,
          residential_Address,
          profession,
          qualification,
          description,
          VolunteerDetails: { domain },
        });
        newVolunteer.save();
        // console.log("new Volunteer", newVolunteer);
        return res.status(200).json({ message: "registerd successfull" });
      } catch (err) {
        if (err) res.status(500).json({ message: "server down" });
      }
    }
  });
});

// @route   POST api/Volunteers/
// @desc    register Volunteer
// @access  Public
router.get("/search", async (req, res) => {
  const { handle, domain} = req.query;
  const response = [];
  if (handle) {
    await Volunteer.find({ handle: { $regex: new RegExp(handle) } })
      .then((volunteers) => {
        volunteers.map((volunteer) => {
          response.push(volunteer);
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
    await Volunteer.find({
      "VolunteerDetails.domain": { $regex: new RegExp(domain) },
    })
      .then((volunteers) => {
        volunteers.map((volunteer) => {
          response.push(volunteer);
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
