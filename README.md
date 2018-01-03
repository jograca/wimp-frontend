### Wimp Full Stack Project

GoForCode Homework Project for January 2nd

In this project we created a single-page, one component Angular Front-End to interact with the WIMP APIs created in this project:

https://github.com/jograca/wimp

Details: 

* Front-End accepts user entered fields and sends json to the backend API, which upadtes the Database with new records for both Movies and Actors
* Front-End also displays all entries in the Movies and Actors Database from the connected API
* New Movie or Actor entries will add to the list in real-time when submitted

#### Deployment Details

Front-End:

https://wimp-app.herokuapp.com/

Connects to this Back-End:

https://wimp-app-jon-g4c-indy-nov.herokuapp.com/

#### TO-DO Items

* Form validation on the front-end
* Fix Swagger API Documentation for the back-end
* Change to a multi-component Angular App (3 components: Navigation, Movies and Actors)

#### Notes

* Travis CI Config for front-end: pm i webpack --save-dev
