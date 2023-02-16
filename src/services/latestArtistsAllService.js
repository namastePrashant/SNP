import {
    latestArtistsAllFetchRequest,
    latestArtistsAllFetchRequestSuccess,
    latestArtistsAllFetchRequestFailure,
    latestArtistsAllFetchMoreRequest,
    latestArtistsAllFetchMoreRequestSuccess,
    latestArtistsAllFetchMoreRequestFailure,
    latestArtistsAllFetchMeta,
} from '../actions/latestArtistsAllAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestArtistsAll = (page) => {

    let pageNumber= page?page:1;

    return async dispatch => {

        if(page){
            dispatch(latestArtistsAllFetchMoreRequest());
        }else{
            dispatch(latestArtistsAllFetchRequest());
        }

        let url = `api/v1/artists?sort=desc&per_page=15&&page=${pageNumber}`;
        
        try {
            const response = await fetch(url);

            if (response.data.success === true) {                

                if(page){
                    dispatch(latestArtistsAllFetchMoreRequestSuccess(response.data.data.artists));
                }else{
                    dispatch(latestArtistsAllFetchRequestSuccess(response.data.data.artists));
                }
                dispatch(latestArtistsAllFetchMeta(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {
            
            if(page){
                return dispatch(latestArtistsAllFetchMoreRequestFailure(error));
            }else{
                return dispatch(latestArtistsAllFetchRequestFailure(error));
            }  
        }
    };
};