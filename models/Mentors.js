/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MentorSchema = new Schema(
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
    description: { type: String, required: true },
    MentorDetails: {
      domain: { type: String, required: true },
      industryType: { type: String, required: true },
      patent: { type: String, required: true },
    },
    previousExperience: { type: String, required: true },
    websiteLink: { type: String, required: true },
    expertise: [String],
    updated: { type: Date, default: Date.now },
  },
  {
    collection: "Mentors",
  }
);

module.exports = Mentors = mongoose.model("Mentors", MentorSchema);
