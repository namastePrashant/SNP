import {
  UPDATE_USER_PLAYLIST_REQUEST,
  UPDATE_USER_PLAYLIST_FAIL,
  UPDATE_USER_PLAYLIST_SUCCESS,

  USER_ALL_PLAYLISTS_CLEAN_REQUEST,
  USER_ALL_PLAYLISTS_FETCH_REQUEST,
  USER_ALL_PLAYLISTS_FETCH_REQUEST_FAILURE,
  USER_ALL_PLAYLISTS_FETCH_REQUEST_SUCCESS,
  REMOVE_SONG_FROM_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS, DELETE_PLAYLIST_FAIL,
} from '../constants/actionTypes';
import {removeItemFromArray, updateItemOfArray} from "../utils/commonUtils";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},

  uploading:false,
  deleting:false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const userAllPlaylistsReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case USER_ALL_PLAYLISTS_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case USER_ALL_PLAYLISTS_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      });

    case USER_ALL_PLAYLISTS_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    case USER_ALL_PLAYLISTS_CLEAN_REQUEST:
      return Object.assign({}, state, {
        payload: [],
        errors: {},
        loading: false,
      });

    case UPDATE_USER_PLAYLIST_REQUEST:
      return {
        ...state,
        uploading:true
      }

    case UPDATE_USER_PLAYLIST_SUCCESS:
      const updatedArray = updateItemOfArray(state.payload,action.data);
      return{
        ...state,
        uploading:false,
        payload: updatedArray
      }

    case UPDATE_USER_PLAYLIST_FAIL:
      return {
        ...state,
        uploading:false,
        errors: action.data
      }

    case REMOVE_SONG_FROM_PLAYLIST_SUCCESS:
      return{
        ...state,
        uploading: false
      }

    case DELETE_PLAYLIST_REQUEST:
      return{
        ...state,
        deleting: true
      }

    case DELETE_PLAYLIST_SUCCESS:
      return{
        ...state,
        deleting: false,
        payload: removeItemFromArray(state?.payload,action.id)
      }

    case DELETE_PLAYLIST_FAIL:
      return{
        ...state,
        deleting: true,
        errors: action.data
      }


    default:
      return state;
  }
};

export default userAllPlaylistsReducer;
