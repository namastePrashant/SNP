import {
    FAVORITE_ARTISTS_FETCH_REQUEST,
    FAVORITE_ARTISTS_FETCH_REQUEST_SUCCESS,
    FAVORITE_ARTISTS_FETCH_REQUEST_FAILURE,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_ARTISTS_FETCH_META,
    FAVORITE_ARTISTS_CLEAN_REQUEST,
    FAVOURITE_ARTIST_FOLLOW_REQUEST,
    FAVOURITE_ARTIST_FOLLOW_SUCCESS,
} from '../constants/actionTypes';

export const favoriteArtistsFetchRequest = () => {
    return {
        type: FAVORITE_ARTISTS_FETCH_REQUEST,
    };
};
export const favoriteArtistsFetchMoreRequest = () => {
    return {
        type: FAVORITE_ARTISTS_FETCH_MORE_REQUEST,
    };
};

export const favoriteArtistsFetchRequestSuccess = data => {
    return {
        type: FAVORITE_ARTISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const favoriteArtistsFetchMoreRequestSuccess = data => {
    return {
        type: FAVORITE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const favoriteArtistsFetchRequestFailure = error => {
    return {
        type: FAVORITE_ARTISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const favoriteArtistsFetchMoreRequestFailure = error => {
    return {
        type: FAVORITE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};
export const favoriteArtistsFetchMeta = meta => {
    return {
        type: FAVORITE_ARTISTS_FETCH_META,
        meta,
    };
};

export const favoriteArtistsCleanRequest = () => {
    return {
        type: FAVORITE_ARTISTS_CLEAN_REQUEST,
    };
};


export const artistFollowRequest= (id) =>{
    return {
        type:FAVOURITE_ARTIST_FOLLOW_REQUEST,
        id:id,
    }
}

export const artistFollowSuccess= (data) =>{
    return {
        type:FAVOURITE_ARTIST_FOLLOW_SUCCESS,
        data:data
    }
}