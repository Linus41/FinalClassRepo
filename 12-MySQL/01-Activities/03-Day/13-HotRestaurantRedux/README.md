# HotRestaurant

* Description: Basic app demonstrating Node and Express with jQuery... PLUS MYSQL. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://hot-restaurant-fsf.herokuapp.com/>

![Hot Restaurant Image](Images/HotRestaurant.png)

## Instructions

* First thing, we need a table called 'tables' to hold all of our tables in our restaurant!

    - A column called name to hold the name
    - A column called email to hold the email
    - A column called phoneNumber to hold the Phone Number
    - A column called waitList that holds true/false
    - An ID column named id 

* Next, generate a seed script for the above, with at least two rows for testing!

* Following that, we need to create a mysql connection within our application. 

    - That means we need the mysql package
    - That means we need a connection made to our new DB!
    - That means we need to connect the connection!
    - We also need to pass in our connection to our API Routes!

* Once a connection has been made, we need to:

    - Change over all that JSON stuff!
    - Reimplement all routes using our database, not a JSON!

* Test

## Notes

* You WILL need a MySQL Database for this exercise.
* Current app doesn't have admin handling. We'll deal with that at a later time.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Don't use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).

## Good luck! Don't stress out

* Spend some time trying to build exposure. But don't get overwhelmed. We'll have plenty of time to come back to this!


