import {
  REMOVE_SONG_FROM_PLAYLIST_SUCCESS,
  UPDATE_USER_PLAYLIST_FAIL,
  UPDATE_USER_PLAYLIST_REQUEST, UPDATE_USER_PLAYLIST_SUCCESS,
  USER_ALL_PLAYLISTS_CLEAN_REQUEST,
  USER_ALL_PLAYLISTS_FETCH_REQUEST,
  USER_ALL_PLAYLISTS_FETCH_REQUEST_FAILURE,
  USER_ALL_PLAYLISTS_FETCH_REQUEST_SUCCESS,
} from '../constants/actionTypes';

export const userAllPlaylistsFetchRequest = () => {
  return {
    type: USER_ALL_PLAYLISTS_FETCH_REQUEST,
  };
};

export const userAllPlaylistsFetchRequestSuccess = data => {
  return {
    type: USER_ALL_PLAYLISTS_FETCH_REQUEST_SUCCESS,
    data,
  };
};

export const userAllPlaylistsFetchRequestFailure = error => {
  return {
    type: USER_ALL_PLAYLISTS_FETCH_REQUEST_FAILURE,
    error,
  };
};

export const userAllPlaylistsCleanRequest = () => {
  return {
    type: USER_ALL_PLAYLISTS_CLEAN_REQUEST,
  };
};


export const updatePlaylistRequest = () => {
  return {
    type: UPDATE_USER_PLAYLIST_REQUEST
  }
}

export const updatePlaylistSuccess = data => {
  return {
    type: UPDATE_USER_PLAYLIST_SUCCESS,
    data
  }
}

export const updatePlaylistFail = data =>{
  return {
    type: UPDATE_USER_PLAYLIST_FAIL,
    data
  }
}


export const removeFromPlaylistSuccess = () =>{
  return{
    type:REMOVE_SONG_FROM_PLAYLIST_SUCCESS
  }
}