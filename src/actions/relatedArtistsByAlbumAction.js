import {
    RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST,
    RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST_SUCCESS,
    RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST_FAILURE,
    RELATED_ARTISTS_BY_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const relatedArtistsByAlbumFetchRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST,
    };
};

export const relatedArtistsByAlbumFetchRequestSuccess = data => {

    return {
        type: RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const relatedArtistsByAlbumFetchRequestFailure = error => {
    return {
        type: RELATED_ARTISTS_BY_ALBUM_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const relatedArtistsByAlbumCleanRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_ALBUM_CLEAN_REQUEST,
    };
};