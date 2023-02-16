import {
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST,
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_SUCCESS,
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_FAILURE,
    POPULAR_SONGS_BY_ARTIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const popularSongsByArtistFetchRequest = id => {
    return {
        type: POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST,
        id
    };
};

export const popularSongsByArtistFetchRequestSuccess = data => {

    return {
        type: POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const popularSongsByArtistFetchRequestFailure = error => {
    return {
        type: POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const popularSongsByArtistCleanRequest = () => {
    return {
        type: POPULAR_SONGS_BY_ARTIST_CLEAN_REQUEST,
    };
};