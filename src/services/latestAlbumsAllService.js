import {    
    latestAlbumsAllFetchRequest, 
    latestAlbumsAllFetchRequestSuccess, 
    latestAlbumsAllFetchRequestFailure,
    latestAlbumsAllFetchMoreRequest, 
    latestAlbumsAllFetchMoreRequestSuccess, 
    latestAlbumsAllFetchMoreRequestFailure,
    latestAlbumsAllFetchMeta,
} from '../actions/latestAlbumsAllAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestAlbumsAll = (page) => {
    let pageNumber= page?page:1;

    return async dispatch => {
                
        if(page){
            dispatch(latestAlbumsAllFetchMoreRequest());
        }else{
            dispatch(latestAlbumsAllFetchRequest());
        }

        let url=`api/v1/albums?sort=desc&per_page=15&&page=${pageNumber}`;
        try {
            const response = await fetch(url);
            
            if (response.data.success === true) {               
                if(page){
                    dispatch(latestAlbumsAllFetchMoreRequestSuccess(response.data.data.albums));
                }else{
                    dispatch(latestAlbumsAllFetchRequestSuccess(response.data.data.albums));
                }
                dispatch(latestAlbumsAllFetchMeta(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {
                        
            if(page){
                return dispatch(latestAlbumsAllFetchMoreRequestFailure(error));
            }else{
                return dispatch(latestAlbumsAllFetchRequestFailure(error));
            }        
        }
    };
};