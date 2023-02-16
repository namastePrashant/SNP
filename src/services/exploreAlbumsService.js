import {
    exploreAlbumsFetchRequest, 
    exploreAlbumsFetchRequestSuccess, 
    exploreAlbumsFetchRequestFailure,
    exploreAlbumsFetchMoreRequest, 
    exploreAlbumsFetchMoreRequestSuccess, 
    exploreAlbumsFetchMoreRequestFailure,
    exploreAlbumsFetchMeta,
} from '../actions/exploreAlbumsAction';

import { fetch } from '../utils/httpUtil';

export const fetchExploreAlbums = (page) => {

    let pageNumber=page || 1;

    return async dispatch => {
        if(page){
            dispatch(exploreAlbumsFetchMoreRequest());
        }else{
            dispatch(exploreAlbumsFetchRequest());
        }

        let url=`api/v1/genres/albums_from_genre?per_page=10&page=${pageNumber}&inner_per_page=10&inner_page=1`;

        try {           
 
            const response = await fetch(url);        
            if (response.data.success === true) {
              
                

                if(page){
                    dispatch(exploreAlbumsFetchMoreRequestSuccess(response.data.data));
                }else{
                    dispatch(exploreAlbumsFetchRequestSuccess(response.data.data));
                }
                dispatch(exploreAlbumsFetchMeta(response.data.page_meta));
                                        
            } else {
                // TODO
            }
        } catch (error) {
                        
            if(page){
                return dispatch(exploreAlbumsFetchMoreRequestFailure(error));
            }else{
                return dispatch(exploreAlbumsFetchRequestFailure(error));
            }
        }
    };
};