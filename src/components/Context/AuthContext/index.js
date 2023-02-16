import React, { createContext, useState } from 'react';
import { push } from 'connected-react-router';

import { loginEndpoint } from '../../../constants/service'
import {
  JWT_TOKEN,
} from '../../../constants/appConfig';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../../utils/storageUtil';
import { isAuthenticated } from '../../../utils/jwtUtil';
import configureStore from '../../../store/configureStore';
import { loginSuccess, loginFailure, logoutSuccess } from '../../../actions/authAction';
import history from '../../../utils/history';

const store = configureStore({}, history);

const AuthContext = createContext({
  user: {},
  isAuthenticated: false,
});

const extractToken = (headers) => {
  let token = {
    "access-token": '',
    "client": '',
    "uid": '',
    "isAuthenticated": false
  }
  if (headers.get('client')) {
    token['access-token'] = headers.get('access-token') || localStorage.getItem('access-token')
    token.client = headers.get('client')
    token.uid = headers.get('uid')
    token.isAuthenticated = true
  }
  return token
}


const updateToken = (token) => {
  return Promise.resolve().then(function () {
    Object.keys(token).forEach(tokenKey => {
      localStorage.setItem(tokenKey, token[tokenKey]);
    })
  });
}

const AuthProvider = props => {
  const [user, setUser] = useState(getLocalStorage('user') || {});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(isAuthenticated() || false);
  const state = { user, loading, authenticated };

  const login = (values) => {
    setLoading(true);
    return dispatch => {
      return fetch(loginEndpoint.url, {
        method: loginEndpoint.method,
        headers: loginEndpoint.headers,
        body: JSON.stringify(values)
      }).then(response => {
        const token = extractToken(response.headers)
        dispatch(loginSuccess(token))
        if (token.isAuthenticated) {
          updateToken(token)
        }
        dispatch(push('/'))
        return response.json()
      }).then(response => {
        if (!response.data) {
          loginFailure()
          // message.error(response.errors)
        }
      }).catch(err => {
        console.log(err);
      })
        .finally(() => {
          if (typeof callback === 'function') {
            // callback()
          }
        })
    }
  };

  const logout = () => {
    store.dispatch({ type: 'LOG_OUT_SUCCESS' });
    clearLocalStorage(JWT_TOKEN);
    // clearLocalStorage(PERMISSION_KEY);
    // clearLocalStorage(USER_FULL_NAME);
    // clearLocalStorage(LANGUAGE_KEY);
    // clearLocalStorage(ENFORCE_PASSWORD_CHANGE);
    // clearLocalStorage(ENFORCE_TYPE);
    // clearLocalStorage(LOGO_URL);
    // clearLocalStorage(SMALL_LOGO_URL);
    setUser({});
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <AuthContext.Provider
      {...props}
      value={{
        ...state,
        message: message,
        setMessage: setMessage,
        loading: loading,
        setLoading: setLoading,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
