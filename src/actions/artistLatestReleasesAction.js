import {
    ARTIST_LATEST_RELEASES_FETCH_REQUEST,
    ARTIST_LATEST_RELEASES_FETCH_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASES_FETCH_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASES_FETCH_META,
    ARTIST_LATEST_RELEASES_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const artistLatestReleasesFetchRequest = () => {
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_REQUEST,
    };
};

export const artistLatestReleasesFetchRequestSuccess = data => {
    

    return {
        type: ARTIST_LATEST_RELEASES_FETCH_REQUEST_SUCCESS,
        data,
    };
};


export const artistLatestReleasesFetchRequestFailure = error => {
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const artistLatestReleasesFetchMoreRequest = () => {
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST,
    };
};

export const artistLatestReleasesFetchMoreRequestSuccess = data => {
    
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};


export const artistLatestReleasesFetchMoreRequestFailure = error => {
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const artistLatestReleasesFetchMeta = meta => {
    
    return {
        type: ARTIST_LATEST_RELEASES_FETCH_META,
        meta,
    };
};

export const artistLatestReleasesCleanRequest = () => {
    return {
        type: ARTIST_LATEST_RELEASES_CLEAN_REQUEST,
    };
};