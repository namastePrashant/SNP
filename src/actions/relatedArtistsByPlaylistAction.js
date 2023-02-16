import {
    RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST,
    RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS,
    RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE,
    RELATED_ARTISTS_BY_PLAYLIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const relatedArtistsByPlaylistFetchRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST,
    };
};

export const relatedArtistsByPlaylistFetchRequestSuccess = data => {

    return {
        type: RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const relatedArtistsByPlaylistFetchRequestFailure = error => {
    return {
        type: RELATED_ARTISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const relatedArtistsByPlaylistCleanRequest = () => {
    return {
        type: RELATED_ARTISTS_BY_PLAYLIST_CLEAN_REQUEST,
    };
};