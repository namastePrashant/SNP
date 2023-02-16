import {
    favoriteAlbumsFetchRequest,
    favoriteAlbumsFetchRequestSuccess,
    favoriteAlbumsFetchRequestFailure,
    favoriteAlbumsFetchMoreRequest,
    favoriteAlbumsFetchMoreRequestSuccess,
    favoriteAlbumsFetchMoreRequestFailure,
    favoriteAlbumsFetchMeta,
    favouriteAlbumFetchId,
    FavouriteAlbumSuccess,
} from '../actions/favoriteAlbumsAction';

import { fetch, store } from '../utils/httpUtil';


export const fetchFavoriteAlbums = (page) => {

    let pageNumber = page || 1;

    return async dispatch => {
        if (page) {
            dispatch(favoriteAlbumsFetchMoreRequest());
        } else {
            dispatch(favoriteAlbumsFetchRequest());
        }


        let url = `api/v1/users/favourite_albums?per_page=15&page=${pageNumber}`;

        try {

            const response = await fetch(url);
            if (response.data.success === true) {
                if (page){
                    dispatch(favoriteAlbumsFetchMoreRequestSuccess(response.data.data.favourite_albums))
                } else {
                    dispatch(favoriteAlbumsFetchRequestSuccess(response.data.data.favourite_albums));
                }
                
                dispatch(favoriteAlbumsFetchMeta(response.data.page_meta));                
            } else {
                // TODO
            }
        } catch (error) {
            if (page) {
                return dispatch(favoriteAlbumsFetchMoreRequestFailure(error));
            } else {
                return dispatch(favoriteAlbumsFetchRequestFailure(error));
            }
        }
    };
};

export const setFavouriteAlbum = (formData, id) => {
    return async dispatch => {
        dispatch(favouriteAlbumFetchId(id))
        let url = 'api/v1/users/set_favourite_album'
        try {
            const response = await store(url, formData);
            if (response.data.success === true) {
                dispatch(FavouriteAlbumSuccess(response.data.data.favourite_album));
            } else {

            }

        } catch (error) {

            return dispatch(favoriteAlbumsFetchRequestFailure(error));
            // return dispatch(favoriteAlbumsFetchRequestFailure(error.response.data));
        }
    }
}

