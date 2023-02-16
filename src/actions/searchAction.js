import {
    SEARCH_FETCH_REQUEST,
    SEARCH_FETCH_REQUEST_SUCCESS,
    SEARCH_FETCH_REQUEST_FAILURE,
    SEARCH_CLEAN_REQUEST,
    SEARCH_LOAD_MORE_REQUEST,
    SEARCH_LOAD_MORE_SUCCESS,
    SET_SEARCH_KEY,
} from '../constants/actionTypes';

export const searchFetchRequest = searchedKey => {
    return {
        type: SEARCH_FETCH_REQUEST,
        searchedKey
    };
};

export const searchFetchRequestSuccess = data => {

    return {
        type: SEARCH_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const searchFetchRequestFailure = error => {
    return {
        type: SEARCH_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const searchCleanRequest = () => {
    return {
        type: SEARCH_CLEAN_REQUEST,
    };
};


export const LoadMoreSearchRequest = () => {
  return {
      type: SEARCH_LOAD_MORE_REQUEST,
  };
};


export const LoadMoreSearchSuccess = data => {
  return {
      type: SEARCH_LOAD_MORE_SUCCESS,
      data,
  };
};


export const setSearchKey = searchedKey =>{
  return{
    type:SET_SEARCH_KEY,
    searchedKey
  }
}