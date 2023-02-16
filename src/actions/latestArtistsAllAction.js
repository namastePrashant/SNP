import {
    LATEST_ARTISTS_ALL_FETCH_REQUEST,
    LATEST_ARTISTS_ALL_FETCH_REQUEST_SUCCESS,
    LATEST_ARTISTS_ALL_FETCH_REQUEST_FAILURE,
    LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST,
    LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST_FAILURE,
    LATEST_ARTISTS_ALL_FETCH_META,
    LATEST_ARTISTS_ALL_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestArtistsAllFetchRequest = () => {
    return {
        type: LATEST_ARTISTS_ALL_FETCH_REQUEST,
    };
};

export const latestArtistsAllFetchRequestSuccess = data => {

    return {
        type: LATEST_ARTISTS_ALL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestArtistsAllFetchRequestFailure = error => {
    return {
        type: LATEST_ARTISTS_ALL_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const latestArtistsAllFetchMoreRequest = () => {
    return {
        type: LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST,
    };
};

export const latestArtistsAllFetchMoreRequestSuccess = data => {

    return {
        type: LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const latestArtistsAllFetchMoreRequestFailure = error => {
    return {
        type: LATEST_ARTISTS_ALL_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
}

export const latestArtistsAllFetchMeta = meta => {
    return {
        type: LATEST_ARTISTS_ALL_FETCH_META,
        meta,
    };
};

export const latestArtistsAllCleanRequest = () => {
    return {
        type: LATEST_ARTISTS_ALL_CLEAN_REQUEST,
    };
};