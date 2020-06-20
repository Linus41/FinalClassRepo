# Express

In this activity, we will create a server to begin our full stack app! 

## Instructions.

* Open the [Unsolved](Unsolved) folder in terminal

* Install `express` with `npm install express`

* Create a file in Unsolved named `server.js` - this will be our server

* Inside the `server.js` file, set up an express server. 

    - Set the initial port to 3001 by default, or process.env.PORT if there is one
    - add the basic middleware for express: 
    `app.use(express.urlencoded({ extended: true }));`
    `app.use(express.json());`
    - Add a console.log once the server is listening

* Add a script to the `package.json`: 

    `"start":"node server.js"`

* Run `npm run start` - this should start your server!