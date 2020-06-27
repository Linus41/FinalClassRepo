const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Enter a post title"
    },
    body: {
      type: String,
      trim: true,
      required: "Enter a post body"
    },
    date: {
      type: Date,
      default: () => new Date()
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
