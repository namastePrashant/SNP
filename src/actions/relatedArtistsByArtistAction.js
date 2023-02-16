import {
    RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST,
    RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST_SUCCESS,
    RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST_FAILURE,
    RELATED_ARTISTS_BY_ARTIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const relatedArtistsByArtistFetchRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST,
    };
};

export const relatedArtistsByArtistFetchRequestSuccess = data => {

    return {
        type: RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const relatedArtistsByArtistFetchRequestFailure = error => {
    return {
        type: RELATED_ARTISTS_BY_ARTIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const relatedArtistsByArtistCleanRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_ARTIST_CLEAN_REQUEST,
    };
};