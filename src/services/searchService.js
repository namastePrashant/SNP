
import {
    searchFetchRequest,
    searchFetchRequestSuccess,
    searchFetchRequestFailure,
    LoadMoreSearchRequest,
    LoadMoreSearchSuccess,
    setSearchKey,
} from '../actions/searchAction';
import { push } from 'connected-react-router';


import { fetch} from '../utils/httpUtil'


export const searchService = (formData,key) => {
    return async dispatch => {
        dispatch(searchFetchRequest());
        dispatch(setSearchKey(key))

        try {
          const response = await fetch('api/v1/searches?search[keyword]='+formData.toString());
          if (response.data.success === true) {
              dispatch(searchFetchRequestSuccess(response.data.data));
              dispatch(push('/search'));
          } else {
              // TODO
          }
        } catch (error) {
            return dispatch(searchFetchRequestFailure(error));
        }
    };
};

export const LoadMoreSearchResults = (searchkey,page) =>{
  return async dispatch=>{
    dispatch(LoadMoreSearchRequest())
    try {

      const response = await fetch('api/v1/searches/?search[keyword]='+searchkey+'&page='+page);
        dispatch(LoadMoreSearchSuccess(response.data.data));
     
    } catch (error) {
        return dispatch(searchFetchRequestFailure(error));
    }
  }
}