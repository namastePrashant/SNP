import {
    favoriteSongsFetchRequest, 
   
    favoriteSongsFetchRequestSuccess, 
    
    favoriteSongsFetchRequestFailure,
   
  
    favouriteSongDetailSuccess
} from '../actions/favoriteSongsAction';

import { fetch } from '../utils/httpUtil';


export const fetchFavoriteSongs = () => {
    return async dispatch => {
    
        dispatch(favoriteSongsFetchRequest());

        let url='api/v1/users/favourite_songs?per_page=15';

        try {           
 
            const response = await fetch(url);        
            
            if (response.data.success === true) {

                dispatch(favouriteSongDetailSuccess(response.data.data.total_duration,response.data.page_meta.total))
                dispatch(favoriteSongsFetchRequestSuccess(response.data.data.favourite_songs));

            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(favoriteSongsFetchRequestFailure(error));
            // return dispatch(favoriteSongsFetchRequestFailure(error.response.data));
        }
    };
};

