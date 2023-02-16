import {
    recentlyPlayedFetchRequest, 
    recentlyPlayedFetchRequestSuccess, 
    recentlyPlayedFetchRequestFailure,
} from '../actions/recentlyPlayedAction';

import { fetch } from '../utils/httpUtil';


export const fetchRecentlyPlayed = () => {
    return async dispatch => {
    
        dispatch(recentlyPlayedFetchRequest());
        try {           
         
            const response = await fetch('api/v1/users/recently_played');

        
            if (response.data.success === true) {
              
                dispatch(recentlyPlayedFetchRequestSuccess(response.data.data.recently_played_songs));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(recentlyPlayedFetchRequestFailure(error));
            // return dispatch(recentlyPlayedFetchRequestFailure(error.response.data));
        }
    };
};