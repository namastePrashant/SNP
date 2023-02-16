import {
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST,
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASED_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const artistLatestReleasedAlbumFetchRequest = () => {
    return {
        type: ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST,
    };
};

export const artistLatestReleasedAlbumFetchRequestSuccess = data => {

    return {
        type: ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const artistLatestReleasedAlbumFetchRequestFailure = error => {
    return {
        type: ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const artistLatestReleasedAlbumCleanRequest = () => {
    return {
        type: ARTIST_LATEST_RELEASED_ALBUM_CLEAN_REQUEST,
    };
};