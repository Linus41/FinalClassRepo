# Front End

In this activity, we will be adding some essential things to make our lives eaiser. 

## Instructions.

* Inside Unsolved, in the `client` directory, create a folder named `utils`.

* Inside `client/utils`, create a file named `API.js`. This will be our *CLIENT* side API - what we can do to make it easy to call APIs from our client.

* Inside `API.js`, you need to: 

    - Import axios 
    - HINT: Use axios to make theses calls
    - Export a default object containing 5 methods: 
        - a method that returns an `axios.get` call to the find all tweets route
        - a method that has the parameter `id` and returns an `axios.get` call to the find one tweets route with the given id
        - a method that has the parameter `id` and returns an `axios.delete` call to the de;ete tweets route with the given id
        - a method that has the paramter `tweetdata` and returns an `axios.post` call to the create tweets route
        - a method that has the parameter `id` & `tweetdata` and returns an `axios.put` call to the update one tweets route with the given id

* Inside `client`, inside `src`, create two folders: 

    - `components`
    - `pages`

* Inside `pages`, create a new file named `home.js`

* Inside `home.js`, create a simple React functional component, exposing a single <h`>

* Inside `App.js`, add in the react-router-dom router, along with a single route on `/` to the `Home` components you just wrote. Remove everything else from the return of `App`

    - Hint: Use `BrowserRouter` and `Switch`

* Run `npm run start` - this should start your server AND client! If it doesn't, start debugging! 
