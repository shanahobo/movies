import React from 'react';
import {PROPERTIES} from '../app.properties';
import {Typography, Card, CardContent, CardMedia} from '../modules/material-module';

/**
 * This component is in charge of rendering a movie item including the logo, title, rating etc
 * The parent component will iterate over movie data and create a ResultItem component per movie
 **/

class MovieItem extends React.Component {
    render() {
        let imgSrc = PROPERTIES.imgBasePath + this.props.movie.poster_path;

        const styles = {
            card: {display: 'flex'},
            details: {display: 'contents'},
            content: {flex: '1 0', minWidth: '515px'},
            cover: {width: 151,height: 151},
            container: {padding: '10px', marginBottom: '10px', width: '100%'}
        };

        return(
            <div style={styles.container}>
                <Card style={styles.card}>
                    <div style={styles.details}>
                        <CardContent style={styles.content}>
                            <Typography variant="headline">{this.props.movie.title}</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                ({this.props.getGenreTextFromId(this.props.movie.genre_ids)})
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        style={styles.cover}
                        image={imgSrc}
                        title={this.props.movie.title}
                    />
                </Card>
            </div>
        );
    }
}

export default MovieItem;
