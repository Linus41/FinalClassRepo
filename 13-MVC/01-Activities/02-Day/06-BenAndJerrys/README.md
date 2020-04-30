* **Instructions**

  * In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.
    
    
    ```javascript
    var icecreams = [
      {name: 'vanilla', price: 10, awesomeness: 3},
      {name: 'chocolate', price: 4, awesomeness: 8},
      {name: 'banana', price: 1, awesomeness: 1},
      {name: 'greentea', price: 5, awesomeness: 7},
      {name: 'jawbreakers', price: 6, awesomeness: 2},
      { name: "pistachio", price: 11, awesomeness: 15 }
    ];
    ```
    
    
  * Do not use MySQL for this assignment! Use the `icecreams` variable above as your data. Add the variable to your `server.js` file.

  * Using handlebars and express, create a route called `/icecream/:name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

  * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.



* **Steps** 

  * Create a package.json with npm init

  * Install express and handlebars

  * Create a `server.js` file

  * Import handlebars and express in `server.js`

  * Set up an express server in `server.js`

  * Add the handlebars boilerplate to use handlebars with express:

  ```javascript
    // Set Handlebars as the default templating engine, with the default layout set to 'main'
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
  ```

  * At the root level of our application, create a folder called 'views'. This is where all of our 'views' will go.

  * With 'views', create a folder called 'layouts'. This is where are layouts will go. 

  * Within '/views/layouts', create our default layout, a file named 'main.handlebars' (You can change this, if you change the above express boilerplate)]

  * Create 2 routes, as detailed above.