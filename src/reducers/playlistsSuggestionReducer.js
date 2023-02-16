import {
  PLAYLISTS_SUGGESTION_FETCH_REQUEST,
  PLAYLISTS_SUGGESTION_FETCH_REQUEST_SUCCESS,
  PLAYLISTS_SUGGESTION_FETCH_REQUEST_FAILURE,
  PLAYLISTS_SUGGESTION_CLEAN_REQUEST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const playlistsSuggestionReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case PLAYLISTS_SUGGESTION_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case PLAYLISTS_SUGGESTION_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      });

    case PLAYLISTS_SUGGESTION_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    case PLAYLISTS_SUGGESTION_CLEAN_REQUEST:
      return Object.assign({}, state, {
        payload: [],
        errors: {},
        loading: false,
      });

    default:
      return state;
  }
};

export default playlistsSuggestionReducer;
