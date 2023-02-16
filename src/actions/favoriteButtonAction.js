import {
    FAVORITE_REQUEST,
    FAVORITE_REQUEST_SUCCESS,
    FAVORITE_REQUEST_FAILURE,
    FAVORITE_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const favoriteButtonFetchRequest = (id) => {    
    return {
        type: FAVORITE_REQUEST,
        id:id,
    };
};

export const favoriteButtonFetchRequestSuccess = data => {
    return {
        type: FAVORITE_REQUEST_SUCCESS,
        data,
    };
};

export const favoriteButtonFetchRequestFailure = error => {
    return {
        type: FAVORITE_REQUEST_FAILURE,
        error,
    };
};

export const favoriteButtonCleanRequest = () => {
    return {
        type: FAVORITE_CLEAN_REQUEST,
    };
};
