## How to run
TO run this project, clone to a local drive and then "run npm install" followed by "npm start"

## Brief
An application that utilises TMDB APIs to show a now playing list of movies that can be filtered on by rating and/or genre
    
## Spec:
- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - popularity property).
- Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
- Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.
