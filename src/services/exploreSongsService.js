import {
    exploreSongsFetchRequest,
    exploreSongsFetchRequestSuccess,
    exploreSongsFetchRequestFailure,
    exploreSongsFetchMoreRequest,
    exploreSongsFetchMoreRequestSuccess,
    exploreSongsFetchMoreRequestFailure,
    exploreSongsFetchMeta,
} from '../actions/exploreSongsAction';

import { fetch } from '../utils/httpUtil';


export const fetchExploreSongs = (page) => {
    let pageNumber=page || 1;
    
    return async dispatch => {
        if(page){
            dispatch(exploreSongsFetchMoreRequest());        
            }else{
            dispatch(exploreSongsFetchRequest());
        }

        let url = `api/v1/genres/songs_from_genre?per_page=10&page=${pageNumber}&inner_per_page=10&inner_page=1`;

        try {

            const response = await fetch(url);
            if (response.data.success === true) {                
                if(page){
                    dispatch(exploreSongsFetchMoreRequestSuccess(response.data.data));                                        
                }else{
                    dispatch(exploreSongsFetchRequestSuccess(response.data.data));                                        
                }
                dispatch(exploreSongsFetchMeta(response.data.page_meta));

            } else {
                // TODO
            }
        } catch (error) {

            if(page){                
                return dispatch(exploreSongsFetchMoreRequestFailure(error));
            }else{
                return dispatch(exploreSongsFetchRequestFailure(error));                
            }
            
        }
    };
};