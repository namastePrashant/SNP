import {
    favoriteArtistsFetchRequest, 
    favoriteArtistsFetchRequestSuccess, 
    favoriteArtistsFetchRequestFailure,
    favoriteArtistsFetchMoreRequest, 
    favoriteArtistsFetchMoreRequestSuccess, 
    favoriteArtistsFetchMoreRequestFailure,
    favoriteArtistsFetchMeta,
    artistFollowSuccess,
    artistFollowRequest
} from '../actions/favoriteArtistsAction';

import { fetch,store} from '../utils/httpUtil';


export const fetchFavoriteArtists = (page) => {
    let pageNumber= page || 1;

    return async dispatch => {
        if(page){
            dispatch(favoriteArtistsFetchMoreRequest());
        }else{
            dispatch(favoriteArtistsFetchRequest());
        }

        let url=`api/v1/users/favourite_artists?per_page=15&page=${pageNumber}`;

        try {           
            const response = await fetch(url);        
            if (response.data.success === true) {
                if (page){
                    dispatch(favoriteArtistsFetchMoreRequestSuccess(response.data.data.favourite_artists));
                } else {
                    dispatch(favoriteArtistsFetchRequestSuccess(response.data.data.favourite_artists));
                }
                
                dispatch(favoriteArtistsFetchMeta(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {
            if(page){
                return dispatch(favoriteArtistsFetchMoreRequestFailure(error));            
            }else{
                return dispatch(favoriteArtistsFetchRequestFailure(error));
            }
            
        }
    };
};


export const setFavouriteArtist = (formData,id) => {
    return async dispatch=>{
        dispatch(artistFollowRequest(id));
        let url = 'api/v1/users/set_favourite_artist'
        try{
            let response = await store(url,formData);
            dispatch(artistFollowSuccess(response.data.data.favourite_artist));
        }catch (error) {
                
            return dispatch(favoriteArtistsFetchRequestFailure(error));
        }
    }
}

