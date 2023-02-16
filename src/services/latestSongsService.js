import {    
    latestSongsFetchRequest, 
    latestSongsFetchRequestSuccess, 
    latestSongsFetchRequestFailure 
} from '../actions/latestSongsAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestSongs = (params) => {
    return async dispatch => {
        
        dispatch(latestSongsFetchRequest());

        let url='api/v1/analytics/new_releases';
        // params={
        //             per_page:40,
        //         };
        // if(params){
        //     url+="?";
        //     Object.keys(params).map((key)=>{
        //         url+=params+"="+params[key]+"&";
        //     })        
        // }
        
        try {
            const response = await fetch(url);
            
            if (response.data.success === true) {
                dispatch(latestSongsFetchRequestSuccess(response.data.data.new_releases));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(latestSongsFetchRequestFailure(error));
            // return dispatch(latestSongsFetchRequestFailure(error.response.data));
        }
    };
};