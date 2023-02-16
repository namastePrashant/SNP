import {
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  INDIVIDUAL_PLAYLIST_CLEAN_REQUEST,
  INDIVIDUAL_PLAYLIST_FETCH_REQUEST,
  INDIVIDUAL_PLAYLIST_FETCH_REQUEST_FAILURE,
  INDIVIDUAL_PLAYLIST_FETCH_REQUEST_SUCCESS,
  REMOVE_SONG_FROM_PLAYLIST_SUCCESS,
} from '../constants/actionTypes';

export const individualPlaylistFetchRequest = () => {
  return {
    type: INDIVIDUAL_PLAYLIST_FETCH_REQUEST,
  };
};

export const individualPlaylistFetchRequestSuccess = data => {

  return {
    type: INDIVIDUAL_PLAYLIST_FETCH_REQUEST_SUCCESS,
    data,
  };
};

export const individualPlaylistFetchRequestFailure = error => {
  return {
    type: INDIVIDUAL_PLAYLIST_FETCH_REQUEST_FAILURE,
    error,
  };
};

export const individualPlaylistCleanRequest = () => {
  return {
    type: INDIVIDUAL_PLAYLIST_CLEAN_REQUEST,
  };
};


export const removeSongFromCurrentPlaylist = id => {
  return {
    type: REMOVE_SONG_FROM_PLAYLIST_SUCCESS,
    id
  }
}


export const deletePlaylistRequest = () => {
  return {
    type: DELETE_PLAYLIST_REQUEST
  }
}

export const deletePlaylistSuccess = id => {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    id
  }
}


export const deletePlaylistFail = data => {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    data
  }
}