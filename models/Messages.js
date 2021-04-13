/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { nanoid } = require("nanoid");
// Create Schema
const MessageSchema = new Schema(
  {
    id: { type: String, default: nanoid(10) },
    conversationId: { type: String, required: true },
    from: { type: String, required: true },
    messages: { type: String, required: true },
    isFile: { type: Boolean, default: false },
    time: { type: Date, default: Date.now, required: false },
    file: {
      extention: { type: String },
      name: { type: String },
      slud: { type: String },
    },
  },
  {
    collection: "messages",
  }
);

module.exports = messages = mongoose.model("messages", MessageSchema);
