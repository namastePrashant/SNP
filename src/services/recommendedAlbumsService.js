import {
    recommendedAlbumsFetchRequest, 
    recommendedAlbumsFetchRequestSuccess, 
    recommendedAlbumsFetchRequestFailure,
} from '../actions/recommendedAlbumsAction';

import { fetch } from '../utils/httpUtil';


export const fetchRecommendedAlbums = () => {
    return async dispatch => {
    
        dispatch(recommendedAlbumsFetchRequest());
        try {           
           
            const response = await fetch('api/v1/albums/recommended_albums');

        
            if (response.data.success === true) {
                               
                dispatch(recommendedAlbumsFetchRequestSuccess(response.data.data.recommended_albums));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(recommendedAlbumsFetchRequestFailure(error));
            // return dispatch(recommendedAlbumsFetchRequestFailure(error.response.data));
        }
    };
};