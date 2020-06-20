import React from "react";

function TweetForm(props){
    const {handleTweetChange, submitTweet, tweetForm } = props;

    return (
        <form>
        <input
          onChange={handleTweetChange}
          name="text"
          placeholder="Tweet text (required)"
        />
        <button
          disabled={!tweetForm.text}
          onClick={submitTweet}
        >
          Submit Tweet
        </button>
      </form>
    )
}

export default TweetForm