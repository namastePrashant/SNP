import {
    GENRES_FETCH_REQUEST,
    GENRES_FETCH_REQUEST_SUCCESS,
    GENRES_FETCH_REQUEST_FAILURE,
    GENRES_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const genresFetchRequest = () => {
    return {
        type: GENRES_FETCH_REQUEST,
    };
};

export const genresFetchRequestSuccess = data => {

    return {
        type: GENRES_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const genresFetchRequestFailure = error => {
    return {
        type: GENRES_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const genresCleanRequest = () => {
    return {
        type: GENRES_CLEAN_REQUEST,
    };
};