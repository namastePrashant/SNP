import {
    RECOMMENDED_ARTISTS_FETCH_REQUEST,
    RECOMMENDED_ARTISTS_FETCH_REQUEST_SUCCESS,
    RECOMMENDED_ARTISTS_FETCH_REQUEST_FAILURE,
    RECOMMENDED_ARTISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const recommendedArtistsFetchRequest = () => {
    return {
        type: RECOMMENDED_ARTISTS_FETCH_REQUEST,
    };
};

export const recommendedArtistsFetchRequestSuccess = data => {
    return {
        type: RECOMMENDED_ARTISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const recommendedArtistsFetchRequestFailure = error => {
    return {
        type: RECOMMENDED_ARTISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const recommendedArtistsCleanRequest = () => {
    return {
        type: RECOMMENDED_ARTISTS_CLEAN_REQUEST,
    };
};
