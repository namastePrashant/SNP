import jwtDecode from 'jwt-decode';
import { getLocalStorage } from './storageUtil';
import { JWT_TOKEN } from '../constants/appConfig';

export let isTokenExpired = token => {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired.
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export let decodeUsername = token => {
  try {
    const decoded = jwtDecode(token);
    return decoded.username;
  } catch (e) {
    return null;
  }
};

export let getToken = () => {
  return getLocalStorage(JWT_TOKEN);
};

export let isAuthenticated = () => {
  return !!getToken() && !isTokenExpired(getToken());
};
