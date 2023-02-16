import {
    EXPLORE_ARTISTS_FETCH_REQUEST,
    EXPLORE_ARTISTS_FETCH_REQUEST_SUCCESS,
    EXPLORE_ARTISTS_FETCH_REQUEST_FAILURE,
    EXPLORE_ARTISTS_CLEAN_REQUEST,
    EXPLORE_ARTISTS_FETCH_MORE_REQUEST,
    EXPLORE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_ARTISTS_FETCH_META,
} from '../constants/actionTypes';

export const exploreArtistsFetchRequest = () => {
    return {
        type: EXPLORE_ARTISTS_FETCH_REQUEST,
    };
};

export const exploreArtistsFetchRequestSuccess = data => {
    return {
        type: EXPLORE_ARTISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const exploreArtistsFetchRequestFailure = error => {
    return {
        type: EXPLORE_ARTISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const exploreArtistsCleanRequest = () => {
    return {
        type: EXPLORE_ARTISTS_CLEAN_REQUEST,
    };
};
export const exploreArtistsFetchMoreRequest = () => {
    return {
        type: EXPLORE_ARTISTS_FETCH_MORE_REQUEST,
    };
};

export const exploreArtistsFetchMoreRequestSuccess = data => {
    return {
        type: EXPLORE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const exploreArtistsFetchMoreRequestFailure = error => {
    return {
        type: EXPLORE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const exploreArtistsFetchMeta = meta => {
    return {
        type: EXPLORE_ARTISTS_FETCH_META,
        meta,
    };
};

