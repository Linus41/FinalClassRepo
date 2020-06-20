# Controllers

In this activity, we will be adding routes for server to expose our Tweets. 

Essentially, we need to make a Tweet API. 

## Instructions.

* Inside Unsolved, create a `controllers` folder. 

* Inside `controllers`, we will create our first controller. 

* Create a new file inside `controllers` named `tweetController.js`

* Inside `tweetController.js`

    - import the models folder
    - import express router with `const router = require("express").Router();`
    - using the router, e.g., `router.get()`, implement full CRUD
        - Get All Tweet at `/api/tweets`, `GET`
        - Get One Tweet at `/api/tweets/:id`, `GET`
        - Create Tweet at `/api/tweets`, `POST`
        - Delete Tweet at `/api/tweets/:id`, `DELETE`
        - Update Tweet at `/api/tweets/:id`, `PUT`
    - Look back at Day 1's activity, or the Unit 17 for a refresher if need be. 
        
* import the tweetController into `server.js`, and use the `app.use()` syntax to attach the controller to the express app.  

* Run `npm run start` - this should start your server! If it doesn't, start debugging

* Try adding a new tweet with Postman