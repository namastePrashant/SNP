import {
    LATEST_ARTISTS_FETCH_REQUEST,
    LATEST_ARTISTS_FETCH_REQUEST_SUCCESS,
    LATEST_ARTISTS_FETCH_REQUEST_FAILURE,
    LATEST_ARTISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestArtistsFetchRequest = () => {
    return {
        type: LATEST_ARTISTS_FETCH_REQUEST,
    };
};

export const latestArtistsFetchRequestSuccess = data => {
    
    return {
        type: LATEST_ARTISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestArtistsFetchRequestFailure = error => {
    return {
        type: LATEST_ARTISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const latestArtistsCleanRequest = () => {
    return {
        type: LATEST_ARTISTS_CLEAN_REQUEST,
    };
};