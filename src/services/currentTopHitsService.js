import {
        currentTopHitsFetchRequest, 
        currentTopHitsFetchRequestSuccess, 
        currentTopHitsFetchRequestFailure,
    } from '../actions/currentTopHitsAction';

import { fetch } from '../utils/httpUtil';


export const fetchCurrentTopHits = () => {
    return async dispatch => {
        
        dispatch(currentTopHitsFetchRequest());
        try {           
            
            const response = await fetch('api/v1/songs/current_top_hits');

            if (response.data.success === true) {

                
                dispatch(currentTopHitsFetchRequestSuccess(response.data.data.current_top_hits));

            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(currentTopHitsFetchRequestFailure(error));
            // return dispatch(currentTopHitsFetchRequestFailure(error.response.data));
        }
    };
};