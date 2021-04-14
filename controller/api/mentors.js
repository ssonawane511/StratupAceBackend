/** @format */
const express = require("express");
const router = express.Router();
//const data = require("../../data/Mentors.json");
const Mentor = require("../../models/Mentors");
const admin = require("firebase-admin");
const MentorRequest = require("../../models/MentorRequest");
const Connections = require("../../models/Connections");
const Messages = require("../../models/Messages");

// @route   GET api/Mentors/me/uid
// @desc    get the startup details by uid
// @access  Public
router.get("/me/:uid", (req, res) => {
  const { uid } = req.params;
  Mentor.findOne(
    { uid: uid },
    {
      fname: 1,
      handle: 1,
      lname: 1,
      mail: 1,
      mname: 1,
    }
  )
    .then((Mentor) => {
      if (Mentor) {
        res.status(200).json({ success: true, data: Mentor });
      } else {
        res.status(200).json({ success: false, message: "no profile" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

// @route   GET api/Mentors/statupace
// @desc    get the Mentor details by handle
// @access  Public
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

// @route   POST api/Mentors/handle/statupace
// @desc    check handle exits or not
// @access  Public
router.post("/handle/:handle", (req, res) => {
  const { handle } = req.params;
  Mentor.findOne({ handle }).then((Mentor) => {
    if (Mentor) {
      res
        .status(200)
        .json({ success: false, message: "handel already exists" });
    } else {
      res.status(200).json({ success: true, message: "avaliable" });
    }
  });
});

// @route   POST api/Mentors/
// @desc    register Mentor
// @access  Public
router.post("/", (req, res) => {
  const {
    uid,
    handle,
    fname,
    mname,
    lname,
    mail,
    phone,
    dob,
    residential_Address,
    profession,
    previousExperience,
    description,
    websiteLink,
    MentorDetails: { domain, industryType, patent },
    expertise,
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
          uid,
          handle,
          fname,
          mname,
          lname,
          mail,
          phone,
          dob,
          residential_Address,
          profession,
          previousExperience,
          description,
          websiteLink,
          MentorDetails: { domain, industryType, patent },
          expertise,
        });
        newMentor.save();
        // console.log("new Mentor", newMentor);
        return res
          .status(200)
          .json({ success: true, message: "registerd successfull" });
      } catch (err) {
        if (err)
          res.status(200).json({ success: false, message: "server donw" });
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

// @route   POST api/Mentors/mentors
// @desc    register Mentor
// @access  Public

router.get("/mentors", (req, res) => {
  Mentor.find(
    {},
    {
      MentorDetails: 1,
      role: 1,
      isVerified: 1,
      handle: 1,
      fname: 1,
      mname: 1,
      lname: 1,
      mail: 1,
      phone: 1,
      dob: 1,
      residential_Address: 1,
      company_Address: 1,
      profession: 1,
      qualification: 1,
      description: 1,
    }
  ).then((Mentors) => {
    if (Mentors) {
      return res.json({ success: true, data: Mentors });
    } else {
      return res.json({ success: false });
    }
  });
});

router.post("/find_mentor", (req, res) => {
  const { query } = req.body;
  if (query === "") {
    return res.json({ success: false });
  }
  Mentor.find(
    {
      $or: [
        { fname: { $regex: query, $options: "$i" } },
        { lname: { $regex: query, $options: "$i" } },
        { handle: { $regex: query, $options: "$i" } },
        { "MentorDetails.domain": { $regex: query, $options: "$i" } },
        { "MentorDetails.industryType": { $regex: query, $options: "$i" } },
      ],
    },
    {
      MentorDetails: 1,
      role: 1,
      isVerified: 1,
      handle: 1,
      fname: 1,
      mname: 1,
      lname: 1,
      mail: 1,
      phone: 1,
      dob: 1,
      residential_Address: 1,
      company_Address: 1,
      profession: 1,
      qualification: 1,
      description: 1,
    }
  ).then((Mentors) => {
    if (Mentors) {
      return res.json({ success: true, data: Mentors });
    } else {
      return res.json({ success: false });
    }
  });
});

// @route   GET api/mentors/get_details/:handle
// @desc    get the startup details by handle
// @access  Public
router.get("/get_details/:handle", (req, res) => {
  const { handle } = req.params;
  Mentor.findOne({ handle })
    .then((Mentor) => {
      if (Mentor) {
        res.status(200).json({ success: true, data: Mentor });
      } else {
        res.status(200).json({ success: false, message: "No data" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

// @route   GET api/mentors/email
// @desc    get the startup details by handle
// @access  Public
router.post("/email", (req, res) => {
  const { email } = req.body;
  console.log(email);
  Mentor.findOne({ mail: email })
    .then((Mentor) => {
      if (Mentor) {
        res.status(200).json({ success: true, data: Mentor });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Mentor Does not Exist" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

// @route   GET api/mentors/is_profile_exist
// @desc    check mentor exist or not
// @access  Public
router.post("/is_profile_exist", (req, res) => {
  const { email } = req.body;
  console.log(email);
  Mentor.findOne({ mail: email })
    .then((mentor) => {
      if (mentor) {
        res.status(200).json({ success: true });
      } else {
        res.status(200).json({ success: false });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "technical Issue" });
    });
});

router.post("/claim_mentor", (req, res) => {
  admin
    .auth()
    .setCustomUserClaims(req.body.uid, { mentor: true })
    .then(() => {
      res.json({
        success: true,
      });
    });
});

// @route   GET api/mentors/get_requests/:uid
// @desc    get all the request
// @access  Public
router.get("/get_requests/:uid", (req, res) => {
  MentorRequest.find(
    { "mentor.uid": req.params.uid },
    { accepted: 1, date: 1, id: 1, note: 1, seen: 1, startup: 1 }
  ).then((request) => {
    if (request) {
      return res.json({ success: true, data: request });
    } else {
      return res.json({ success: false });
    }
  });
});

// @route   POST api/mentors/accept_req/:id
// @desc    accept the request
// @access  Public
router.post("/accept_req/:id", (req, res) => {
  MentorRequest.findOneAndUpdate(
    { id: req.params.id },
    { accepted: true },
    {
      new: true,
    }
  ).then((request) => {
    if (request) {
      const newConnection = new Connections();
      newConnection.mentor = request.mentor;
      newConnection.startup = request.startup;
      newConnection.pair = [request.mentor.uid, request.startup.uid];

      newConnection.save();

      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  });
});

// @route   get api/mentors/get_converstaions/:uid
// @desc    get all conversations
// @access  Public
router.get("/get_converstaions/:uid", (req, res) => {
  Connections.find(
    { pair: req.params.uid },
    {
      startup: 1,
      isLastMessgae: 1,
      lastMessage: 1,
      id: 1,
    },
    { limit: 10 }
  ).then((conections) => {
    if (conections) {
      return res.json({ success: true, data: conections });
    } else {
      return res.json({ success: false });
    }
  });
});

// @route   get api/mentors/get_messages/:id - conversation id
// @desc    get all messages
// @access  Public
router.get("/get_messages/:id", async (req, res) => {
  let conversationData = {};
  let messagesData = {};
  await Connections.findOne(
    { id: req.params.id },
    {
      startup: 1,
      id: 1,
      mentor: 1,
      isLastMessgae: 1,
      lastMessage: 1,
    }
  )
    .sort({ date: -1 })
    .then((conversation) => {
      if (conversation) {
        conversationData = conversation;
      }
    });
  await Messages.find({ conversationId: conversationData.id }, {})
    .sort({ date: -1 })
    .then((messages) => {
      if (messages) {
        messagesData = messages;
      }
    });

  if (conversationData && messagesData) {
    return res.json({
      success: true,
      data: conversationData,
      messages: messagesData,
    });
  } else {
    return res.json({ success: false });
  }
});

// @route   get api/mentors/send_messages/:id
// @desc    send messages
// @access  Public
router.post("/send_messages/:id", (req, res) => {
  const message = req.body.message;
  Connections.findOneAndUpdate(
    { id: req.params.id },
    {
      isLastMessgae: true,
      lastMessage: {
        message: message,
      },
    }
  ).then((conversation) => {
    if (conversation) {
      const newMessage = new Messages();
      newMessage.conversationId = conversation.id;
      newMessage.from = conversation.mentor.uid;
      newMessage.messages = message;
      newMessage.save();
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  });
});

module.exports = router;
