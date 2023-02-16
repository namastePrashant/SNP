import {    
    latestAlbumsFetchRequest, 
    latestAlbumsFetchRequestSuccess, 
    latestAlbumsFetchRequestFailure 
} from '../actions/latestAlbumsAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestAlbums = (params) => {
    return async dispatch => {
        
        dispatch(latestAlbumsFetchRequest());

        let url='api/v1/albums?sort=desc';
        try {
            const response = await fetch(url);
            
            if (response.data.success === true) {
                dispatch(latestAlbumsFetchRequestSuccess(response.data.data.albums));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(latestAlbumsFetchRequestFailure(error));
            // return dispatch(latestAlbumsFetchRequestFailure(error.response.data));
        }
    };
};