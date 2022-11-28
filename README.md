# Movies Web App

A simple app to show a list of movies with the possibility to add, delete, and edit a movie

## The process

The process I usually follow when starting a new project

1. [Define the goals (why?)](#define-the-goals-why)
2. [Define the requirements (what?)](#define-the-requirements-what)
3. [Research the tech](#research-the-tech)
4. [Define the solution concept (how?)](#define-the-solution-concept-how)
5. [Break the solution into small steps](#break-the-solution-into-small-steps)
6. [Start lean](#start-lean)
  
### Define the goals (why?)
The goal is to express technical knowledge and skills by building a web app 

### Define the requirements (what?)
- Should use vue.js and firebase
- Should use agile process with user stories and CI
- Should have a clear presentation of the process in the readme file
- each story should be a behavior story with a unit test
- Should have a movies database
    - should show a list of movies
    - should be able to add a movie
        - Should validate if the title is not correct
    - should be able to delete a movie
    - should be able to edit a movie
        - Should validate if the title is not correct
    - Should look nice with styles

### Research the tech
Research how vue.js and firebase work roughly. The details will follow when implementing the features

### Define the solution concept (how?)
Define the main components and the data structure. Also, define how these components interact with each other 
<img src="https://user-images.githubusercontent.com/3858873/204241428-a95c295a-b9e5-490c-a34a-865019e28e3d.jpeg" width="500">

### Break the solution into small steps
These are the actual Github issues as shown [here](https://github.com/madil4/movies/issues?q=is%3Aissue+is%3Aclosed)

### Start lean
Start implementing the issues in a continuous integration way using Netlify.com hosting services which provide a staging deployment at each pull request and production deployment at each master merge as shown [here](https://github.com/madil4/movies/pull/18)

Live Demo at [movies.mohamedadil.com](https://movies.mohamedadil.com/)
