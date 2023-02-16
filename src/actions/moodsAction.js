import {
    MOODS_FETCH_REQUEST,
    MOODS_FETCH_REQUEST_SUCCESS,
    MOODS_FETCH_REQUEST_FAILURE,
    MOODS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const moodsFetchRequest = () => {
    return {
        type: MOODS_FETCH_REQUEST,
    };
};

export const moodsFetchRequestSuccess = data => {
    
    return {
        type: MOODS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const moodsFetchRequestFailure = error => {
    return {
        type: MOODS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const moodsCleanRequest = () => {
    return {
        type: MOODS_CLEAN_REQUEST,
    };
};