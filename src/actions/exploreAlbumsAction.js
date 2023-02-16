import {
    EXPLORE_ALBUMS_FETCH_REQUEST,
    EXPLORE_ALBUMS_FETCH_REQUEST_SUCCESS,
    EXPLORE_ALBUMS_FETCH_REQUEST_FAILURE,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_ALBUMS_FETCH_META,
    EXPLORE_ALBUMS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const exploreAlbumsFetchRequest = () => {
    return {
        type: EXPLORE_ALBUMS_FETCH_REQUEST,
    };
};

export const exploreAlbumsFetchRequestSuccess = data => {
    return {
        type: EXPLORE_ALBUMS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const exploreAlbumsFetchRequestFailure = error => {
    return {
        type: EXPLORE_ALBUMS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const exploreAlbumsCleanRequest = () => {
    return {
        type: EXPLORE_ALBUMS_CLEAN_REQUEST,
    };
};

export const exploreAlbumsFetchMoreRequest = () => {
    return {
        type: EXPLORE_ALBUMS_FETCH_MORE_REQUEST,
    };
};

export const exploreAlbumsFetchMoreRequestSuccess = data => {
    return {
        type: EXPLORE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const exploreAlbumsFetchMoreRequestFailure = error => {
    return {
        type: EXPLORE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const exploreAlbumsFetchMeta = meta => {
    return {
        type: EXPLORE_ALBUMS_FETCH_META,
        meta,
    };
};
