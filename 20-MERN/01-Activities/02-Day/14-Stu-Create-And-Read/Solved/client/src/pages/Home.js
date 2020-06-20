import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Tweets from "../components/Tweets";
import TweetForm from "../components/TweetForm";

function Home() {
    const [tweets, setTweets] = useState([])
    const [tweetForm, setTweetForm] = useState({ text: "  " })

    useEffect(() => {
        loadTweets();
    }, [])

    const loadTweets = () => {
        API.getTweets().then(res => {
            setTweets(res.data);
        });
    }

    const createTweet = (tweet) => {
        API.saveTweet(tweet).then(res => {
            setTweetForm({text:""});
            loadTweets();
        })
    }

    const handleTweetChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        setTweetForm({...tweetForm, [name]: value})
    }

    const submitTweet = (event) => {
        event.preventDefault();
        createTweet(tweetForm);

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, world! Start Tweeting!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <TweetForm 
                            handleTweetChange={handleTweetChange}
                            submitTweet={submitTweet}
                            tweetForm={tweetForm}
                        />
                    </div>
                    <div className="col-md-6">
                        <Tweets tweets={tweets}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;