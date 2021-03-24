/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const VolunteerSchema = new Schema(
  {
    role: { type: String, default: 400 },
    handle: { type: String, required: true },
    fname: { type: String, required: true },
    mname: { type: String, required: true },
    lname: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    mail: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    phone: { type: Number, required: true },
    dob: { type: Date, required: false },
    residential_Address: { type: String, required: true },
    profession: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
    VolunteerDetails: {
      domain: { type: String, required: true },
    },
    updated: { type: Date, default: Date.now },
  },
  {
    collection: "Volunteers",
  }
);

module.exports = Volunteers = mongoose.model("Volunteers", VolunteerSchema);
