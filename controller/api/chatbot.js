/** @format */

const express = require("express");
const router = express.Router();
const Axios = require("axios");

// @route   GET api/Mentors/me/uid
// @desc    get the startup details by uid
// @access  Publica
router.post("/chat", async (req, res) => {
  const { string } = req.body;
  let reply = {};
  console.log("api called");
  await Axios({
    method: "get",
    url: `http://127.0.0.1:5000/chatbot/${string}`,
  }).then((res) => {
    if (res.data) {
      reply = res.data;
    }
  });

  console.log(reply);
  res.json({ reply });
});

module.exports = router;
