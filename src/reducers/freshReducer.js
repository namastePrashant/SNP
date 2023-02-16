import {
  FRESH_FETCH_REQUEST,
  FRESH_FETCH_REQUEST_SUCCESS,
  FRESH_FETCH_REQUEST_FAILURE,
  FRESH_CLEAN_REQUEST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const freshReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case FRESH_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case FRESH_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      });

    case FRESH_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    case FRESH_CLEAN_REQUEST:
      return Object.assign({}, state, {
        payload: [],
        errors: {},
        loading: false,
      });

    default:
      return state;
  }
};

export default freshReducer;
