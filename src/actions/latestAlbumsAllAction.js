import {
    LATEST_ALBUMS_ALL_FETCH_REQUEST,
    LATEST_ALBUMS_ALL_FETCH_REQUEST_SUCCESS,
    LATEST_ALBUMS_ALL_FETCH_REQUEST_FAILURE,
    LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST,
    LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST_FAILURE,
    LATEST_ALBUMS_ALL_FETCH_META,
    LATEST_ALBUMS_ALL_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestAlbumsAllFetchRequest = () => {
    return {
        type: LATEST_ALBUMS_ALL_FETCH_REQUEST,
    };
};

export const latestAlbumsAllFetchRequestSuccess = data => {
    
    return {
        type: LATEST_ALBUMS_ALL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestAlbumsAllFetchRequestFailure = error => {
    return {
        type: LATEST_ALBUMS_ALL_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const latestAlbumsAllFetchMoreRequest = () => {
    return {
        type: LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST,
    };
};

export const latestAlbumsAllFetchMoreRequestSuccess = data => {
    
    return {
        type: LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const latestAlbumsAllFetchMoreRequestFailure = error => {
    return {
        type: LATEST_ALBUMS_ALL_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};
export const latestAlbumsAllFetchMeta = meta => {
    return {
        type: LATEST_ALBUMS_ALL_FETCH_META,
        meta,
    };
};

export const latestAlbumsAllCleanRequest = () => {
    return {
        type: LATEST_ALBUMS_ALL_CLEAN_REQUEST,
    };
};