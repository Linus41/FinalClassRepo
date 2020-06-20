import axios from "axios";

export default {
  // Gets all tweets
  getTweets: function () {
    return axios.get("/api/tweets");
  },
  // Gets the tweet with the given id
  getTweet: function (id) {
    return axios.get("/api/tweets/" + id);
  },
  // Deletes the tweet with the given id
  deleteTweet: function (id) {
    return axios.delete("/api/tweets/" + id);
  },
  // Saves a tweet to the database
  saveTweet: function (tweetData) {
    return axios.post("/api/tweets", tweetData);
  },
  // Saves a tweet to the database
  updateTweet: function (id, tweetData) {
    return axios.put("/api/tweets" + id, tweetData);
  }
};
