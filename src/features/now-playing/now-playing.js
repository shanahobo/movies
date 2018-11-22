import React from 'react';
import MovieItem from '../../components/movie-item';
import StepSlider from '../../components/filter-slider';
import MultipleSelect from '../../components/filter-select';
import { Typography, Grid} from '../../modules/material-module'; // Material imports used for layout & styling
import { getGenres, getNowPlaying} from './now-playing.api'; // APIs

/**
 *  This component has some important jobs:
 *      1) Fetch the genre & now playing data
 *      2) Render the now playing movies & filters
 *      3) apply filters on the movie data
 */

class NowPlaying extends React.Component {

    constructor() {
        super();
        this.state = {
            genres: [],             // master list of genres
            items: [],              // master list of movies
            availableGenres: [],    // the available genres based on the now playing list
            selectedGenres: [],     // the user selected genres from the filter
            viewableItems:[],       // viewable movies after filters applied
            rating: 3,              // default filter rating
            isLoaded: false         // view management
        };

        this.setFilterValue = this.setFilterValue.bind(this);
    }

    /**
     * Initially we will load all genres as we need them for our filters and for mapping ids to labels in the Now Playing list
     */
    componentDidMount() {
        getGenres()
            .then(data => { this.setState({genres: data.genres})}, (error) => {this.error(error)})
            .then(this.getNowPlaying());
    }


    /**
     * Once we have our genres - lets fetch the now playing movies and render the view
     * Now playing movies are sorted in order of popularity by default
     */
    getNowPlaying(){
        getNowPlaying()
            .then(data => {
                    this.setState({items: data.results}, this.setAvailableGenres);
                    this.updateList()},
                (error) => {this.error(error)});
    }


    /**
     * This function builds the available genre objects from the movie lists
     */
    setAvailableGenres(){
        let uniqueIds = new Set(), genres;

        // First get all available unique genre IDs
        for(var i = 0; i < this.state.items.length; i++){
            for(var x = 0; x < this.state.items[i].genre_ids.length; x++){
                uniqueIds.add(this.state.items[i].genre_ids[x])
            }
        }

        // build array of genre objects from unique genre IDs
        genres = this.state.genres.filter((genre) => uniqueIds.has(genre.id));

        // finally update the state and render the view
        this.setState({availableGenres: genres}, this.setState({isLoaded: true}));
    }


    /**
     * This function takes an array of genre IDs and returns the text values of all in a comma delimited string
     * Used by checkbox filter and the movie item component
     */
    getGenreTextFromId = val => {
        let genre = this.state.genres.filter(genre => {
            return val.indexOf(genre.id) > -1;
        }).map(genre => {
            return genre.name;
        });
        return genre.join(', ');
    };


    /**
     * This method is called from the filter components (slider and select checkbox) and updates the view states
     */
    setFilterValue(value){
        this.setState(value, this.updateList);
    }


    /**
     * Once states are updated, we can filter on our list of now playing movies
     * This method filters first by rating, then by genre ID and finally maps the results to Movie Item components which are rendered in the view
     */
    updateList(){
        let filteredList =
            this.state.items
                .filter((movie) => movie.vote_average > this.state.rating)
                .filter((movie) => this.filterMovieById(movie))
                .map((movie) => <MovieItem movie={movie} key={movie.id} getGenreTextFromId={this.getGenreTextFromId}></MovieItem>);

        this.setState({viewableItems: filteredList});
    }


    // Helper method that filters on movies based on selected genres
    filterMovieById = movie => {
        for(var i = 0; i < this.state.selectedGenres.length; i++){
            if(movie.genre_ids.indexOf(this.state.selectedGenres[i]) === -1)
                return false;
        }
        return true;
    };

    // render method
    render() {
        const styles = {
            filterContainer: {padding: '12px'},
            movieContainer: {minWidth: '612px'},
            slider: {width: '300px'},
            checkbox: {width: '200px', marginLeft: '100px'},
            heading: {textAlign: 'center'},
            view: {height: '100%', width: '42em'}
        };

        if(this.state.isLoaded){
            return (
                <div style={styles.view}>
                    <Typography style={styles.heading} variant="display2" color="textSecondary">Now Playing</Typography>

                    {/**  filter components **/}
                    <div style={styles.filterContainer}>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <StepSlider
                                    style={styles.slider}
                                    rating={this.state.rating}
                                    setFilterValue={this.setFilterValue} />
                            </Grid>
                            <Grid item xs={4}>
                                <MultipleSelect style={styles.checkbox}
                                                availableGenres={this.state.availableGenres}
                                                setFilterValue={this.setFilterValue}
                                                getGenreTextFromId={this.getGenreTextFromId} />
                            </Grid>
                        </Grid>
                    </div>

                    {/**  now playing list  **/}
                    <div style={styles.movieContainer}>{this.state.viewableItems}</div>
                </div>
            );
        }else{
            return (<Typography variant="subtitle2" color="textSecondary">Loading Movies.....</Typography>)
        }
    }

    //TODO - handle errors gracefully
    error(err){
        console.log(err);
        this.setState({isLoaded: false});
    }
}
export default NowPlaying;