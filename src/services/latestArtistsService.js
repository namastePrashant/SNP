import {    
    latestArtistsFetchRequest, 
    latestArtistsFetchRequestSuccess, 
    latestArtistsFetchRequestFailure 
} from '../actions/latestArtistsAction';

import { fetch } from '../utils/httpUtil'


export const fetchLatestArtists = (params) => {
    return async dispatch => {
        
        dispatch(latestArtistsFetchRequest());

        let url='api/v1/artists?sort=desc';
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
                dispatch(latestArtistsFetchRequestSuccess(response.data.data.artists));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(latestArtistsFetchRequestFailure(error));
            // return dispatch(latestArtistsFetchRequestFailure(error.response.data));
        }
    };
};


// search artist
export const searchArtist= (keyword) =>{
  return async dispatch =>{
    dispatch(latestArtistsFetchRequest());

    let url='api/v1/artists?keyword='+keyword;
    try {
        const response = await fetch(url);
        
        if (response.data.success === true) {
            dispatch(latestArtistsFetchRequestSuccess(response.data.data.artists));
        } else {
            // TODO
        }
    } catch (error) {
        
        return dispatch(latestArtistsFetchRequestFailure(error));
        // return dispatch(latestArtistsFetchRequestFailure(error.response.data));
    }

  }
}