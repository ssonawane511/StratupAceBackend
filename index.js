/** @format */

const express = require("express");
const port = process.env.PORT || 3000;

const app = express(); // this will be used in setting express

app.get("/", (req, res) => {
  console.log("request recieved at  /");
  res.json({
    status: 200,
    message: "hello wellcome to startup ace backend",
  });
});

app.listen(port, () => {
  console.log("the app litsting at http://localhost:%d", port);
});
