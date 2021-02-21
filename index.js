/** @format */

const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const startups = require("./controller/api/startups");
const mentors = require("./controller/api/mentors");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
// csrf = cross site request fogery
// to protect from scripting attacks from other sites
const csrf = require("csurf");

// setting up the firebase admin { serviceAccountKey will include all key to connect with the firebase}
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

dotenv.config();
const app = express(); // this will be used in setting express
//const csrfMiddleware = csrf({ cookie: true });
// Use Routes
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(csrfMiddleware);
app.use(cors());
app.use("/api/startups", startups);
app.use("/api/mentors", mentors);
//app.all("*", (req, res, next) => {
//  console.log(req.csrfToken());
//  res.cookie("XSRF-TOKEN", req.csrfToken());
//  next();
//});

app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
});

app.get("/home", (req, res) => {
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

// middle ware example
/*
 app.use(function (req, res, next) {
   var cookie = req.cookies.cookieName;
   if (cookie === undefined) {
     // no: set a new cookie
     var randomNumber = Math.random().toString();
     randomNumber = randomNumber.substring(2, randomNumber.length);
     res.cookie("cookieName", randomNumber, { maxAge: 900000, httpOnly: true });
     console.log("cookie created successfully");
   } else {
     // yes, cookie was already present
     console.log("cookie exists", cookie);
   }
   next(); // <-- important!
 });


 */

// admin access example

/*
 const email = "user@example.com";
 admin
   .auth()
   .getUserByEmail(email)
   .then((userRecord) => {
     // See the UserRecord reference doc for the contents of userRecord.
     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
   })
   .catch((error) => {
     console.log("Error fetching user data:", error);
   });

*/

// creating user using admin sdk

/*
 admin
   .auth()
   .createUser({
     email: "user@example.com",
     emailVerified: false,
     phoneNumber: "+11234567890",
     password: "secretPassword",
     displayName: "John Doe",
     photoURL: "http://www.example.com/12345678/photo.png",
     disabled: false,
   })
   .then((userRecord) => {
     // See the UserRecord reference doc for the contents of userRecord.
     console.log("Successfully created new user:", userRecord.uid);
   })
   .catch((error) => {
     console.log("Error creating new user:", error);
   });
 
*/
