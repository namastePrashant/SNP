import {
    favoriteSongsAllFetchRequest, 
    favoriteSongsAllFetchMoreRequest, 
    favoriteSongsAllFetchRequestSuccess, 
    favoriteSongsAllFetchMoreRequestSuccess, 
    favoriteSongsAllFetchRequestFailure,
    favoriteSongsAllFetchMoreRequestFailure,
    favoriteSongsAllFetchMetaInfo,
    favouriteSongAllDetailSuccess
} from '../actions/favoriteSongsAllAction';

import { fetch } from '../utils/httpUtil';


export const fetchFavoriteSongsAll = (page) => {
    let pageNumber= page?page:1;
    return async dispatch => {
    if (page){
        dispatch(favoriteSongsAllFetchMoreRequest());
    }else{
        dispatch(favoriteSongsAllFetchRequest());
    }
       

    let url=`api/v1/users/favourite_songs?per_page=15&&page=${pageNumber}`;

    try {           
 
            const response = await fetch(url);        
            
    if (response.data.success === true) {
        
        if (page){
                dispatch(favoriteSongsAllFetchMoreRequestSuccess(response.data.data.favourite_songs));
        }else{
        dispatch(favouriteSongAllDetailSuccess(response.data.data.total_duration,response.data.page_meta.total))
        dispatch(favoriteSongsAllFetchRequestSuccess(response.data.data.favourite_songs));
}
        dispatch(favoriteSongsAllFetchMetaInfo(response.data.page_meta));             
            } else {
                // TODO
            }
        } catch (error) {
            if (page){
                return dispatch(favoriteSongsAllFetchMoreRequestFailure(error));        
            }else{
                return dispatch(favoriteSongsAllFetchRequestFailure(error));
            }
            
            
        }
    };
};

