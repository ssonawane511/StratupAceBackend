/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MentorRequestSchema = new Schema(
  {
    mentor: {
      uid: { type: String, required: true },
      profilePhoto: { type: String, required: false },
      name: { type: String, required: true },
      handle: { type: String, required: true },
      expertise: [String],
    },
    startup: {
      uid: { type: String, required: true },
      name: { type: String, required: true },
      profilePhoto: { type: String, required: false },
      description: { type: String, required: true },
      handle: { type: String, required: true },
    },
    note: { type: String, required: true },
    id: { type: String, required: true },
    date: { type: Date, default: Date.now },
    seen: { type: Boolean, default: false },
    accepted: { type: Boolean, default: false },
  },
  {
    collection: "MentorRequest",
  }
);

module.exports = MentorRequest = mongoose.model(
  "MentorRequest",
  MentorRequestSchema
);
