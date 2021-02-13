/** @format */

const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const startups = require("./controller/api/startups");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
// csrf = cross site access origin
// to protect from scripting attacks from other sites
const csrf = require("csurf");

// setting up the firebase admin { serviceAccountKey will include all key to connect with the firebase}
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const app = express(); // this will be used in setting express

const csrfMiddleware = csrf({ cookie: true });
// .env variables
dotenv.config();
// Use Routes
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);
app.use(cors());

app.use("/api/startups", startups);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken);
});

app.post("/api/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
  const expirsin = 60 * 60 * 24 * 5 * 1000; // 5 days
  admin
    .auth()
    .createSessionCookie(idToken, { expirsin })
    .then((sessionCookie) => {
      const option = { maxAge: expirsin, httpOnly: true };
      res.cookie("session", sessionCookie, option);
      res.end(JSON.stringify({ status: "success" }));
    })
    .catch((err) => {
      res.status(401).send("UNAUTHORISED");
    });
});

app.get("/", (req, res) => {
  console.log("request recieved at  /");
  res.json({
    status: 200,
    message: "hello wellcome to startup ace backend",
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .then(() => {
    app.listen(port, () => {
      console.log("the app litsting at http://localhost:%d", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
