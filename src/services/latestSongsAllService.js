import {    
    latestSongsAllFetchRequest, 
    latestSongsAllFetchRequestSuccess, 
    latestSongsAllFetchRequestFailure,
    latestSongsAllFetchMoreRequest, 
    latestSongsAllFetchMoreRequestSuccess, 
    latestSongsAllFetchMoreRequestFailure,
    latestSongsAllFetchMeta,
} from '../actions/latestSongsAllAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestSongsAll = (page) => {

    let pageNumber= page?page:1;

    return async dispatch => {
        if(page){
            dispatch(latestSongsAllFetchMoreRequest());            
        }else{
            dispatch(latestSongsAllFetchRequest());
        }

        let url=`api/v1/analytics/new_releases?per_page=15&&page=${pageNumber}`;
        
        try {
            const response = await fetch(url);
            
            if (response.data.success === true) {
                if(page){
                    dispatch(latestSongsAllFetchMoreRequestSuccess(response.data.data.new_releases));
                }else{
                    dispatch(latestSongsAllFetchRequestSuccess(response.data.data.new_releases));
                }
                dispatch(latestSongsAllFetchMeta(response.data.page_meta));

            } else {
                // TODO
            }
        } catch (error) {
            if(page){
                return dispatch(latestSongsAllFetchMoreRequestFailure(error));
            }else{
                return dispatch(latestSongsAllFetchRequestFailure(error));
            }            
        }
    };
};