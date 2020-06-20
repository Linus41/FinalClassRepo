const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  text: { type: String },
  date: { type: Date, default: Date.now }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
