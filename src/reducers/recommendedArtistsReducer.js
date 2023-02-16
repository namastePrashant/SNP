import {
  RECOMMENDED_ARTISTS_FETCH_REQUEST,
  RECOMMENDED_ARTISTS_FETCH_REQUEST_SUCCESS,
  RECOMMENDED_ARTISTS_FETCH_REQUEST_FAILURE,
  RECOMMENDED_ARTISTS_CLEAN_REQUEST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const recommendedArtistsReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case RECOMMENDED_ARTISTS_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case RECOMMENDED_ARTISTS_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      });

    case RECOMMENDED_ARTISTS_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    case RECOMMENDED_ARTISTS_CLEAN_REQUEST:
      return Object.assign({}, state, {
        payload: [],
        errors: {},
        loading: false,
      });

    default:
      return state;
  }
};

export default recommendedArtistsReducer;
