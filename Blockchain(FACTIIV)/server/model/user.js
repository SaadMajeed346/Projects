const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  did: String,
  Rdid: String,
  cid: String,
  score: Number,
  referals: Number,
  cids: Array,
  status: Array,
  upload: Number,
  networkCids: Array,
  cidStatus: Number,
  reviews: Array,
});

module.exports = mongoose.model("users", userSchema);
