# React Full-Stack

In this activity we will add functionality to the React Books application

## Instructions

* Open the [Unsolved](Unsolved) folder and install dependencies by running `npm install` at the project root.

* Start the app by running `npm start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).

* Open [App.js](Unsolved/client/src/App.js).


### Part 1

* Let's add an edit functionality to the Detail page for books! 

* We already have the route, so we just need to add functioanality to the front-end

* HINT:

    * Look at the create - update is create/read together, in a way.
    

### Part 2

* Let's add author functionality: 

* We will need an: 

  * Authors Page with:
  
    * Create Form 

    * List of All Authors, where I can delete them - IF I DO, THIS SHOULD DELETE ALL THEIR BOOKS!

  * Author Detail Page: 

    * A List of their books (stub)

* This means we will need an Author model:

  * Give it the following properties: 

    * name of type String, not null

* This also means we will need a controller and routes for this!



### Part 3

* Let's add author/book relationships!

* This is the hard one!

* On our model, define the relationship where ONE Author can have MANY Books

* On our controllers, we will want to send Author information with books. 

* On the front-end, add:

  * When you add a book, I want also to be able to add the author. Add a dropdown with all available authors to the book form on Books.

  * Display 'By: [Author]' on the Books list, and the Book Details pages. 



* Ask the instructor or a TA if you're having difficulty understanding any of the activity requirements.
