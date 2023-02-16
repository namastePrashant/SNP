import {
    userRecentPlaylistsFetchRequest, 
    userRecentPlaylistsFetchRequestSuccess, 
    userRecentPlaylistsFetchRequestFailure,
} from '../actions/userRecentPlaylistsAction';

import { fetch } from '../utils/httpUtil';


export const fetchUserRecentPlaylists = () => {
    return async dispatch => {
    
        dispatch(userRecentPlaylistsFetchRequest());
        try {           
         
            const response = await fetch('api/v1/users/playlist?per_page=10&sort=asc');

        
            if (response.data.success === true) {
              
                dispatch(userRecentPlaylistsFetchRequestSuccess(response.data.data.playlist));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(userRecentPlaylistsFetchRequestFailure(error));
            // return dispatch(userRecentPlaylistsFetchRequestFailure(error.response.data));
        }
    };
};