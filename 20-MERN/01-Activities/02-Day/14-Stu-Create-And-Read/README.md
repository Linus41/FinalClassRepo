# Front End

In this activity, we will be both adding the ability to READ and CREATE our Tweets.

## Instructions.

### Part 1: 

* Install bootstrap by adding the CDN link to the `client/public/index.html` 

* Inside `client/pages/Home.js`, we are now going to add functionality to create read our tweets!

* First, create a div with the class `container`, a div with class `row`, and then two columns.

* Inside the first column, we are going to render a form. Inside the second, we are going to render a list of tweets. However, our `Home` page will be our higher order component, our HOC, our brain. So `Home` will load all the tweets, and pass them down to a child. `Home` will have the form state, and pass it down to a child, so that `Home` can send it off to an API when someone clicks submit

* In `Home.js`,

    - import useState and useEffect.
    - create two states using the useState hook;
        - `tweets` will be where we store tweets back from the API. Set the initial value to an empty array.
        - `tweetForm` will be where we store data our users enter on a form, so that we can send back to the API to add a new tweet. Set the initial value to: `{text: ""}`
    - create a function call `loadTweets` that goes out to the API, and loads all tweets. Then, once it has tweets, it should put them into `tweets`
    - create a function called `createTweet` that sends a `tweet` to the API to create a tweet, then calls load tweets.
    
* We now have so basic things set up, so lets start adding functionality

* Create an imitation of `componentDidMount` with useEffect, so that on component load, `loadTweets` is called. 

* Load the page, and inspect the state with `ReactDevTools` - we should have nothing, because we aren't sending anything yet because the are no tweets! You can try to make your own with Postman or Insomnia, if you'd like to test this. 


### Part 2: 

* Inside `components`, create a new functional component called `Tweets`. We will use this show all of our tweets. 

* Inside `Tweets`, we are going to assume it will be passed a prop `tweets` because that's what our state is above, in `Home`, and it will be full of `tweets`, because it is called `tweets`. Because we want to give `Tweets` the component `tweets` full of tweets to display. 

* In the return of `Tweets`, use the map function to render all the tweets in a list from `props.tweets`. Remember: Tweets have a `text` and a `date` field

* Now, lets hook this up. Inside the right column of `Home.js`, add in the `Tweets` component, passing in `tweets` state as the prop `tweets` to it.

* This should show your tweets - if you have any!

### Part 3:

* Lets add a form now. 

* Create a new component `TweetForm.js` inside `components`

* But wait! We will need a way to give TweetForm the ability to modify our `tweetForm` up in Home!

* Inside home, write a function called `handleTweetChange` that takes an `event` parameter, and from that event we need to: 
    - The text value should be in `target.value` - so let's do the nice way. 
    - The `setTweetForm` should be passed TWO things: a destructure of the `tweetForm`, and the key/value pair, that we pull from `event.target.value` and `event.target.name`

* Now inside `TweetForm.js`, create a form with a single input that has the name `text`. On the input named `text`, add an onChange property with the value `props.handleTweetChange`

* Where did that come from! Well, now you must put `TweetForm` inside our first column in `Home`, and then pass it the prop `handleTweetChange`. 

* Finally, we need our submit button! Create a function that calls createTweet, and make it fire when someone clicks a submit button in form!