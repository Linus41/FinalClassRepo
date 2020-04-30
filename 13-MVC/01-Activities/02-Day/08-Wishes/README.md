* **Instructions**

  * Create an app with Express, MySQL and Handlebars.

    * HINT: this app will be very similar to the app I just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

  * Create a `schema.sql` file and create the following inside of that file:

    1. Make a database called "wishes_db"

    2. Inside of that database, make a table called "wishes" which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.

    3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

  * In your `server.js` file, you will have to create two routes: a get route for `'/'` and a post route for `'/'`.

    * Render all of the wishes from the wishes table when the `'/'` get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the `'/'` route.

    * The `'/'` post route will insert the wish from the form into the wishes table and will redirect the user back to the `'/'` get route.

* **Steps** 

  * Create a package.json with npm init

  * Install express, mysql, and handlebars

  * Create a `server.js` file at the root level
  
  * Import handlebars, mysql, and express in `server.js`

  * Set up an express server in `server.js`

  * Add the handlebars boilerplate to use handlebars with express:

  ```javascript
    // Set Handlebars as the default templating engine, with the default layout set to 'main'
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
  ```

  * Create a connection to our new `wishes_db` in server.js

  * At the root level of our application, create a folder called 'views'. This is where all of our 'views' will go.

  * With 'views', create a folder called 'layouts'. This is where are layouts will go. 

  * Within '/views/layouts', create our default layout, a file named 'main.handlebars' (You can change this, if you change the above express boilerplate)]

  * Create 2 routes, as detailed above.