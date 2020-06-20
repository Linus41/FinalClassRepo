# Full stack

In this activity, we will be creating a create-react-app, and serving it with our express server.

## Instructions.

* Inside Unsolved, in the terminal, run `npx create-react-app client`

* This should create a react app inside our root folder, such as Unsolved, and name it `client`

* Ignore it for now. Before we get too far, let's hook up our react app to our express server.

* Inside `server.js`, 

    - Add the line below, before the routes are imported
    ```
        // Serve up static assets (usually on heroku)
        if (process.env.NODE_ENV === "production") {
            app.use(express.static("client/build"));
        }
    ```
    - Add the following line, again before the routes are imported: 
    ```
    // If no API routes are hit, send the React app
    router.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
    ```
    - The above is especially key so tha our deployed app sends react!

* Once the client has finished being created from `create-react-app`, add to it: `react-router-dom` and `axios`

* Add the following scripts to the server's package.json: 

```    
        "start": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
        "install": "cd client && npm install"
```
* Install `concurrently` and `nodemon` as dev dependencies on the server, using the `--save-dev` flag on npm in stall. 
 
* Run `npm run start` - this should start your server! If it doesn't, start debugging! You'll notice some additional scripts in the server package.json to life easier. You should also see a react app popping up!
