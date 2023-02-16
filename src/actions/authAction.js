// Import actionType constants
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL
} from '../constants/actionTypes';

export const loginRequest = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const logoutSuccess = (data) => {
  return {
    type: LOG_OUT_SUCCESS,
    data
  };
};

export const logoutFailure = (error) => {
  return {
    type: LOG_OUT_FAILURE,
    error:error,
  };
};


export const signUpSuccess = () =>{
  return{
    type:SIGN_UP_SUCCESS
  }
}



export const forgotPasswordSuccess = () =>{
  return{
    type:FORGOT_PASSWORD_SUCCESS
  }
}

export const forgotPasswordFail = () =>{
  return{
    type:FORGOT_PASSWORD_FAIL
  }
}