## How to run
TO run this project, clone to a local drive and then "run npm install" followed by "npm start"

## Brief
An application that utilises TMDB APIs to show a now playing list of movies that can be filtered on by rating and/or genre

## Notes
This was a fun task!

Although I don't have much react experience (probably very evident from the code), I thought it would be a good opportunity to try a new 
framework because a) it shows a bit of initiative and b) even if it's not well received, at least it's a good platform for me to do a little bit of practice.

A few points about the finished product
-   I was conscious not to over engineer the application. There's an abundance of APIs available from TMDB. In some ways, 
    you could spend weeks replicating IMDB or MetaCritic with a bunch of cool features. I may add build on this in future but for now I wanted to keep it simple!
-   I didn't spend too much time on the visuals, instead I used Material-UI framework for layout and the checkbox and slider components. 
    I'm familiar with Material from other projects but it may have been overkill here as it introduces a host of additional components that over complicated the app in the end.
-   I tried to keep the components (slider, dropdown, movie item) as generic as possible and keep the logic in the calling class. The idea here is that we might want to re-use 
    these components in the future and we want them decoupled from application logic.
    
I'm happy with the end result. While I didn't go above and beyond I'm satisfied that I achieved what was asked in the spec below. 

Thanks for taking the time to look!
Niall  

    
## Spec:
- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - popularity property).
- Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
- Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.
