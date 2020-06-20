import React from "react";

function Tweets(props){
    const {tweets} = props;

    return (
        <ul>
            <h1>Tweets: </h1> 
            {tweets.map(tweet => (
                <ul>{tweet.text} @ {tweet.date}</ul>
            ))}
        </ul>
    )

}

export default Tweets