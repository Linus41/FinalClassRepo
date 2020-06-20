# Mongoose Models

In this activity, we will add models!

## Instructions.

* Inside Unsolved, create a `models` folder. 

* Inside `models`, we will create our first model. 

* Create a new file inside `models` named `tweet.js`

* Inside `tweet.js`

    - import mongoose
    - create a new Schema for a `tweet`
    - it should have *at least* the following fields
        - text of type String
        - date of type Date with a default of now
    - Make sure to create the model from the schema AND export it

* inside `models`, create an `index.js` file 
    
    - Export `tweet` from `index.js`

* Run `npm run start` - this should start your server! If it doesn't, start debugging