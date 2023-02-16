import {
    freshFetchRequest, 
    freshFetchRequestSuccess, 
    freshFetchRequestFailure,
} from '../actions/freshAction';

import { fetch } from '../utils/httpUtil';


export const fetchFresh = () => {
    return async dispatch => {
    
        dispatch(freshFetchRequest());
        try {           
            
            const response = await fetch('api/v1/songs/fresh_out');

        
            if (response.data.success === true) {
               
                dispatch(freshFetchRequestSuccess(response.data.data.fresh_out));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(freshFetchRequestFailure(error));
            // return dispatch(freshFetchRequestFailure(error.response.data));
        }
    };
};