import {
    RECOMMENDED_ALBUMS_FETCH_REQUEST,
    RECOMMENDED_ALBUMS_FETCH_REQUEST_SUCCESS,
    RECOMMENDED_ALBUMS_FETCH_REQUEST_FAILURE,
    RECOMMENDED_ALBUMS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const recommendedAlbumsFetchRequest = () => {
    return {
        type: RECOMMENDED_ALBUMS_FETCH_REQUEST,
    };
};

export const recommendedAlbumsFetchRequestSuccess = data => {
    return {
        type: RECOMMENDED_ALBUMS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const recommendedAlbumsFetchRequestFailure = error => {
    return {
        type: RECOMMENDED_ALBUMS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const recommendedAlbumsCleanRequest = () => {
    return {
        type: RECOMMENDED_ALBUMS_CLEAN_REQUEST,
    };
};
