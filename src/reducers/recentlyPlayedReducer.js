import {
  RECENTLY_PLAYED_FETCH_REQUEST,
  RECENTLY_PLAYED_FETCH_REQUEST_SUCCESS,
  RECENTLY_PLAYED_FETCH_REQUEST_FAILURE,
  RECENTLY_PLAYED_CLEAN_REQUEST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const recentlyPlayedReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case RECENTLY_PLAYED_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case RECENTLY_PLAYED_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      });

    case RECENTLY_PLAYED_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    case RECENTLY_PLAYED_CLEAN_REQUEST:
      return Object.assign({}, state, {
        payload: [],
        errors: {},
        loading: false,
      });

    default:
      return state;
  }
};

export default recentlyPlayedReducer;
