import { push } from 'connected-react-router';
import { message } from 'antd';

import { loginSuccess, loginFailure, loginRequest, logoutRequest, logoutFailure, logoutSuccess, signUpSuccess,
  forgotPasswordSuccess,forgotPasswordFail
} from '../actions/authAction';
import { userProfileCleanRequest,userProfileFetchRequestSuccess } from '../actions/userProfileAction';
import { clearPlayer } from '../actions/currentPlayAction'
import { logoutEndpoint } from '../constants/service'
import { API_URL } from '../constants/appConfig'
import { token } from '../constants/appConfig';

import { store } from '../utils/httpUtil'
import {SetFormData} from '../utils/commonUtils.js'
import {httpFormData, httpSignUp} from '../utils/httpBaseUtil'

const extractToken = (headers) => {
  let token = {
    "access-token": '',
    "client": '',
    "uid": '',
    "isAuthenticated": false
  }
  if (headers) {
    token.client = headers.client
    token.uid = headers.uid
    token.isAuthenticated = true
    token['access-token'] = headers['access-token'] || localStorage.getItem('access-token')
  }
  return token
}

const updateToken = (token) => {
  Object.keys(token).forEach(tokenKey => {
    localStorage.setItem(tokenKey, token[tokenKey]);
  })
}

const logoutToken = () => {
  token['access-token'] = localStorage.getItem('access-token')
  token.client = localStorage.getItem('client')
  token.uid = localStorage.getItem('uid')
  return token
}

export const login = (values) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const response = await store('auth/sign_in', JSON.stringify(values))

      if (response.data.success === true) {
        
        const token = extractToken(response.headers)
        updateToken(token)
        localStorage.setItem('username', response.data.data.user.profile.name)
        dispatch(loginSuccess(token))
        message.success(`Welcome ${response.data.data.user.profile.name}! You have successfully signed in.`)
        dispatch(userProfileFetchRequestSuccess(response.data.data.user))
        if(response.data?.data?.user?.role){
          localStorage.setItem('role',response.data?.data?.user?.role)
        }
        if(response.data?.data?.user?.role === 'artist'){
          dispatch(push('/dashboard'))
        }else{
          dispatch(push('/'))
        }
      }
      else {
        // dispatch(loginFailure())
        // message.error('Invalid username or password!')
      }
    }
    catch (error) {      
      dispatch(loginFailure())
    }
  }
}

export const signUp = (values) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      let formData = SetFormData({
        email:values.email,
        password:values.password,
        password_confirmation:values.password,
        confirm_success_url:API_URL,
        'profile_attributes[name]':values.fullName,
      })
      const response = await  httpSignUp().post('https://api.songsnepal.com:4444/auth',formData)

      if (response.status === 200) {
        message.success(`Verification mail has been sent , Please verify your email`)
        dispatch(push('/login'))
        dispatch(signUpSuccess())
      }
      
    }
    catch (error) {
      dispatch(loginFailure(error))
      const e = error.response.data.error
      if(e){
        message.error(e);
        message.error(e[0]);
      }
      
    }
  }
}

// const cleanUserProfile = () => {
//   return dispatch => {
//     dispatch(userProfileCleanRequest())
//   }
// }

export const logout = () => {

  return async dispatch => {
    // logoutToken()
    dispatch(logoutRequest())

    try {
      const token = logoutToken()
      console.log(token)
      await fetch('https://api.songsnepal.com:4444/auth/sign_out', {
        method: logoutEndpoint.method,
        headers: {
          ...logoutEndpoint.headers,
          ...token
        }
      })
        dispatch(logoutSuccess())
        dispatch(clearPlayer())
        message.success(`Logged out sucessfully.`)
        localStorage.clear()
        dispatch(push('/login'))
        dispatch(userProfileCleanRequest())
    } catch (err) {
      dispatch(logoutFailure('err'))
      dispatch(logoutSuccess())
      message.success(`Logged out sucessfully.`)
      dispatch(clearPlayer())
      localStorage.clear()
      localStorage.clear()
      dispatch(push('/login'))
      dispatch(userProfileCleanRequest())
    }




  }

}


export const loginWithFacebook = (facebookToken) => {
  console.log("facebookToken", facebookToken)
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const response = await store('auth/facebook',
        JSON.stringify({
          access_token: facebookToken,
        })
      )

      console.log("response login with fb", response)
      if (response.status === 200) {
        console.log("response", response)
        const token = extractToken(response.headers)
        updateToken(token)
        localStorage.setItem('username', response.data.data.user.profile.name)
        dispatch(loginSuccess(token))
        message.success(`Welcome ${response.data.data.user.profile.name}! You have successfully signed in.`)
        dispatch(push('/'))
      }
      else {
        dispatch(loginFailure())
        message.error('Invalid username or password!')
      }
    }
    catch (error) {
      dispatch(loginFailure(error))
    }
  }
}

export const loginWithGoogle = (googleToken) => {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      const response = await store('auth/google_oauth2', JSON.stringify({
        access_token: googleToken,
      })
      )
      if (response.status === 200) {
        const token = extractToken(response.headers)
        updateToken(token)
        localStorage.setItem('username', response.data.data.user.profile.name)
        dispatch(loginSuccess());
        message.success(`Welcome ${response.data.data.user.profile.name}! You have successfully signed in.`)
        dispatch(push('/'))
      }
      else if (response.status !== 200) {
        dispatch(loginFailure(response.error));
        message.error('Invalid username or password!')
      }
    }
    catch (error) {
      dispatch(loginFailure(error));
    }
  }
}

export const artistSignUp = (values) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      let formData= new FormData()
      formData.append('email',values.email)
      formData.append('password',values.password)
      formData.append('password_confirmation',values.password)
      formData.append('confirm_success_url',API_URL)
      formData.append('profile_attributes[name]',values.name)
      formData.append('role','artist')
      formData.append('phone_number',values.phone_number)
      formData.append('genre_id',values.genre)

     
      const response = await  httpSignUp().post('https://api.songsnepal.com:4444/auth',formData)

      if (response.status === 200) {
       
        message.success(`Verification mail has been sent , Please verify your email`)
        dispatch(push('/login'))
        dispatch(signUpSuccess())
      }
      
    }
    catch (error) {
      dispatch(loginFailure(error))
      const errorArr = error.response.data.error.message
      if(errorArr){
        errorArr.forEach(element => {
          console.log(element)
        message.error(element)
       });
      }
    }
  }
}



export const forgotPassword = (formData)=>{
  return async dispatch=>{
    dispatch(loginRequest());
    try{
      const response = await httpFormData().post('/auth/password?redirect_url=https://songsnepal.com/',formData);
      dispatch(forgotPasswordSuccess());
      if(response && response.data && response.data.message){
        message.success(response.data.message)
      }
    }catch(e){
      if(e && e.response && e.response.data && e.response.data.errors){
        let err = e.response.data.errors;
        if(err.length){
          err.forEach(er=>{
            message.error(er);
            dispatch(forgotPasswordFail());
          })
        }else{
          message.error(err)
          dispatch(forgotPasswordFail());
        }
      }else{
        message.error("Something went wrong")
        dispatch(forgotPasswordFail());
      }

    }
  }
}