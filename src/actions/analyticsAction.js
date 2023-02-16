import {
    ANALYTICS_FETCH_REQUEST,
    ANALYTICS_FETCH_REQUEST_SUCCESS,
    ANALYTICS_FETCH_REQUEST_FAILURE,
} from '../constants/actionTypes';

export const analyticsFetchRequest=()=>{
    return {
        type:ANALYTICS_FETCH_REQUEST,
    }
}
export const analyticsFetchRequestSuccess=(data)=>{
    return {
        type:ANALYTICS_FETCH_REQUEST_SUCCESS,
        data,
    }
}
export const analyticsFetchRequestFailure=(errors)=>{
    return {
        type:ANALYTICS_FETCH_REQUEST_FAILURE,
        errors,
    }
}