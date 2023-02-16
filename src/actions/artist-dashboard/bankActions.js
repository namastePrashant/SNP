import {
  BANK_DETAIL_FETCH_REQUEST,
  BANK_DETAIL_FETCH_SUCCESS,
  BANK_DETAIL_FETCH_FAIL,


  
  BANK_DETAIL_UPDATE_REQUEST,
  BANK_DETAIL_UPDATE_SUCCESS,
  BANK_DETAIL_UPDATE_FAIL,
} from '../../constants/actionTypes'

export const fetchBDRequest = () =>{
  return{
    type:BANK_DETAIL_FETCH_REQUEST,
  }
}


export const fetchBDSuccess = (data) =>{
  return{
    type:BANK_DETAIL_FETCH_SUCCESS,
    data:data
  }
}


export const fetchBDFail = (data) =>{
  return{
    type:BANK_DETAIL_FETCH_FAIL,
    data:data
  }
}


export const BDUpdateRequest = () =>{
  return{
    type:BANK_DETAIL_UPDATE_REQUEST,
  }
}


export const BDUpdateSuccess = (data) =>{
  return{
    type:BANK_DETAIL_UPDATE_SUCCESS,
    data:data
  }
}


export const BDUpdateFail = (data) =>{
  return{
    type:BANK_DETAIL_UPDATE_FAIL,
    data:data
  }
}