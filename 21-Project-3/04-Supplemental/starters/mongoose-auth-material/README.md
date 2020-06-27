# Project 3 Starter Kit - Mongoose and MaterialUI

The Project 3 Starter Kit is an opinionated, preconfigured MVC-style application w/ React intended to satisfy the stated requirements and additional requirements of Project 3.

#### Note: This is the one using Mongoose and MaterialUI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them


```
Node.js 
a local instance of Mongo
an active internet connection
```

### Installing

A step by step series of examples that tell you how to get a development env running

First, install all dependencies through npm or yarn. Make sure you use one or the other, if you are going to use yarn. 

```
npm install
```
OR 

```
yarn 
```

Once you have down that; you are ready to run the server, with:

```
npm run start
```

## Running the tests

Currently, the application has no tests

## Structure

The structure of the application, as produced, is replicated below, with folders marked with ```-``` and files marked with ```*```. Below this, please find the detailed description of each file and what it is doing. 

```
- client
    - public
        * favicon.ico
        * index.html
        * logo192.png
        * logo512.png
        * manifest.json
        * robots.txt
    - src
        - components
            * Error.js
            * index.js
            * LoginForm.js
            * Navigation.js
            * PostForm.js
            * PostTable.js
            * SignupForm.js
        - pages
            * Auth.js
            * Forum.js
            * Home.js
            * index.js
            * Requirements.js
        - utils
        * App.js
        * index.js
        * logo.svg
    * .gitignore
    * package.json
    * README.md
- config
    - middleware
        * isAuthenticated.js
    * config.json
    * passport.js
- controllers
    - api
        * index.js
        * postsController.js
        * usersController.js
    * authController.js
    * htmlController.js
    * index.js
- cypress
    - fixtures
    - integration
        - _base
            * _canary.js
            * login.js
            * signup.js
        - forum
            * layout.js
            * posts.s
    - plugins
        * index.js
    - support
        * commands.js
        * index.js
- db
    * schema.sql
- models
    * index.js
    * post.js
    * user.js
- public
    - stylesheets
        * style.css
    * favicon.ico
* package.json
* README.md
* server.js
```

### Structure Explanation

- **client** - Our React App/ our client
    - **public** - Our public folder, for static files 
        * **favicon.ico** - REPLACE THIS 
        * **index.html** - Add CDN'ed stylesheets here
        * **logo192.png** - REPLACE THIS
        * **logo512.png** - REPLACE THIS
        * **manifest.json** - Use this to make it a PWA if you want!
        * **robots.txt** - For SEO purposes
    - **src** - Our react code
        - **components** - Our presentational components
            * **Error.js** - For showing errors 
            * **index.js** - Exports all presentational components for easy import
            * **LoginForm.js** - The login form
            * **Navigation.js** - Our navbar
            * **PostForm.js** - Our new post form
            * **PostTable.js** - A Table of all posts 
            * **SignupForm.js** - The user signup form
        - pages
            * **Auth.js** - The page for handling login/signup
            * **Forum.js** - The forum page for showing and adding posts
            * **Home.js** - The home page
            * **index.js** - Export all pages for easy import
            * **Requirements.js** - The requirements page
        - utils
            * **API.js** - All APIs. Uses private methods to reduce code bloat
        * **App.js** - Our App! Notice, it handles the holding of user data and private routes.  
        * index.js
        * logo.svg
    * .gitignore
    * package.json
    * README.md
- **config**: Configuration. This contains the passport configuration, the middleware for checking if a user is authenticated, and the Sequelize connection configuration 
    - **middleware**: For the authentication middleware and any other Express middleware we might need.
        * **isAuthenticated.js**: This is the authentication middleware. Do not change unless you need to change how passwords work, which is unlikely. It simply checks to see if passport has stored a user in the request; it only does this if someone is logged in. 
    * **passport.js**: This is how we are handling actually authenticating. Firstly, it relies on there being a User model with an email and password column. If you remove that, this will break. Barring that, if you wish to go into detail, look up how the ```passport-local``` strategy works with ```passport```. We will talk about this more in the back third of class. 
- **controllers**: Our controllers. All of them are using Express router to make them as clean as possible. 
    - **api**: API controllers, aka, data controllers. This is where we want to stick anything talking directly to a model, that doesn't have a page attached to it. AKA, APIs.
        * **index.js** This is where you *register* an API controller. First import it, then attach it to a route. This is so we only have to write what path the controller is on *once*. 
        * **postsController.js**: An example RESTful controller for Posts. Notice how the only part of the route we configure is the params and final part of it. This is because the rest of the routing is handled in the index files.   
        * **usersController.js**; An example RESTful controller for User.
    * authController.js: Authentication controller to enable authentication. Exposes four routes, read up on them to understand, and if you change the layout or structure of the login/signup pages you may need to change this. 
    * **index.js**: The master registry for all controllers. It registers auth and api controllers. You likely *won't* need to modify this, but if you add a whole new set of controllers or another top level one, you will need to add it here. This is imported by ```server.js```.  
- models
    * index.js
    * **post.js**: An example model 
    * **user.js**: Our user model. Change this at your own risk. It has two key fields, ```email``` and ```password```. All of authentication relies on this. It also uses bcryprt.js to encrypt and check our passwords. 
* package.json: The package.json
* README.md: This file.
* **server.js**: Our entry point. It handles all the top level imports, hooking up our express instance with all the middleware, including authentication and the router, and then initializes a sequelize connection and the server listening. 


## How to modify:

### I want to add a model.

Add the model to the ```models``` folder. Add it to the ```index.js``` file

### I want to add an API controller to expose data

Based on the model, you need to: 
- Create a ```modelController``` in the ```controllers/api``` folder. 
- Add all routes you need. 
- Register the controller in the ```controllers/api/index.js``` file. 

### I want to add a page

- Create a new page in `client/src/pages`
- Add a route to App.js file in `client/src/App.js`

You may also need to: 
- Get some data
- Add some javascript
- Add some css

## Deployment

Please follow the configuration guide for MERN or Sequelize apps. You will need to: 

- Configure a Heroku application
- Add an instance of JawsDB or mLab
- Pass the config var ```NODE_ENV = production``` in the deployed version. 

## Built With

* [Express](https://expressjs.com/) - Express, our web framework
* [MaterialUI](https://material-ui.com/) - Our other choice of React component library, for a different look
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Our react component library, to give us a bootstrap look
* [Morgan](https://www.npmjs.com/package/morgan) - Morgan, an improved logging library that works nicely with Express. Now, all requests to our server get logged out in the console. 
* [Sequelize](https://sequelize.org/) - Sequelize, our ORM OR
* [Mongoose](https://mongoosejs.org/) - Mongoose, our ORM
* [Passport](https://www.npmjs.com/package/passport) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 
* [Passport-Local](https://www.npmjs.com/package/passport-local) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 

## License

This project is licensed under the MIT License.

