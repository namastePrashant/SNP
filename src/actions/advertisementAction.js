import {
    ADVERTISEMENT_FETCH_REQUEST,
    ADVERTISEMENT_FETCH_REQUEST_SUCCESS,
    ADVERTISEMENT_FETCH_REQUEST_FAILURE,
    ADVERTISEMENT_CLEAN_REQUEST,
    ADVERTISEMENT_BY_LOCATION_FETCH,
} from '../constants/actionTypes';

export const advertisementFetchRequest = () => {
    return {
        type: ADVERTISEMENT_FETCH_REQUEST,
    };
};

export const advertisementFetchRequestSuccess = data => {
    return {
        type: ADVERTISEMENT_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const advertisementFetchByLocation = data => {
    return {
        type: ADVERTISEMENT_BY_LOCATION_FETCH,
        data,
    };
};

export const advertisementFetchRequestFailure = error => {
    return {
        type: ADVERTISEMENT_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const advertisementCleanRequest = () => {
    return {
        type: ADVERTISEMENT_CLEAN_REQUEST,
    };
};
