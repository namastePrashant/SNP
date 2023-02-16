import {
  LANGUAGE_FETCH_FAIL,
  LANGUAGE_FETCH_REQUEST,
  LANGUAGE_FETCH_SUCCESS,
} from '../constants/actionTypes'


export const fetchLanguageRequest= () => {
  return{
    type:LANGUAGE_FETCH_REQUEST
  }
}


export const fetchLanguageSuccess= (data) => {
  return{
    type:LANGUAGE_FETCH_SUCCESS,
    data:data
  }
}

export const fetchLanguageFail= (data) => {
  return{
    type:LANGUAGE_FETCH_FAIL,
    data:data
  }
}