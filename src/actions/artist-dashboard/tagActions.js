import {
  TAG_FETCH_REQUEST,
  TAG_FETCH_FAIL,
  TAG_FETCH_SUCCESS,
} from '../../constants/actionTypes'


//actions
export const fetchTagRequest = () => {
  return{
    type:TAG_FETCH_REQUEST
  }
}


export const fetchTagSuccess = (data) => {
  return{
    type:TAG_FETCH_SUCCESS,
    data:data
  }
}


export const fetchTagFail = (data) => {
  return{
    type:TAG_FETCH_FAIL,
    data:data
  }
}
// end actions