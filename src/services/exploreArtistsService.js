import {
    exploreArtistsFetchRequest, 
    exploreArtistsFetchRequestSuccess, 
    exploreArtistsFetchRequestFailure,
    exploreArtistsFetchMoreRequest, 
    exploreArtistsFetchMoreRequestSuccess, 
    exploreArtistsFetchMoreRequestFailure,
    exploreArtistsFetchMeta,
} from '../actions/exploreArtistsAction';

import { fetch } from '../utils/httpUtil';


export const fetchExploreArtists = (page) => {
    let pageNumber=page || 1;

    return async dispatch => {
    
        
        if(page){
            dispatch(exploreArtistsFetchMoreRequest());
        }else{
            dispatch(exploreArtistsFetchRequest());
        }


        let url=`api/v1/genres/artists_from_genre?per_page=10&page=${pageNumber}&inner_per_page=10&inner_page=1`;

        try {           
            const response = await fetch(url);        
            if (response.data.success === true) {              
                

                if(page){
                    dispatch(exploreArtistsFetchMoreRequestSuccess(response.data.data));
                }else{
                    dispatch(exploreArtistsFetchRequestSuccess(response.data.data));
                }
                dispatch(exploreArtistsFetchMeta(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {
            
            
            if(page){
                return dispatch(exploreArtistsFetchMoreRequestFailure(error));
            }else{
                return dispatch(exploreArtistsFetchRequestFailure(error));
            }
        }
    };
};