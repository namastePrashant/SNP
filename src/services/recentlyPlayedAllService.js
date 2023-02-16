import {
    recentlyPlayedAllFetchRequest, 
    recentlyPlayedAllFetchRequestSuccess, 
    recentlyPlayedAllFetchRequestFailure,
    recentlyPlayedAllFetchMoreRequest,
    recentlyPlayedAllFetchMoreRequestSuccess,
    recentlyPlayedAllFetchMoreRequestFailure,
    recentlyPlayedAllFetchMetaInfo,
} from '../actions/recentlyPlayedAllAction';

import { fetch } from '../utils/httpUtil';


export const fetchRecentlyPlayedAll = () => {
    return async dispatch => {
    
        dispatch(recentlyPlayedAllFetchRequest());
        try {           
         
            const response = await fetch('api/v1/users/recently_played?per_page=15');

        
            if (response.data.success === true) {
                
                dispatch(recentlyPlayedAllFetchRequestSuccess(response.data.data.recently_played_songs));
                dispatch(recentlyPlayedAllFetchMetaInfo(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(recentlyPlayedAllFetchRequestFailure(error));
            // return dispatch(recentlyPlayedAllFetchRequestFailure(error.response.data));
        }
    };
};
export const fetchRecentlyPlayedAllMore = (page_number) => {
    
    return async dispatch => {    
        dispatch(recentlyPlayedAllFetchMoreRequest());
        try {                       
            const response = await fetch(`api/v1/users/recently_played?per_page=15&&page=${page_number}`);

            if (response.data.success === true) {
                
                dispatch(recentlyPlayedAllFetchMoreRequestSuccess(response.data.data.recently_played_songs));
                dispatch(recentlyPlayedAllFetchMetaInfo(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {            
            return dispatch(recentlyPlayedAllFetchMoreRequestFailure(error));            
        }
    };
};