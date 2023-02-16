// Import custom components
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS
} from '../constants/actionTypes';

const INITIAL_STATE = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  errors: {}
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoading: true,
        token: null,
      });

    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLoading: false,
        token: action.data,
      });

    case SIGN_UP_SUCCESS:
      return{
        ...state,
        isLoading:false
      }

    case LOG_IN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLoading: false,
        token: null,
        errors: action.error
      });

    case LOG_OUT_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoading: true,
        token: null,
      });

    case LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoading: false,
        token: null,
        errors: {}
      });

    case LOG_OUT_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoading: false,
        token: null,
        errors: action.error
      });

    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}
