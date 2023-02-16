import axios from 'axios';
// import { push } from 'connected-react-router';

// import jwtDecode from 'jwt-decode';
import { isAuthenticated } from "./jwtUtil";


import {
  API_URL,
  JWT_TOKEN,
} from '../constants/appConfig';
// import { http404Error, http500Error } from '../actions/httpErrorAction';
// import configureStore from '../store/configureStore';
import { getLocalStorage } from './storageUtil';
import history from './history';
// import JwtDecode from 'jwt-decode';
import { message } from 'antd';

// const store = configureStore();



export const httpSignUp = ()=>{
  let signUpInstance = axios.create({
    baseURL: `${API_URL}`,
    headers:  {
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
      'Content-Type': "multipart/form-data",
      'Accept-Encoding':"gzip, deflate, br",
    }
  });
  return signUpInstance;
}


export const httpFormData = () =>{
  const headers ={
    'access-token': getLocalStorage(JWT_TOKEN),
    'uid': getLocalStorage('uid'),
    'Access-Control-Allow-Origin': '*',
    'client': getLocalStorage('client'),
    'Content-Type': "multipart/form-data",
    'Accept-Encoding':"gzip, deflate, br",
    'Accept': '*/*',
  }

  let instance = axios.create({
    baseURL: `${API_URL}`,
    headers: headers
  });
  return instance;
}

export const httpBase = (isDownloadable = false) => {
  const headers = {
    'access-token': getLocalStorage(JWT_TOKEN),
    'uid': getLocalStorage('uid'),
    'client': getLocalStorage('client'),
  };
  const normalHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  const downloadableHeaders = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: isDownloadable
      ? { ...headers, ...downloadableHeaders }
      : { ...headers, ...normalHeaders },
    responseType: isDownloadable ? 'blob' : 'json',
  });

  api.interceptors.response.use(
    response => {     
      if (response.headers && response.headers.expiry) {
        let expiryDate = new Date(response.headers.expiry * 1000);
        let current = new Date(Date.now());

        if (current >= expiryDate) {
          localStorage.clear()
          history.push('/login');
          // set LocalStorage here based on response;
        }

      }
      return response;
    },
    error => {

      if (
        (error.response.status === 401 && error.response.data.error)
        || (error.response.status === 401 && error.response.data.errors[0] === "Invalid login credentials. Please try again.")
        || (error.response.status === 401 && error.response.data.errors[0] === "You need to sign in or sign up before continuing." && isAuthenticated())
      ) {
        // when multiple api hits: and multiple 401 errors occurs, only one error for 401 is shown by checking [isAuthenticated]

        localStorage.clear();
        // store.dispatch(userProfileCleanRequest());
        // message.error(`Sorry,Login has beeen expired !!`)

        if (error.response.data.error) {
          message.error(error.response.data.error)
        } else if (error.response.data.errors) {
          message.error(error.response.data.errors[0])
        }
        history.push('/login');
      }
      if (error.response.status === 404) {
        // store.dispatch(http404Error());
        // history.push('/404');
      }
      if (error.response.status === 500) {
        // store.dispatch(http500Error());
        // history.push('/500');
      }
      return Promise.reject(error);
    }
  );

  return api;
};
