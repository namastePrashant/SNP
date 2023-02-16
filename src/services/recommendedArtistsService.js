import {
    recommendedArtistsFetchRequest, 
    recommendedArtistsFetchRequestSuccess, 
    recommendedArtistsFetchRequestFailure,
} from '../actions/recommendedArtistsAction';

import { fetch } from '../utils/httpUtil';


export const fetchRecommendedArtists = () => {
    return async dispatch => {
    
        dispatch(recommendedArtistsFetchRequest());
        try {           
           
            const response = await fetch('api/v1/artists/recommended_artists');

        
            if (response.data.success === true) {
                               
                dispatch(recommendedArtistsFetchRequestSuccess(response.data.data.recommended_artist));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(recommendedArtistsFetchRequestFailure(error));
            // return dispatch(recommendedArtistsFetchRequestFailure(error.response.data));
        }
    };
};