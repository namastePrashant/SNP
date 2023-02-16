import {
    FAVORITE_ALBUMS_FETCH_REQUEST,
    FAVORITE_ALBUMS_FETCH_REQUEST_SUCCESS,
    FAVORITE_ALBUMS_FETCH_REQUEST_FAILURE,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_ALBUMS_FETCH_META,
    FAVORITE_ALBUMS_CLEAN_REQUEST,
    FAVORITE_ALBUMS_SUCCESS,
    FAVORITE_ALBUMS_FETCH_ID_REQUEST
} from '../constants/actionTypes';

export const favoriteAlbumsFetchRequest = () => {
    return {
        type: FAVORITE_ALBUMS_FETCH_REQUEST,
    };
};
export const favoriteAlbumsFetchMoreRequest = () => {
    return {
        type: FAVORITE_ALBUMS_FETCH_MORE_REQUEST,
    };
};

export const favoriteAlbumsFetchRequestSuccess = data => {
    return {
        type: FAVORITE_ALBUMS_FETCH_REQUEST_SUCCESS,
        data,
    };
};
 export const favoriteAlbumsFetchMoreRequestSuccess = data => {
    return {
         type: FAVORITE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
         data,
     };
 };

export const favoriteAlbumsFetchRequestFailure = error => {
    return {
        type: FAVORITE_ALBUMS_FETCH_REQUEST_FAILURE,
        error,
    };
};


export const favoriteAlbumsFetchMoreRequestFailure = error => {
    return {
        type: FAVORITE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const favoriteAlbumsFetchMeta = meta => {
    return {
        type: FAVORITE_ALBUMS_FETCH_META,
        meta,
    };
};

export const favoriteAlbumsCleanRequest = () => {
    return {
        type: FAVORITE_ALBUMS_CLEAN_REQUEST,
    };
};

export const favouriteAlbumFetchId = (id) =>{
    return{
        type:FAVORITE_ALBUMS_FETCH_ID_REQUEST,
        id:id
    }
}


export const FavouriteAlbumSuccess = (data) => {
    return{
        type:FAVORITE_ALBUMS_SUCCESS,
        data:data
    }
}

