import {
    popularSongsFetchRequest, 
    popularSongsFetchRequestSuccess, 
    popularSongsFetchRequestFailure,
} from '../actions/popularSongsAction';

import { fetch } from '../utils/httpUtil';


export const fetchPopularSongs = () => {
    return async dispatch => {
    
        dispatch(popularSongsFetchRequest());
        try {           
            const response = await fetch('api/v1/analytics/popular_songs?period=10days');
        
            if (response.data.success === true) {
                
                dispatch(popularSongsFetchRequestSuccess(response.data.data.popular_songs));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(popularSongsFetchRequestFailure(error));
            // return dispatch(popularSongsFetchRequestFailure(error.response.data));
        }
    };
};