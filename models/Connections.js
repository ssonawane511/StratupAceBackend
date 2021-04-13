/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { nanoid } = require("nanoid");
// Create Schema
const ConnectionsSchema = new Schema(
  {
    id: { type: String, default: nanoid(10) },
    mentor: {
      uid: { type: String, required: true },
      profilePic: { type: String, required: false },
      name: { type: String, required: true },
      handle: { type: String, required: true },
      expertise: [String],
    },
    startup: {
      uid: { type: String, required: true },
      name: { type: String, required: true },
      profilePic: { type: String, required: false },
      description: { type: String, required: true },
      handle: { type: String, required: true },
    },
    pair: [String],
    isLastMessgae: { type: Boolean, default: false },
    lastMessage: {
      from: { type: String, required: false },
      message: { type: String, required: false },
      time: { type: Date, default: Date.now, required: false },
      isFile: { type: Boolean, required: false },
      file: {
        extention: { type: String },
        name: { type: String },
        slud: { type: String },
      },
    },
    updated: { type: Date, default: Date.now, required: false },
  },
  {
    collection: "connections",
  }
);

module.exports = connections = mongoose.model("connections", ConnectionsSchema);
