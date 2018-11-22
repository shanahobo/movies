import {PROPERTIES} from '../../app.properties';

/**
 * These functions fetch the data required to populate the now playing list & genres
 */


// Fetch genres data
function getGenres(){
    let genreApi = new URL(PROPERTIES.basePath + "3/genre/movie/list"), params = {api_key:PROPERTIES.apiKey};
    genreApi.search = new URLSearchParams(params);

    return fetch(genreApi).then(res => res.json());
}

// Fetch now playing movie data
function getNowPlaying(){
    let nowPlayingApi = new URL(PROPERTIES.basePath + "3/movie/now_playing"), params = {api_key:PROPERTIES.apiKey};
    nowPlayingApi.search = new URLSearchParams(params);

    return fetch(nowPlayingApi).then(res => res.json());
}

export {getGenres, getNowPlaying};