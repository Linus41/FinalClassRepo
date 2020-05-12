## IDEA
Movie Club is a way for users to:
- share their favorite movies, 
- write reviews of movies, 
- Auto recommends
- Rate (stars?) movies
- forum? about movies,
- takes in your votes/reviews, recommend new movies to you
- Link to external sources about movie (Affiliate links, harkins AMC?)

## Phase One (what can I get done in 2 weeks)

- Have users (can login), who can then:
     - recommend movies 
     - review movies, 
- Movies have:
     - actors, 
     - genre 
     - and movie data

## PHASE II

Movies should have cast/creew



Models: 
- User
    * First Name/Last Name
    * Email
    * Password
    * ~~Location?~~
    * Username
    * ~~Avatar/Profile Picture?~~
- Movie
    * title
    * synopsis
    * [Many] Genre
    * [Many] Actors
- Genre
    * Name
    * [Many] Movies
- Actor
    * Name
    * Birthdate
    * Current location
    * [Many] Movies
- Recommendation
    * [1 - belongsTo] User
    * [1 - belongsTo] Movie
    * Title
    * Body
- Review
    * [1] User
    * [1] Review
    * Rating

Rec


Rating
5
User
David
Movie
Matrix


Rec


Rating
4
User
Prab
Movie
Matrix

	



Ttile
The Matrix
The Notebook
Alien
Synopsis
…. Neo does stuff
… he wrote her every day
meow
Genre
[Action, Thriller, Cyberpunk?]
[Romance, Horror, Comedy, Drama]
[Action, SciFi, Thriller, Horror]
Actors
[KReeves, Laurence Fishbourne, Carrie Ann Moss]
[Ryan Gosling, Rachel McAdams]
[SIgnoury Weaver, a cat]










